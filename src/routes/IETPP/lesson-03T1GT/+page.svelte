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
                { title: "Complaint letter", src: "/writing-images/ielts-writing-test-1-general-complaint.png", alt: "ielts writing test-1 general complaint letter" },
                { title: "Letter to inform", src: "/writing-images/ielts-writing-test-1-general-inform.png", alt: "ielts writing test-1 general inform letter" },
                { title: "Request letter", src: "/writing-images/ielts-writing-test-1-general-request.png", alt: "ielts writing test-1 general request letter" }
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
        <title>Writing Task 1 - General Training | InsideIELTS Test Preparation Program</title>
        <meta name="description" content="Master IELTS Writing Task 1 General Training with expert letter writing techniques, practice exercises, and Virtual Examiner videos." />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
         <!-- Lesson Header -->
        <div class="max-w-5xl container mx-auto px-3 md:px-6 py-8">
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg px-6 py-2 mb-8">
                        <div class="text-center">
                                <div class="text-xs text-left text-teal-600 dark:text-teal-400">
                                        IE2401_0302
                                </div>
                                <h1 class="text-3xl font-bold text-white my-7">
                                        Writing Task 1 - General Training
                                </h1>
                        </div>
        <!-- Header Nav -->
                        <div class="mt-6 mb-8 text-lg">
                                <ul class="list-disc list-inside space-y-2 text-white">
                                        <li>Task 1 (GT) format & question types</li>
                                        <li>Task 1 (GT) technique</li>
                                        <li>Task 1 (GT) practice</li>
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

                                <span class="text-gray-500">Next →</span>
                        </div>
                </div>
        </div>
        
        <!-- Page Content -->
        <div style="max-width: 1200px;" class="mx-auto px-3 md:px-6 py-8">

                <!-- Section 1: Format and Question Types -->
                <section class="bg-cyan-600/25 rounded-lg p-4 md:p-8 shadow-sm border border-teal-600 mb-8">
                        <h2 class="text-2xl font-bold text-center text-white mb-8">
                                Task 1 (GT) format and question types</h2>
                        <div class="max-w-6xl mx-auto">  

                         <div class="bg-gray-800 rounded-lg p-6 text-lg border border-gray-700 mb-8">
                                        <p class="text-white mb-6">
                                                The <strong>Task 1</strong> writing exercise for the
                                                <strong>General Training</strong> module is a <strong>letter</strong>. The topics
                                                are centered around everyday situations and usually require
                                                you to request or convey information, express thanks, or make
                                                a suggestion or complaint in writing.
                                        </p>

                                <div class="flex justify-center mb-6">
                                        <a
                                                href="https://insideielts.oppyo.com/video/embed/vqbmpveluv"
                                                target="_blank"
                                                title="InsideIELTS virtual examiner writing test preparation video"
                                                class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
                                        >
                                                Virtual Examiner Video
                                        </a>
                                </div>

                                <p class="text-white mb-6">
                                        The question will ask you to:
                                        <strong><em>"Write a letter to... "</em></strong>,
                                         and then give you three bullet points that you must cover
                                        in your letter.
                                </p>

                                <p class="text-white mb-8">
                                        Here are some sample <strong>Task 1 General Training</strong> questions:
                                </p>

                                <!-- Carousel -->
                                <div class="relative max-w-4xl mx-auto mb-8">
                                        <div class="bg-gray-700 rounded-lg p-6 border border-gray-600">
                                                <!-- Current slide display -->
                                                <div class="text-center mb-4">
                                                        <h3 class="text-xl font-semibold text-white mb-4">{slides[currentSlide].title}</h3>
                                                        <img
                                                                src={slides[currentSlide].src}
                                                                alt={slides[currentSlide].alt}
                                                                class="w-full max-w-2xl mx-auto rounded border border-gray-500 cursor-pointer hover:opacity-80 transition-opacity"
                                                                tabindex="0"
                                                                role="button"
                                                                onclick={() => openLightbox(slides[currentSlide].src)}
                                                                onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox(slides[currentSlide].src)) : null}
                                                        />
                                                </div>

                                                <!-- Navigation buttons -->
                                                <div class="flex justify-center gap-4">
                                                        <button
                                                                onclick={prevSlide}
                                                                class="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded transition-colors"
                                                        >
                                                                ◀ Previous
                                                        </button>
                                                        <button
                                                                onclick={nextSlide}
                                                                class="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded transition-colors"
                                                        >
                                                                Next ▶
                                                        </button>
                                                </div>

                                                <!-- Slide indicators -->
                                                <div class="flex justify-center mt-4 gap-2">
                                                        {#each slides as slide, index}
                                                                <button
                                                                        class="w-3 h-3 rounded-full {index === currentSlide ? 'bg-teal-500' : 'bg-gray-500'} transition-colors"
                                                                        onclick={() => currentSlide = index}
                                                                        aria-label="Go to slide {index + 1}"
                                                                ></button>
                                                        {/each}
                                                </div>
                                        </div>
                                </div>

                                <div class="bg-gray-700 rounded-lg p-6 border border-gray-600">
                                        <p class="text-white text-center">
                                                <strong>Task 1</strong> is worth a third of the available marks for the
                                                writing section, so you should aim to spend around
                                                <strong>20 minutes</strong> on this task.
                                        </p>
                                </div>
                        </div>
                </div>
                </section>

                <!-- Section 2: Technique -->
                <section class="bg-cyan-600/25 rounded-lg p-4 md:p-8 shadow-sm border border-teal-600 mb-8">
                        <h2 class="text-2xl font-bold text-center text-white mb-8">
                                Task 1 (GT) technique</h2>
                        
                        <div class="max-w-6xl mx-auto">
                                <div class="bg-gray-800 rounded-lg p-6 text-lg border border-gray-700 mb-8">
                                        <p class="text-white mb-8">Watch the Task 1 General Training letter tutorial videos below:</p>
                                        
                                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                                <!-- Complaint Letter Example -->
                                                <div class="text-center">
                                                        <h4 class="text-lg font-semibold text-white mb-4">1) Complaint letter</h4>
                                                        <img
                                                                src="/writing-images/ielts-writing-test-1-general-complaint.png"
                                                                alt="Task 1 complaint letter example"
                                                                class="w-full rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity mb-6"
                                                                tabindex="0"
                                                                role="button"
                                                                onclick={() => openLightbox('/writing-images/ielts-writing-test-1-general-complaint.png')}
                                                                onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/writing-images/ielts-writing-test-1-general-complaint.png')) : null}
                                                        />

                                                        <a
                                                                href="https://insideielts.oppyo.com/video/embed/l8ngn5k1wr"
                                                                target="_blank"
                                                                title="InsideIELTS virtual examiner writing test preparation video"
                                                                class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors mb-6"
                                                        >
                                                                Watch VE vid
                                                        </a>

                                                        <div class="bg-gray-700 border border-gray-600 rounded-lg p-4 text-center">
                                                                <p class="text-gray-400 text-sm">Model answer video provides detailed explanation and example response structure for complaint letters.</p>
                                                        </div>
                                                </div>

                                                <!-- Letter to Inform Example -->
                                                <div class="text-center">
                                                        <h4 class="text-lg font-semibold text-white mb-4">2) Letter to inform</h4>
                                                        <img
                                                                src="/writing-images/ielts-writing-test-1-general-inform.png"
                                                                alt="Task 1 letter to inform example"
                                                                class="w-full rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity mb-6"
                                                                tabindex="0"
                                                                role="button"
                                                                onclick={() => openLightbox('/writing-images/ielts-writing-test-1-general-inform.png')}
                                                                onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/writing-images/ielts-writing-test-1-general-inform.png')) : null}
                                                        />

                                                        <a
                                                                href="https://insideielts.oppyo.com/video/embed/nm3hxt4rpn"
                                                                target="_blank"
                                                                title="InsideIELTS virtual examiner writing test preparation video"
                                                                class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors mb-6"
                                                        >
                                                                Watch VE vid
                                                        </a>

                                                        <div class="bg-gray-700 border border-gray-600 rounded-lg p-4 text-center">
                                                                <p class="text-gray-400 text-sm">Model answer video provides detailed explanation and example response structure for informative letters.</p>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </section>

                <!-- Section 3: Practice -->
                <section class="bg-cyan-600/25 rounded-lg p-4 md:p-8 shadow-sm border border-teal-600 mb-8">
                        <h2 class="text-2xl font-bold text-center text-white mb-8">
                                Task 1 (GT) practice</h2>
                        
                        <div class="max-w-6xl mx-auto">
                                <div class="bg-gray-800 rounded-lg p-6 text-lg border border-gray-700">
                                        <p class="text-white mb-8">
                                                <strong>TASK</strong>: complete and upload this pair of short Task 1 General Training practice exercises.
                                        </p>
                                        
                                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                                <!-- Practice Exercise 1 -->
                                                <div class="bg-gray-700 rounded-lg p-6 border border-gray-600">
                                                        <h4 class="text-lg font-semibold text-white mb-4 text-center">1) Letter of complaint</h4>
                                                        
                                                        <img
                                                                src="/LESSONS/les03/T1_GT(6).png"
                                                                alt="Task 1 GT complaint practice"
                                                                class="w-full rounded border border-gray-500 cursor-pointer hover:opacity-80 transition-opacity mb-6"
                                                                onclick={() => openLightbox('/LESSONS/les03/T1_GT(6).png')}
                                                                onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les03/T1_GT(6).png')) : null}
                                                                tabindex="0"
                                                                role="button"
                                                        />

                                                        <div class="bg-gray-600 rounded-lg p-4 mb-6">
                                                                <h5 class="text-white font-bold mb-3 text-center text-decoration-line: underline">TASK</h5>
                                                                <p class="text-white mb-3">
                                                                        Write the opening statement for this Task 1 GT question.
                                                                </p>
                                                                <ul class="text-white mb-3 space-y-1">
                                                                        <li>• use the appropriate greeting (formal)</li>
                                                                        <li>• say why you are writing</li>
                                                                        <li>• include some details of the specific problem</li>
                                                                </ul>
                                                                <div class="text-right">
                                                                        <em class="text-sm text-gray-300">(Maximum 50 words)</em>
                                                                </div>
                                                        </div>

                                                        <div class="text-center mb-4">
                                                                <h6 class="text-white font-bold text-decoration-line: underline">answer sheet</h6>
                                                        </div>
                                                        
                                                        <textarea
                                                                bind:value={task1Answer}
                                                                class="w-full h-48 p-4 bg-gray-600 border border-gray-500 rounded-lg text-white resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
                                                                placeholder="write your response"
                                                        ></textarea>
                                                </div>

                                                <!-- Practice Exercise 2 -->
                                                <div class="bg-gray-700 rounded-lg p-6 border border-gray-600">
                                                        <h4 class="text-lg font-semibold text-white mb-4 text-center">2) Letter to inform</h4>
                                                        
                                                        <img
                                                                src="/LESSONS/les03/T1_GT(4).png"
                                                                alt="Task 1 GT inform practice"
                                                                class="w-full rounded border border-gray-500 cursor-pointer hover:opacity-80 transition-opacity mb-6"
                                                                onclick={() => openLightbox('/LESSONS/les03/T1_GT(4).png')}
                                                                onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les03/T1_GT(4).png')) : null}
                                                                tabindex="0"
                                                                role="button"
                                                        />

                                                        <div class="bg-gray-600 rounded-lg p-4 mb-6">
                                                                <h5 class="text-white font-bold mb-3 text-center text-decoration-line: underline">TASK</h5>
                                                                <p class="text-white mb-3">
                                                                        List two content details per bullet point for this Task 1 GT question.
                                                                </p>
                                                                <ul class="text-white mb-3 space-y-1">
                                                                        <li>• your previous accommodation</li>
                                                                        <li>• how to search for accommodation</li>
                                                                        <li>• what to avoid/be wary of</li>
                                                                </ul>
                                                                <div class="text-right">
                                                                        <em class="text-sm text-gray-300">(Maximum 6 points)</em>
                                                                </div>
                                                        </div>

                                                        <div class="text-center mb-4">
                                                                <h6 class="text-white font-bold text-decoration-line: underline">answer sheet</h6>
                                                        </div>
                                                        
                                                        <textarea
                                                                bind:value={task2Answer}
                                                                class="w-full h-48 p-4 bg-gray-600 border border-gray-500 rounded-lg text-white resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
                                                                placeholder="write your response"
                                                        ></textarea>
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
                                                href="/IETPP/lesson-03"
                                                class="text-teal-400 hover:underline font-semibold"
                                                data-sveltekit-reload
                                        >
                                                ← Back to Lesson 03
                                        </a>

                                        <a
                                                href="/IETPP#lesson-03"
                                                class="text-teal-400 hover:underline font-semibold"
                                                data-sveltekit-reload
                                        >
                                                Back to Contents
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
                        onkeydown={(e) => e.key === 'Enter' && closeLightbox()}
                >
                        <div class="max-w-4xl max-h-full">
                                <img src={lightboxImage} alt="Enlarged view" class="max-w-full max-h-full object-contain rounded-lg" />
                        </div>
                </div>
        {/if}
</div>