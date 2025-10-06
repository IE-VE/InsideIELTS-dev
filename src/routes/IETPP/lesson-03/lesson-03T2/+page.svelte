<script lang="ts">
        import { onMount } from 'svelte';

        let lightboxOpen = false;
        let lightboxImage = '';

        // Answer input variable for practice exercise
        let practiceAnswer = '';

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
                { title: "Agree/disagree", src: "/writing-images/ielts-writing-test-2-agree_disagree.png", alt: "ielts writing test-2 agree/disagree" },
                { title: "Discuss", src: "/writing-images/ielts-writing-test-2-discuss.png", alt: "ielts writing test-2 discuss" },
                { title: "Evaluate", src: "/writing-images/ielts-writing-test-2-evaluate.png", alt: "ielts writing test-2 evaluate" }
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
        <title>Writing Task 2 - Essay | InsideIELTS Test Preparation Program</title>
        <meta name="description" content="Master IELTS Writing Task 2 essays with expert techniques, practice exercises, and Virtual Examiner videos." />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
         <!-- Lesson Header -->
        <div class="max-w-5xl container mx-auto px-6 pt-8">
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg px-6 py-2 mb-8">
                        <div class="text-center">
                                <div class="text-xs text-left text-teal-600 dark:text-teal-400">
                                        IE2401_0303
                                </div>
                                <h1 class="text-3xl font-bold text-white my-7">
                                        Writing - Task 2 Essay
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
                                        href="/IETPP/lesson-03/lesson03-i"
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
                <section class="bg-cyan-600/25 rounded-lg p-4 md:p-8 shadow-sm border border-blue-600 mb-8">
                        <h2 class="text-2xl font-bold text-center text-white mb-8">
                                Task 2 format & question types</h2>
                        <div class="max-w-6xl mx-auto">  

                         <div class="bg-gray-800 rounded-lg p-6 md:p-12 text-lg border border-gray-700 mb-8">
                                        <p class="text-white">
                                                The <strong>Task 2</strong> general and academic writing exercise is a
                                                <strong>250 word discursive essay</strong>. The question will be in the form of a topic statement followed by a question.
                                        </p>

                                <div class="flex justify-center m-10">
                                        <a
                                                href="https://insideielts.oppyo.com/video/embed/f2lbj7wi52"
                                                target="_blank"
                                                title="InsideIELTS virtual examiner writing test preparation video"
                                                class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
                                        >
                                                Virtual Examiner Video
                                        </a>
                                </div>

                                <p class="text-white mb-6">
                                        You will be assessed on your ability to present and justify an
                                        opinion; present a solution to a problem; compare and contrast
                                        evidence and opinions; and evaluate and challenge ideas,
                                        evidence and arguments.
                                </p>

                                <p class="text-white mb-6">
                                        The task will give you a direct instruction relating to the
                                        topic and then ask you to:
                                        <em class="font-bold">
                                                "Give reasons for your answer and include any relevant
                                                examples from your own knowledge or experience."
                                        </em>
                                </p>

                                <p class="text-white mb-8">Let's take a look at some sample Task 2 questions:</p>

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

                                <div class="bg-gray-700 rounded-lg p-6 border border-gray-600 mt-8 mb-2">
                                        <p class="text-white text-center">
                                                The <strong>Task 2</strong> essay is worth 2/3 of your writing score, so you should aim to spend around <strong>40 minutes</strong> on
                                                <strong>Task 2</strong>.
                                        </p>
                                </div>
                        </div>
                </div>
                </section>

                <!-- Section 2: Technique -->
                <section class="bg-teal-600/25 rounded-lg p-4 md:p-8 shadow-sm border border-teal-600 mb-8">
                        <h2 class="text-2xl font-bold text-center text-white mb-8">
                                Task 2 essay technique</h2>
                        
                        <div class="max-w-6xl mx-auto">
                                <div class="bg-gray-800 rounded-lg p-6 text-lg border border-gray-700 mb-8">
                                        <p class="text-white mb-8">Watch the Task 2 essay tutorial video below:</p>
                                        
                                        <div class="max-w-4xl mx-auto">
                                                <!-- Technique Example -->
                                                <div class="text-center">
                                                        <h4 class="text-lg font-semibold text-white mb-4">Evaluate and give opinion</h4>
                                                        <img
                                                                src="/LESSONS/les03/T2-technique.png"
                                                                alt="Task 2 evaluate technique example"
                                                                class="w-full max-w-2xl mx-auto rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity"
                                                                tabindex="0"
                                                                role="button"
                                                                onclick={() => openLightbox('/LESSONS/les03/T2-technique.png')}
                                                                onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les03/T2-technique.png')) : null}
                                                        />

    <div class='m-10'>                                                    <a
                                                                href="https://insideielts.oppyo.com/video/embed/nnfpntpc6c"
                                                                target="_blank"
                                                                title="InsideIELTS virtual examiner writing test preparation video"
                                                                class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
                                                        >  
                                                                Watch VE vid
                                                        </a>   </div>

                                                        <img
                                                                src="/LESSONS/les03/T2-evaluate.png"
                                                                alt="Task 2 evaluate model answer"
                                                                class="w-full max-w-2xl mx-auto rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity"
                                                                tabindex="0"
                                                                role="button"
                                                                onclick={() => openLightbox('/LESSONS/les03/T2-evaluate.png')}
                                                                onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les03/T2-evaluate.png')) : null}
                                                        />
                                                        <p class="text-sm text-gray-400 mt-4">Evaluate essay model answer</p>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </section>

                <!-- Section 3: Practice -->
                <section class="bg-cyan-800/25 rounded-lg p-4 md:p-8 shadow-sm border border-cyan-600 mb-8">
                        <h2 class="text-2xl font-bold text-center text-white mb-8">
                                Task 2 essay practice</h2>
                        
                        <div class="max-w-6xl mx-auto">
                                <div class=" bg-gray-800 rounded-lg p-6 text-lg border border-gray-700">
                                        <p class="text-white mb-8">
                                                <strong>TASK</strong>: complete this Task 2 essay planning practice exercise.
                                        </p>
                                        
                                        <div class="max-w-4xl mx-auto">
                                                <!-- Practice Exercise -->
                                                                                 <h4 class="text-lg font-semibold text-white mb-4 text-center">Evaluate and give opinion</h4>         
                                                        <img
                                                                src="/LESSONS/les03/T2-practice.png"
                                                                alt="Task 2 practice exercise"
                                                                class="w-full max-w-2xl mx-auto rounded border border-gray-500 cursor-pointer hover:opacity-80 transition-opacity mb-12"
                                                                onclick={() => openLightbox('/LESSONS/les03/T2-practice.png')}
                                                                onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les03/T2-practice.png')) : null}
                                                                tabindex="0"
                                                                role="button"
                                                        />

                                                        <div class="bg-gray-600 border border-gray-500 rounded-lg p-4 mb-6">
                                                                <h5 class="text-white font-bold mb-3 text-center text-decoration-line: underline">TASK</h5>
                                                                <p class="text-white mb-3">
                                                                        Brainstorm this question and make a brief plan for this essay.
                                                                </p>
                                                                <ul class="text-white mb-3 space-y-1">
                                                                        <li>• 2 positive effects of technology on relationships</li>
                                                                        <li>• 2 negative effects of technology on relationships</li>
                                                                        <li>• your opinion</li>
                                                                </ul>
                                                                <div class="text-right">
                                                                        <em class="text-sm text-gray-300">(5 sentences/10mins)</em>
                                                                </div>
                                                        </div>

                      <div class="hidden md:block mt-6 max-w-[700px] mx-auto">                                  <div class="text-center mb-4 max-w-700px mx-auto">
                                                                <h6 class="text-white font-bold">answer sheet</h6>
                                                        </div>
                                                        
                                                        <textarea
                                                                bind:value={practiceAnswer}
                                                                class="w-full h-64 p-4 bg-gray-600 border border-gray-500 rounded-lg text-white resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                                                href="/IETPP#lesson-03"
                                                class="text-teal-400 hover:underline font-semibold"
                                                data-sveltekit-reload
                                        >
                                                ← Back to Contents
                                        </a>

                                        <a
                                                href="/IETPP/lesson-03/lesson03-i"
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
                        onkeydown={(e) => e.key === 'Enter' && closeLightbox()}
                >
                        <div class="max-w-4xl max-h-full">
                                <img src={lightboxImage} alt="Enlarged view" class="max-w-full max-h-full object-contain rounded-lg" />
                        </div>
                </div>
        {/if}
</div>