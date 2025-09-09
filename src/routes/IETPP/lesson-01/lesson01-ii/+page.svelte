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
        <title>IETPP - Lesson 01(ii): Listening Short Answer | InsideIELTS</title>
        <meta
                name="description"
                content="Master IELTS Listening short answer questions with effective techniques and practice."
        />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
        <!-- Lesson Header -->
        <div class="max-w-5xl container mx-auto px-3 md:px-6 py-8">
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
                        <div class="text-center">
                                <div class="text-xs text-left text-teal-600 dark:text-teal-400 mb-4">
                                        LESSON CODE: IE2401_01.2
                                </div>
                                <h1 class="text-3xl font-bold text-white mb-2">
                                        Skills Practice
                                </h1>
                                <p class="text-white italic">(60 mins)</p>
                        </div>

                        <div class="text-right mt-6">
                                <a
                                        href="/IETPP"
                                        class="text-teal-600 dark:text-teal-400 hover:underline font-semibold"
                                >
                                        ← Back to Contents
                                </a>
                        </div>
                </div>
        </div>

        <!-- Page Content -->
        <div style="max-width: 1200px;" class="mx-auto px-3 md:px-6 py-8">
                <!-- Lesson Title Section -->
                <section class="bg-teal-600/20 rounded-lg p-4 md:p-8 shadow-sm border border-teal-600/50 mb-8">
                        <div class="flex items-center justify-center gap-4 mb-6">
                                <div class="text-4xl">👂</div>
                                <h2 class="text-2xl font-bold text-center text-white">LISTENING - Short answer Q</h2>
                                <div class="text-4xl">👂</div>
                        </div>

                        <div class="max-w-4xl mx-auto">
                                <p class="text-white mb-6">
                                        Short answer questions test your comprehension of the audio passage. They are in the form
                                        of direct '<strong>wh</strong>' type questions as in the examples below.
                                </p>

                                <div class="flex justify-center mb-6">
                                        <img
                                                src="/LESSONS/les01/01(ii)/short_answer-ex.png"
                                                alt="IELTS Listening Short Answer Example"
                                                class="w-full max-w-2xl rounded border-2 border-black cursor-pointer"
                                                on:click={() => openLightbox('/LESSONS/les01/01(ii)/short_answer-ex.png')}
                                        />
                                </div>

                                <p class="text-white mb-6">
                                        Follow the instructions for each specific short answer section carefully. The instructions
                                        will specify the maximum number of words/numbers that you can write, for example,
                                        "<strong>no more than <em>3 words and/or a number</em></strong>". Write your answers
                                        directly on the question paper, at the end of the test you will be given time to transfer
                                        your answers from the question paper to the Listening Test answer sheet.
                                </p>

                                <div class="flex justify-center mb-8">
                                        <a
                                                href="https://insideielts.oppyo.com/video/embed/lz5oaewav6"
                                                target="_blank"
                                                title="InsideIELTS virtual examiner listening test short answer"
                                                class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
                                        >
                                                Watch VE vid
                                        </a>
                                </div>

                                <h3 class="text-xl font-bold text-white mb-4 underline">Question technique</h3>

                                <p class="text-white mb-6">
                                        Use the time given at the beginning of each section before the audio begins (about
                                        <strong>40-50 seconds</strong> in total) to take note of the 'wh' question word, e.g.
                                        who, what, why, where, which or how, and to underline key topic words in the questions.
                                </p>

                                <div class="flex justify-center mb-6">
                                        <img
                                                src="/LESSONS/les01/01(ii)/short_answer-tech.png"
                                                alt="IELTS Listening Short Answer Technique"
                                                class="w-full max-w-2xl rounded border-2 border-black cursor-pointer"
                                                on:click={() => openLightbox('/LESSONS/les01/01(ii)/short_answer-tech.png')}
                                        />
                                </div>

                                <p class="text-white mb-8">
                                        Be aware of paraphrased answers and synonyms, and also for tricks such as when the speaker
                                        may say one thing and then change their mind or correct themself.
                                </p>

                                <p class="text-white mb-6 font-bold">
                                        Watch this quick Listening Short answer question demonstration vid before testing your
                                        skills.
                                </p>

                                <div class="flex justify-center mb-8">
                                        <video
                                                controls
                                                class="w-full max-w-2xl rounded border border-gray-600"
                                                src="/LESSONS/les01/01(ii)/Listening_demoQ-shortanswer.mp4"
                                        >
                                                Your browser does not support this video format.
                                        </video>
                                </div>

                                <div class="text-center">
                                        <p class="text-white text-xl font-bold mb-6">
                                                Test your understanding of LISTENING - Short answer Qs
                                        </p>

                                        <a
                                                href="/IETPP/lesson-01/short-answer/skill-check"
                                                class="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
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
                        <p class="text-white mb-12">End of Lesson 01 (ii)</p>
                        <a
                                href="/IETPP"
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