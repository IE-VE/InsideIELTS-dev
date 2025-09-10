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
        <div class="max-w-5xl container mx-auto px-6 py-8">
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
                        <div class="text-center">
                                <div class="text-xs text-left text-teal-600 dark:text-teal-400 mb-4">
                                        IE2401_02.1
                                </div>
                                <h1 class="text-3xl font-bold text-white mb-2">
                                        READING - Matching Information
                                </h1>
                                <p class="text-white italic mb-10">(60 mins)</p>
                        </div>

                        <div class="text-right mt-6">
                                <a
                                        href="/IETPP#lesson-02"
                                        class="text-teal-600 dark:text-teal-400 hover:underline font-semibold"
                                        data-sveltekit-reload
                                >
                                        ← Back to Contents
                                </a>
                        </div>
                </div>
        </div>

        <!-- Page Content -->
        <div style="max-width: 1200px;" class="mx-auto px-6 py-8">
                <!-- Lesson Title Section -->
                <section class="bg-teal-600/20 rounded-lg p-8 shadow-sm border border-teal-600/50 mb-8">
                        <div class="flex items-center justify-center gap-4 mb-6">
                                <div class="text-4xl">📖</div>
                                <h2 class="text-3xl font-bold text-center text-white">Skills Practice</h2>
                                <div class="text-4xl">📖</div>
                        </div>

                        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
                                <h2 class="text-2xl text-center font-bold text-gray-800 dark:text-gray-200 mb-6">
                                        Matching Information Questions
                                </h2>

                                <div class="space-y-6">
                                        <div>
                                                <p class="text-gray-700 dark:text-gray-300 text-lg mb-4">
                                                        <strong>Matching information</strong> question sets usually appear at the beginning of a section. Each paragraph in the text will be assigned an alphabetical letter and the questions will ask you to locate the paragraph containing specific information. The skill is to be able to skim the whole passage quickly for gist, to get a rough understanding of what each paragraph is about, before scanning for specific key-word terms to allow you to confirm your answer.
                                                </p>
                                        </div>

                                        <div class="flex justify-center mb-6">
                                                <img
                                                        src="/LESSONS/les02/02(i)/Matching_info-exQ.png"
                                                        alt="IELTS Reading - Matching information"
                                                        class="w-full max-w-lg rounded border border-gray-600 cursor-pointer"
                                                        on:click={() => openLightbox('/LESSONS/les02/02(i)/Matching_info-exQ.png')}
                                                />
                                        </div>

                                        <div>
                                                <p class="text-gray-700 dark:text-gray-300 text-lg mb-4">
                                                        The instructions at the beginning of the question set will tell you to write the letter which corresponds to the answer paragraph, (<strong><i>e.g. A, B, C, ..G</i></strong>) on your answer sheet.
                                                </p>
                                        </div>
                                </div>
                        </div>

                        <div class="max-w-4xl mx-auto text-lg">
                                <h3 class="text-xl font-bold text-white mb-4 underline">Question technique</h3>

                                <div class="space-y-6">
                                        <div>
                                                <p class="text-white mb-4 font-semibold">
                                                        <strong>1. Read the instructions and underline key-words in the question statements.</strong>
                                                </p>

                                                <div class="flex justify-center mb-6">
                                                        <img
                                                                src="/LESSONS/les02/02(i)/Matching_info-techQ.png"
                                                                alt="IELTS Reading - diagram completion"
                                                                class="w-full max-w-2xl rounded border-2 border-black cursor-pointer"
                                                                on:click={() => openLightbox('/LESSONS/les02/02(i)/Matching_info-techQ.png')}
                                                        />
                                                </div>
                                        </div>

                                        <div>
                                                <p class="text-white mb-4 font-semibold">
                                                        <strong>2. Focusing on the questions <u>one at a time</u>, scan each paragraph for the key-words.</strong>
                                                </p>

                                                <div class="flex justify-center mb-6">
                                                        <div class="flex flex-col items-center">
                                                                <img
                                                                        src="/LESSONS/les02/02(i)/Matching_info-tech1.png"
                                                                        alt="IELTS Reading - diagram completion"
                                                                        class="w-full max-w-2xl rounded-t border-2 border-black cursor-pointer mb-1"
                                                                        on:click={() => openLightbox('/LESSONS/les02/02(i)/Matching_info-tech1.png')}
                                                                />
                                                                <img
                                                                        src="/LESSONS/les02/02(i)/Matching_info-tech2.png"
                                                                        alt="IELTS Reading - diagram completion"
                                                                        class="w-full max-w-2xl rounded-b border-2 border-black cursor-pointer"
                                                                        on:click={() => openLightbox('/LESSONS/les02/02(i)/Matching_info-tech2.png')}
                                                                />
                                                        </div>
                                                </div>

                                                <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
                                                        <ul class="text-gray-700 dark:text-gray-300">
                                                                <li>- If you can't find the key-words (or synonyms) first time, move on to the next question.</li>
                                                        </ul>
                                                </div>
                                        </div>

                                        <div>
                                                <p class="text-white mb-4 font-semibold">
                                                        <strong>3. When you find an answer cross-out the paragraph letter and write the question number in the margin.</strong>
                                                </p>
                                        </div>

                                        <div>
                                                <p class="text-white mb-4 font-semibold">
                                                        <strong>4. When you reach the end of the question set return and scan the remaining paragraphs for answers you didn't find the first time.</strong>
                                                </p>
                                        </div>

                                        <div>
                                                <p class="text-white mb-4 font-semibold">
                                                        <strong>5. Write the corresponding paragraph letters directly on your answer sheet.</strong>
                                                </p>

                                                <div class="flex justify-center mb-6">
                                                        <img
                                                                src="/LESSONS/les02/02(i)/Matching_info-techans.png"
                                                                alt="IELTS Reading - answers"
                                                                class="w-full max-w-lg rounded border border-gray-600 cursor-pointer"
                                                                on:click={() => openLightbox('/LESSONS/les02/02(i)/Matching_info-techans.png')}
                                                        />
                                                </div>
                                        </div>
                                </div>

                                <p class="text-white mb-6 font-bold">
                                        Watch this quick Reading Matching information demonstration vid before testing your skills.
                                </p>

                                <div class="flex justify-center mb-8">
                                        <video
                                                controls
                                                class="w-full max-w-2xl rounded border border-gray-600"
                                                src="/LESSONS/les01/02(i)/Reading_demoQ-matchinginfo.mp4"
                                        >
                                                Your browser does not support this video format.
                                        </video>
                                </div>

                                <div class="text-center">
                                        <p class="text-white text-xl font-bold mb-12">
                                                Now complete the READING - Matching information Skill Check exercise
                                        </p>

                                        <a
                                                href="/IETPP/lesson-02/lesson02-i/skill-check"
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
                <section class="text-center py-8">
                        <p class="text-white mb-12">End of Lesson 02(i)</p>
                        <a
                                href="/IETPP#lesson-02"
                                data-sveltekit-reload
                                class="inline-flex items-center text-teal-600 dark:text-teal-400 hover:underline font-semibold"
                        >
                                ← Back to Course Contents
                        </a>
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