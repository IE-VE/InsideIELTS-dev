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
                                                        <input 
                                                                type="text" 
                                                                bind:value={q26}
                                                                placeholder="Q26"
                                                                class="w-full px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 text-sm text-center"
                                                        />
                                                        <input 
                                                                type="text" 
                                                                bind:value={q27}
                                                                placeholder="Q27"
                                                                class="w-full px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 text-sm text-center"
                                                        />
                                                        <input 
                                                                type="text" 
                                                                bind:value={q28}
                                                                placeholder="Q28"
                                                                class="w-full px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 text-sm text-center"
                                                        />
                                                        <input 
                                                                type="text" 
                                                                bind:value={q29}
                                                                placeholder="Q29"
                                                                class="w-full px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 text-sm text-center"
                                                        />
                                                        <input 
                                                                type="text" 
                                                                bind:value={q30}
                                                                placeholder="Q30"
                                                                class="w-full px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 text-sm text-center border-b-2 border-black"
                                                        />
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
                                                        <input 
                                                                type="text" 
                                                                bind:value={q31}
                                                                placeholder="Q31"
                                                                class="w-full px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 text-sm text-center"
                                                        />
                                                        <input 
                                                                type="text" 
                                                                bind:value={q32}
                                                                placeholder="Q32"
                                                                class="w-full px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 text-sm text-center"
                                                        />
                                                        <input 
                                                                type="text" 
                                                                bind:value={q33}
                                                                placeholder="Q33"
                                                                class="w-full px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 text-sm text-center"
                                                        />
                                                        <input 
                                                                type="text" 
                                                                bind:value={q34}
                                                                placeholder="Q34"
                                                                class="w-full px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 text-sm text-center"
                                                        />
                                                        <input 
                                                                type="text" 
                                                                bind:value={q35}
                                                                placeholder="Q35"
                                                                class="w-full px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 text-sm text-center border-b-2 border-black"
                                                        />
                                                </div>
                                        </div>
                                </div>

                                <!-- Check Answers Button -->
                                <div class="text-center mt-8">
                                        <button
                                                on:click={checkAllAnswers}
                                                disabled={loadingAnswers}
                                                class="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-500 text-white font-bold py-3 px-8 rounded-lg transition-colors border-2 border-white disabled:cursor-not-allowed"
                                        >
                                                {#if loadingAnswers}
                                                        <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                                        Processing...
                                                {:else}
                                                        <span class="text-xl">✓</span>
                                                        Check My Answers
                                                        <span class="text-xl">✓</span>
                                                {/if}
                                        </button>
                                </div>

                                <!-- Results Section -->
                                {#if showResults}
                                        <div class="mt-8 bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-300 dark:border-gray-600">
                                                <h3 class="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">
                                                        📊 Your Results
                                                </h3>
                                                
                                                <div class="text-center mb-6">
                                                        <div class="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-6 py-3 rounded-lg">
                                                                <span class="text-2xl">🎯</span>
                                                                <span class="text-xl font-bold text-gray-800 dark:text-gray-200">
                                                                        Score: {markingResults.totalCorrect}/{markingResults.totalQuestions}
                                                                </span>
                                                                <span class="text-lg text-gray-600 dark:text-gray-400">
                                                                        ({Math.round((markingResults.totalCorrect / markingResults.totalQuestions) * 100)}%)
                                                                </span>
                                                        </div>
                                                </div>

                                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        <!-- Exercise 1 Results -->
                                                        <div class="space-y-3">
                                                                <h4 class="font-bold text-gray-800 dark:text-gray-200 border-b pb-2">Exercise 1 (Q26-30)</h4>
                                                                {#each ['q26', 'q27', 'q28', 'q29', 'q30'] as qkey}
                                                                        <div class="flex items-center gap-3 p-3 rounded-lg {markingResults[qkey]?.isCorrect ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'}">
                                                                                <span class="text-xl">
                                                                                        {markingResults[qkey]?.isCorrect ? '✅' : '❌'}
                                                                                </span>
                                                                                <div class="flex-1">
                                                                                        <div class="font-medium text-gray-800 dark:text-gray-200">
                                                                                                {qkey.toUpperCase()}: <span class="font-normal">{markingResults[qkey]?.userAnswer || '(not answered)'}</span>
                                                                                        </div>
                                                                                        {#if !markingResults[qkey]?.isCorrect}
                                                                                                <div class="text-sm text-gray-600 dark:text-gray-400">
                                                                                                        Correct: {markingResults[qkey]?.correctAnswers?.join(' / ')}
                                                                                                </div>
                                                                                        {/if}
                                                                                </div>
                                                                        </div>
                                                                {/each}
                                                        </div>

                                                        <!-- Exercise 2 Results -->
                                                        <div class="space-y-3">
                                                                <h4 class="font-bold text-gray-800 dark:text-gray-200 border-b pb-2">Exercise 2 (Q31-35)</h4>
                                                                {#each ['q31', 'q32', 'q33', 'q34', 'q35'] as qkey}
                                                                        <div class="flex items-center gap-3 p-3 rounded-lg {markingResults[qkey]?.isCorrect ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'}">
                                                                                <span class="text-xl">
                                                                                        {markingResults[qkey]?.isCorrect ? '✅' : '❌'}
                                                                                </span>
                                                                                <div class="flex-1">
                                                                                        <div class="font-medium text-gray-800 dark:text-gray-200">
                                                                                                {qkey.toUpperCase()}: <span class="font-normal">{markingResults[qkey]?.userAnswer || '(not answered)'}</span>
                                                                                        </div>
                                                                                        {#if !markingResults[qkey]?.isCorrect}
                                                                                                <div class="text-sm text-gray-600 dark:text-gray-400">
                                                                                                        Correct: {markingResults[qkey]?.correctAnswers?.join(' / ')}
                                                                                                </div>
                                                                                        {/if}
                                                                                </div>
                                                                        </div>
                                                                {/each}
                                                        </div>
                                                </div>

                                                <!-- Performance Message -->
                                                <div class="mt-6 text-center">
                                                        {#if markingResults.totalCorrect >= 8}
                                                                <div class="bg-green-100 dark:bg-green-900/30 border border-green-400 rounded-lg p-4">
                                                                        <span class="text-2xl">🎉</span>
                                                                        <p class="text-green-800 dark:text-green-200 font-semibold">
                                                                                Excellent work! You have a strong understanding of short answer questions.
                                                                        </p>
                                                                </div>
                                                        {:else if markingResults.totalCorrect >= 6}
                                                                <div class="bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-400 rounded-lg p-4">
                                                                        <span class="text-2xl">👍</span>
                                                                        <p class="text-yellow-800 dark:text-yellow-200 font-semibold">
                                                                                Good job! Review the incorrect answers and practice more to improve.
                                                                        </p>
                                                                </div>
                                                        {:else}
                                                                <div class="bg-red-100 dark:bg-red-900/30 border border-red-400 rounded-lg p-4">
                                                                        <span class="text-2xl">📚</span>
                                                                        <p class="text-red-800 dark:text-red-200 font-semibold">
                                                                                Keep practicing! Review the lesson content and try the exercises again.
                                                                        </p>
                                                                </div>
                                                        {/if}
                                                </div>
                                        </div>
                                {/if}
                        </div>
                </section>

                <!-- End of Skill Check -->
                <section class="text-center py-8">
                        <p class="text-white mb-4">End of Skill Check 01 (ii)</p>
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