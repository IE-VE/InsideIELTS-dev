<script lang="ts">
        import { onMount } from 'svelte';

        let lightboxOpen = false;
        let lightboxImage = '';

        // Form data
        let q1 = '', q2 = '', q3 = '', q4 = '', q5 = '', q6 = '';

        // Results for the exercise
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
                                q1: ['A', 'a'],
                                q2: ['D', 'd'],
                                q3: ['B', 'b'],
                                q4: ['C', 'c'],
                                q5: ['E', 'e'],
                                q6: ['A', 'a']
                        };

                        const userAnswers = { q1, q2, q3, q4, q5, q6 };
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
                        results.totalQuestions = 6;
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
        <title>IETPP - Lesson 02(i): Reading Matching Information Skill Check | InsideIELTS</title>
        <meta
                name="description"
                content="Complete IELTS Reading matching information skill check exercises with reading passages and instant feedback."
        />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
        <!-- Lesson Header -->
        <div class="max-w-5xl container mx-auto px-3 md:px-6 py-12">
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-12">
                        <div class="text-center">
                                <div class="text-xs text-left text-teal-600 dark:text-teal-400 mb-4">
                                        SC2(i)
                                </div>
                                <h1 class="text-3xl font-bold text-white mb-2">
                                        READING - Matching Information
                                </h1>
        
                        </div>

                        <div class="text-right mt-6">
                                <a
                                        href="/IETPP/lesson-02/lesson02-i"
                                        class="text-teal-600 dark:text-teal-400 hover:underline font-semibold"
                                >
                                        ← Back to Lesson
                                </a>
                        </div>
                </div>
        </div>

        <!-- Page Content -->
        <div style="max-width: 1200px;" class="mx-auto px-3 md:px-6 py-12">
                <!-- Skill Check Title -->
                <section class="bg-blue-600/20 rounded-lg p-6 md:p-10 shadow-sm border border-blue-600/50 mb-12">
                        <div class="flex items-center justify-center gap-4 mb-10">
                                <div class="text-4xl text-green-500">✓</div>
                                <h2 class="text-3xl font-bold text-center text-white">SKILL CHECK</h2>
                                <div class="text-4xl text-green-500">✓</div>
                        </div>
                        
                        <p class="text-center text-white text-xl mb-16">
                                <strong>Complete this Reading Skill Check exercise then upload your answers for checking and feedback.</strong>
                        </p>

                        <!-- Exercise -->
                        <div class="bg-blue-600/20 rounded-lg p-6 md:p-10 border border-blue-600/50 mb-12">
                                <div class="bg-blue-600 text-white px-4 py-2 rounded-lg text-center font-bold mb-10">
                                        SC2(i)
                                </div>
                                
                                <h3 class="text-2xl font-bold text-center text-white mb-12">READING - Matching information</h3>

                                <div class="bg-white dark:bg-gray-800 rounded-lg p-6 md:p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-12">
                                        
                                        <!-- Reading Text Images -->
                                        <div class="text-center mb-12">
                                                <img
                                                        src="/LESSONS/les02/02(i)/Matching_info-SCtext1.png"
                                                        alt="Reading matching information text part 1"
                                                        class="mx-auto rounded border-t-2 border-black cursor-pointer max-w-full mb-4"
                                                        style="margin-top: 4rem;"
                                                        on:click={() => openLightbox('/LESSONS/les02/02(i)/Matching_info-SCtext1.png')}
                                                />
                                                
                                                <img
                                                        src="/LESSONS/les02/02(i)/Matching_info-SCtext2.png"
                                                        alt="Reading matching information text part 2"
                                                        class="mx-auto rounded cursor-pointer max-w-full mb-4"
                                                        on:click={() => openLightbox('/LESSONS/les02/02(i)/Matching_info-SCtext2.png')}
                                                />
                                                
                                                <img
                                                        src="/LESSONS/les02/02(i)/Matching_info-SCtext3b.png"
                                                        alt="Reading matching information text part 3"
                                                        class="mx-auto rounded border-b-2 border-black cursor-pointer max-w-full"
                                                        style="margin-bottom: 6rem;"
                                                        on:click={() => openLightbox('/LESSONS/les02/02(i)/Matching_info-SCtext3b.png')}
                                                />
                                                
                                                <p class="text-sm text-gray-600 dark:text-gray-400 mt-4">Click to enlarge</p>
                                        </div>

                                        <!-- Questions Section -->
                                        <div class="text-center mb-10">
                                                <small class="text-gray-600 dark:text-gray-400 font-bold text-lg">Q1 - 6</small>
                                        </div>
                                        
                                        <div class="text-center mb-12">
                                                <img
                                                        src="/LESSONS/les02/02(i)/Matching_info-SCQ.png"
                                                        alt="Reading matching information questions 1-6"
                                                        class="mx-auto rounded border border-gray-600 cursor-pointer max-w-full"
                                                        style="margin-bottom: 6rem;"
                                                        on:click={() => openLightbox('/LESSONS/les02/02(i)/Matching_info-SCQ.png')}
                                                />
                                                <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">Click to enlarge</p>
                                        </div>

                                        <!-- Answer Inputs -->
                                        <div class="text-center">
                                                <h4 class="text-xl font-bold text-gray-800 dark:text-gray-200 mb-8 underline">ANSWERS</h4>
                                                <div class="flex flex-col gap-3 max-w-xs mx-auto mb-8">
                                                        <div class="flex items-center gap-3">
                                                                <span class="text-white text-sm font-medium w-8">Q1</span>
                                                                <input 
                                                                        type="text" 
                                                                        bind:value={q1}
                                                                        placeholder="enter your answers"
                                                                        class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm text-left"
                                                                />
                                                        </div>
                                                        <div class="flex items-center gap-3">
                                                                <span class="text-white text-sm font-medium w-8">Q2</span>
                                                                <input 
                                                                        type="text" 
                                                                        bind:value={q2}
                                                                        class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm text-left"
                                                                />
                                                        </div>
                                                        <div class="flex items-center gap-3">
                                                                <span class="text-white text-sm font-medium w-8">Q3</span>
                                                                <input 
                                                                        type="text" 
                                                                        bind:value={q3}
                                                                        class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm text-left"
                                                                />
                                                        </div>
                                                        <div class="flex items-center gap-3">
                                                                <span class="text-white text-sm font-medium w-8">Q4</span>
                                                                <input 
                                                                        type="text" 
                                                                        bind:value={q4}
                                                                        class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm text-left"
                                                                />
                                                        </div>
                                                        <div class="flex items-center gap-3">
                                                                <span class="text-white text-sm font-medium w-8">Q5</span>
                                                                <input 
                                                                        type="text" 
                                                                        bind:value={q5}
                                                                        class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm text-left"
                                                                />
                                                        </div>
                                                        <div class="flex items-center gap-3">
                                                                <span class="text-white text-sm font-medium w-8">Q6</span>
                                                                <input 
                                                                        type="text" 
                                                                        bind:value={q6}
                                                                        class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm text-left border-b-2 border-black"
                                                                />
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </section>

                <!-- Check Answers Section -->
                <section class="bg-gray-800 rounded-lg p-6 md:p-10 shadow-sm border border-gray-700 mb-12">
                        <div class="text-center">
                                <h3 class="text-2xl font-bold text-white mb-12">Submit Your Answers</h3>
                                
                                <!-- Check Button -->
                                <div class="text-center mb-10">
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
                                                        UPLOAD
                                                {/if}
                                        </button>
                                </div>
                                
                                <!-- Results Display -->
                                {#if showResults}
                                        <div class="bg-gray-700 rounded-lg p-6 md:p-8 mt-10 border border-gray-600">
                                                <h4 class="text-2xl font-semibold text-white mb-8 text-center">Your Results</h4>
                                                
                                                <!-- Score Summary -->
                                                <div class="text-center mb-10">
                                                        <div class="text-3xl font-bold text-white mb-4">
                                                                {markingResults.totalCorrect}/{markingResults.totalQuestions}
                                                        </div>
                                                        <div class="text-lg text-gray-300">
                                                                {Math.round((markingResults.totalCorrect / markingResults.totalQuestions) * 100)}% Correct
                                                        </div>
                                                </div>

                                                <!-- Results -->
                                                <div class="mb-10">
                                                        <h5 class="text-lg font-bold text-white mb-6">Reading Matching Information (Q1-Q6)</h5>
                                                        <div class="space-y-3 text-sm">
                                                                {#each ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'] as questionKey}
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

                <!-- Back Link -->
                <section class="text-center py-12">
                        <p class="text-white mb-16">
                                <a href="/IETPP#lesson-02" class="text-teal-400 hover:underline">
                                        ← Back to Progress Table
                                </a>
                        </p>
                </section>
        </div>
</div>

<!-- Lightbox Modal -->
{#if lightboxOpen}
        <div 
                class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
                on:click={closeLightbox}
        >
                <div class="max-w-full max-h-full">
                        <img
                                src={lightboxImage}
                                alt="Enlarged view"
                                class="max-w-full max-h-full object-contain rounded"
                                on:click|stopPropagation
                        />
                </div>
                <button
                        type="button"
                        on:click={closeLightbox}
                        class="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
                        aria-label="Close lightbox"
                >
                        ×
                </button>
        </div>
{/if}