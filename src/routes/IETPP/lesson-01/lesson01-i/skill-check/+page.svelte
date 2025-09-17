<script lang="ts">
        import { onMount } from 'svelte';

        let lightboxOpen = false;
        let lightboxImage = '';

        // Form data
        let q11 = '', q12 = '', q13 = '', q14 = '', q15 = '';
        let q21 = '', q22 = '', q23 = '', q24 = '', q25 = '';

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
                        const correctAnswers = {
                                q11: ['C', 'c'],
                                q12: ['A', 'a'],
                                q13: ['B', 'b'],
                                q14: ['C', 'c'],
                                q15: ['A', 'a'],
                                q21: ['B', 'b'],
                                q22: ['C', 'c'],
                                q23: ['A', 'a'],
                                q24: ['B', 'b'],
                                q25: ['C', 'c']
                        };

                        const userAnswers = { q11, q12, q13, q14, q15, q21, q22, q23, q24, q25 };
                        const results = {};
                        let totalCorrect = 0;

                        Object.entries(userAnswers).forEach(([key, answer]) => {
                                const userAnswer = answer.trim();
                                const correct = correctAnswers[key].some(correctAnswer => 
                                        userAnswer === correctAnswer
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
        <title>IETPP - Lesson 01(i): Listening Multiple Choice Skill Check | InsideIELTS</title>
        <meta
                name="description"
                content="Complete IELTS Listening multiple choice skill check exercises with audio practice and instant feedback."
        />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
        <!-- Lesson Header -->
        <div class="max-w-5xl container mx-auto px-6 pt-8">
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg px-6 py-2 mb-8">
                        <div class="text-center">
                                <div class="text-xs text-left text-teal-600 dark:text-teal-400">
                                        SC_1.1
                                </div>
                                <h1 class="text-4xl font-bold text-white my-7">
                                        LISTENING
                                </h1>
                        </div>

                        <div class="flex justify-between items-center">
                                <a
                                        href="/IETPP/lesson-01/lesson01-i"
                                        class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
                                        data-sveltekit-reload
                                >
                                        ← Previous
                                </a>

                                <a
                                        href="/IETPP#lesson-01"
                                        class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
                                        data-sveltekit-reload
                                >
                                        Contents
                                </a>

                                <a
                                        href="/IETPP/lesson-01/lesson01-ii"
                                        class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold ml-8"
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
                <section class="bg-cyan-600/25 rounded-lg p-4 md:p-10 shadow-sm border border-blue-600 mb-8">
                        <div class="flex items-center justify-center gap-4 mb-8">
                                <div class="text-4xl text-green-500">✓</div>
                                <h2 class="text-3xl font-bold text-center text-white underline">SKILL CHECK 1.1</h2>
                                <div class="text-4xl text-green-500">✓</div>
                        </div>
                        
                        <p class="text-center text-white text-lg mb-8">
                                <strong>Complete these Listening skill-check exercises then upload your answers for checking and feedback.</strong>
                        </p>

                        <!-- Exercise 1 -->
                        <div class="bg-cyan-500/25 rounded-lg p-4 md:p-8 border border-teal-600/50 mb-8">
                                <div class="bg-blue-600 text-white text-xl px-4 py-2 rounded-lg text-center font-bold mb-8 border-1 border-white">
                                        Multiple Choice
                                </div>                                
        
                                <div class="bg-gray-800 rounded-lg p-4 md:p-6 shadow-sm border border-gray-700 mb-8">
                                        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6">Exercise 1</h4>

                                        <!-- Audio Player -->
                                        <div class="flex justify-center mb-4">
                                                <audio
                                                        controls
                                                        class="w-full max-w-md bg-gray-600 rounded-lg p-4"
                                                        src="/LESSONS/les01/01(i)/SC_L-multiplechoice1.mp3"
                                                >
                                                        Your browser does not support the audio element.
                                                </audio>
                                        </div>
                                        <div class="text-center mb-6">
                                                <small class="text-gray-600 dark:text-gray-400 font-bold">Q11 - 15 audio</small>
                                        </div>

                                        <!-- Question Image -->
                                        <div class="text-center mb-8">
                                                <img
                                                        src="/LESSONS/les01/01(i)/SC_L-multiplechoice1.png"
                                                        alt="Listening multiple choice questions 11-15"
                                                        class="mx-auto rounded border border-gray-600 cursor-pointer max-w-full"
                                                        on:click={() => openLightbox('/LESSONS/les01/01(i)/SC_L-multiplechoice1.png')}
                                                />
                                                <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">Click to enlarge</p>
                                        </div>

                                        <!-- Answer Inputs -->
                                        <div class="text-center">
                                                <div class="flex flex-col gap-3 max-w-xs mx-auto mb-4">
                                                        <div class="flex items-center gap-3">
                                                                <span class="text-white text-sm font-medium w-8">Q11</span>
                                                                <select 
                                                                        bind:value={q11}
                                                                        class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm"
                                                                >
                                                                        <option value="">Select...</option>
                                                                        <option value="A">A</option>
                                                                        <option value="B">B</option>
                                                                        <option value="C">C</option>
                                                                </select>
                                                        </div>
                                                        <div class="flex items-center gap-3">
                                                                <span class="text-white text-sm font-medium w-8">Q12</span>
                                                                <select 
                                                                        bind:value={q12}
                                                                        class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm"
                                                                >
                                                                        <option value="">Select...</option>
                                                                        <option value="A">A</option>
                                                                        <option value="B">B</option>
                                                                        <option value="C">C</option>
                                                                </select>
                                                        </div>
                                                        <div class="flex items-center gap-3">
                                                                <span class="text-white text-sm font-medium w-8">Q13</span>
                                                                <select 
                                                                        bind:value={q13}
                                                                        class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm"
                                                                >
                                                                        <option value="">Select...</option>
                                                                        <option value="A">A</option>
                                                                        <option value="B">B</option>
                                                                        <option value="C">C</option>
                                                                </select>
                                                        </div>
                                                        <div class="flex items-center gap-3">
                                                                <span class="text-white text-sm font-medium w-8">Q14</span>
                                                                <select 
                                                                        bind:value={q14}
                                                                        class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm"
                                                                >
                                                                        <option value="">Select...</option>
                                                                        <option value="A">A</option>
                                                                        <option value="B">B</option>
                                                                        <option value="C">C</option>
                                                                </select>
                                                        </div>
                                                        <div class="flex items-center gap-3">
                                                                <span class="text-white text-sm font-medium w-8">Q15</span>
                                                                <select 
                                                                        bind:value={q15}
                                                                        class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm"
                                                                >
                                                                        <option value="">Select...</option>
                                                                        <option value="A">A</option>
                                                                        <option value="B">B</option>
                                                                        <option value="C">C</option>
                                                                </select>
                                                        </div>
                                                </div>
                                        </div>
                                </div>

                                <!-- Exercise 2 -->
                                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6 shadow-sm border border-teal-700/50">
                                        <h4 class="text-xl font-bold text-white mb-6">Exercise 2</h4>

                                        <!-- Audio Player -->
                                        <div class="flex justify-center mb-4">
                                                <audio
                                                        controls
                                                        class="w-full max-w-md bg-gray-600 rounded-lg p-4"
                                                        src="/LESSONS/les01/01(i)/SC_L-multiplechoice2.mp3"
                                                >
                                                        Your browser does not support the audio element.
                                                </audio>
                                        </div>
                                        <div class="text-center mb-6">
                                                <small class="text-gray-300 font-bold">Q21 - 25 audio</small>
                                        </div>

                                        <!-- Question Image -->
                                        <div class="text-center mb-8">
                                                <img
                                                        src="/LESSONS/les01/01(i)/SC_L-multiplechoice2.png"
                                                        alt="Listening multiple choice questions 21-25"
                                                        class="mx-auto rounded border border-gray-600 cursor-pointer max-w-full"
                                                        on:click={() => openLightbox('/LESSONS/les01/01(i)/SC_L-multiplechoice2.png')}
                                                />
                                                <p class="text-sm text-gray-300 mt-2">Click to enlarge</p>
                                        </div>

                                        <!-- Answer Inputs -->
                                        <div class="text-center">
                                                <div class="flex flex-col gap-3 max-w-xs mx-auto mb-4">
                                                        <div class="flex items-center gap-3">
                                                                <span class="text-white text-sm font-medium w-8">Q21</span>
                                                                <select 
                                                                        bind:value={q21}
                                                                        class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm"
                                                                >
                                                                        <option value="">Select...</option>
                                                                        <option value="A">A</option>
                                                                        <option value="B">B</option>
                                                                        <option value="C">C</option>
                                                                </select>
                                                        </div>
                                                        <div class="flex items-center gap-3">
                                                                <span class="text-white text-sm font-medium w-8">Q22</span>
                                                                <select 
                                                                        bind:value={q22}
                                                                        class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm"
                                                                >
                                                                        <option value="">Select...</option>
                                                                        <option value="A">A</option>
                                                                        <option value="B">B</option>
                                                                        <option value="C">C</option>
                                                                </select>
                                                        </div>
                                                        <div class="flex items-center gap-3">
                                                                <span class="text-white text-sm font-medium w-8">Q23</span>
                                                                <select 
                                                                        bind:value={q23}
                                                                        class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm"
                                                                >
                                                                        <option value="">Select...</option>
                                                                        <option value="A">A</option>
                                                                        <option value="B">B</option>
                                                                        <option value="C">C</option>
                                                                </select>
                                                        </div>
                                                        <div class="flex items-center gap-3">
                                                                <span class="text-white text-sm font-medium w-8">Q24</span>
                                                                <select 
                                                                        bind:value={q24}
                                                                        class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm"
                                                                >
                                                                        <option value="">Select...</option>
                                                                        <option value="A">A</option>
                                                                        <option value="B">B</option>
                                                                        <option value="C">C</option>
                                                                </select>
                                                        </div>
                                                        <div class="flex items-center gap-3">
                                                                <span class="text-white text-sm font-medium w-8">Q25</span>
                                                                <select 
                                                                        bind:value={q25}
                                                                        class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm border-b-2 border-black"
                                                                >
                                                                        <option value="">Select...</option>
                                                                        <option value="A">A</option>
                                                                        <option value="B">B</option>
                                                                        <option value="C">C</option>
                                                                </select>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </section>

                <!-- Check Answers Section -->
                <section class="bg-gray-800 rounded-lg p-4 md:p-4 shadow-sm border border-gray-700 mb-8">
                        <div class="text-center">
                                                              
                                <!-- Check Button -->
                                <div class="text-center m-6">
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
                                                        <h5 class="text-lg font-bold text-white mb-3">Exercise 1 (Q11-Q15)</h5>
                                                        <div class="space-y-2 text-sm">
                                                                {#each ['q11', 'q12', 'q13', 'q14', 'q15'] as questionKey}
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
                                                        <h5 class="text-lg font-bold text-white mb-3">Exercise 2 (Q21-Q25)</h5>
                                                        <div class="space-y-2 text-sm">
                                                                {#each ['q21', 'q22', 'q23', 'q24', 'q25'] as questionKey}
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

                                  <h3 class="text-lg font-bold text-white mt-8">End of Lesson 01-i</h3>
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
                                                                href="/IETPP/lesson-01/lesson01-ii"
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