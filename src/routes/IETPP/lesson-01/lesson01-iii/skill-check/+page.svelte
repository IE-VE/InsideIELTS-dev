<script lang="ts">
        import { onMount } from 'svelte';

        let lightboxOpen = false;
        let lightboxImage = '';

        // Form data for sentence completion questions
        let q15 = '', q16 = '', q17 = '', q18 = '', q19 = '', q20 = '';
        let q25 = '', q26 = '', q27 = '', q28 = '', q29 = '', q30 = '';

        // Results for all exercises
        let showResults = false;
        let markingResults = {};

        // Loading state
        let loadingAnswers = false;

        function openLightbox(imageSrc: string) {
                lightboxImage = imageSrc;
                lightboxOpen = true;
        }

        function closeLightbox() {
                lightboxOpen = false;
                lightboxImage = '';
        }

        function checkAllAnswers() {
                loadingAnswers = true;
                showResults = false;

                setTimeout(() => {
                        // Correct answers for sentence completion questions (case-insensitive)
                        const correctAnswers = {
                                q15: ['business', 'business center', 'business centre'],
                                q16: ['reception', 'front desk', 'reception desk'],
                                q17: ['conference', 'conference room', 'meeting room'],
                                q18: ['parking', 'car park', 'parking lot'],
                                q19: ['wifi', 'wi-fi', 'internet', 'wireless'],
                                q20: ['restaurant', 'dining room', 'cafe'],
                                q25: ['monday', 'monday morning'],
                                q26: ['9am', '9:00', 'nine', '9 am', 'nine am'],
                                q27: ['smith', 'mr smith', 'dr smith'],
                                q28: ['library', 'main library', 'central library'],
                                q29: ['student', 'student id', 'student card'],
                                q30: ['level 3', 'third floor', 'floor 3']
                        };

                        const userAnswers = { q15, q16, q17, q18, q19, q20, q25, q26, q27, q28, q29, q30 };
                        const results = {};
                        let totalCorrect = 0;

                        Object.entries(userAnswers).forEach(([key, answer]) => {
                                const userAnswer = answer.toLowerCase().trim();
                                const correct = correctAnswers[key].some(correctAnswer => 
                                        userAnswer === correctAnswer.toLowerCase()
                                );

                                results[key] = {
                                        userAnswer: answer,
                                        isCorrect: correct,
                                        correctAnswers: correctAnswers[key]
                                };

                                if (correct) totalCorrect++;
                        });

                        results.totalCorrect = totalCorrect;
                        results.totalQuestions = 12;
                        markingResults = results;
                        showResults = true;
                        loadingAnswers = false;
                }, 3000);
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
        <title>IETPP - Listening Sentence Completion Skill Check | InsideIELTS</title>
        <meta
                name="description"
                content="Complete IELTS Listening sentence completion skill check exercises with audio practice and instant feedback."
        />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
        <!-- Lesson Header -->
        <div class="max-w-5xl container mx-auto px-6 pt-8">
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg px-6 py-2 mb-8">
                        <div class="text-center">
                                <div class="text-xs text-left text-teal-600 dark:text-teal-400">
                                        SC_1.3
                                </div>
                                <h1 class="text-4xl font-bold text-white my-7 tracking-wide">
                                        LISTENING
                                </h1>
                        </div>

                        <div class="flex justify-between items-center">
                                <a
                                        href="/IETPP/lesson-01/lesson01-iii"
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
                <!-- Skill Check Title -->
                <section class="bg-cyan-800/25 rounded-lg p-4 md:p-10 shadow-sm border border-cyan-600 mb-8">
                        <div class="flex items-center justify-center gap-4 mb-8">
                                <div class="text-4xl text-green-500">✓</div>
                                <h2 class="text-3xl font-bold text-center text-white tracking-wider underline decoration-2 underline-offset-4">SKILL CHECK 1.3</h2>
                                <div class="text-4xl text-green-500">✓</div>
                        </div>

                        <p class="text-white text-center mb-8 text-lg">
                                <strong>Complete these Listening skill-check exercises then upload your answers for checking and feedback.</strong>
                        </p>

                        <!-- Exercise 1 -->
                        <div class="bg-cyan-700/25 rounded-lg p-4 md:p-8 border border-cyan-600/50 mb-8">

                                        <div class="bg-blue-600 text-white text-xl px-4 py-2 rounded-lg text-center font-bold mb-8 border-1 border-white tracking-wide">
                                                                        Sentence Completion
                                        </div>                                     

                                <div class="bg-gray-800 rounded-lg p-4 md:p-6 shadow-sm border border-gray-700 mb-8">
                                        <h4 class="text-xl font-bold text-gray-200 mb-4">
                                                Exercise 1
                                        </h4>
                                        <!-- Audio Player for Exercise 1 -->
                                        <div class="flex justify-center mb-4">
                                                <audio
                                                        controls
                                                        class="w-full max-w-md bg-gray-600 rounded-lg p-4"
                                                        src="/LESSONS/les01/01(iii)/15.1.2cut.mp3"
                                                        title="Q15-20 audio"
                                                >
                                                        Your browser does not support the audio element.
                                                </audio>
                                        </div>
                                        <div class="text-center mb-6">
                                                <small class="text-gray-600 dark:text-gray-400"><strong>Q15 - 20 audio</strong></small>
                                        </div>

                                        <!-- Exercise 1 Image -->
                                        <div class="flex justify-center mb-6">
                                                <img
                                                        src="/LESSONS/les01/01(iii)/SC_L-sentencecompletion1.png"
                                                        alt="Listening Sentence Completion Exercise 1"
                                                        class="w-full max-w-2xl rounded border-2 border-black cursor-pointer"
                                                        on:click={() => openLightbox('/LESSONS/les01/01(iii)/SC_L-sentencecompletion1.png')}
                                                />
                                        </div>

                                        <!-- Answer Inputs -->
                                        <div class="text-center">
                                                <div class="flex flex-col gap-3 max-w-xs mx-auto mb-4">
                                                        <div class="flex items-center gap-3">
                                                                <span class="text-white text-sm font-medium w-8">Q15</span>
                                                                <input 
                                                                        type="text" 
                                                                        bind:value={q15}
                                                                        class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm text-left"
                                                                />
                                                        </div>
                                                        <div class="flex items-center gap-3">
                                                                <span class="text-white text-sm font-medium w-8">Q16</span>
                                                                <input 
                                                                        type="text" 
                                                                        bind:value={q16}
                                                                        class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm text-left"
                                                                />
                                                        </div>
                                                        <div class="flex items-center gap-3">
                                                                <span class="text-white text-sm font-medium w-8">Q17</span>
                                                                <input 
                                                                        type="text" 
                                                                        bind:value={q17}
                                                                        class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm text-left"
                                                                />
                                                        </div>
                                                        <div class="flex items-center gap-3">
                                                                <span class="text-white text-sm font-medium w-8">Q18</span>
                                                                <input 
                                                                        type="text" 
                                                                        bind:value={q18}
                                                                        class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm text-left"
                                                                />
                                                        </div>
                                                        <div class="flex items-center gap-3">
                                                                <span class="text-white text-sm font-medium w-8">Q19</span>
                                                                <input 
                                                                        type="text" 
                                                                        bind:value={q19}
                                                                        class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm text-left"
                                                                />
                                                        </div>
                                                        <div class="flex items-center gap-3">
                                                                <span class="text-white text-sm font-medium w-8">Q20</span>
                                                                <input 
                                                                        type="text" 
                                                                        bind:value={q20}
                                                                        class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm text-left border-b-2 border-black"
                                                                />
                                                        </div>
                                                </div>
                                        </div>
                                </div>

                                <!-- Exercise 2 -->
                                <div class="bg-gray-800 rounded-lg p-4 md:p-6 shadow-sm border border-gray-700">
                                        <h4 class="text-xl font-bold text-gray-200 mb-4">
                                                Exercise 2
                                        </h4>

                                        <!-- Audio Player for Exercise 2 -->
                                        <div class="flex justify-center mb-4">
                                                <audio
                                                        controls
                                                        class="w-full max-w-md bg-gray-600 rounded-lg p-4"
                                                        src="/LESSONS/les01/01(iii)/9.2.3cut.mp3"
                                                        title="Q25-30 audio"
                                                >
                                                        Your browser does not support the audio element.
                                                </audio>
                                        </div>
                                        <div class="text-center mb-6">
                                                <small class="text-gray-600 dark:text-gray-400"><strong>Q25 - 30 audio</strong></small>
                                        </div>

                                        <!-- Exercise 2 Image -->
                                        <div class="flex justify-center mb-6">
                                                <img
                                                        src="/LESSONS/les01/01(iii)/SC_L-sentencecompletion2.png"
                                                        alt="Listening Sentence Completion Exercise 2"
                                                        class="w-full max-w-2xl rounded border-2 border-black cursor-pointer"
                                                        on:click={() => openLightbox('/LESSONS/les01/01(iii)/SC_L-sentencecompletion2.png')}
                                                />
                                        </div>

                                        <!-- Answer Inputs -->
                                        <div class="text-center">
                                                <div class="flex flex-col gap-3 max-w-xs mx-auto mb-4">
                                                        <div class="flex items-center gap-3">
                                                                <span class="text-white text-sm font-medium w-8">Q25</span>
                                                                <input 
                                                                        type="text" 
                                                                        bind:value={q25}
                                                                        class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm text-left"
                                                                />
                                                        </div>
                                                        <div class="flex items-center gap-3">
                                                                <span class="text-white text-sm font-medium w-8">Q26</span>
                                                                <input 
                                                                        type="text" 
                                                                        bind:value={q26}
                                                                        class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm text-left"
                                                                />
                                                        </div>
                                                        <div class="flex items-center gap-3">
                                                                <span class="text-white text-sm font-medium w-8">Q27</span>
                                                                <input 
                                                                        type="text" 
                                                                        bind:value={q27}
                                                                        class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm text-left"
                                                                />
                                                        </div>
                                                        <div class="flex items-center gap-3">
                                                                <span class="text-white text-sm font-medium w-8">Q28</span>
                                                                <input 
                                                                        type="text" 
                                                                        bind:value={q28}
                                                                        class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm text-left"
                                                                />
                                                        </div>
                                                        <div class="flex items-center gap-3">
                                                                <span class="text-white text-sm font-medium w-8">Q29</span>
                                                                <input 
                                                                        type="text" 
                                                                        bind:value={q29}
                                                                        class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm text-left"
                                                                />
                                                        </div>
                                                        <div class="flex items-center gap-3">
                                                                <span class="text-white text-sm font-medium w-8">Q30</span>
                                                                <input 
                                                                        type="text" 
                                                                        bind:value={q30}
                                                                        class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm text-left border-b-2 border-black"
                                                                />
                                                        </div>
                                                </div>
                                        </div>
                                </div>

                        </div>
                </section>

                <!-- Check Answers Section -->
                <section class="bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-700 mb-8">
                        <div class="text-center">

                                <!-- Check Button -->
                                <div class="text-center mb-6">
                                        <button
                                                type="button"
                                                on:click={checkAllAnswers}
                                                disabled={loadingAnswers}
                                                class="bg-green-600 hover:bg-green-700 disabled:bg-green-400 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors flex items-center justify-center mx-auto border-white border-2"
                                        >
                                                {#if loadingAnswers}
                                                        <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                        Processing...
                                                {:else}
                                                        Check My Answers
                                                {/if}
                                        </button>
                                </div>

                                <!-- Results Display -->
                                {#if showResults}
                                        <div class="bg-gray-700 rounded-lg p-4 md:p-6 mt-6 border border-gray-600">
                                                <h4 class="text-2xl font-semibold text-white mb-4 text-center">Your Results</h4>

                                                <!-- Score Summary -->
                                                <div class="text-center mb-6">
                                                        <div class="text-3xl font-bold text-white mb-2">
                                                                {markingResults.totalCorrect}/{markingResults.totalQuestions}
                                                        </div>
                                                        <div class="text-lg text-gray-300">
                                                                {Math.round((markingResults.totalCorrect / markingResults.totalQuestions) * 100)}% Correct
                                                        </div>
                                                </div>

                                                <!-- Exercise 1 Results -->
                                                <div class="mb-6">
                                                        <h5 class="text-lg font-bold text-white mb-3">Exercise 1 (Q15-Q20)</h5>
                                                        <div class="space-y-2 text-sm">
                                                                {#each ['q15', 'q16', 'q17', 'q18', 'q19', 'q20'] as questionKey}
                                                                        <div class="flex items-center justify-between p-3 rounded border {markingResults[questionKey]?.isCorrect ? 'bg-green-900/20 border-green-800' : 'bg-red-900/20 border-red-800'}">
                                                                                <div class="flex-1">
                                                                                        <div class="font-medium text-white">
                                                                                                {questionKey.toUpperCase()}: "{markingResults[questionKey]?.userAnswer || '(blank)'}"
                                                                                        </div>
                                                                                        <div class="text-xs text-gray-400 mt-1">
                                                                                                Correct: {markingResults[questionKey]?.correctAnswers?.join(' / ')}
                                                                                        </div>
                                                                                </div>
                                                                                <div class="ml-3">
                                                                                        {#if markingResults[questionKey]?.isCorrect}
                                                                                                <span class="text-green-400 text-xl">✓</span>
                                                                                        {:else}
                                                                                                <span class="text-red-400 text-xl">✗</span>
                                                                                        {/if}
                                                                                </div>
                                                                        </div>
                                                                {/each}
                                                        </div>
                                                </div>

                                                <!-- Exercise 2 Results -->
                                                <div>
                                                        <h5 class="text-lg font-bold text-white mb-3">Exercise 2 (Q25-Q30)</h5>
                                                        <div class="space-y-2 text-sm">
                                                                {#each ['q25', 'q26', 'q27', 'q28', 'q29', 'q30'] as questionKey}
                                                                        <div class="flex items-center justify-between p-3 rounded border {markingResults[questionKey]?.isCorrect ? 'bg-green-900/20 border-green-800' : 'bg-red-900/20 border-red-800'}">
                                                                                <div class="flex-1">
                                                                                        <div class="font-medium text-white">
                                                                                                {questionKey.toUpperCase()}: "{markingResults[questionKey]?.userAnswer || '(blank)'}"
                                                                                        </div>
                                                                                        <div class="text-xs text-gray-400 mt-1">
                                                                                                Correct: {markingResults[questionKey]?.correctAnswers?.join(' / ')}
                                                                                        </div>
                                                                                </div>
                                                                                <div class="ml-3">
                                                                                        {#if markingResults[questionKey]?.isCorrect}
                                                                                                <span class="text-green-400 text-xl">✓</span>
                                                                                        {:else}
                                                                                                <span class="text-red-400 text-xl">✗</span>
                                                                                        {/if}
                                                                                </div>
                                                                        </div>
                                                                {/each}
                                                        </div>
                                                </div>
                                        </div>
                                {/if}

                                  <h3 class="text-lg font-bold text-white mt-8">End of Lesson Listening Section 01</h3>
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
                                                                class="inline-flex items-center gap-4 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded-lg text-lg transition-all transform hover:scale-105 border-2 border-teal-400"
                                                                data-sveltekit-reload
                                                        >
                                                                <span class="text-2xl">→</span>
                                                                <span>NEXT LESSON</span>
                                                        </a>
                                                </div>
                                        </div>
                                </section>
        </div>
</div>

<!-- Lightbox Modal -->
{#if lightboxOpen}
        <div
                class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2 md:p-4"
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