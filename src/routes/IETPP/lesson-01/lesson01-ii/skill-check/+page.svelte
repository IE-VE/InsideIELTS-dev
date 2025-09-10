<script lang="ts">
        import { onMount } from 'svelte';

        let lightboxOpen = false;
        let lightboxImage = '';

        // Form data for short answer questions
        let q26 = '', q27 = '', q28 = '', q29 = '', q30 = '';
        let q31 = '', q32 = '', q33 = '', q34 = '', q35 = '';

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
                        // Correct answers for short answer questions (case-insensitive)
                        const correctAnswers = {
                                q26: ['reception', 'reception desk'],
                                q27: ['9', 'nine', '9 am', '9:00', 'nine am'],
                                q28: ['smith', 'mr smith', 'dr smith'],
                                q29: ['tuesday', 'tues'],
                                q30: ['conference room', 'meeting room', 'room 5'],
                                q31: ['parking', 'car park', 'parking lot'],
                                q32: ['15', 'fifteen', '15 minutes', 'fifteen minutes'],
                                q33: ['library', 'main library'],
                                q34: ['student id', 'id card', 'student card'],
                                q35: ['cafe', 'cafeteria', 'coffee shop']
                        };

                        const userAnswers = { q26, q27, q28, q29, q30, q31, q32, q33, q34, q35 };
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
                        results.totalQuestions = 10;
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
        <title>IETPP - Lesson 01(ii): Listening Short Answer Skill Check | InsideIELTS</title>
        <meta
                name="description"
                content="Complete IELTS Listening short answer skill check exercises with audio practice and instant feedback."
        />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
        <!-- Lesson Header -->
        <div class="max-w-5xl container mx-auto px-3 md:px-6 py-8">
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
                        <div class="text-center">
                                <div class="text-xs text-left text-teal-600 dark:text-teal-400 mb-4">
                                        SKILL CHECK: SC1(ii)
                                </div>
                                <h1 class="text-3xl font-bold text-white mb-2">
                                        LISTENING - Short Answer
                                </h1>
                        </div>

                        <div class="text-right mt-6">
                                <a
                                        href="/IETPP/lesson-01/lesson01-ii"
                                        class="text-teal-600 dark:text-teal-400 hover:underline font-semibold"
                                >
                                        ← Back to Lesson
                                </a>
                        </div>
                </div>
        </div>

        <!-- Page Content -->
        <div style="max-width: 1200px;" class="mx-auto px-3 md:px-6 py-8">
                <!-- Skill Check Title -->
                <section class="bg-teal-600/20 rounded-lg p-4 md:p-8 shadow-sm border border-teal-600/50 mb-8">
                        <div class="flex items-center justify-center gap-4 mb-8">
                                <div class="text-4xl text-green-500">✓</div>
                                <h2 class="text-3xl font-bold text-center text-white">SKILL CHECK</h2>
                                <div class="text-4xl text-green-500">✓</div>
                        </div>

                        <p class="text-white text-center mb-8 text-lg">
                                <strong>Complete these Listening skill-check exercises then upload your answers for checking and feedback.</strong>
                        </p>

                        <!-- Exercise 1 -->
                        <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8 border border-gray-300 dark:border-gray-600">
                                <div class="text-center mb-6">
                                        <div class="bg-blue-600 text-white px-4 py-2 rounded-lg text-center font-bold mb-6">
                                                                        SC1(ii)
                                        </div>
                                        <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                                                LISTENING - Short answer Questions
                                        </h3>
                                </div>

                                <div class="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6 mb-6">
                                        <h4 class="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">
                                                <u>Short answer ex.1</u>
                                        </h4>

                                        <!-- Audio Player for Exercise 1 -->
                                        <div class="flex justify-center mb-4">
                                                <audio
                                                        controls
                                                        class="w-full max-w-md bg-gray-600 rounded"
                                                        src="/LESSONS/les01/01(ii)/9.4.3cut.mp3"
                                                        title="Q26-30 audio"
                                                >
                                                        Your browser does not support the audio element.
                                                </audio>
                                        </div>
                                        <div class="text-center mb-6">
                                                <small class="text-gray-600 dark:text-gray-400"><strong>Q26 - 30 audio</strong></small>
                                        </div>

                                        <!-- Exercise 1 Image -->
                                        <div class="flex justify-center mb-6">
                                                <img
                                                        src="/LESSONS/les01/01(ii)/SC_L-shortanswer1.png"
                                                        alt="Listening Short Answer Exercise 1"
                                                        class="w-full max-w-2xl rounded border-2 border-black cursor-pointer"
                                                        on:click={() => openLightbox('/LESSONS/les01/01(ii)/SC_L-shortanswer1.png')}
                                                />
                                        </div>

                                        <!-- Answer Inputs -->
                                        <div class="text-center">
                                                <div class="flex flex-col gap-3 max-w-xs mx-auto mb-4">
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

                                <!-- Exercise 2 -->
                                <div class="bg-teal-100 dark:bg-teal-900/30 rounded-lg p-6 mb-6">
                                        <h4 class="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">
                                                <u>Short answer ex.2</u>
                                        </h4>

                                        <!-- Audio Player for Exercise 2 -->
                                        <div class="flex justify-center mb-4">
                                                <audio
                                                        controls
                                                        class="w-full max-w-md bg-gray-600 rounded"
                                                        src="/LESSONS/les01/01(ii)/3.4.4cut.mp3"
                                                        title="Q31-35 audio"
                                                >
                                                        Your browser does not support the audio element.
                                                </audio>
                                        </div>
                                        <div class="text-center mb-6">
                                                <small class="text-gray-600 dark:text-gray-400"><strong>Q31 - 35 audio</strong></small>
                                        </div>

                                        <!-- Exercise 2 Image -->
                                        <div class="flex justify-center mb-6">
                                                <img
                                                        src="/LESSONS/les01/01(ii)/SC_L-shortanswer2.png"
                                                        alt="Listening Short Answer Exercise 2"
                                                        class="w-full max-w-2xl rounded border-2 border-black cursor-pointer"
                                                        on:click={() => openLightbox('/LESSONS/les01/01(ii)/SC_L-shortanswer2.png')}
                                                />
                                        </div>

                                        <!-- Answer Inputs -->
                                        <div class="text-center">
                                                <div class="flex flex-col gap-3 max-w-xs mx-auto mb-4">
                                                        <div class="flex items-center gap-3">
                                                                <span class="text-white text-sm font-medium w-8">Q31</span>
                                                                <input 
                                                                        type="text" 
                                                                        bind:value={q31}
                                                                        class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm text-left"
                                                                />
                                                        </div>
                                                        <div class="flex items-center gap-3">
                                                                <span class="text-white text-sm font-medium w-8">Q32</span>
                                                                <input 
                                                                        type="text" 
                                                                        bind:value={q32}
                                                                        class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm text-left"
                                                                />
                                                        </div>
                                                        <div class="flex items-center gap-3">
                                                                <span class="text-white text-sm font-medium w-8">Q33</span>
                                                                <input 
                                                                        type="text" 
                                                                        bind:value={q33}
                                                                        class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm text-left"
                                                                />
                                                        </div>
                                                        <div class="flex items-center gap-3">
                                                                <span class="text-white text-sm font-medium w-8">Q34</span>
                                                                <input 
                                                                        type="text" 
                                                                        bind:value={q34}
                                                                        class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm text-left"
                                                                />
                                                        </div>
                                                        <div class="flex items-center gap-3">
                                                                <span class="text-white text-sm font-medium w-8">Q35</span>
                                                                <input 
                                                                        type="text" 
                                                                        bind:value={q35}
                                                                        class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm text-left border-b-2 border-black"
                                                                />
                                                        </div>
                                                </div>
                                        </div>
                                </div>

                        </div>
                </section>

                <!-- Check Answers Section -->
                <section class="bg-gray-800 rounded-lg p-4 md:p-8 shadow-sm border border-gray-700 mb-8">
                        <div class="text-center">
                                <h3 class="text-2xl font-bold text-white mb-8">Submit Your Answers</h3>
                                
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
                                                        <h5 class="text-lg font-bold text-white mb-3">Exercise 1 (Q26-Q30)</h5>
                                                        <div class="space-y-2 text-sm">
                                                                {#each ['q26', 'q27', 'q28', 'q29', 'q30'] as questionKey}
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
                                                        <h5 class="text-lg font-bold text-white mb-3">Exercise 2 (Q31-Q35)</h5>
                                                        <div class="space-y-2 text-sm">
                                                                {#each ['q31', 'q32', 'q33', 'q34', 'q35'] as questionKey}
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
                        </div>
                </section>

                <!-- End of Skill Check -->
                <section class="text-center py-8">
                        <p class="text-white mb-12">End of Skill Check 01 (ii)</p>
                                                                        <a
                                                                                href="/IETPP#lesson-01"
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