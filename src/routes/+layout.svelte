<script lang="ts">
        import '../app.css';
        import DarkModeToggle from '$lib/components/DarkModeToggle.svelte';
        import { page } from '$app/stores';

        let isMenuOpen = $state(false);

        // Check if we're on IETPP pages  
        let isIETTPActive = $state(false);
        
        $effect(() => {
                if (typeof window !== 'undefined') {
                        isIETTPActive = $page.url?.pathname?.startsWith('/IETPP') || false;
                }
        });

        // Force dark mode always
        if (typeof document !== 'undefined') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
        }

        // Handle font loading
        function loadFont() {
                const fontLink = document.getElementById('montserrat-font') as HTMLLinkElement;
                if (fontLink) {
                        fontLink.media = 'all';
                }
        }

        // Toggle mobile menu
        function toggleMenu() {
                isMenuOpen = !isMenuOpen;
        }

        // Updated navigation links for main menu (no "Practice" repetition)
        const navLinks = [
                { href: '/speaking', text: 'SPEAKING' },
                { href: '/writing', text: 'WRITING' },
                { href: '/reading', text: 'READING' },
                { href: '/listening', text: 'LISTENING' }
        ];
</script>

<svelte:head>
        <title>InsideIELTS: Complete IELTS Preparation and Practice</title>
        <meta
                name="description"
                content="Comprehensive IELTS preparation with practice tests, exercises and feedback for Speaking, Writing, Reading and Listening. Get your band score and personalised tips."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <!-- Resource hints for external domains -->
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />

        <!-- Preload critical assets -->
        <link rel="preload" href="/IE_logo.png" as="image" fetchpriority="high" />
        <link
                rel="preload"
                href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
                as="style"
                crossorigin=""
        />
        <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
                media="print"
                id="montserrat-font"
                onload={loadFont}
        />
        <!-- Fallback for no-JS environments -->
        <noscript>
                <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
                />
        </noscript>

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://insideielts.com/" />
        <meta property="og:title" content="InsideIELTS: Complete IELTS Preparation and Practice" />
        <meta
                property="og:description"
                content="Comprehensive IELTS preparation with practice tests, exercises and feedback for Speaking, Writing, Reading and Listening. Get your band score and personalised tips."
        />
        <meta property="og:image" content="https://insideielts.com/og-image.jpg" />

        <!-- Twitter -->
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://insideielts.com/" />
        <meta property="twitter:title" content="InsideIELTS: Complete IELTS Preparation and Practice" />
        <meta
                property="twitter:description"
                content="Comprehensive IELTS preparation with practice tests, exercises and feedback for Speaking, Writing, Reading and Listening. Get your band score and personalised tips."
        />
        <meta property="twitter:image" content="https://insideielts.com/og-image.jpg" />

        <!-- Structured Data -->
        <script type="application/ld+json">
                {
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "InsideIELTS: Complete IELTS Preparation",
                        "url": "https://insideielts.com",
                        "description": "Comprehensive IELTS preparation with practice tests, exercises and feedback for Speaking, Writing, Reading and Listening",
                        "potentialAction": {
                                "@type": "SearchAction",
                                "target": "https://insideielts.com/search?q={search_term_string}",
                                "query-input": "required name=search_term_string"
                        }
                }
        </script>
</svelte:head>

<div
        class="min-h-screen bg-white font-['Montserrat'] transition-colors duration-200 dark:bg-gray-900 dark:text-gray-100"
>
        <!-- Enhanced Navigation with all skill areas -->
        <nav class="container mx-auto px-6 py-4">
                <div class="relative flex items-center justify-between">
                        <a
                                href="/"
                                class="flex items-center gap-2 font-bold whitespace-nowrap text-teal-600 dark:text-teal-400"
                        >
                                <img
                                        src="/IE_logo.png"
                                        alt="InsideIELTS Logo"
                                        class="h-8 w-auto"
                                        width="32"
                                        height="32"
                                        decoding="async"
                                        fetchpriority="high"
                                />
                                <span>InsideIELTS</span>
                        </a>

                        <!-- Center IETPP Link - Absolutely centered on page -->
                        <div class="absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
                                {#if isIETTPActive}
                                        <span class="text-teal-600 dark:text-teal-400 font-bold text-sm md:text-base lg:text-lg cursor-default">
                                                IETPP
                                        </span>
                                {:else}
                                        <a
                                                href="/IETPP"
                                                class="text-gray-600 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 font-bold text-sm md:text-base lg:text-lg {$page.url.pathname === '/' ? 'ietpp-pulse' : ''}"
                                        >
                                                IETPP
                                        </a>
                                {/if}
                        </div>

                        <!-- Desktop Navigation -->
                        <div class="hidden items-center space-x-6 text-sm md:space-x-4 md:text-xs lg:space-x-6 lg:text-sm md:flex">
                                {#each navLinks as link}
                                        <a
                                                href={link.href}
                                                class="text-gray-600 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400"
                                        >
                                                {link.text}
                                        </a>
                                {/each}
                        </div>

                        <!-- Mobile Navigation Toggle -->
                        <div class="flex items-center md:hidden">
                                <button class="cursor-pointer" onclick={toggleMenu} aria-label="Toggle mobile menu">
                                        <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="h-6 w-6 text-gray-600 dark:text-gray-300"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                        >
                                                <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M4 6h16M4 12h16M4 18h16"
                                                />
                                        </svg>
                                </button>
                        </div>
                </div>

                <!-- Mobile Menu -->
                {#if isMenuOpen}
                        <div class="mt-4 space-y-4 text-sm md:hidden">
                                {#if isIETTPActive}
                                        <span class="block text-teal-600 dark:text-teal-400 font-bold cursor-default">
                                                IETPP
                                        </span>
                                {:else}
                                        <a href="/IETPP" class="block text-gray-600 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 font-bold {$page.url.pathname === '/' ? 'ietpp-pulse' : ''}">
                                                IETPP
                                        </a>
                                {/if}
                                {#each navLinks as link}
                                        <a href={link.href} class="block text-gray-600 dark:text-gray-300">
                                                {link.text}
                                        </a>
                                {/each}
                        </div>
                {/if}
        </nav>

        <!-- Page Content -->
        <slot />

        <!-- Footer with updated navigation -->
        <footer class="bg-white py-8 dark:bg-gray-900">
                <div class="container mx-auto px-6 text-center text-sm text-gray-500 dark:text-gray-400">
                        <div class="mb-4 flex justify-center">
                                <img
                                        src="/IE_logo.png"
                                        alt="InsideIELTS Logo"
                                        class="mb-4 h-12 w-auto"
                                        width="48"
                                        height="48"
                                        decoding="async"
                                        loading="lazy"
                                />
                        </div>

                        <!-- Add navigation links in footer -->
                        <div class="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2">
                                {#each navLinks as link}
                                        <a href={link.href} class="hover:text-teal-600 dark:hover:text-teal-400">
                                                {link.text}
                                        </a>
                                {/each}
                        </div>

                        <div class="mb-4">
                                <a href="/privacy" class="mx-2 hover:text-teal-600 dark:hover:text-teal-400"
                                        >Privacy Policy</a
                                >
                                <span class="mx-2">|</span>
                                <a href="/terms" class="mx-2 hover:text-teal-600 dark:hover:text-teal-400"
                                        >Terms of Service</a
                                >
                                <span class="mx-2">|</span>
                                <a
                                        href="mailto:help@insideielts.com"
                                        class="mx-2 hover:text-teal-600 dark:hover:text-teal-400">Contact Us</a
                                >
                        </div>
                        <p>© 2025 InsideIELTS.com. All rights reserved.</p>
                </div>
        </footer>
</div>

<style>
        :global(html) {
                scroll-behavior: smooth;
        }

        :global(body) {
                @apply antialiased;
        }

        /* Critical CSS inlined for faster render */
        :global(.container) {
                width: 100%;
                margin-right: auto;
                margin-left: auto;
        }

        /* Reduce layout shifts with content-visibility for below-fold content */
        :global(footer) {
                content-visibility: auto;
                contain-intrinsic-size: 0 200px;
        }

        /* IETPP pulse animation - only on home page */
        :global(.ietpp-pulse) {
                animation: ietppColorPulse 5s infinite;
        }

        /* Pause animation on hover and show teal color */
        :global(.ietpp-pulse:hover) {
                animation-play-state: paused;
                color: rgb(45, 212, 191) !important; /* teal-400 */
        }

        @keyframes ietppColorPulse {
                0% { color: white; }
                60% { color: rgb(45, 212, 191); } /* teal-400 - reached at 3s */
                70% { color: white; } /* back to white in 0.5s */
                100% { color: white; } /* hold white for 1.5s */
        }
</style>