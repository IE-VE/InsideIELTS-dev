<script lang="ts">
        import { onMount } from 'svelte';

        let lightboxOpen = $state(false);
        let lightboxImage = $state('');

        // Form data for True/False/Not given questions
        let q1 = $state(''), q2 = $state(''), q3 = $state(''), q4 = $state(''), q5 = $state('');
        let q6 = $state(''), q7 = $state(''), q8 = $state(''), q9 = $state(''), q10 = $state('');

        // Results for all exercises
        let showResults = $state(false);
        let markingResults = $state({});
        
        // Loading state
        let loadingAnswers = $state(false);

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
                        // Correct answers for True/False/Not given questions (case-insensitive)
                        const correctAnswers = {
                                q1: ['true', 't', 'yes', 'y'],
                                q2: ['false', 'f', 'no', 'n'],
                                q3: ['not given', 'ng', 'not stated'],
                                q4: ['true', 't', 'yes', 'y'],
                                q5: ['false', 'f', 'no', 'n'],
                                q6: ['not given', 'ng', 'not stated'],
                                q7: ['true', 't', 'yes', 'y'],
                                q8: ['false', 'f', 'no', 'n'],
                                q9: ['not given', 'ng', 'not stated'],
                                q10: ['true', 't', 'yes', 'y']
                        };

                        const userAnswers = { q1, q2, q3, q4, q5, q6, q7, q8, q9, q10 };
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
        <title>IETPP - Lesson 02(ii): Reading True/False/Not given Skill Check | InsideIELTS</title>
        <meta
                name="description"
                content="Complete IELTS Reading True/False/Not given skill check exercises with reading passages and instant feedback."
        />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
        <!-- Lesson Header -->
        <div class="max-w-5xl container mx-auto px-3 md:px-6 py-12">
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-12">
                        <div class="text-center">
                                <div class="text-xs text-left text-teal-600 dark:text-teal-400 mb-4">
                                        SC2(ii)
                                </div>
                                <h1 class="text-3xl font-bold text-white mb-2">
                                        READING - True/False/Not given
                                </h1>
        
                        </div>

                        <div class="text-right mt-6">
                                <a
                                        href="/IETPP/lesson-02/lesson02-ii"
                                        class="text-teal-600 dark:text-teal-400 hover:underline font-semibold"
                                >
                                        ← Back to Lesson
                                </a>
                        </div>
                </div>
        </div>

        <!-- Page Content -->
        <div style="max-width: 1200px;" class="mx-auto px-3 md:px-6 py-2">
                <!-- Skill Check Title -->
                <section class="bg-teal-600/20 rounded-lg p-6 md:p-10 shadow-sm border border-blue-600/50 mb-12 text-gray-100">
                        <h2 class="text-2xl font-bold text-center text-gray-100 mb-8">
                                IELTS Reading Skills Practice Exercise
                        </h2>
                        
                        <div class="bg-gray-800 rounded-lg p-6 border border-gray-600">
                                <h3 class="text-lg font-semibold mb-4">Instructions:</h3>
                                <div class="space-y-3 text-sm">
                                        <p>• Read the passage carefully and answer the True/False/Not given questions</p>
                                        <p>• Write <strong>True</strong> if the statement agrees with the information</p>
                                        <p>• Write <strong>False</strong> if the statement contradicts the information</p>  
                                        <p>• Write <strong>Not given</strong> if there is no information on this</p>
                                        <p>• Complete all questions before checking your answers</p>
                                </div>
                        </div>
                </section>

                <!-- Reading Passage and Questions -->
                <section class="mb-12">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <!-- Reading Passage -->
                                <div class="bg-gray-800 rounded-lg p-6 border border-gray-600">
                                        <h3 class="text-xl font-bold mb-6 text-center">Reading Passage</h3>
                                        <div class="prose prose-invert max-w-none text-sm leading-relaxed">
                                                <img
                                                        src="/LESSONS/les02/02(ii)/TFNG-SCtext.png"
                                                        alt="IELTS Reading Text"
                                                        class="w-full rounded border border-gray-600 cursor-pointer mb-4"
                                                        onclick={() => openLightbox('/LESSONS/les02/02(ii)/TFNG-SCtext.png')}
                                                />
                                                <img
                                                        src="/LESSONS/les02/02(ii)/TFNG-SCtext2.png"
                                                        alt="IELTS Reading Text Continued"
                                                        class="w-full rounded border border-gray-600 cursor-pointer"
                                                        onclick={() => openLightbox('/LESSONS/les02/02(ii)/TFNG-SCtext2.png')}
                                                />
                                        </div>
                                </div>

                                <!-- Questions -->
                                <div class="bg-gray-800 rounded-lg p-6 border border-gray-600">
                                        <h3 class="text-xl font-bold mb-6 text-center">Questions 1-10</h3>
                                        <div class="mb-6">
                                                <img
                                                        src="/LESSONS/les02/02(ii)/TFNG-SCQ.png"
                                                        alt="IELTS Reading Questions"
                                                        class="w-full rounded border border-gray-600 cursor-pointer"
                                                        onclick={() => openLightbox('/LESSONS/les02/02(ii)/TFNG-SCQ.png')}
                                                />
                                        </div>

                                        <div class="space-y-4">
                                                <div class="flex items-center gap-3">
                                                        <label class="text-sm font-medium min-w-[80px]">
                                                                Question 1:
                                                        </label>
                                                        <input
                                                                type="text"
                                                                bind:value={q1}
                                                                class="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:border-blue-500"
                                                                placeholder="True / False / Not given"
                                                        />
                                                </div>
                                                <div class="flex items-center gap-3">
                                                        <label class="text-sm font-medium min-w-[80px]">
                                                                Question 2:
                                                        </label>
                                                        <input
                                                                type="text"
                                                                bind:value={q2}
                                                                class="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:border-blue-500"
                                                                placeholder="True / False / Not given"
                                                        />
                                                </div>
                                                <div class="flex items-center gap-3">
                                                        <label class="text-sm font-medium min-w-[80px]">
                                                                Question 3:
                                                        </label>
                                                        <input
                                                                type="text"
                                                                bind:value={q3}
                                                                class="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:border-blue-500"
                                                                placeholder="True / False / Not given"
                                                        />
                                                </div>
                                                <div class="flex items-center gap-3">
                                                        <label class="text-sm font-medium min-w-[80px]">
                                                                Question 4:
                                                        </label>
                                                        <input
                                                                type="text"
                                                                bind:value={q4}
                                                                class="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:border-blue-500"
                                                                placeholder="True / False / Not given"
                                                        />
                                                </div>
                                                <div class="flex items-center gap-3">
                                                        <label class="text-sm font-medium min-w-[80px]">
                                                                Question 5:
                                                        </label>
                                                        <input
                                                                type="text"
                                                                bind:value={q5}
                                                                class="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:border-blue-500"
                                                                placeholder="True / False / Not given"
                                                        />
                                                </div>
                                                <div class="flex items-center gap-3">
                                                        <label class="text-sm font-medium min-w-[80px]">
                                                                Question 6:
                                                        </label>
                                                        <input
                                                                type="text"
                                                                bind:value={q6}
                                                                class="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:border-blue-500"
                                                                placeholder="True / False / Not given"
                                                        />
                                                </div>
                                                <div class="flex items-center gap-3">
                                                        <label class="text-sm font-medium min-w-[80px]">
                                                                Question 7:
                                                        </label>
                                                        <input
                                                                type="text"
                                                                bind:value={q7}
                                                                class="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:border-blue-500"
                                                                placeholder="True / False / Not given"
                                                        />
                                                </div>
                                                <div class="flex items-center gap-3">
                                                        <label class="text-sm font-medium min-w-[80px]">
                                                                Question 8:
                                                        </label>
                                                        <input
                                                                type="text"
                                                                bind:value={q8}
                                                                class="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:border-blue-500"
                                                                placeholder="True / False / Not given"
                                                        />
                                                </div>
                                                <div class="flex items-center gap-3">
                                                        <label class="text-sm font-medium min-w-[80px]">
                                                                Question 9:
                                                        </label>
                                                        <input
                                                                type="text"
                                                                bind:value={q9}
                                                                class="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:border-blue-500"
                                                                placeholder="True / False / Not given"
                                                        />
                                                </div>
                                                <div class="flex items-center gap-3">
                                                        <label class="text-sm font-medium min-w-[80px]">
                                                                Question 10:
                                                        </label>
                                                        <input
                                                                type="text"
                                                                bind:value={q10}
                                                                class="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:border-blue-500"
                                                                placeholder="True / False / Not given"
                                                        />
                                                </div>
                                        </div>

                                        <!-- Submit Button -->
                                        <div class="mt-8 text-center">
                                                <button
                                                        onclick={checkAllAnswers}
                                                        disabled={loadingAnswers}
                                                        class="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors disabled:opacity-50"
                                                >
                                                        {#if loadingAnswers}
                                                                <div class="flex items-center gap-2">
                                                                        <div class="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                                                                        Checking...
                                                                </div>
                                                        {:else}
                                                                Check Answers
                                                        {/if}
                                                </button>
                                        </div>
                                </div>
                        </div>
                </section>

                <!-- Results -->
                {#if showResults}
                        <section class="mb-12">
                                <div class="bg-gray-800 rounded-lg p-6 border border-gray-600">
                                        <h3 class="text-xl font-bold mb-6 text-center">Results</h3>
                                        
                                        <div class="mb-6 text-center">
                                                <div class="text-2xl font-bold mb-2">
                                                        Score: {markingResults.totalCorrect}/{markingResults.totalQuestions}
                                                </div>
                                                <div class="text-lg">
                                                        ({Math.round((markingResults.totalCorrect / markingResults.totalQuestions) * 100)}%)
                                                </div>
                                        </div>

                                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {#each Object.entries(markingResults).filter(([key]) => key.startsWith('q')) as [questionKey, result]}
                                                        <div class="flex items-center justify-between p-3 rounded border border-gray-600 {result.isCorrect ? 'bg-green-900/30 border-green-600' : 'bg-red-900/30 border-red-600'}">
                                                                <div class="flex items-center gap-2">
                                                                        <span class="{result.isCorrect ? 'text-green-400' : 'text-red-400'} text-lg">
                                                                                {result.isCorrect ? '✓' : '✗'}
                                                                        </span>
                                                                        <span class="font-medium">
                                                                                {questionKey.toUpperCase()}:
                                                                        </span>
                                                                </div>
                                                                <div class="text-right text-sm">
                                                                        <div>Your answer: <span class="font-medium">{result.userAnswer || 'No answer'}</span></div>
                                                                        {#if !result.isCorrect}
                                                                                <div class="text-gray-400">Correct: {result.correctAnswers[0]}</div>
                                                                        {/if}
                                                                </div>
                                                        </div>
                                                {/each}
                                        </div>

                                        <div class="mt-6 text-center">
                                                <p class="text-gray-300 mb-4">
                                                        {#if markingResults.totalCorrect >= 8}
                                                                Excellent work! You have mastered True/False/Not given questions.
                                                        {:else if markingResults.totalCorrect >= 6}
                                                                Good progress! Review the incorrect answers to improve further.
                                                        {:else}
                                                                Keep practicing! Review the technique and try again.
                                                        {/if}
                                                </p>
                                        </div>
                                </div>
                        </section>
                {/if}
        </div>
</div>

<!-- Lightbox Modal -->
{#if lightboxOpen}
        <div
                class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
                onclick={closeLightbox}
        >
                <div class="max-w-full max-h-full">
                        <img
                                src={lightboxImage}
                                alt="Enlarged view"
                                class="max-w-full max-h-full object-contain rounded"
                                onclick={(e) => e.stopPropagation()}
                        />
                </div>
                <button
                        type="button"
                        onclick={closeLightbox}
                        class="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
                        aria-label="Close lightbox"
                >
                        ×
                </button>
        </div>
{/if}