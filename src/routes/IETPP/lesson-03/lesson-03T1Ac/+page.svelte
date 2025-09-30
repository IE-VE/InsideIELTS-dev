<script lang="ts">
        import { onMount } from 'svelte';

        let lightboxOpen = false;
        let lightboxImage = '';

        // Answer input variables for practice exercises
        let task1Answer = '';
        let task2Answer = '';

        function openLightbox(imageSrc: string) {
                lightboxImage = imageSrc;
                lightboxOpen = true;
        }

        function closeLightbox() {
                lightboxOpen = false;
                lightboxImage = '';
        }

        // Carousel functionality
        let currentSlide = 0;
        const slides = [
                { title: "Line graph Q", src: "/writing-images/ielts-writing-test-1-line-graph.png", alt: "ielts writing test-1 line graph" },
                { title: "Table Question", src: "/writing-images/ielts-writing-test-1-table-2.png", alt: "ielts writing test-1 table" },
                { title: "Pie chart Q", src: "/writing-images/ielts-writing-test-1-pie-chart.png", alt: "ielts writing test-1 pie chart" },
                { title: "Bar chart Q", src: "/writing-images/ielts-writing-test-1-bar-chart.png", alt: "ielts writing test-1 bar chart" },
                { title: "Process diagram Q", src: "/writing-images/ielts-writing-test-1-process.png", alt: "ielts writing test-1 process diagram" },
                { title: "Map Question", src: "/writing-images/ielts-writing-test-1-map.png", alt: "ielts writing test-1 map" }
        ];

        function nextSlide() {
                currentSlide = (currentSlide + 1) % slides.length;
        }

        function prevSlide() {
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        }

        onMount(() => {
                function handleKeydown(event: KeyboardEvent) {
                        if (event.key === 'Escape' && lightboxOpen) {
                                closeLightbox();
                        }
                }

                document.addEventListener('keydown', handleKeydown);
                
                // Cleanup function
                return () => {
                        document.removeEventListener('keydown', handleKeydown);
                };
        });
</script>

<svelte:head>
        <title>Writing Task 1 - Academic | InsideIELTS Test Preparation Program</title>
        <meta name="description" content="Master IELTS Writing Task 1 Academic with expert techniques, practice exercises, and Virtual Examiner videos." />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
         <!-- Lesson Header -->
        <div class="max-w-5xl container mx-auto px-3 md:px-6 py-8">
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg px-6 py-2 mb-8">
                        <div class="text-center">
                                <div class="text-xs text-left text-teal-600 dark:text-teal-400">
                                        IE2401_0301
                                </div>
                                <h1 class="text-3xl font-bold text-white my-7">
                                        Writing Task 1 - Academic
                                </h1>
                        </div>
        <!-- Header Nav -->
                        <div class="mt-6 mb-8 text-lg">
                                <ul class="list-disc list-inside space-y-2 text-white">
                                        <li>format & question types</li>
                                        <li>technique</li>
                                        <li>practice</li>
                                </ul>
                        </div>

                        <div class="flex justify-between items-center">
                                <a
                                        href="/IETPP/lesson-03"
                                        class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
                                        data-sveltekit-reload
                                >
                                        ← Prev
                                </a>

                                <a
                                        href="/IETPP#lesson-03"
                                        class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
                                        data-sveltekit-reload
                                >
                                        Contents
                                </a>

                                <a
                                        href="/IETPP/lesson-03T2"
                                        class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
                                        data-sveltekit-reload
                                >
                                        Next →
                                </a>
                        </div>
                </div>
        </div>
        
        <!-- Page Content -->
        <div style="max-width: 1200px;" class="mx-auto px-3 md:px-6 py-8">

                <!-- Section 1: Format and Question Types -->
                <section class="bg-cyan-600/25 rounded-lg p-4 md:p-8 shadow-sm border border-teal-600 mb-8">
                        <h2 class="text-2xl font-bold text-center text-white mb-8">
                                Task 1 (Ac) format & question types</h2>
                        <div class="max-w-6xl mx-auto">  

                         <div class="bg-gray-800 rounded-lg p-6 text-lg border border-gray-700 mb-8">
                                        <p class="text-white">
                                                The <strong>Task 1 Academic</strong> writing exercise is in the form of
                                                a <strong>report</strong>. You may be asked to report on a line graph,
                                                bar chart, table, pie chart, map or process diagram. Sometimes
                                                the question may combine these elements, e.g. a line graph
                                                with a pie chart or multiple graphs or tables presented
                                                together.
                                        </p>

                                <div class="flex justify-center m-10">
                                        <a
                                                href="https://insideielts.oppyo.com/video/embed/p248japtth"
                                                target="_blank"
                                                title="InsideIELTS virtual examiner writing test preparation video"
                                                class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
                                        >
                                                Virtual Examiner Video
                                        </a>
                                </div>

                                        <p class="text-white mb-6">
                                                The question will ask you to:
                                                <em>
                                                        <strong>
                                                                "Summarise the information by selecting and reporting the
                                                                main features, and make comparisons where relevant."
                                                        </strong>
                                                </em>
                                        </p>

                                        <p class="text-white mb-6">
                                                Here are some sample <strong>Task 1 Academic</strong> questions:
                                        </p>

                                <!-- Carousel -->
                                <div class="relative max-w-2xl mx-auto mb-8">
                                        <div class="relative overflow-hidden rounded-lg bg-gray-100">
                                                <div class="flex transition-transform duration-300 ease-in-out"
                                                     style="transform: translateX(-{currentSlide * 100}%)">
                                                        {#each slides as slide, index}
                                                                <div class="w-full flex-shrink-0 bg-white p-4">
                                                                        <h3 class="text-xl font-semibold text-gray-800 text-center mb-4">{slide.title}</h3>
                                                                        <img
                                                                                src={slide.src}
                                                                                alt={slide.alt}
                                                                                class="w-full h-auto cursor-pointer"
                                                                                tabindex="0"
                                                                                role="button"
                                                                                onclick={() => openLightbox(slide.src)}
                                                                                onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox(slide.src)) : null}
                                                                        />
                                                                </div>
                                                        {/each}
                                                </div>
                                                
                                                <!-- Navigation buttons -->
                                                <button 
                                                        class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all"
                                                        onclick={prevSlide}
                                                >
                                                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                                                        </svg>
                                                </button>
                                                
                                                <button 
                                                        class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all"
                                                        onclick={nextSlide}
                                                >
                                                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                                        </svg>
                                                </button>
                                        </div>
                                        
                                        <!-- Slide indicators -->
                                        <div class="text-center mt-4">
                                                <div class="flex justify-center space-x-2">
                                                        {#each slides as _, index}
                                                                <button
                                                                        class="w-2 h-2 rounded-full transition-all {index === currentSlide ? 'bg-teal-600' : 'bg-gray-400'}"
                                                                        onclick={() => currentSlide = index}
                                                                ></button>
                                                        {/each}
                                                </div>
                                        </div>
                                </div>

                                        <div class="border-l-4 border-teal-500 pl-6">
                                                <p class="text-white">
                                                        <strong>Task 1</strong> is worth a third of the available marks for the
                                                        writing section, so you should aim to spend around
                                                        <strong>20 minutes</strong> on this task.
                                                </p>
                                        </div>
                                </div>
                        </div>
                </section>

                <!-- Section 2: Technique -->
                <section class="bg-teal-600/25 rounded-lg p-4 md:p-8 shadow-sm border border-teal-600 mb-8">
                        <h2 class="text-2xl font-bold text-center text-white mb-8">Task 1 (Ac) technique</h2>

                        <div class="max-w-6xl mx-auto">
                                <div class="bg-gray-800 rounded-lg p-6 text-lg border border-gray-700 mb-8">
                                        <p class="text-white mb-8">Watch the Task 1 Academic report tutorial videos below:</p>
                                
                                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                                <!-- Line Graph Example -->
                                                <div class="text-center">
                                                        <h3 class="text-xl font-bold text-white mb-4">1) Line graph</h3>
                                                        
                                                        <img
                                                                src="/writing-images/ielts-writing-test-1-line-graph.png"
                                                                alt="Task 1 Line graph Q"
                                                                class="w-full rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity mb-6"
                                                                tabindex="0"
                                                                role="button"
                                                                onclick={() => openLightbox('/writing-images/ielts-writing-test-1-line-graph.png')}
                                                                onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/writing-images/ielts-writing-test-1-line-graph.png')) : null}
                                                        />

                                            <div class="mt-8">            <a
                                                                href="https://insideielts.oppyo.com/video/embed/pbgbw3zl6y"
                                                                target="_blank"
                                                                title="InsideIELTS virtual examiner listening test preparation video"
                                                                class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors mb-6"
                                                        >
                                                                Watch VE vid
                                                        </a> </div>

                                                        <div class="bg-gray-700 border border-gray-600 rounded-lg p-4 text-center">
                                                                <p class="text-gray-400 text-xs">Model answer video provides detailed explanation and example response structure for line graph questions.</p>
                                                        </div>
                                                </div>

                                                <!-- Map Example -->
                                                <div class="text-center">
                                                        <h3 class="text-xl font-bold text-white mb-4">2) Map</h3>
                                                        
                                                        <img
                                                                src="/writing-images/ielts-writing-test-1-map.png"
                                                                alt="Task 1 Map Q"
                                                                class="w-full rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity mb-4"
                                                                tabindex="0"
                                                                role="button"
                                                                onclick={() => openLightbox('/writing-images/ielts-writing-test-1-map.png')}
                                                                onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/writing-images/ielts-writing-test-1-map.png')) : null}
                                                        />

                                                        <div class="mt-8"><a
                                                                href="https://insideielts.oppyo.com/video/embed/pff54lkawz"
                                                                target="_blank"
                                                                title="InsideIELTS virtual examiner listening test preparation video"
                                                                class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors mb-4"
                                                        >
                                                                Watch VE vid
                                                        </a>
                                                                </div>

                                                        <div class="bg-gray-700 border border-gray-600 rounded-lg p-4 text-center mb-6">
                                                                <p class="text-gray-400 text-xs">Model answer video provides detailed explanation and example response structure for map questions.</p>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </section>

                <!-- Section 3: Practice -->
                <section class="bg-cyan-800/25 rounded-lg p-4 md:p-8 shadow-sm border border-teal-600 mb-8">
                        <h2 class="text-2xl font-bold text-center text-white mb-8">Task 1 (Ac) practice</h2>

                        <div class="max-w-6xl mx-auto">
                                <div class="bg-gray-800 rounded-lg p-6 text-lg border border-gray-700 mb-8">
                                        <p class="text-white mb-8">
                                                <strong>TASK</strong>: complete and upload this pair of short Task 1 Academic practice exercises.
                                        </p>
                                
                                <!-- Practice Exercise 1 -->
                                <div class="mb-12">
                                        <h3 class="text-xl font-bold text-white mb-6 text-center">1) Line graph</h3>
                                        
                                        <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
                                                <!-- Left Column - Image (3/5 width) -->
                                                <div class="md:col-span-3">
                                                        <img
                                                                src="/LESSONS/les03/T1_Ac(3).png"
                                                                alt="Task 1 Line graph Q"
                                                                class="w-full rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity"
                                                                tabindex="0"
                                                                role="button"
                                                                onclick={() => openLightbox('/LESSONS/les03/T1_Ac(3).png')}
                                                                onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les03/T1_Ac(3).png')) : null}
                                                        />
                                                </div>

                                                <!-- Right Column - Task and Answer Sheet -->
                                                <div class="md:col-span-2 flex flex-col space-y-4">
                                                        <div class="bg-gray-700 border border-gray-600 rounded-lg p-4">
                                                                <h4 class="font-bold text-center text-white mb-3 underline">TASK</h4>
                                                                <p class="text-white mb-3">
                                                                        Write the first paragraph for this Task 1 question.
                                                                </p>
                                                                <ul class="text-left text-gray-300 space-y-1 mb-3">
                                                                        <li>• paraphrase the question</li>
                                                                        <li>• say what the graph shows</li>
                                                                        <li>• mention the broad trend/s (overview)</li>
                                                                </ul>
                                                                <p class="text-sm text-gray-400 italic">(Maximum 60 words)</p>
                                                        </div>

                                                        <div class="flex flex-col flex-1">
                                                                <h4 class="font-bold text-white mb-2 text-center">answer sheet</h4>
                                                                <textarea
                                                                        bind:value={task1Answer}
                                                                        placeholder="  write your response"
                                                                        class="w-full h-full p-3 border border-gray-500 bg-gray-700 text-white rounded resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
                                                                ></textarea>
                                                        </div>
                                                </div>
                                        </div>
                                </div>

                                <!-- Practice Exercise 2 -->
                                <div class="mb-8">
                                        <h3 class="text-xl font-bold text-white mb-6 text-center">2) Map</h3>
                                        
                                        <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
                                                <!-- Left Column - Image -->
                                                <div class="md:col-span-3">
                                                        <img
                                                                src="/LESSONS/les03/T1_Ac(5).png"
                                                                alt="Task 1 Map Q"
                                                                class="w-full rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity"
                                                                tabindex="0"
                                                                role="button"
                                                                onclick={() => openLightbox('/LESSONS/les03/T1_Ac(5).png')}
                                                                onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les03/T1_Ac(5).png')) : null}
                                                        />
                                                </div>

                                                <!-- Right Column - Task and Answer Sheet -->
                                                <div class="md:col-span-2 flex flex-col space-y-4">
                                                        <div class="bg-gray-700 border border-gray-600 rounded-lg p-4">
                                                                <h4 class="font-bold text-center text-white mb-3 underline">TASK</h4>
                                                                <p class="text-white mb-3">
                                                                        List the main features that you will include in your report for this Task 1 question.
                                                                </p>
                                                                <ul class="text-left text-gray-300 space-y-1 mb-3">
                                                                        <li>• different buildings</li>
                                                                        <li>• paths</li>
                                                                        <li>• other additional features</li>
                                                                </ul>
                                                                <p class="text-sm text-gray-400 italic">(Maximum 5-6 points)</p>
                                                        </div>

                                                        <div class="flex flex-col flex-1">
                                                                <h4 class="font-bold text-white mb-2 text-center">answer sheet</h4>
                                                                <textarea
                                                                        bind:value={task2Answer}
                                                                        placeholder=" write your response"
                                                                        class="w-full h-full p-3 border border-gray-500 bg-gray-700 text-white rounded resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
                                                                ></textarea>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                </div>
                        </div>
                </section>
           
                <!-- Footer Navigation -->
                <section class="text-center py-8">

                        <div class="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
                                <div class="flex justify-between items-center">
                                        <a
                                                href="/IETPP#lesson-03"
                                                class="text-teal-400 hover:underline font-semibold"
                                                data-sveltekit-reload
                                        >
                                                ← Back to Contents
                                        </a>

                                        <a
                                                href="/IETPP/lesson-03T2"
                                                class="text-teal-400 hover:underline font-semibold"
                                                data-sveltekit-reload
                                        >
                                                Next Lesson →
                                        </a>
                                </div>
                        </div>
                </section>

        </div>

        <!-- Lightbox -->
        {#if lightboxOpen}
                <div
                        class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                        onclick={closeLightbox}
                        role="button"
                        tabindex="0"
                        onkeydown={(e) => e.key === 'Escape' ? closeLightbox() : null}
                >
                        <img
                                src={lightboxImage}
                                alt="Enlarged view"
                                class="max-w-full max-h-full object-contain"
                                onclick={(e) => e.stopPropagation()}
                        />
                        <button
                                class="absolute top-4 right-4 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75"
                                onclick={closeLightbox}
                        >
                                ×
                        </button>
                </div>
        {/if}
</div>