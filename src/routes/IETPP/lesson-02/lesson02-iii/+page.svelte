<script lang="ts">
        import { onMount } from 'svelte';

        let lightboxOpen = $state(false);
        let lightboxImage = $state('');

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
        <title>IETPP - Lesson 02(iii): Reading Summary completion | InsideIELTS</title>
        <meta
                name="description"
                content="Master IELTS Reading Summary completion questions with proven techniques and practice exercises."
        />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
        <!-- Lesson Header -->
        <div class="max-w-5xl container mx-auto px-6 pt-8">
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg px-6 py-2 mb-8">
                        <div class="text-center">
                                <div class="text-xs text-left text-teal-600 dark:text-teal-400">
                                        IE2401_02.3
                                </div>
                                <h1 class="text-4xl font-bold text-white my-7">
                                        READING
                                </h1>
                        </div>

                        <div class="flex justify-between items-center">
                                <a
                                        href="/IETPP/lesson-02/lesson02-ii"
                                        class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
                                        data-sveltekit-reload
                                >
                                        ← Previous
                                </a>

                                <a
                                        href="/IETPP#lesson-02"
                                        class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
                                        data-sveltekit-reload
                                >
                                        Contents
                                </a>

                                <a
                                        href="/IETPP/lesson-03/lesson03"
                                        class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold ml-8"
                                        data-sveltekit-reload
                                >
                                        Next →
                                </a>
                        </div>
                </div>
        </div>

        <!-- Page Content -->
 <div style="max-width: 1200px;" class="mx-auto px-3 md:px-6 py-8">                                                                                               <!-- Lesson Title Section -->                                             <section class="bg-cyan-800/25 rounded-lg p-4 md:p-10 shadow-sm border border-emerald-600/50 mb-12">                                                              <div class="flex items-center justify-center gap-4 mb-10">                                                                                      <div class="text-4xl">📖</div>                                                 <h2 class="text-3xl font-bold text-center text-white">Summary Completion</h2>                                                                     <div class="text-4xl">📖</div>                                                </div>                                                                                                            <!-- Educational Section -->                                                                               <div class="bg-gray-800 rounded-lg p-4 md:p-8 shadow-sm border border-gray-600 mb-12">
                                                                                                                    <div class="space-y-10">                                                      <div>                                                                        <h3 class="text-lg font-semibold text-blue-400 mb-6">What to Expect</h3>                                                            <div class="bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">                                                                                                                                   <p class="text-gray-300 text-lg mb-2">
                                                        Summary completion question sets take the form of gap-fill exercises which test your overall comprehension of the text. In addition to skimming the passage for broad comprehension, you also need to read the summary question text in detail, and then scan the passage for paraphrased statements containing the same general idea.  </p>
                                        </div>
                                                                                                                            </div>
                                        <div>
                                                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-6">Key Strategies</h3>
                                                <div class="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4">
                                                        <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                                                                <li class="flex items-start">
                                                                        <span class="text-teal-600 dark:text-teal-400 mr-2">1.</span>
                                                                        <span><strong>Read the instructions:</strong> Note the word limit and any specific requirements</span>
                                                                </li>
                                                                <li class="flex items-start">
                                                                        <span class="text-teal-600 dark:text-teal-400 mr-2">2.</span>
                                                                        <span><strong>Read the summary in detail:</strong> Focus on each gap-fill phrase individually and highlight key topic words</span>
                                                                </li>
                                                                <li class="flex items-start">
                                                                        <span class="text-teal-600 dark:text-teal-400 mr-2">3.</span>
                                                                        <span><strong>Scan for matching information:</strong> Look for sentences containing the same general information or idea</span>
                                                                </li>
                                                                <li class="flex items-start">
                                                                        <span class="text-teal-600 dark:text-teal-400 mr-2">4.</span>
                                                                        <span><strong>Read in detail:</strong> Examine the exact sentence to locate the precise answer</span>
                                                                </li>
                                                                <li class="flex items-start">
                                                                        <span class="text-teal-600 dark:text-teal-400 mr-2">5.</span>
                                                                        <span><strong>Use exact words:</strong> Write the words directly from the passage on your answer sheet</span>
                                                                </li>
                                                        </ul>
                                                </div>
                                        </div>

                                        <div>
                                                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-6">Common Pitfalls</h3>
                                                <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                                                        <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                                                                <li class="flex items-start">
                                                                        <span class="text-red-600 dark:text-red-400 mr-2">⚠️</span>
                                                                        <span>Exceeding word limits - stick to the maximum number specified</span>
                                                                </li>
                                                                <li class="flex items-start">
                                                                        <span class="text-red-600 dark:text-red-400 mr-2">⚠️</span>
                                                                        <span>Changing word forms or grammar - use words exactly as they appear in the text</span>
                                                                </li>
                                                                <li class="flex items-start">
                                                                        <span class="text-red-600 dark:text-red-400 mr-2">⚠️</span>
                                                                        <span>Missing synonyms and paraphrasing - the summary may use different words with the same meaning</span>
                                                                </li>
                                                                <li class="flex items-start">
                                                                        <span class="text-red-600 dark:text-red-400 mr-2">⚠️</span>
                                                                        <span>Not reading around the answer - context is crucial for accuracy</span>
                                                                </li>
                                                        </ul>
                                                </div>
                                        </div>
                                </div>
                        </div>            
                 
                        <div class="max-w-4xl mx-auto text-lg">
                                <div>
                                        <p class="text-white mb-12">
                                                 The instructions will ask you to choose a specified number of words and/or numbers directly from the passage to fill the blanks in the given summary. </p>
                                                </div>
                                <div class="flex justify-center mb-10">
                                        <img
                                                src="/LESSONS/les02/02(iii)/Summary_comp-exQ.png"
                                                alt="IELTS Reading - Summary completion"
                                                class="w-full max-w-xl rounded border border-gray-600 cursor-pointer"
                                                onclick={() => openLightbox('/LESSONS/les02/02(iii)/Summary_comp-exQ.png')}
                                        />
                                </div>
                                           </div>
                                <div class="mx-auto text-lg">
                                        <div class="bg-gray-800 rounded-lg p-4 md:p-8 shadow-sm border border-gray-600 mb-12">
                                <h3 class="text-xl font-bold text-white mb-8 underline">Question technique</h3>

                                <p class="text-white mb-10">
                                        <strong>1. Read the instructions.</strong>
                                </p>

                                <p class="text-white mb-10">
                                        <strong>2. Read the summary in detail - for understanding.</strong><br>
                                        Focus on each gap-fill phrase individually, read for understanding and highlight the key topic words contained in the phrase.
                                </p>

                                <div class="flex justify-center mb-10">
                                        <img
                                                src="/LESSONS/les02/02(iii)/Summary_comp-techQ.png"
                                                alt="IELTS Reading - Summary completion technique"
                                                class="w-full max-w-2xl rounded border-2 border-black cursor-pointer"
                                                onclick={() => openLightbox('/LESSONS/les02/02(iii)/Summary_comp-techQ.png')}
                                        />
                                </div>

                                <p class="text-white mb-10">
                                        <strong>3. Scan the text for sentences containing the same general information/idea.</strong>
                                </p>

                                <p class="text-white mb-10">
                                        <strong>4. Read the sentence in detail to locate the answer.</strong>
                                </p>

                                <div class="flex justify-center mb-10">
                                        <img
                                                src="/LESSONS/les02/02(iii)/Summary_comp-techtext.png"
                                                alt="IELTS Reading - Summary completion text analysis"
                                                class="w-full max-w-2xl rounded border-2 border-black cursor-pointer"
                                                onclick={() => openLightbox('/LESSONS/les02/02(iii)/Summary_comp-techtext.png')}
                                        />
                                </div>

                                <p class="text-white mb-10">
                                        <strong>5. Write the word/s directly on your answer sheet.</strong>
                                </p>

                                <div class="flex justify-center mb-10">
                                        <img
                                                src="/LESSONS/les02/02(iii)/Summary_comp-techans.png"
                                                alt="IELTS Reading - Summary completion answers"
                                                class="w-full max-w-2xl rounded border-2 border-black cursor-pointer"
                                                onclick={() => openLightbox('/LESSONS/les02/02(iii)/Summary_comp-techans.png')}
                                        />
                                </div>
                                                </div>
                   
                                <div class="text-center">
                                        <p class="text-white text-xl font-bold mb-16">
                                                Now complete the READING - Summary completion Skill Check exercise
                                        </p>

                                        <a
                                                href="/IETPP/lesson-02/lesson02-iii/skill-check"
                                                class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors border-2 border-white"
                                        >
                                                <span class="text-2xl">✓</span>
                                                <span>SKILL CHECK</span>
                                                <span class="text-2xl">✓</span>
                                        </a>
                                </div>
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
                                                href="/IETPP/lesson-03/lesson03"
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
                onclick={closeLightbox}
        >
                <div class="relative max-w-4xl max-h-full">
                        <button
                                class="absolute top-4 right-4 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-all z-10"
                                onclick={closeLightbox}
                        >
                                ×
                        </button>
                        <img
                                src={lightboxImage}
                                alt="Enlarged view"
                                class="max-w-full max-h-full object-contain rounded"
                                onclick={(e) => e.stopPropagation()}
                        />
                </div>
        </div>
{/if}