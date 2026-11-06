import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "_backup/**",
    "src/components/BackgroundClouds.tsx",
    "src/components/ProfileBackground3D.tsx",
    "src/components/theme-toggle.tsx",
    "src/components/Hero.tsx",
    "src/components/FigmaRuler.tsx",
    "src/components/LoaderGlitch.tsx",
  ]),
]);

export default eslintConfig;
