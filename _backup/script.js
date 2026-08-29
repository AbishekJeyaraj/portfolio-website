    // Feather Icons
    feather.replace();

    // Native Scroll Velocity tracking for Marquee
    window.scrollVelocity = 0;
    let lastScrollY = window.scrollY;
    let lastScrollTime = Date.now();
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      const dt = currentTime - lastScrollTime;
      if (dt > 0) {
        window.scrollVelocity = (currentScrollY - lastScrollY) / dt * 16;
      }
      lastScrollY = currentScrollY;
      lastScrollTime = currentTime;
      ScrollTrigger.update();
    });

    // Reset velocity when scroll stops
    setInterval(() => {
      if (Date.now() - lastScrollTime > 50) {
        window.scrollVelocity *= 0.9;
      }
    }, 50);

    // Reduced Motion Check
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;


    // Reveal Animations Refactored (GSAP)
    gsap.registerPlugin(ScrollTrigger);

    // Hero Animation
    if (prefersReducedMotion) {
      gsap.set('.hero-kinetic', { y: 0, opacity: 1 });
      gsap.set('.hero-reveal', { y: 0, opacity: 1, filter: "blur(0px)" });
    } else {
      gsap.timeline()
        .from('.hero-kinetic', { y: '100%', opacity: 0, duration: 1, stagger: 0.15, ease: 'power4.out' }, 0.2)
        .from('.hero-reveal', { y: 24, opacity: 0, filter: 'blur(8px)', duration: 0.8, stagger: 0.15, ease: 'power3.out' }, '-=0.6');
    }

    // Nav Ticker Animation
    const tickerFrames = [
      "STATUS: MONITORING [|       ]",
      "STATUS: MONITORING [||      ]",
      "STATUS: MONITORING [|||     ]",
      "STATUS: MONITORING [||||    ]",
      "STATUS: MONITORING [|||||   ]",
      "STATUS: MONITORING [||||||  ]",
      "STATUS: MONITORING [||||||| ]",
      "STATUS: MONITORING [||||||||]"
    ];
    let tickerFrame = 0;
    setInterval(() => {
      const tickerEl = document.getElementById('nav-ticker');
      if (tickerEl && !prefersReducedMotion) {
        tickerEl.textContent = tickerFrames[tickerFrame];
        tickerFrame = (tickerFrame + 1) % tickerFrames.length;
      }
    }, 150);

    if (prefersReducedMotion) {
      // If reduced motion, just reveal everything immediately
      document.querySelectorAll('.reveal').forEach(el => {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
        el.style.filter = 'blur(0px)';
      });
    } else {
      // Create a batch animation for reveal elements
      ScrollTrigger.batch(".reveal", {
        interval: 0.1, // time window to batch elements
        batchMax: 5,   // max elements in a batch
        onEnter: batch => gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: { each: 0.15, grid: [1, batch.length] },
          duration: 0.8,
          ease: "power3.out",
          overwrite: true
        }),
        start: "top 90%", // Trigger when top of element hits 90% from top of viewport
      });
      
      // Ensure initial state is set for non-js users by CSS, but reset here for GSAP
      gsap.set(".reveal", { opacity: 0, y: 24 });
    }

    // Three.js Ambient Background (Full-Page Particle Network)
    if (window.innerWidth >= 768) {
      const canvas = document.getElementById('hero-canvas');
      if (canvas && typeof THREE !== 'undefined') {
        try {
          const scene = new THREE.Scene();
          const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
          const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
          
          renderer.setSize(window.innerWidth, window.innerHeight);
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
          
          const particleCount = window.innerWidth >= 1024 ? 150 : 75;
          const maxDistance = 3.0;
          const maxDistanceSq = maxDistance * maxDistance;
          
          const particlesData = [];
          const positions = new Float32Array(particleCount * 3);
          
          // Generate Particles across a wide 3D space
          for (let i = 0; i < particleCount; i++) {
            const x = (Math.random() - 0.5) * 35;
            const y = (Math.random() - 0.5) * 35;
            const z = (Math.random() - 0.5) * 12;
            
            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
            
            particlesData.push({
              velocity: new THREE.Vector3(
                (Math.random() - 0.5) * 0.02,
                (Math.random() - 0.5) * 0.02,
                (Math.random() - 0.5) * 0.02
              )
            });
          }
          
          const isDarkInit = document.documentElement.getAttribute('data-theme') !== 'light';
          
          const pGeometry = new THREE.BufferGeometry();
          pGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
          
          const pMaterial = new THREE.PointsMaterial({
            color: isDarkInit ? 0x00d2ff : 0x007ea7, // Darker cyan for light mode contrast
            size: 0.08,
            transparent: true,
            opacity: 0.3
          });
          
          const particleMesh = new THREE.Points(pGeometry, pMaterial);
          scene.add(particleMesh);
          
          // Dynamic Lines Buffer Setup
          const maxLines = (particleCount * (particleCount - 1)) / 2;
          const linePositions = new Float32Array(maxLines * 6);
          const lineGeometry = new THREE.BufferGeometry();
          lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
          
          const lineMaterial = new THREE.LineBasicMaterial({
            color: isDarkInit ? 0x00f0ff : 0x0099cc, // Darker cyan for light mode contrast
            transparent: true,
            opacity: 0.08
          });
          
          const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
          scene.add(lineMesh);
          
          // Theme Transition Observer
          const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
              if (mutation.attributeName === 'data-theme') {
                const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
                const targetColor = isDark ? 0x00d2ff : 0x007ea7;
                const targetLineColor = isDark ? 0x00f0ff : 0x0099cc;
                
                if (!prefersReducedMotion) {
                  gsap.to(pMaterial.color, {
                    r: new THREE.Color(targetColor).r,
                    g: new THREE.Color(targetColor).g,
                    b: new THREE.Color(targetColor).b,
                    duration: 0.6,
                    ease: "power2.inOut"
                  });
                  gsap.to(lineMaterial.color, {
                    r: new THREE.Color(targetLineColor).r,
                    g: new THREE.Color(targetLineColor).g,
                    b: new THREE.Color(targetLineColor).b,
                    duration: 0.6,
                    ease: "power2.inOut"
                  });
                } else {
                  pMaterial.color.setHex(targetColor);
                  lineMaterial.color.setHex(targetLineColor);
                }
              }
            });
          });
          observer.observe(document.documentElement, { attributes: true });
          
          camera.position.z = 8;
          
          // Mouse Interaction Setup
          const mouse = new THREE.Vector3(0, 0, 0);
          let isMouseMoving = false;
          let mouseTimeout;
          
          document.addEventListener('mousemove', (event) => {
            if (prefersReducedMotion || window.innerWidth < 1024) return;
            
            // Map mouse to 3D space roughly at z=0 plane
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            mouse.unproject(camera);
            
            const dir = mouse.sub(camera.position).normalize();
            const distance = -camera.position.z / dir.z;
            mouse.copy(camera.position).add(dir.multiplyScalar(distance));
            
            isMouseMoving = true;
            clearTimeout(mouseTimeout);
            mouseTimeout = setTimeout(() => { isMouseMoving = false; }, 150);
          });

          // GSAP ScrollTrigger Integration
          if (!prefersReducedMotion) {
            // Push camera through the particle field and rotate slightly on scroll
            gsap.to(camera.position, {
              z: 3,
              y: -3,
              ease: "none",
              scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: 1
              }
            });
            
            gsap.to(scene.rotation, {
              y: Math.PI * 0.15,
              x: Math.PI * 0.05,
              ease: "none",
              scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: 1
              }
            });
          }

          const tick = () => {
            let vertexpos = 0;
            const posAttr = pGeometry.attributes.position;
            
            if (!prefersReducedMotion) {
              for (let i = 0; i < particleCount; i++) {
                const particleData = particlesData[i];
                
                // Update position by velocity (continuous drift)
                posAttr.array[i * 3] += particleData.velocity.x;
                posAttr.array[i * 3 + 1] += particleData.velocity.y;
                posAttr.array[i * 3 + 2] += particleData.velocity.z;
                
                // Wrap around bounds seamlessly
                if (posAttr.array[i * 3] < -17.5 || posAttr.array[i * 3] > 17.5) particleData.velocity.x *= -1;
                if (posAttr.array[i * 3 + 1] < -17.5 || posAttr.array[i * 3 + 1] > 17.5) particleData.velocity.y *= -1;
                if (posAttr.array[i * 3 + 2] < -6 || posAttr.array[i * 3 + 2] > 6) particleData.velocity.z *= -1;
                
                // Mouse repel interaction (Desktop only)
                if (isMouseMoving) {
                  const dx = mouse.x - posAttr.array[i * 3];
                  const dy = mouse.y - posAttr.array[i * 3 + 1];
                  // Assume mouse affects a shallow depth cylinder
                  const dz = (mouse.z - posAttr.array[i * 3 + 2]) * 0.5; 
                  const distSq = dx * dx + dy * dy + dz * dz;
                  
                  if (distSq < 15) { // Repel radius squared
                    const force = (15 - distSq) / 15;
                    posAttr.array[i * 3] -= (dx / Math.sqrt(distSq)) * force * 0.08;
                    posAttr.array[i * 3 + 1] -= (dy / Math.sqrt(distSq)) * force * 0.08;
                  }
                }
                
                // Check connections with other particles
                for (let j = i + 1; j < particleCount; j++) {
                  const dx = posAttr.array[i * 3] - posAttr.array[j * 3];
                  const dy = posAttr.array[i * 3 + 1] - posAttr.array[j * 3 + 1];
                  const dz = posAttr.array[i * 3 + 2] - posAttr.array[j * 3 + 2];
                  const distSq = dx * dx + dy * dy + dz * dz;
                  
                  if (distSq < maxDistanceSq) {
                    linePositions[vertexpos++] = posAttr.array[i * 3];
                    linePositions[vertexpos++] = posAttr.array[i * 3 + 1];
                    linePositions[vertexpos++] = posAttr.array[i * 3 + 2];
                    
                    linePositions[vertexpos++] = posAttr.array[j * 3];
                    linePositions[vertexpos++] = posAttr.array[j * 3 + 1];
                    linePositions[vertexpos++] = posAttr.array[j * 3 + 2];
                  }
                }
              }
              
              posAttr.needsUpdate = true;
              lineGeometry.setDrawRange(0, vertexpos / 3);
              lineGeometry.attributes.position.needsUpdate = true;
            }
            
            renderer.render(scene, camera);
            window.requestAnimationFrame(tick);
          };
          tick();
          
          // Resize
          window.addEventListener('resize', () => {
            if (window.innerWidth < 768) {
              canvas.style.display = 'none';
            } else {
              canvas.style.display = 'block';
              camera.aspect = window.innerWidth / window.innerHeight;
              camera.updateProjectionMatrix();
              renderer.setSize(window.innerWidth, window.innerHeight);
            }
          });
        } catch (e) {
          console.warn("WebGL not supported or failed to initialize.", e);
        }
      }
    }

    // Parallax Sidebar
    if (!prefersReducedMotion && window.innerWidth >= 1024) {
      const sidebar = document.querySelector('aside[data-speed]');
      if (sidebar) {
        gsap.to(sidebar, {
          y: 60,
          ease: "none",
          scrollTrigger: {
            trigger: "#top",
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });
      }
    }

    // Section Headers Line Drawing
    if (!prefersReducedMotion) {
      gsap.utils.toArray('.section-line').forEach(line => {
        gsap.to(line, {
          scaleX: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: line,
            start: "top 95%"
          }
        });
      });
    }

    // Background Marquee Velocity
    const marqueeInner = document.querySelector('.gsap-marquee');
    if (marqueeInner) {
      if (prefersReducedMotion) {
        gsap.to(marqueeInner, { xPercent: -50, ease: "none", duration: 25, repeat: -1 });
      } else {
        const marqueeTween = gsap.to(marqueeInner, { xPercent: -50, ease: "none", duration: 25, repeat: -1 });
        lenis.on('scroll', (e) => {
          let v = Math.abs(e.velocity || 0);
          gsap.to(marqueeTween, { timeScale: 1 + v * 0.05, duration: 0.2, overwrite: true });
        });
      }
    }

    // Timeline Items Line Growth
    if (!prefersReducedMotion) {
      gsap.utils.toArray('.timeline-line').forEach(line => {
        gsap.to(line, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: line.parentElement,
            start: "top 75%",
            end: "bottom 75%",
            scrub: true
          }
        });
      });
    }

    // Toolkit Cards & Skills
    if (!prefersReducedMotion) {
      gsap.utils.toArray('.toolkit-card').forEach((card, i) => {
        const delayAmount = (i % 3) * 0.15; // Stagger within grid row
        
        // Skill indicators reveal
        const skillContainer = card.querySelector('.font-mono.text-xs.tracking-wider.text-accent');
        if (skillContainer) {
          skillContainer.style.overflow = 'hidden';
          skillContainer.style.whiteSpace = 'nowrap';
          skillContainer.style.display = 'inline-block';
          gsap.fromTo(skillContainer, { width: 0, opacity: 0 }, {
            width: 'auto', opacity: 1, duration: 0.8, ease: "power2.out", delay: delayAmount + 0.3,
            scrollTrigger: { trigger: card, start: "top 90%" }
          });
        }
      });
    }

    // Product Cards 3D Tilt
    if (!prefersReducedMotion) {
      const isDesktop = window.innerWidth >= 768 && window.matchMedia("(any-pointer: fine)").matches;
      gsap.utils.toArray('.product-card').forEach(card => {
        gsap.from(card, {
          y: 40, opacity: 0, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: card, start: "top 85%" }
        });

        if (isDesktop) {
          const tilt = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(card, {
              rotationY: x * 0.04,
              rotationX: -y * 0.04,
              scale: 1.02,
              duration: 0.4,
              ease: "power2.out",
              overwrite: "auto"
            });
          };
          const reset = () => {
            gsap.to(card, { rotationY: 0, rotationX: 0, scale: 1, duration: 0.4, ease: "power2.out", overwrite: "auto" });
          };
          card.addEventListener('mousemove', tilt);
          card.addEventListener('mouseleave', reset);
        }
      });
    }

    // Contact Form Reveal
    if (!prefersReducedMotion) {
      gsap.from('.form-reveal', {
        y: 20, opacity: 0, stagger: 0.1, duration: 0.6, ease: "power2.out",
        scrollTrigger: { trigger: '#contact-form', start: "top 85%" }
      });
    }

    // Horizontal Scroll Panel (Skills)
    if (!prefersReducedMotion) {
      const horizontalSection = document.querySelector('#skills-horizontal');
      const horizontalContainer = document.querySelector('.horizontal-scroll-container');
      
      if (horizontalSection && horizontalContainer) {
        gsap.to(horizontalContainer, {
          x: () => -(horizontalContainer.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: horizontalSection,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => "+=" + (horizontalContainer.scrollWidth - window.innerWidth)
          }
        });
      }
    }

    // Chat Bubble Incident Thread Reveal
    if (!prefersReducedMotion) {
      const chatBubbles = gsap.utils.toArray('.chat-bubble');
      if (chatBubbles.length > 0) {
        gsap.to(chatBubbles, {
          y: 0,
          opacity: 1,
          stagger: 0.3,
          duration: 0.6,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: '.incident-chat-container',
            start: "top 70%"
          }
        });
      }
    }
    // Theme Toggle
    const themeBtn = document.getElementById('theme-toggle');
    let theme = 'dark';
    try { theme = localStorage.getItem('site-theme') || 'dark'; } catch(e) {}
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    updateThemeUI(theme);

    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        theme = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', theme);
        if (theme === 'dark') document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
        
        try { localStorage.setItem('site-theme', theme); } catch(e) {}
        updateThemeUI(theme);
      });
    }

    function updateThemeUI(t) {
      if (!themeBtn) return;
      const icon = themeBtn.querySelector('svg') || themeBtn.querySelector('i');
      if (icon && !prefersReducedMotion) {
        gsap.to(icon, {
          rotation: 180,
          opacity: 0,
          scale: 0.5,
          duration: 0.2,
          onComplete: switchContent
        });
      } else {
        switchContent();
      }
      
      function switchContent() {
        if (t === 'light') {
          themeBtn.innerHTML = '<i data-feather="moon" class="text-accent w-[13px] h-[13px]"></i><span class="font-mono text-[9px] uppercase tracking-wider hidden xs:inline pr-1">Night</span>';
        } else {
          themeBtn.innerHTML = '<i data-feather="sun" class="text-accent w-[13px] h-[13px]"></i><span class="font-mono text-[9px] uppercase tracking-wider hidden xs:inline pr-1">Day</span>';
        }
        feather.replace();
        
        if (!prefersReducedMotion) {
          const newIcon = themeBtn.querySelector('svg');
          if (newIcon) {
            gsap.fromTo(newIcon, 
              { rotation: -180, opacity: 0, scale: 0.5 }, 
              { rotation: 0, opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.5)" }
            );
          }
        }
      }
    }

    // ScrollSpy
    const sections = ['top', 'background', 'experience', 'products', 'toolkit', 'contact'];
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
      let current = 'top';
      const scrollPos = window.scrollY + 100;
      sections.forEach(sec => {
        const el = document.getElementById(sec);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          current = sec;
        }
      });
      navLinks.forEach(link => {
        link.classList.remove('text-accent', 'font-bold');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('text-accent', 'font-bold');
        }
      });
    });

    // Counters (GSAP instead of requestAnimationFrame)
    const counters = document.querySelectorAll('.counter');
    counters.forEach(el => {
      const end = parseInt(el.getAttribute('data-value'), 10);
      ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        once: true,
        onEnter: () => {
          if (prefersReducedMotion) {
            el.textContent = end;
          } else {
            gsap.fromTo(el, 
              { innerHTML: 0 }, 
              { innerHTML: end, duration: 1.5, ease: "power2.out", snap: { innerHTML: 1 } }
            );
          }
        }
      });
    });

    // Experience Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');

        tabBtns.forEach(b => {
          b.classList.remove('bg-accent/10', 'border-accent/25', 'text-accent');
          b.classList.add('text-muted', 'border-transparent', 'hover:text-text-base');
        });
        btn.classList.add('bg-accent/10', 'border-accent/25', 'text-accent');
        btn.classList.remove('text-muted', 'border-transparent', 'hover:text-text-base');

        tabContents.forEach(c => c.classList.add('hidden'));
        const nextContent = document.getElementById(target);
        nextContent.classList.remove('hidden');
        if (!prefersReducedMotion) {
          gsap.fromTo(nextContent, { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" });
        }
      });
    });

