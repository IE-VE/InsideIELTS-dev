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
        <title>IETPP - Lesson 01(iii): Listening Sentence Completion | InsideIELTS</title>
        <meta
                name="description"
                content="Master IELTS Listening sentence completion questions with proven strategies and techniques."
        />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
        <!-- Lesson Header -->
        <div class="container mx-auto px-6 py-8">
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
                        <div class="text-center">
                                <div class="text-xs text-left font-bold text-teal-600 dark:text-teal-400 mb-2">
                                        LESSON CODE: IE2401_01.3
                                </div>
                                <h1 class="text-3xl font-bold text-white mb-2">
                                        01 (iii) - Skills Practice
                                </h1>
                                <p class="text-white italic">(40 mins)</p>
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
                                <h2 class="text-2xl font-bold text-center text-white">LISTENING - Sentence completion</h2>
                                <div class="text-4xl">👂</div>
                        </div>

                        <div class="max-w-4xl mx-auto">
                                <p class="text-white mb-6">
                                        Sentence completion type questions, and variations such as gap fill and missing word
                                        exercises are the most common question type in the <strong>IELTS</strong> Listening Test.
                                        The format will usually be either sentence type format or table/form format.
                                </p>

                                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                                        <div class="text-center">
                                                <h4 class="text-lg font-semibold text-white mb-3">Sentence type</h4>
                                                <img
                                                        src="/LESSONS/les01/01(iii)/sentence_completion-ex1.png"
                                                        alt="Listening sentence completion example 1"
                                                        class="w-full rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity"
                                                        on:click={() =>
                                                                openLightbox('/LESSONS/les01/01(iii)/sentence_completion-ex1.png')}
                                                />
                                        </div>

                                        <div class="text-center">
                                                <h4 class="text-lg font-semibold text-white mb-3">Table type</h4>
                                                <img
                                                        src="/LESSONS/les01/01(iii)/sentence_completion-ex2.png"
                                                        alt="Listening sentence completion example 2"
                                                        class="w-full rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity"
                                                        on:click={() =>
                                                                openLightbox('/LESSONS/les01/01(iii)/sentence_completion-ex2.png')}
                                                />
                                        </div>
                                </div>

                                <p class="text-white mb-6">
                                        Like the short answer questions, the instructions will specify the maximum number of
                                        words/numbers that you can write, for example, "<strong
                                                >no more than <em>2 words and/or a number</em></strong
                                        >", or, as in the examples above, "<strong>ONE WORD ONLY</strong>". Write your answers
                                        directly on the question paper, at the end of the test you will be given time to transfer
                                        your answers from the question paper to the Listening Test answer sheet.
                                </p>

                                <div class="flex justify-center mb-8">
                                        <a
                                                href="https://insideielts.oppyo.com/video/embed/pfytaogs1d"
                                                target="_blank"
                                                title="InsideIELTS virtual examiner listening test sentence completion"
                                                class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
                                        >
                                                Watch VE vid
                                        </a>
                                </div>

                                <h3 class="text-xl font-bold text-white mb-4 underline">Question technique</h3>

                                <p class="text-white mb-6">
                                        The example shown below combines sentence/bullet point gap-fill questions with a
                                        missing-word table completion type question set.<br /><br />
                                        In long question sets like this one the audio will be split into sections, so you don't need
                                        to read all of the questions in one go. The instructions given in the audio before each question
                                        set will guide you to the questions on which to focus, in this case the audio is split into
                                        two sections with time for you to look at questions <strong>21 - 23</strong>, then questions
                                        <strong>24 - 30</strong>.<br /><br />
                                        Follow the audio instructions and use the time given to scan the questions; underline key words,
                                        visualise the scenario in your mind and try to predict the <u>type of information</u> that
                                        you might hear.
                                </p>

                                <div class="flex justify-center mb-6">
                                        <img
                                                src="/LESSONS/les01/01(iii)/sentence_completion-tech.png"
                                                alt="IELTS Listening Sentence Completion Technique"
                                                class="w-full max-w-2xl rounded border-2 border-black cursor-pointer"
                                                on:click={() => openLightbox('/LESSONS/les01/01(iii)/sentence_completion-tech.png')}
                                        />
                                </div>

                                <p class="text-white mb-8">
                                        As always, be aware of paraphrased answers and synonyms, and also for tricks such as when
                                        the speaker may say one thing and then change their mind, or mention other answer options
                                        before opting for the correct answer.
                                </p>

                                <p class="text-white mb-6 font-bold">
                                        Watch this quick Listening sentence completion demonstration vid before testing your
                                        skills.
                                </p>

                                <div class="flex justify-center mb-8">
                                        <video
                                                controls
                                                class="w-full max-w-2xl rounded border border-gray-600"
                                                src="/LESSONS/les01/01(iii)/Listening_demoQ-sentencecompletion.mp4"
                                        >
                                                Your browser does not support this video format.
                                        </video>
                                </div>

                                <div class="text-center">
                                        <p class="text-white text-xl font-bold mb-6">
                                                Test your understanding of LISTENING - Sentence completion
                                        </p>

                                        <a
                                                href="/IETPP/lesson-01/sentence-completion/skill-check"
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
                        <p class="text-white mb-4">End of Lesson 01 (iii)</p>
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