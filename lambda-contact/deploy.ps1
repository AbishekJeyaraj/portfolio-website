$ErrorActionPreference = "Continue"

# 1. Read .env.local variables
$envContent = Get-Content "..\.env.local" -Raw
if ($envContent -match 'EMAIL_USER=(.*)') { $emailUser = $Matches[1].Trim() }
if ($envContent -match 'EMAIL_PASS=(.*)') { $emailPass = $Matches[1].Trim() }

if (-not $emailUser -or -not $emailPass) {
    Write-Error "EMAIL_USER or EMAIL_PASS not found in .env.local"
    exit 1
}

# 2. Zip the lambda contents
Write-Host "Zipping lambda function..."
if (Test-Path function.zip) { Remove-Item function.zip }
Compress-Archive -Path * -DestinationPath function.zip -Update
Write-Host "Zipped successfully."

# 3. Handle IAM Role
$roleName = "PortfolioContactLambdaRole"
$roleArn = $null

$roleOutput = aws iam get-role --role-name $roleName 2>$null | ConvertFrom-Json
if ($LASTEXITCODE -eq 0 -and $roleOutput -ne $null) {
    $roleArn = $roleOutput.Role.Arn
    Write-Host "IAM Role $roleName already exists: $roleArn"
} else {
    Write-Host "Creating IAM Role $roleName..."
    $trustPolicy = '{"Version": "2012-10-17","Statement": [{"Effect": "Allow","Principal": {"Service": "lambda.amazonaws.com"},"Action": "sts:AssumeRole"}]}'
    Set-Content -Path trust-policy.json -Value $trustPolicy
    $roleOutput = aws iam create-role --role-name $roleName --assume-role-policy-document file://trust-policy.json | ConvertFrom-Json
    $roleArn = $roleOutput.Role.Arn
    aws iam attach-role-policy --role-name $roleName --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole
    Write-Host "Role created. Waiting 10 seconds for propagation..."
    Start-Sleep -Seconds 10
}

if (-not $roleArn) {
    Write-Error "Failed to retrieve or create Role ARN"
    exit 1
}

# 4. Handle Lambda Function
$functionName = "PortfolioContactAPI"
$envString = "Variables={EMAIL_USER=$emailUser,EMAIL_PASS=$emailPass}"

aws lambda get-function --function-name $functionName > $null 2>&1
$functionExists = ($LASTEXITCODE -eq 0)

if ($functionExists) {
    Write-Host "Function $functionName exists. Updating code..."
    aws lambda update-function-code --function-name $functionName --zip-file fileb://function.zip > $null
    
    Write-Host "Waiting for function update to complete..."
    Start-Sleep -Seconds 5
    
    Write-Host "Updating environment variables..."
    aws lambda update-function-configuration --function-name $functionName --environment $envString > $null
} else {
    Write-Host "Creating Lambda function $functionName..."
    aws lambda create-function `
        --function-name $functionName `
        --runtime nodejs20.x `
        --handler index.handler `
        --role $roleArn `
        --zip-file fileb://function.zip `
        --environment $envString > $null
    
    Write-Host "Waiting for function creation to complete..."
    Start-Sleep -Seconds 5
}

# 5. Handle Function URL
Write-Host "Configuring Function URL..."
$functionUrl = $null

$urlConfig = aws lambda get-function-url-config --function-name $functionName 2>$null | ConvertFrom-Json
if ($LASTEXITCODE -eq 0 -and $urlConfig -ne $null) {
    $functionUrl = $urlConfig.FunctionUrl
    Write-Host "Function URL already exists: $functionUrl"
} else {
    Write-Host "Creating Function URL..."
    $corsConfig = '{"AllowOrigins": ["*"], "AllowMethods": ["POST", "OPTIONS"], "AllowHeaders": ["Content-Type"]}'
    Set-Content -Path cors.json -Value $corsConfig
    $urlConfig = aws lambda create-function-url-config `
        --function-name $functionName `
        --auth-type NONE `
        --cors file://cors.json | ConvertFrom-Json
    $functionUrl = $urlConfig.FunctionUrl
    Write-Host "Created Function URL: $functionUrl"
    
    Write-Host "Adding public invoke permission..."
    aws lambda add-permission `
        --function-name $functionName `
        --statement-id FunctionURLAllowPublicAccess `
        --action lambda:InvokeFunctionUrl `
        --principal "*" `
        --function-url-auth-type NONE > $null
}

Write-Host "=========================================="
Write-Host "DEPLOYMENT SUCCESSFUL!"
Write-Host "API_ENDPOINT: $functionUrl"
Write-Host "=========================================="
