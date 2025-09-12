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
        <title>IETPP - Lesson 02(ii): Reading True/False/Not given | InsideIELTS</title>
        <meta
                name="description"
                content="Master IELTS Reading True/False/Not given questions with proven techniques and practice exercises."
        />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
        <!-- Lesson Header -->
        <div class="max-w-5xl container mx-auto px-6 py-12">
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
                        <div class="text-center">
                                <div class="text-xs text-left text-teal-600 dark:text-teal-400 mb-4">
                                        IE2401_02.2
                                </div>
                                <h1 class="text-3xl font-bold text-white mb-2">
                                        READING - True/False/Not given
                                </h1>
                                <!-- <p class="text-white italic mb-10">(60 mins)</p> -->
                        </div>

                                <div class="text-right mt-6">
                                        <a
                                                href="/IETPP#lesson-02"
                                                class="text-teal-600 dark:text-teal-400 hover:underline font-semibold"
                                        >
                                                ← Back to Contents
                                        </a>
                        </div>
                </div>
        </div>

        <!-- Page Content -->
        <div style="max-width: 1200px;" class="mx-auto px-6 py-12">
                <!-- Lesson Title Section -->
                <section class="bg-teal-600/20 rounded-lg p-10 shadow-sm border border-blue-600/50 mb-12">
                        <div class="flex items-center justify-center gap-4 mb-10">
                                <div class="text-4xl">📖</div>
                                <h2 class="text-3xl font-bold text-center text-white">Skills Practice</h2>
                                <div class="text-4xl">📖</div>
                        </div>
                        
                        <div class="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-12">
                                <h2 class="text-2xl text-center font-bold text-gray-800 dark:text-gray-200 mb-10">
                                        True/False/Not given
                                </h2>

                                <div class="space-y-10">
                                        <div>
                                                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-6">What to Expect</h3>
                                                <p class="text-gray-700 dark:text-gray-300 text-lg mb-8">
                                                        True/False/Not given questions test your ability to identify whether information in statements agrees with, contradicts, or is simply not mentioned in the reading passage. You'll need to distinguish between facts that are explicitly stated, facts that contradict the passage, and information that is not provided at all. This question type appears in every IELTS Reading test and requires careful analysis to avoid common traps.
                                                </p>
                                        </div>

                                        <div>
                                                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-6">Key Strategies</h3>
                                                <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                                                        <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                                                                <li class="flex items-start">
                                                                        <span class="text-blue-600 dark:text-blue-400 mr-2">1.</span>
                                                                        <span><strong>Underline keywords:</strong> Identify key words and phrases in each statement before reading the passage</span>
                                                                </li>
                                                                <li class="flex items-start">
                                                                        <span class="text-blue-600 dark:text-blue-400 mr-2">2.</span>
                                                                        <span><strong>Scan for locations:</strong> Find where each topic is discussed in the passage using keywords</span>
                                                                </li>
                                                                <li class="flex items-start">
                                                                        <span class="text-blue-600 dark:text-blue-400 mr-2">3.</span>
                                                                        <span><strong>Read carefully:</strong> Focus on the exact meaning of both the statement and passage text</span>
                                                                </li>
                                                                <li class="flex items-start">
                                                                        <span class="text-blue-600 dark:text-blue-400 mr-2">4.</span>
                                                                        <span><strong>Watch for synonyms:</strong> Look for paraphrased ideas rather than exact word matches</span>
                                                                </li>
                                                                <li class="flex items-start">
                                                                        <span class="text-blue-600 dark:text-blue-400 mr-2">5.</span>
                                                                        <span><strong>Be precise:</strong> Choose "Not given" only when the information is completely absent</span>
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
                                                                        <span>Confusing "False" with "Not given" - False means the opposite is stated, Not given means no information</span>
                                                                </li>
                                                                <li class="flex items-start">
                                                                        <span class="text-red-600 dark:text-red-400 mr-2">⚠️</span>
                                                                        <span>Using outside knowledge instead of only what's written in the passage</span>
                                                                </li>
                                                                <li class="flex items-start">
                                                                        <span class="text-red-600 dark:text-red-400 mr-2">⚠️</span>
                                                                        <span>Making assumptions when partial information is given - stick to exact meanings</span>
                                                                </li>
                                                                <li class="flex items-start">
                                                                        <span class="text-red-600 dark:text-red-400 mr-2">⚠️</span>
                                                                        <span>Ignoring qualifying words like "some," "all," "never," or "always" that change meaning</span>
                                                                </li>
                                                        </ul>
                                                </div>
                                        </div>
                                </div>
                        </div>
                 
                        <div class="max-w-4xl mx-auto text-lg">
                                <div class="flex justify-center mb-10">
                                        <img
                                                src="/LESSONS/les02/02(ii)/TFNG_exampletorn.png"
                                                alt="IELTS Reading - Yes/No/Not given"
                                                class="w-full max-w-md rounded border border-gray-600 cursor-pointer"
                                                onclick={() => openLightbox('/LESSONS/les02/02(ii)/TFNG_exampletorn.png')}
                                        />
                                </div>

                                <p class="text-white mb-16">
                                        Each question consists of a statement about the passage which you need to qualify by writing either <strong><em>True/Yes</em></strong>,
                                        if the statement is correct; <strong><em>False/No</em></strong>, if the statement is wrong;
                                        or <strong><em>Not given</em></strong>, if there is no such information given in the passage.
                                </p>

                                <h3 class="text-xl font-bold text-white mb-8 underline">Question technique</h3>

                                <p class="text-white mb-10">
                                        <strong>1. Read the instructions and underline key-words in the question statements.</strong>
                                </p>

                                <div class="flex justify-center mb-10">
                                        <img
                                                src="/LESSONS/les02/02(ii)/TFNG_tech-Q.png"
                                                alt="IELTS Reading - diagram completion"
                                                class="w-full max-w-2xl rounded border-2 border-black cursor-pointer"
                                                onclick={() => openLightbox('/LESSONS/les02/02(ii)/TFNG_tech-Q.png')}
                                        />
                                </div>

                                <p class="text-white mb-10">
                                        <strong>2. Scan the passage for the key-words to locate the <span style="color: #2e63f3">paragraph</span>
                                        containing the information needed.</strong>
                                </p>

                                <div class="flex justify-center mb-10">
                                        <img
                                                src="/LESSONS/les02/02(ii)/TFNG_tech-text.png"
                                                alt="IELTS Reading - diagram completion"
                                                class="w-full max-w-2xl rounded border-2 border-black cursor-pointer"
                                                onclick={() => openLightbox('/LESSONS/les02/02(ii)/TFNG_tech-text.png')}
                                        />
                                </div>

                                <p class="text-white mb-8">
                                        <strong>3. Skim the paragraph and read the sentences before and after the key-word to find the location of the <span style="color: #00a36c">answer</span> within the paragraph itself.</strong>
                                </p>

                                <p class="text-white mb-8">
                                        <strong>4. Read that section of the paragraph in detail to understand how the information given relates to the question statement.</strong>
                                </p>

                                <div class="flex justify-center mb-10">
                                        <img
                                                src="/LESSONS/les02/02(ii)/TFNG_tech-ans.png"
                                                alt="IELTS Reading - answers"
                                                class="w-full max-w-2xl rounded border-2 border-black cursor-pointer"
                                                onclick={() => openLightbox('/LESSONS/les02/02(ii)/TFNG_tech-ans.png')}
                                        />
                                </div>

                                <p class="text-white mb-4">
                                        <strong>5. When you find the information directly relating to the question statement (or not*),
                                        write your answer on the answer sheet.</strong>
                                </p>

                                <p class="text-white mb-8">
                                        * Choose the NOT GIVEN option when you have found the paragraph with the correct
                                        key-word topic but the question statement is not mentioned at all.
                                </p>

                                <p class="text-white mb-8">
                                        As always, be on the lookout for synonyms and paraphrasing whenever scanning the text for key-words and answers.
                                </p>

                                <!-- <p class="text-white mb-6 font-bold">
                                        Watch this short YES/NO/NOT GIVEN demonstration vid before testing your skills.
                                </p>

                                <div class="flex justify-center mb-12">
                                        <a
                                                href="https://insideielts.oppyo.com/video/embed/o4tbupim2x"
                                                target="_blank"
                                                title="InsideIELTS virtual examiner reading test true false not given"
                                                class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
                                        >
                                                Watch VE vid
                                        </a>
                                </div> -->

                                <div class="text-center">
                                        <p class="text-white text-xl font-bold mb-16">
                                                Now complete the READING - True/False/Not given Skill Check exercise
                                        </p>

                                        <a
                                                href="/IETPP/lesson-02/lesson02-ii/skill-check"
                                                class="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors border-2 border-white"
                                        >
                                                <span class="text-2xl">✓</span>
                                                <span>SKILL CHECK</span>
                                                <span class="text-2xl">✓</span>
                                        </a>
                                </div>
                        </div>
                </section>

                <!-- End of Lesson -->
                <section class="text-center py-12">
                        <p class="text-white mb-16">End of Lesson 02 (ii)</p>
                        <a
                                href="/IETPP#lesson-02"
                                data-sveltekit-reload
                                class="inline-flex items-center text-teal-600 dark:text-teal-400 hover:underline font-semibold"
                        >
                                ← Back to Contents
                        </a>
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