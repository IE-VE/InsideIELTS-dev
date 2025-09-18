<script lang="ts">
        import { onMount } from 'svelte';

        let lightboxOpen = false;
        let lightboxImage = '';

        function openLightbox(imageSrc: string) {
                lightboxImage = imageSrc;
                lightboxOpen = true;
        }

        function closeLightbox() {
                lightboxOpen = false;
                lightboxImage = '';
        }

        onMount(() => {
                function handleKeydown(event: KeyboardEvent) {
                        if (event.key === 'Escape' && lightboxOpen) {
                                closeLightbox();
                        }
                }

                document.addEventListener('keydown', handleKeydown);
                return () => document.removeEventListener('keydown', handleKeydown);
        });
</script>

<svelte:head>
        <title>IETPP - Lesson 01(i): Listening Multiple Choice | InsideIELTS</title>
        <meta
                name="description"
                content="Master IELTS Listening multiple choice questions with proven techniques and practice exercises."
        />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
        <!-- Lesson Header -->
        <div class="max-w-5xl container mx-auto px-6 pt-8">
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg px-6 py-2 mb-8">
                        <div class="text-center">
                                <div class="text-xs text-left text-teal-600 dark:text-teal-400">
                                        IE2401_01.1
                                </div>
                                <h1 class="text-4xl font-bold text-white my-7">
                                        LISTENING
                                </h1>
                        </div>

                        <div class="flex justify-between items-center">
                                <a
                                        href="/IETPP/lesson-01"
                                        class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
                                        data-sveltekit-reload
                                >
                                        ← Previous
                                </a>

                                <a
                                        href="/IETPP#lesson-01"
                                        class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
                                        data-sveltekit-reload
                                >
                                        Contents
                                </a>

                                <a
                                        href="/IETPP/lesson-01/lesson01-ii"
                                        class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold ml-8"
                                        data-sveltekit-reload
                                >
                                        Next →
                                </a>
                        </div>
                </div>
        </div>

        <!-- Page Content -->
        <div style="max-width: 1200px;" class="mx-auto px-3 md:px-6 py-8">
                <!-- Lesson Title Section -->
                <section class="bg-cyan-600/25 rounded-lg p-4 md:p-10 shadow-sm border border-blue-600 mb-12">
                        <div class="flex items-center justify-center gap-4 mb-10">
                                <div class="text-4xl">👂</div>
                                <h2 class="text-3xl font-bold text-center text-white underline">Multiple Choice</h2>
                                <div class="text-4xl">👂</div>
                        </div>
                        <!-- Educational Section -->
                        <div class="bg-gray-800 rounded-lg p-4 md:p-8 shadow-sm border border-gray-600 mb-12">
                                
        <div class="space-y-10">
                <div>                
                        <h3 class="text-lg font-semibold text-blue-400 mb-6">What to Expect</h3>
                                                <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                                                <p class="text-gray-700 dark:text-gray-300 text-lg mb-2">
                                                        Multiple choice questions in the IELTS Listening test require you to choose the correct answer from three to five options (A, B, C...). These questions test your ability to understand specific information, main ideas, and speaker attitudes.
                                                </p>
                                                </div>
                                        </div>

                                        <div>
                                                <h3 class="text-lg font-semibold text-teal-400 mb-6">Key Strategies</h3>
                                                <div class="bg-teal-900/20 border border-teal-800 rounded-lg p-4">
                                                        <ul class="space-y-2 text-gray-300">
                                                                <li class="flex items-start">
                                                                        <span class="text-green-500 mr-2">1.</span>
                                                                        <span><strong>Read ahead:</strong> Use the preparation time to read the questions and options</span>
                                                                </li>
                                                                <li class="flex items-start">
                                                                        <span class="text-green-500 mr-2">2.</span>
                                                                        <span><strong>Highlight keywords:</strong> Underline key topic words in the questions</span>
                                                                </li>
                                                                <li class="flex items-start">
                                                                        <span class="text-green-500 mr-2">3.</span>
                                                                        <span><strong>Predict answers:</strong> Think about the 'type' of answer you might hear</span>
                                                                </li>
                                                                <li class="flex items-start">
                                                                        <span class="text-green-500 mr-2">4.</span>
                                                                        <span><strong>Listen for keywords:</strong> Focus on key words that match the options</span>
                                                                </li>
                                                             
                                                        </ul>
                                                </div>
                                        </div>

                                        <div>
                                                <h3 class="text-lg font-semibold text-red-400 mb-6">Common Pitfalls</h3>
                                                <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                                                        <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                                                                <li class="flex items-start">
                                                                        <span class="text-red-600 dark:text-red-400 mr-2">⚠️</span>
                                                                        <span>Choosing the first answer you hear - the correct answer may come later</span>
                                                                </li>
                                                                <li class="flex items-start">
                                                                        <span class="text-red-600 dark:text-red-400 mr-2">⚠️</span>
                                                                        <span>Being distracted by familiar words that don't match the correct meaning</span>
                                                                </li>
                                                                <li class="flex items-start">
                                                                        <span class="text-red-600 dark:text-red-400 mr-2">⚠️</span>
                                                                        <span>Not reading all options before making a choice</span>
                                                                </li>
                                                        </ul>
                                                </div>
                                        </div>
                                </div>
                        </div>
                 
                        <div class="max-w-4xl mx-auto text-lg text-white">
                                
                                <p class="mb-4">
                                        There will usually be at least one set of multiple choice answer questions in every Listening Test.</p>
                                
                                <p class="mb-10">The question format is a question or statement followed by three to five options labeled with letters.
                                </p>

                                <div class="flex justify-center mb-10">
                                        <img
                                                src="/LESSONS/les01/01(i)/L_multiplechoice-torn.png"
                                                alt="IELTS Listening Multiple Choice"
                                                class="w-full max-w-2xl rounded border border-gray-600 cursor-pointer"
                                                on:click={() => openLightbox('/LESSONS/les01/01(i)/L_multiplechoice-torn.png')}
                                        />
                                </div>

                                <p class="mb-16">
                                        The instructions at the beginning of the section will tell you to circle the appropriate letter from the choices given.</p>                  
                        <div class="flex justify-center mb-12">
                                        <a
                                                href="https://insideielts.oppyo.com/video/embed/o4tbupim2x"
                                                target="_blank"
                                                title="InsideIELTS virtual examiner listening test multiple choice"
                                                class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
                                        >
                                                Watch VE vid
                                        </a>
                                </div>
                           </div>
                        
                                <div class="mx-auto text-lg">
                                <div class="bg-gray-800 rounded-lg p-4 md:p-8 shadow-sm border border-gray-600 mb-12">
                                <h3 class="text-xl font-bold text-white mb-8 underline">Question technique</h3>

                                <p class="mb-10">
                                <strong> 1. At the beginning of each section before the audio begins (about 40-50 seconds in total), use the time given to read and underline key topic words in the questions and answer options.</strong></p>
                                     
                                <div class="flex justify-center mb-10">
                                        <img
                                                src="/LESSONS/les01/01(i)/L_multiplechoice-example-technique.png"
                                                alt="IELTS Listening Multiple Choice Technique"
                                                class="w-full max-w-2xl rounded border-2 border-black cursor-pointer"
                                                on:click={() =>
                                                        openLightbox('/LESSONS/les01/01(i)/L_multiplechoice-example-technique.png')}
                                        />
                                </div>

                                <p class="mb-4">
                                <strong>2.  When the audio begins listen for the key words.</strong></p>                <ul>
                                        <li class="mb-4 ml-4">
                                                - The answers will come in order.<li>
                                        <li class="mb-4 ml-4">
                                                - Listen out for paraphrased answers and synonyms.</li>
                                        <li class="mb-8 ml-4">
                                                 - Be aware of tricks such as when the speaker may say one thing and then change their mind, or mention other answer options before opting for the correct answer.</li>
                                        <li class="mb-8 ml-4">
                                                 - If you think you have missed an answer leave it blank and listen for next-question key words.</li>
                                                </ul>
                                        <p class="mb-4">
                                           <strong>3. When you hear the correct answer circle the correct option clearly, directly on your question paper.</strong></p>
                                     <ul>   <li class="mb-8 ml-6">
                                                (You'll have time at the end of the test to transfer your answers to the answer sheet).
                                        </li></ul>
                                    <p class="mb-4">    <strong>4. At the end of each SECTION use the time given to fill in (best guess) any answers you have missed then skip forward to the next section and begin reading the questions.</strong></p>
                                             <ul>   <li class="mb-8 ml-6">
                                                        Don't wait!
                                                </li></ul>
                                        </div>
                                </div>
                        
                                <p class="text-white text-center mb-10 font-bold">
                                        Watch this quick Listening multiple choice demonstration vid before testing your skills.
                                </p>

                                <div class="flex justify-center mb-12">
                                        <video
                                                controls
                                                class="w-full max-w-2xl rounded border border-gray-600"
                                                src="/LESSONS/les01/01(i)/Listening_demoQ-multiplechoice.mp4"
                                        >
                                                Your browser does not support this video format.
                                        </video>
                                </div>
                                
                                <div class="text-center">
                                        <p class="text-white text-xl font-bold mb-16">
                                                Test your understanding of LISTENING - Multiple choice
                                        </p>

                                        <a
                                                href="/IETPP/lesson-01/lesson01-i/skill-check"
                                                class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors border-2 border-white"
                                        >
                                                <span class="text-2xl">✓</span>
                                                <span>SKILL CHECK</span>
                                                <span class="text-2xl">✓</span>
                                        </a>
                                
                        </div>
                </section>

                               <!-- Footer Navigation -->
                <section class="text-center">                       
                        
                        <div class="bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-700">
                                <div class="flex justify-between items-center">
                                        <a
                                                href="/IETPP#lesson-01"
                                                class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
                                                data-sveltekit-reload
                                        >
                                                ← Back to Contents
                                        </a>

                                        <a
                                                href="/IETPP/lesson-01/lesson01-ii"
                                                class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
                                                data-sveltekit-reload
                                        >
                                                Next Lesson →
                                        </a>
                                </div>
                        </div>
                </section>
        </div>
</div>

<!-- Lightbox Modal -->
{#if lightboxOpen}
        <div
                class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                on:click={closeLightbox}
        >
                <div class="relative max-w-4xl max-h-full">
                        <button
                                class="absolute top-4 right-4 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-all z-10"
                                on:click={closeLightbox}
                        >
                                ×
                        </button>
                        <img
                                src={lightboxImage}
                                alt="Enlarged view"
                                class="max-w-full max-h-full object-contain rounded"
                                on:click|stopPropagation
                        />
                </div>
        </div>
{/if}