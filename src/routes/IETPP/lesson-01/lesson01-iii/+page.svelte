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
        <title>IETPP - Listening Sentence Completion | InsideIELTS</title>
        <meta
                name="description"
                content="Master IELTS Listening sentence completion questions with proven strategies and techniques."
        />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
        <!-- Lesson Header -->
        <div class="max-w-5xl container mx-auto px-6 pt-8">
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg px-6 py-2 mb-8">
                        <div class="text-center">
                                <div class="text-xs text-left text-teal-600 dark:text-teal-400">
                                        IE2401_01.3
                                </div>
                                <h1 class="text-4xl font-bold text-white my-7 tracking-wide">
                                        LISTENING
                                </h1>
                        </div>

                        <div class="flex justify-between items-center">
                                <a
                                        href="/IETPP/lesson-01/lesson01-ii"
                                        class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
                                        data-sveltekit-reload
                                >
                                        ← Prev
                                </a>

                                <a
                                        href="/IETPP#lesson-01"
                                        class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
                                        data-sveltekit-reload
                                >
                                        Contents
                                </a>

                                <a
                                        href="/IETPP/lesson-02"
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
                <section class="bg-cyan-800/25 rounded-lg p-4 md:p-10 shadow-sm border border-cyan-600 mb-12">
                        <div class="flex items-center justify-center gap-4 mb-10">
                                <div class="text-4xl">👂</div>
                                <h2 class="text-3xl font-bold text-center text-white tracking-wide underline decoration-2 underline-offset-4">Sentence Completion</h2>
                                <div class="text-4xl">👂</div>
                        </div>

                        <!-- Educational Section -->
                        <div class="bg-gray-800 rounded-lg p-4 md:p-8 shadow-sm border border-gray-700 mb-12">

                                                            <div class="space-y-10">

                                        <div>
                                                <h3 class="text-lg font-semibold text-blue-400 mb-6">What to Expect</h3>
                                                       <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                                                <p class="text-gray-300 text-lg mb-8">
                                                        Sentence completion questions require you to fill in missing information in sentences or notes. You'll hear specific details in the audio that complete the gaps. Instructions will specify the maximum number of words allowed (e.g., "ONE WORD ONLY" or "NO MORE THAN TWO WORDS").
                                                </p>
                                        </div>
                                                </div>

                                        <div>
                                                <h3 class="text-lg font-semibold text-teal-400 mb-6">Key Strategies</h3>
                                                <div class="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4">
                                                        <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                                                                <li class="flex items-start">
                                                                        <span class="text-teal-600 dark:text-teal-400 mr-2">1.</span>
                                                                        <span><strong>Read the context:</strong> Understand what type of information is missing from each gap</span>
                                                                </li>
                                                                <li class="flex items-start">
                                                                        <span class="text-teal-600 dark:text-teal-400 mr-2">2.</span>
                                                                        <span><strong>Predict answers:</strong> Think about what grammar and word type could fit each gap</span>
                                                                </li>
                                                                <li class="flex items-start">
                                                                        <span class="text-teal-600 dark:text-teal-400 mr-2">3.</span>
                                                                        <span><strong>Follow word limits:</strong> Stick exactly to the maximum word count specified</span>
                                                                </li>
                                                                <li class="flex items-start">
                                                                        <span class="text-teal-600 dark:text-teal-400 mr-2">4.</span>
                                                                        <span><strong>Listen for exact words:</strong> Write exactly what you hear - don't change grammar</span>
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
                                                                        <span>Using more words than allowed in the instructions</span>
                                                                </li>
                                                                <li class="flex items-start">
                                                                        <span class="text-red-600 dark:text-red-400 mr-2">⚠️</span>
                                                                        <span>Changing the word form you hear (e.g., changing singular to plural)</span>
                                                                </li>
                                                                <li class="flex items-start">
                                                                        <span class="text-red-600 dark:text-red-400 mr-2">⚠️</span>
                                                                        <span>Missing answers because you focus too much on one difficult gap</span>
                                                                </li>
                                                                <li class="flex items-start">
                                                                        <span class="text-red-600 dark:text-red-400 mr-2">⚠️</span>
                                                                        <span>Not considering synonyms or paraphrasing in the audio</span>
                                                                </li>
                                                        </ul>
                                                </div>
                                        </div>
                                </div>
                        </div>

                        <div class="max-w-4xl mx-auto text-lg">
                                <p class="text-white mb-10">
                                        Sentence completion type questions, and variations such as gap fill and missing word
                                        exercises are the most common question type in the <strong>IELTS</strong> Listening Test.
                                        The format will usually be either sentence type format or table/form format.
                                </p>

                                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                                        <div class="text-center">
                                                <h4 class="text-lg font-semibold text-white mb-6">Sentence type</h4>
                                                <img
                                                        src="/LESSONS/les01/01(iii)/sentence_completion-ex1.png"
                                                        alt="Listening sentence completion example 1"
                                                        class="w-full rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity"
                                                        on:click={() =>
                                                                openLightbox('/LESSONS/les01/01(iii)/sentence_completion-ex1.png')}
                                                />
                                        </div>

                                        <div class="text-center">
                                                <h4 class="text-lg font-semibold text-white mb-6">Table type</h4>
                                                <img
                                                        src="/LESSONS/les01/01(iii)/sentence_completion-ex2.png"
                                                        alt="Listening sentence completion example 2"
                                                        class="w-full rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity"
                                                        on:click={() =>
                                                                openLightbox('/LESSONS/les01/01(iii)/sentence_completion-ex2.png')}
                                                />
                                        </div>
                                </div>

                                <p class="text-white mb-16">
                                        Like the short answer questions, the instructions will specify the maximum number of
                                        words/numbers that you can write, for example, "<strong
                                                >no more than <em>2 words and/or a number</em></strong
                                        >", or, as in the examples above, "<strong>ONE WORD ONLY</strong>". Write your answers
                                        directly on the question paper, at the end of the test you will be given time to transfer
                                        your answers from the question paper to the Listening Test answer sheet.
                                </p>

                                <div class="flex justify-center mb-12">
                                        <a
                                                href="https://insideielts.oppyo.com/video/embed/pfytaogs1d"
                                                target="_blank"
                                                title="InsideIELTS virtual examiner listening test sentence completion"
                                                class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
                                        >
                                                Watch VE vid
                                        </a>
                                </div>
                            </div>
                                <div class="mx-auto text-lg">
                                        <div class="bg-gray-800 rounded-lg p-4 md:p-8 shadow-sm border border-gray-600 mb-12">

                                <h3 class="text-xl font-bold text-white mb-8 underline">Question technique</h3>

                                <p class="text-white mb-10">
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

                                <div class="flex justify-center mb-10">
                                        <img
                                                src="/LESSONS/les01/01(iii)/sentence_completion-tech.png"
                                                alt="IELTS Listening Sentence Completion Technique"
                                                class="w-full max-w-2xl rounded border-2 border-black cursor-pointer"
                                                on:click={() => openLightbox('/LESSONS/les01/01(iii)/sentence_completion-tech.png')}
                                        />
                                </div>

                                <p class="text-white mb-2">
                                        As always, be aware of paraphrased answers and synonyms, and also for tricks such as when
                                        the speaker may say one thing and then change their mind, or mention other answer options
                                        before opting for the correct answer.
                                </p>
                                                </div>
                                <p class="max-w-4xl mx-auto text-white mb-10 font-bold">
                                        Watch this quick Listening sentence completion demonstration vid before testing your
                                        skills.
                                </p>

                                <div class="flex justify-center mb-12">
                                        <video
                                                controls
                                                class="w-full max-w-2xl rounded border border-gray-600"
                                                src="/LESSONS/les01/01(iii)/Listening_demoQ-sentencecompletion.mp4"
                                        >
                                                Your browser does not support this video format.
                                        </video>
                                </div>

                                <div class="text-center">
                                        <p class="text-white text-xl font-bold mb-16">
                                                Test your understanding of LISTENING - Sentence completion
                                        </p>

                                        <a
                                                href="/IETPP/lesson-01/lesson01-iii/skill-check"
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

                        <div class="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
                                <div class="flex justify-between items-center">
                                        <a
                                                href="/IETPP#lesson-01"
                                                class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
                                                data-sveltekit-reload
                                        >
                                                ← Back to Contents
                                        </a>

                                        <a
                                                href="/IETPP/lesson-02"
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