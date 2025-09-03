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
        <div class="container mx-auto px-6 py-8">
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
                        <div class="text-center">
                                <div class="text-xs md:text-[8px] text-left font-bold text-teal-600 dark:text-teal-400 mb-2">
                                        LESSON CODE: IE2401_01.1
                                </div>
                                <h1 class="text-2xl font-bold text-white mb-2">
                                        Skills Practice
                                </h1>
                                <p class="text-white italic">(60 mins)</p>
                        </div>

                        <div class="text-center mt-6">
                                <a
                                        href="/IETPP"
                                        class="text-teal-600 dark:text-teal-400 hover:underline font-semibold"
                                >
                                        &lt; -- Back to Contents --&gt;
                                </a>
                        </div>
                </div>

                <!-- Lesson Title Section -->
                <section class="bg-blue-600/20 rounded-lg p-8 shadow-sm border border-blue-600/50 mb-8">
                        <div class="flex items-center justify-center gap-4 mb-6">
                                <div class="text-4xl">👂</div>
                                <h2 class="text-2xl font-bold text-center text-white">LISTENING - Multiple choice</h2>
                                <div class="text-4xl">👂</div>
                        </div>

                        <div class="max-w-4xl mx-auto">
                                <p class="text-white mb-6">
                                        There will usually be at least one set of multiple choice answer questions in each
                                        <strong>IELTS</strong> Listening Test. The question format is a question or statement
                                        followed by three to five options labeled with letters.
                                </p>

                                <div class="flex justify-center mb-6">
                                        <img
                                                src="/LESSONS/les01/01(i)/L_multiplechoice-torn.png"
                                                alt="IELTS Listening Multiple Choice"
                                                class="w-full max-w-md rounded border border-gray-600 cursor-pointer"
                                                on:click={() => openLightbox('/LESSONS/les01/01(i)/L_multiplechoice-torn.png')}
                                        />
                                </div>

                                <p class="text-white mb-6">
                                        The instructions at the beginning of the section will tell you to circle the appropriate
                                        letter from the choices given. (At the end of the test you will be given time to transfer
                                        your answers from the question paper to the answer sheet.)
                                </p>

                                <div class="flex justify-center mb-8">
                                        <a
                                                href="https://insideielts.oppyo.com/video/embed/o4tbupim2x"
                                                target="_blank"
                                                title="InsideIELTS virtual examiner listening test multiple choice"
                                                class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
                                        >
                                                Watch VE vid
                                        </a>
                                </div>

                                <h3 class="text-xl font-bold text-white mb-4 underline">Question technique</h3>

                                <p class="text-white mb-6">
                                        Use the time given at the beginning of each section before the audio begins (about
                                        <strong>40-50 seconds</strong> in total) to underline key topic words in the questions.
                                        Skim through the answer options and highlight, or just take note of, key words in the
                                        answers.
                                </p>

                                <div class="flex justify-center mb-6">
                                        <img
                                                src="/LESSONS/les01/01(i)/L_multiplechoice-example-technique.png"
                                                alt="IELTS Listening Multiple Choice Technique"
                                                class="w-full max-w-2xl rounded border-2 border-black cursor-pointer"
                                                on:click={() =>
                                                        openLightbox('/LESSONS/les01/01(i)/L_multiplechoice-example-technique.png')}
                                        />
                                </div>

                                <p class="text-white mb-8">
                                        Be aware of paraphrased answers and synonyms, and also for tricks such as when the speaker
                                        may say one thing and then change their mind, or mention other answer options before
                                        opting for the correct answer.
                                </p>

                                <p class="text-white mb-6 font-bold">
                                        Watch this quick Listening multiple choice demonstration vid before testing your skills.
                                </p>

                                <div class="flex justify-center mb-8">
                                        <video
                                                controls
                                                class="w-full max-w-2xl rounded border border-gray-600"
                                                src="/LESSONS/les01/01(i)/Listening_demoQ-multiplechoice.mp4"
                                        >
                                                Your browser does not support this video format.
                                        </video>
                                </div>

                                <div class="text-center">
                                        <p class="text-white text-xl font-bold mb-6">
                                                Test your understanding of LISTENING - Multiple choice
                                        </p>

                                        <a
                                                href="/IETPP/lesson-01/multiple-choice/skill-check"
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
                        <p class="text-white mb-4">End of Lesson 01 (i)</p>
                        <a
                                href="/IETPP"
                                class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded transition-colors"
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