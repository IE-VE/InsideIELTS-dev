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
        <title>IETPP - Lesson 02(i): Reading Matching Information | InsideIELTS</title>
        <meta
                name="description"
                content="Master IELTS Reading matching information questions with proven techniques and practice exercises."
        />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
        <!-- Lesson Header -->
        <div class="max-w-5xl container mx-auto px-6 pt-8">
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg px-6 py-2 mb-8">
                        <div class="text-center">
                                <div class="text-xs text-left text-teal-600 dark:text-teal-400">
                                        IE2401_02.1
                                </div>
                                <h1 class="text-4xl font-bold text-white my-7 tracking-wide">
                                        READING
                                </h1>
                        </div>

                        <div class="flex justify-between items-center">
                                <a
                                        href="/IETPP/lesson-02"
                                        class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
                                        data-sveltekit-reload
                                >
                                        ← Prev
                                </a>

                                <a
                                        href="/IETPP#lesson-02"
                                        class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
                                        data-sveltekit-reload
                                >
                                        Contents
                                </a>

                                <a
                                        href="/IETPP/lesson-02/lesson02-ii"
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
                <!-- Lesson Title Section -->
                <section class="bg-cyan-600/25 rounded-lg p-4 md:p-10 shadow-sm border border-blue-700 mb-12">
                        <div class="flex items-center justify-center gap-4 mb-10 text-gray-300">
                                <div class="text-4xl">📖</div>
                                <h2 class="text-3xl font-bold text-center tracking-wide underline decoration-2 underline-offset-4">Matching Information</h2>
                                <div class="text-4xl">📖</div>
                        </div>
                        <!-- Educational Section -->
                                    <div class="bg-gray-800 rounded-lg p-4 md:p-8 shadow-sm border border-gray-600 mb-12">

        <div class="space-y-10">
                <div>

                <h3 class="text-lg font-semibold text-blue-400 mb-6">What to Expect</h3>
                                                            <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                                                            <p class="text-gray-700 dark:text-gray-300 text-lg mb-2">
                                                        Matching information question sets usually appear at the beginning of a section. Each paragraph in the text will be assigned an alphabetical letter and the questions will ask you to locate the paragraph containing specific information. The skill is to be able to skim the whole passage quickly for gist, to get a rough understanding of what each paragraph is about, before scanning for specific key-word terms to allow you to locate your answer.
                                                </p>
                                        </div>
                                                    </div>

                <div>
                        <h3 class="text-lg font-semibold text-teal-400 mb-6">Key Strategies</h3>
                        <div class="bg-teal-900/20 border border-teal-800 rounded-lg p-4">
                                <ul class="space-y-2 text-gray-300">
                                                                <li class="flex items-start">
                                                                        <span class="text-teal-400 mr-2">1.</span>
                                                                        <span><strong>Skim first:</strong> Read the passage quickly to understand the main idea of each paragraph</span>
                                                                </li>
                                                                <li class="flex items-start">
                                                                        <span class="text-teal-400 mr-2">2.</span>
                                                                        <span><strong>Identify keywords:</strong> Underline key words and phrases in the questions</span>
                                                                </li>
                                                                <li class="flex items-start">
                                                                        <span class="text-teal-400 mr-2">3.</span>
                                                                        <span><strong>Scan for synonyms:</strong> Look for synonyms and paraphrases, not just exact matches</span>
                                                                </li>
                                                                <li class="flex items-start">
                                                                        <span class="text-teal-400 mr-2">4.</span>
                                                                        <span><strong>Work systematically:</strong> Focus on one question at a time to avoid confusion</span>
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
                                                                        <span>Looking for exact word matches instead of synonyms and paraphrases</span>
                                                                </li>
                                                                <li class="flex items-start">
                                                                        <span class="text-red-600 dark:text-red-400 mr-2">⚠️</span>
                                                                        <span>Using the same paragraph letter more than once when not allowed</span>
                                                                </li>
                                                                <li class="flex items-start">
                                                                        <span class="text-red-600 dark:text-red-400 mr-2">⚠️</span>
                                                                        <span>Spending too much time on difficult questions and running out of time</span>
                                                                </li>
                                                        </ul>
                                                </div>
                                        </div>                                
                                </div>
                        </div>

                        <div class="max-w-4xl mx-auto text-lg">
                                <div>
                                                                                                    <p class="text-white mb-10">
                                                The instructions at the beginning of the question set will tell you to write the letter which corresponds to the answer paragraph, (<strong><i>e.g. A, B, C, ..G</i></strong>) on your answer sheet.
                                        </p>
                                </div>
                                <div class="flex justify-center mb-10">                                        
                                        <img
                                                src="/LESSONS/les02/02(i)/Matching_info-exQ.png"
                                                alt="IELTS Reading - Matching information"
                                                class="w-full max-w-lg rounded border border-gray-600 cursor-pointer"
                                                on:click={() => openLightbox('/LESSONS/les02/02(i)/Matching_info-exQ.png')}
                                        />
                                </div>
                             </div>

                                <div class="mx-auto text-lg">
                                        <div class="bg-gray-800 rounded-lg p-4 md:p-8 shadow-sm border border-gray-600 mb-12">
                                        <h3 class="text-xl font-bold text-white mb-8 underline">Question technique</h3>


                                                <p class="text-white mb-10">
                                                        <strong>1. Read the instructions and underline key-words in the question statements.</strong>
                                                </p>

                                                <div class="flex justify-center mb-10">
                                                        <img
                                                                src="/LESSONS/les02/02(i)/Matching_info-techQ.png"
                                                                alt="IELTS Reading - technique questions"
                                                                class="w-full max-w-2xl rounded border-2 border-black cursor-pointer"
                                                                on:click={() => openLightbox('/LESSONS/les02/02(i)/Matching_info-techQ.png')}
                                                        />
                                                </div>



                                                <p class="text-white mb-8 font-semibold">
                                                        <strong>2. Focusing on the questions <u>one at a time</u>, scan each paragraph for the key-words.</strong>
                                                </p>

                                                <div class="flex justify-center mb-10">
                                                        <div class="flex flex-col items-center">
                                                                <img
                                                                        src="/LESSONS/les02/02(i)/Matching_info-tech1.png"
                                                                        alt="IELTS Reading - scanning technique"
                                                                        class="w-full max-w-2xl rounded-t border-2 border-black cursor-pointer mb-1"
                                                                        on:click={() => openLightbox('/LESSONS/les02/02(i)/Matching_info-tech1.png')}
                                                                />
                                                                <img
                                                                        src="/LESSONS/les02/02(i)/Matching_info-tech2.png"
                                                                        alt="IELTS Reading - completion technique"
                                                                        class="w-full max-w-2xl rounded-b border-2 border-black cursor-pointer"
                                                                        on:click={() => openLightbox('/LESSONS/les02/02(i)/Matching_info-tech2.png')}
                                                                />
                                                        </div>
                                                </div>

                                                <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-10">
                                                        <ul class="text-gray-700 dark:text-gray-300">
                                                                <li>- If you can't find the key-words (or synonyms) first time, move on to the next question.</li>
                                                        </ul>
                                                </div>


                                        <div>
                                                <p class="text-white mb-8 font-semibold">
                                                        <strong>3. When you find an answer cross-out the paragraph letter and write the question number in the margin.</strong>
                                                </p>
                                        </div>
                                        <div>
                                                <p class="text-white mb-8 font-semibold">
                                                        <strong>4. When you reach the end of the question set return and scan the remaining paragraphs for answers you didn't find the first time.</strong>
                                                </p>
                                        </div>
                                        <div>
                                                <p class="text-white mb-8 font-semibold">
                                                        <strong>5. Write the corresponding paragraph letters directly on your answer sheet.</strong>
                                                </p>

                                                <div class="flex justify-center mb-10">
                                                        <img
                                                                src="/LESSONS/les02/02(i)/Matching_info-techans.png"
                                                                alt="IELTS Reading - answer sheet"
                                                                class="w-full max-w-xs rounded border border-gray-600 cursor-pointer"
                                                                on:click={() => openLightbox('/LESSONS/les02/02(i)/Matching_info-techans.png')}
                                                        />
                                                </div>
                                                </div>
                                                </div>

                                <div class="text-center">
                                        <p class="text-white text-xl font-bold mb-16">
                                                Now complete the READING - Matching information Skill Check exercise
                                        </p>

                                        <a
                                                href="/IETPP/lesson-02/lesson02-i/skill-check"
                                                class="inline-flex items-center gap-4 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded-lg text-lg transition-all transform hover:scale-105 border-2 border-teal-400"
                                                        data-sveltekit-reload
                                                >
                                                        <span class="text-2xl">✓</span>
                                                        <span>SKILL CHECK</span>
                                                        <span class="text-2xl">✓</span>
                                                </a>

                        </div>
                </section>

                               <!-- Footer Navigation -->
                <section class="text-center">                       

                        <div class="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
                                <div class="flex justify-between items-center">
                                        <a
                                                href="/IETPP#lesson-02"
                                                class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
                                                data-sveltekit-reload
                                        >
                                                ← Back to Contents
                                        </a>

                                        <a
                                                href="/IETPP/lesson-02/lesson02-ii"
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