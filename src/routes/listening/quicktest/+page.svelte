<script lang="ts">
        import { onMount } from 'svelte';

        let timeRemaining = $state(10 * 60); // 10 minutes in seconds
        let isTestStarted = $state(false);
        let isTestCompleted = $state(false);
        let showInstructions = $state(true);
        let answers: Record<string, string> = $state({});
        let audioElement: HTMLAudioElement;
        let isPlaying = $state(false);
        let currentTime = $state(0);
        let duration = $state(0);

        // Timer functionality
        let timer: number;
        let isActive = $state(false);

        // Question type categorization
        const questionTypes = {
                'summary_completion': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        };

        // Time tracking
        let testStartTime = $state(null);
        let questionTimeStamps = $state({});
        let timeConstraintAnswers = $state([]);

        // Answer key for Space Traffic Management listening test
        const answerKey = {
                q1: ['technical'],
                q2: ['cheap'],
                q3: ['thousands'],
                q4: ['identification'],
                q5: ['tracking'],
                q6: ['military'],
                q7: ['location'],
                q8: ['prediction'],
                q9: ['database'],
                q10: ['trust']
        };

        // Results state
        let showAnswers = $state(false);
        let results = $state(null);
        let hasMarked = $state(false);
        let isMarking = $state(false);

        function startTest() {
                isTestStarted = true;
                showInstructions = false;
                startTestTimer();
                startTimer();
        }

        // Timer functions
        function startTimer() {
                isActive = true;
        }

        function pauseTimer() {
                isActive = false;
        }

        function resetTimer() {
                isActive = false;
                timeRemaining = 10 * 60;
                answers = {};
                isTestCompleted = false;
                showAnswers = false;
                hasMarked = false;
                if (audioElement) {
                        audioElement.pause();
                        audioElement.currentTime = 0;
                }
        }

        // Audio functions
        function toggleAudio() {
                if (!audioElement) return;

                if (isPlaying) {
                        audioElement.pause();
                } else {
                        audioElement.play();
                }
        }

        function handleAudioPlay() {
                isPlaying = true;
        }

        function handleAudioPause() {
                isPlaying = false;
        }

        function handleTimeUpdate() {
                if (audioElement) {
                        currentTime = audioElement.currentTime;
                }
        }

        function handleLoadedMetadata() {
                if (audioElement) {
                        duration = audioElement.duration;
                }
        }

        function seekAudio(event: MouseEvent) {
                if (!audioElement) return;
                const progressBar = event.currentTarget as HTMLElement;
                const rect = progressBar.getBoundingClientRect();
                const pos = (event.clientX - rect.left) / rect.width;
                audioElement.currentTime = pos * duration;
        }

        // Enhanced analysis function
        function analyzeAnswersByType(answers, questionResults) {
                const typeAnalysis = {};
                const questionTypeNames = {
                        'summary_completion': 'Summary Completion'
                };

                Object.entries(questionTypes).forEach(([type, questionNumbers]) => {
                        let correct = 0;
                        let total = 0;
                        let spellingErrors = 0;
                        let timeouts = 0;
                        let blankAnswers = 0;
                        const incorrectQuestions = [];

                        questionNumbers.forEach(num => {
                                const key = `q${num}`;
                                if (questionResults[key]) {
                                        total++;
                                        if (questionResults[key].isCorrect) {
                                                correct++;
                                        } else {
                                                const userAnswer = answers[key] || '';
                                                const correctOptions = answerKey[key];

                                                if (!userAnswer.toString().trim()) {
                                                        blankAnswers++;
                                                        if (timeConstraintAnswers.includes(num)) {
                                                                timeouts++;
                                                        }
                                                } else {
                                                        // Check for spelling errors
                                                        const isSpellingError = correctOptions?.some(correct => {
                                                                const similarity = calculateSimilarity(userAnswer.toString().toLowerCase(), correct.toLowerCase());
                                                                return similarity > 0.7 && similarity < 1;
                                                        });

                                                        if (isSpellingError) {
                                                                spellingErrors++;
                                                        }
                                                }
                                                incorrectQuestions.push({
                                                        number: num,
                                                        userAnswer: userAnswer,
                                                        correctAnswers: correctOptions
                                                });
                                        }
                                }
                        });

                        typeAnalysis[type] = {
                                name: questionTypeNames[type],
                                correct,
                                total,
                                percentage: total > 0 ? Math.round((correct / total) * 100) : 0,
                                spellingErrors,
                                timeouts,
                                blankAnswers,
                                incorrectQuestions
                        };
                });

                return typeAnalysis;
        }

        // String similarity calculation
        function calculateSimilarity(str1, str2) {
                const matrix = [];
                const len1 = str1.length;
                const len2 = str2.length;

                if (len1 === 0) return len2 === 0 ? 1 : 0;
                if (len2 === 0) return 0;

                for (let i = 0; i <= len2; i++) {
                        matrix[i] = [i];
                }

                for (let j = 0; j <= len1; j++) {
                        matrix[0][j] = j;
                }

                for (let i = 1; i <= len2; i++) {
                        for (let j = 1; j <= len1; j++) {
                                if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                                        matrix[i][j] = matrix[i - 1][j - 1];
                                } else {
                                        matrix[i][j] = Math.min(
                                                matrix[i - 1][j - 1] + 1,
                                                matrix[i][j - 1] + 1,
                                                matrix[i - 1][j] + 1
                                        );
                                }
                        }
                }

                const maxLen = Math.max(len1, len2);
                return (maxLen - matrix[len2][len1]) / maxLen;
        }

        function startTestTimer() {
                if (!testStartTime) {
                        testStartTime = Date.now();
                }
        }

        function checkTimeConstraints() {
                const currentTime = Date.now();
                const testDuration = 10 * 60 * 1000;

                if (testStartTime && (currentTime - testStartTime) > testDuration) {
                        Object.keys(answerKey).forEach(key => {
                                const questionNum = parseInt(key.substring(1));
                                if (!answers[key] && !timeConstraintAnswers.includes(questionNum)) {
                                        timeConstraintAnswers = [...timeConstraintAnswers, questionNum];
                                }
                        });
                }
        }

        // Marking functions
        async function markTest() {
                isMarking = true;
                await new Promise(resolve => setTimeout(resolve, 3000));

                let correct = 0;
                let questionResults = {};

                for (const questionKey of Object.keys(answerKey)) {
                        const correctAnswers = Array.isArray(answerKey[questionKey]) ? answerKey[questionKey] : [];
                        const userAnswer = answers[questionKey]?.toString().trim().toLowerCase() || '';

                        let isCorrect = false;
                        if (correctAnswers.length > 0) {
                                for (const correctAnswer of correctAnswers) {
                                        if (userAnswer === correctAnswer.toLowerCase().trim()) {
                                                isCorrect = true;
                                                break;
                                        }
                                }
                        }

                        questionResults[questionKey] = {
                                userAnswer: answers[questionKey] || '',
                                correctAnswers: correctAnswers,
                                isCorrect: isCorrect
                        };

                        if (isCorrect) {
                                correct++;
                        }
                }

                const typeAnalysis = analyzeAnswersByType(answers, questionResults);

                const actualTotalQuestions = Object.keys(questionResults).length;
                results = {
                        score: correct,
                        total: actualTotalQuestions,
                        percentage: actualTotalQuestions > 0 ? Math.round((correct / actualTotalQuestions) * 100) : 0,
                        questions: questionResults,
                        typeAnalysis
                };

                hasMarked = true;
                showAnswers = true;
                isMarking = false;
        }

        function completeTest() {
                isTestCompleted = true;
                clearInterval(timer);
                if (audioElement) {
                        audioElement.pause();
                }
        }

        function formatTime(seconds: number): string {
                const minutes = Math.floor(seconds / 60);
                const secs = seconds % 60;
                return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }

        function formatAudioTime(seconds: number): string {
                const mins = Math.floor(seconds / 60);
                const secs = Math.floor(seconds % 60);
                return `${mins}:${secs.toString().padStart(2, '0')}`;
        }

        function updateAnswer(questionNumber: string, value: string) {
                if (!questionTimeStamps[questionNumber]) {
                        questionTimeStamps[questionNumber] = Date.now();
                }
                answers[questionNumber] = value;
        }

        onMount(() => {
                startTestTimer();

                const timeCheckInterval = setInterval(checkTimeConstraints, 30000);

                timer = setInterval(() => {
                        if (isActive && timeRemaining > 0) {
                                timeRemaining--;
                        } else if (timeRemaining <= 0) {
                                isActive = false;
                                completeTest();
                        }
                }, 1000);

                return () => {
                        clearInterval(timer);
                        clearInterval(timeCheckInterval);
                };
        });
</script>

<div class="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 text-white">
        {#if showInstructions}
                <!-- Instructions Screen -->
                <div class="flex flex-col items-center justify-center min-h-screen p-8">
                         <div class="text-center mb-12">         <h1 class="text-3xl text-center font-black text-white mb-8 inline-block px-10 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 shadow-xl shadow-cyan-500/30 border-2 border-orange-600/80">
                                                IE LISTENING Quick-Test
                                        </h1>
                                     </div>
                                 <div class="max-w-4xl w-full bg-gray-800 rounded-lg shadow-2xl border border-gray-600 p-8">
                                <div class="space-y-6 text-gray-300">
                                        <div class="bg-teal-900/20 p-6 rounded-lg">
                                                <h2 class="text-2xl font-semibold mb-4 text-teal-300 mb-4">Test Instructions</h2>
                                                <ul class="space-y-2 text-gray-700 dark:text-gray-300 text-left">
                                                        <li class="flex items-start">
                                                                <span class="text-green-400 mr-2">•</span>
                                                                <span><strong>Time allowed:</strong> 8 minutes</span>
                                                        </li>
                                                        <li class="flex items-start">
                                                                <span class="text-green-400 mr-2">•</span>
                                                                <span><strong>Number of questions:</strong> 10 questions</span>
                                                        </li>
                                                        <li class="flex items-start">
                                                                <span class="text-green-400 mr-2">•</span>
                                                                <span><strong>Topic:</strong> Space Traffic Management</span>
                                                        </li>
                                                </ul>
                                        </div>

                                        <div class="bg-blue-800/10 p-6 rounded-lg">
                                                <h2 class="text-xl font-semibold mb-4 text-blue-300">Question Type</h2>
                                                <div class="space-y-3 text-gray-700 dark:text-gray-300">
                                                        <p><strong>Questions 1-10 :</strong> Summary Completion (complete the summary using words from the audio)</p>
                                                </div>
                                        </div>

                                        <div class="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
                                                <h2 class="text-xl font-semibold mb-4 text-orange-300">Important Notes</h2>
                                                <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                                                        <li class="flex items-start">
                                                                <span class="text-yellow-600 dark:text-yellow-400 mr-2">⚠</span>
                                                                <span>You will hear the audio only ONCE</span>
                                                        </li>
                                                        <li class="flex items-start">
                                                                <span class="text-yellow-600 dark:text-yellow-400 mr-2">⚠</span>
                                                                <span>Answer all questions - there is no penalty for incorrect answers</span>
                                                        </li>
                                                        <li class="flex items-start">
                                                                <span class="text-yellow-600 dark:text-yellow-400 mr-2">⚠</span>
                                                                <span>Write your answers in the spaces provided</span>
                                                        </li>
                                                        <li class="flex items-start">
                                                                <span class="text-yellow-600 dark:text-yellow-400 mr-2">⚠</span>
                                                                <span>Do not stop the recording once started</span>
                                                        </li>
                                                </ul>
                                        </div>
                                </div>

                                <div class="mt-8 text-center">
                                        <button
                                                onclick={startTest}
                                                class="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold text-lg rounded-lg transition-colors border-2 border-orange-600/80 shadow-lg"
                                        >
                                                Start Listening Test
                                        </button>
                                </div>
                        </div>
                </div>
        {:else if !isTestCompleted}

                <!-- Test Interface -->
                <div class="container max-w-4xl mx-auto px-4 py-8">
                        <!-- Header -->
                        <div class="text-center mb-12">         <h1 class="text-3xl text-center font-black text-white mb-8 inline-block px-10 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 shadow-xl shadow-cyan-500/30 border-2 border-orange-600/80">
                                        IE LISTENING Quick-Test
                                </h1>
                             </div>

                        <div class="mb-6">


                                <!-- Audio Player -->
                                <div class="bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
                                        <h2 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Audio Player</h2>

                                        <audio
                                                bind:this={audioElement}
                                                src="/audio/Space_Traffic_Management_Listening.mp3"
                                                onplay={handleAudioPlay}
                                                onpause={handleAudioPause}
                                                ontimeupdate={handleTimeUpdate}
                                                onloadedmetadata={handleLoadedMetadata}
                                                class="hidden"
                                        ></audio>

                                        <div class="space-y-4">
                                                <!-- Progress Bar -->
                                                <div
                                                        class="h-2 bg-gray-300 dark:bg-gray-600 rounded-full cursor-pointer overflow-hidden"
                                                        onclick={seekAudio}
                                                >
                                                        <div
                                                                class="h-full bg-orange-700/90 transition-all duration-100"
                                                                style="width: {duration > 0 ? (currentTime / duration) * 100 : 0}%"
                                                        ></div>
                                                </div>

                                                <!-- Time Display -->
                                                <div class="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                                                        <span>{formatAudioTime(currentTime)}</span>
                                                        <span>{formatAudioTime(duration)}</span>
                                                </div>

                                                <!-- Play/Pause Button -->
                                                <div class="flex justify-center">
                                                        <button
                                                                onclick={toggleAudio}
                                                                class="px-6 py-2 bg-orange-600/90 hover:bg-orange-700/90 text-white font-semibold rounded-lg transition-colors border-2 border-gray-400"
                                                        >
                                                                {isPlaying ? '⏸ Pause' : '▶ Play'}
                                                        </button>
                                                </div>
                                        </div>
                                </div>
                        </div>

                        <!-- Main Content Area -->
                        <div class="pb-8">
                                <div class="flex flex-col md:flex-row gap-6 items-start mb-6">
                                        <!-- Questions Section -->
                                        <div class="w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                                                <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Questions 1-10</h2>

                                                <div class="mb-6 rounded-lg bg-gray-50 p-6 dark:bg-gray-700">
                                                        <p class="text-gray-700 dark:text-gray-300 mb-2">
                                                                Complete the notes below.
                                                        </p>
                                                        <p class="text-gray-700 dark:text-gray-300 font-semibold">
                                                                Write ONE WORD ONLY for each answer.
                                                        </p>
                                                </div>

                                                <div class="space-y-8">
                                                        <!-- Space Traffic Management System -->
                                                        <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                                                                <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">A Space Traffic Management system</h3>
                                                                <ul class="space-y-3 text-gray-700 dark:text-gray-300">
                                                                        <li class="flex items-start">
                                                                                <span class="mr-2">•</span>
                                                                                <span>is a concept similar to Air Traffic Control, but for satellites rather than planes.</span>
                                                                        </li>
                                                                        <li class="flex items-start">
                                                                                <span class="mr-2">•</span>
                                                                                <div class="flex-1">
                                                                                        <span>would aim to set up legal and </span>
                                                                                        <input
                                                                                                type="text"
                                                                                                bind:value={answers.q1}
                                                                                                onchange={(e) => updateAnswer('q1', e.target.value)}
                                                                                                disabled={showAnswers}
                                                                                                placeholder="1"
                                                                                                class="inline-block w-48 px-3 py-1 mx-1 rounded border text-black dark:text-white dark:bg-gray-600 focus:border-orange-600/60 focus:ring-1 focus:ring-orange-600/60 outline-none {showAnswers && results ? (results.questions.q1?.isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-red-500 bg-red-50 dark:bg-red-900/20') : 'border-gray-300 dark:border-gray-500 bg-white'}"
                                                                                        />
                                                                                        <span> ways of improving safety.</span>
                                                                                        {#if showAnswers && results?.questions.q1}
                                                                                                <div class="mt-2 text-sm">
                                                                                                        {#if results.questions.q1.isCorrect}
                                                                                                                <span class="text-teal-600 dark:text-teal-400">✓ Correct!</span>
                                                                                                        {:else}
                                                                                                                <span class="text-red-600 dark:text-red-400">✗ Incorrect. </span>
                                                                                                                <span class="text-green-600 dark:text-green-400">
                                                                                                                        Correct answer: {results.questions.q1.correctAnswers.join(' / ')}
                                                                                                                </span>
                                                                                                        {/if}
                                                                                                </div>
                                                                                        {/if}
                                                                                </div>
                                                                        </li>
                                                                        <li class="flex items-start">
                                                                                <span class="mr-2">•</span>
                                                                                <span>does not actually exist at present.</span>
                                                                        </li>
                                                                </ul>
                                                        </div>

                                                        <!-- Problems in developing effective STM -->
                                                        <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                                                                <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Problems in developing effective Space Traffic Management</h3>
                                                                <ul class="space-y-3 text-gray-700 dark:text-gray-300">
                                                                        <li class="flex items-start">
                                                                                <span class="mr-2">•</span>
                                                                                <div class="flex-1">
                                                                                        <span>Satellites are now quite </span>
                                                                                        <input
                                                                                                type="text"
                                                                                                bind:value={answers.q2}
                                                                                                onchange={(e) => updateAnswer('q2', e.target.value)}
                                                                                                disabled={showAnswers}
                                                                                                placeholder="2"
                                                                                                class="inline-block w-48 px-3 py-1 mx-1 rounded border text-black dark:text-white dark:bg-gray-600 focus:border-orange-600/60 focus:ring-1 focus:ring-orange-600/60 outline-none {showAnswers && results ? (results.questions.q2?.isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-red-500 bg-red-50 dark:bg-red-900/20') : 'border-gray-300 dark:border-gray-500 bg-white'}"
                                                                                        />
                                                                                        <span> and therefore more widespread (e.g. there are constellations made up of </span>
                                                                                        <input
                                                                                                type="text"
                                                                                                bind:value={answers.q3}
                                                                                                onchange={(e) => updateAnswer('q3', e.target.value)}
                                                                                                disabled={showAnswers}
                                                                                                placeholder="3"
                                                                                                class="inline-block w-48 px-3 py-1 mx-1 rounded border text-black dark:text-white dark:bg-gray-600 focus:border-orange-600/60 focus:ring-1 focus:ring-orange-600/60 outline-none {showAnswers && results ? (results.questions.q3?.isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-red-500 bg-red-50 dark:bg-red-900/20') : 'border-gray-300 dark:border-gray-500 bg-white'}"
                                                                                        />
                                                                                        <span> of satellites).</span>
                                                                                        {#if showAnswers && results?.questions.q2}
                                                                                                <div class="mt-2 text-sm">
                                                                                                        {#if results.questions.q2.isCorrect}
                                                                                                                <span class="text-teal-600 dark:text-teal-400">Q2: ✓ Correct!</span>
                                                                                                        {:else}
                                                                                                                <span class="text-red-600 dark:text-red-400">Q2: ✗ Incorrect. </span>
                                                                                                                <span class="text-green-600 dark:text-green-400">
                                                                                                                        Correct: {results.questions.q2.correctAnswers.join(' / ')}
                                                                                                                </span>
                                                                                                        {/if}
                                                                                                </div>
                                                                                        {/if}
                                                                                        {#if showAnswers && results?.questions.q3}
                                                                                                <div class="mt-2 text-sm">
                                                                                                        {#if results.questions.q3.isCorrect}
                                                                                                                <span class="text-teal-600 dark:text-teal-400">Q3: ✓ Correct!</span>
                                                                                                        {:else}
                                                                                                                <span class="text-red-600 dark:text-red-400">Q3: ✗ Incorrect. </span>
                                                                                                                <span class="text-green-600 dark:text-green-400">
                                                                                                                        Correct: {results.questions.q3.correctAnswers.join(' / ')}
                                                                                                                </span>
                                                                                                        {/if}
                                                                                                </div>
                                                                                        {/if}
                                                                                </div>
                                                                        </li>
                                                                        <li class="flex items-start">
                                                                                <span class="mr-2">•</span>
                                                                                <div class="flex-1">
                                                                                        <span>At present, satellites are not required to transmit information to help with their </span>
                                                                                        <input
                                                                                                type="text"
                                                                                                bind:value={answers.q4}
                                                                                                onchange={(e) => updateAnswer('q4', e.target.value)}
                                                                                                disabled={showAnswers}
                                                                                                placeholder="4"
                                                                                                class="inline-block w-48 px-3 py-1 mx-1 rounded border text-black dark:text-white dark:bg-gray-600 focus:border-orange-600/60 focus:ring-1 focus:ring-orange-600/60 outline-none {showAnswers && results ? (results.questions.q4?.isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-red-500 bg-red-50 dark:bg-red-900/20') : 'border-gray-300 dark:border-gray-500 bg-white'}"
                                                                                        />
                                                                                        <span>.</span>
                                                                                                {#if showAnswers && results?.questions.q4}
                                                                                                        <div class="mt-2 text-sm">
                                                                                                                {#if results.questions.q4.isCorrect}
                                                                                                                        <span class="text-teal-600 dark:text-teal-400">✓ Correct!</span>
                                                                                                                {:else}
                                                                                                                        <span class="text-red-600 dark:text-red-400">✗ Incorrect. </span>
                                                                                                                        <span class="text-green-600 dark:text-green-400">
                                                                                                                                Correct: {results.questions.q4.correctAnswers.join(' / ')}
                                                                                                                        </span>
                                                                                                                {/if}
                                                                                                        </div>
                                                                                                {/if}
                                                                                </div>
                                                                        </li>
                                                                        <li class="flex items-start">
                                                                                <span class="mr-2">•</span>
                                                                                <div class="flex-1">
                                                                                        <span>There are few systems for </span>
                                                                                        <input
                                                                                                type="text"
                                                                                                bind:value={answers.q5}
                                                                                                onchange={(e) => updateAnswer('q5', e.target.value)}
                                                                                                disabled={showAnswers}
                                                                                                placeholder="5"
                                                                                                class="inline-block w-48 px-3 py-1 mx-1 rounded border text-black dark:text-white dark:bg-gray-600 focus:border-orange-600/60 focus:ring-1 focus:ring-orange-600/60 outline-none {showAnswers && results ? (results.questions.q5?.isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-red-500 bg-red-50 dark:bg-red-900/20') : 'border-gray-300 dark:border-gray-500 bg-white'}"
                                                                                        />
                                                                                        <span> satellites.</span>
                                                                                                {#if showAnswers && results?.questions.q5}
                                                                                                        <div class="mt-2 text-sm">
                                                                                                                {#if results.questions.q5.isCorrect}
                                                                                                                        <span class="text-teal-600 dark:text-teal-400">✓ Correct!</span>
                                                                                                                {:else}
                                                                                                                        <span class="text-red-600 dark:text-red-400">✗ Incorrect. </span>
                                                                                                                        <span class="text-green-600 dark:text-green-400">
                                                                                                                                Correct: {results.questions.q5.correctAnswers.join(' / ')}
                                                                                                                        </span>
                                                                                                                {/if}
                                                                                                        </div>
                                                                                                {/if}
                                                                                </div>
                                                                        </li>
                                                                        <li class="flex items-start">
                                                                                <span class="mr-2">•</span>
                                                                                <span>Small pieces of debris may be difficult to identify.</span>
                                                                        </li>
                                                                        <li class="flex items-start">
                                                                                <span class="mr-2">•</span>
                                                                                <div class="flex-1">
                                                                                        <span>Operators may be unwilling to share details of satellites used for </span>
                                                                                        <input
                                                                                                type="text"
                                                                                                bind:value={answers.q6}
                                                                                                onchange={(e) => updateAnswer('q6', e.target.value)}
                                                                                                disabled={showAnswers}
                                                                                                placeholder="6"
                                                                                                class="inline-block w-48 px-3 py-1 mx-1 rounded border text-black dark:text-white dark:bg-gray-600 focus:border-orange-600/60 focus:ring-1 focus:ring-orange-600/60 outline-none {showAnswers && results ? (results.questions.q6?.isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-red-500 bg-red-50 dark:bg-red-900/20') : 'border-gray-300 dark:border-gray-500 bg-white'}"
                                                                                        />
                                                                                        <span> or commercial reasons.</span>
                                                                                                {#if showAnswers && results?.questions.q6}
                                                                                                        <div class="mt-2 text-sm">
                                                                                                                {#if results.questions.q6.isCorrect}
                                                                                                                        <span class="text-teal-600 dark:text-teal-400">✓ Correct!</span>
                                                                                                                {:else}
                                                                                                                        <span class="text-red-600 dark:text-red-400">✗ Incorrect. </span>
                                                                                                                        <span class="text-green-600 dark:text-green-400">
                                                                                                                                Correct: {results.questions.q6.correctAnswers.join(' / ')}
                                                                                                                        </span>
                                                                                                                {/if}
                                                                                                        </div>
                                                                                                {/if}
                                                                                </div>
                                                                        </li>
                                                                        <li class="flex items-start">
                                                                                <span class="mr-2">•</span>
                                                                                <div class="flex-1">
                                                                                        <span>It may be hard to collect details of the object's </span>
                                                                                        <input
                                                                                                type="text"
                                                                                                bind:value={answers.q7}
                                                                                                onchange={(e) => updateAnswer('q7', e.target.value)}
                                                                                                disabled={showAnswers}
                                                                                                placeholder="7"
                                                                                                class="inline-block w-48 px-3 py-1 mx-1 rounded border text-black dark:text-white dark:bg-gray-600 focus:border-orange-600/60 focus:ring-1 focus:ring-orange-600/60 outline-none {showAnswers && results ? (results.questions.q7?.isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-red-500 bg-red-50 dark:bg-red-900/20') : 'border-gray-300 dark:border-gray-500 bg-white'}"
                                                                                        />
                                                                                        <span> at a given time.</span>
                                                                                                {#if showAnswers && results?.questions.q7}
                                                                                                        <div class="mt-2 text-sm">
                                                                                                                {#if results.questions.q7.isCorrect}
                                                                                                                        <span class="text-teal-600 dark:text-teal-400">✓ Correct!</span>
                                                                                                                {:else}
                                                                                                                        <span class="text-red-600 dark:text-red-400">✗ Incorrect. </span>
                                                                                                                        <span class="text-green-600 dark:text-green-400">
                                                                                                                                Correct: {results.questions.q7.correctAnswers.join(' / ')}
                                                                                                                        </span>
                                                                                                                {/if}
                                                                                                        </div>
                                                                                                {/if}
                                                                                </div>
                                                                        </li>
                                                                        <li class="flex items-start">
                                                                                <span class="mr-2">•</span>
                                                                                <div class="flex-1">
                                                                                        <span>Scientists can only make a </span>
                                                                                        <input
                                                                                                type="text"
                                                                                                bind:value={answers.q8}
                                                                                                onchange={(e) => updateAnswer('q8', e.target.value)}
                                                                                                disabled={showAnswers}
                                                                                                placeholder="8"
                                                                                                class="inline-block w-48 px-3 py-1 mx-1 rounded border text-black dark:text-white dark:bg-gray-600 focus:border-orange-600/60 focus:ring-1 focus:ring-orange-600/60 outline-none {showAnswers && results ? (results.questions.q8?.isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-red-500 bg-red-50 dark:bg-red-900/20') : 'border-gray-300 dark:border-gray-500 bg-white'}"
                                                                                        />
                                                                                        <span> about where the satellite will go.</span>
                                                                                                {#if showAnswers && results?.questions.q8}
                                                                                                        <div class="mt-2 text-sm">
                                                                                                                {#if results.questions.q8.isCorrect}
                                                                                                                        <span class="text-teal-600 dark:text-teal-400">✓ Correct!</span>
                                                                                                                {:else}
                                                                                                                        <span class="text-red-600 dark:text-red-400">✗ Incorrect. </span>
                                                                                                                        <span class="text-green-600 dark:text-green-400">
                                                                                                                                Correct: {results.questions.q8.correctAnswers.join(' / ')}
                                                                                                                        </span>
                                                                                                                {/if}
                                                                                                        </div>
                                                                                                {/if}
                                                                                </div>
                                                                        </li>
                                                                </ul>
                                                        </div>

                                                        <!-- Solutions -->
                                                        <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                                                                <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Solutions</h3>
                                                                <ul class="space-y-3 text-gray-700 dark:text-gray-300">
                                                                        <li class="flex items-start">
                                                                                <span class="mr-2">•</span>
                                                                                <span>Common standards should be agreed on for the presentation of information.</span>
                                                                        </li>
                                                                        <li class="flex items-start">
                                                                                <span class="mr-2">•</span>
                                                                                <div class="flex-1">
                                                                                        <span>The information should be combined in one </span>
                                                                                        <input
                                                                                                type="text"
                                                                                                bind:value={answers.q9}
                                                                                                onchange={(e) => updateAnswer('q9', e.target.value)}
                                                                                                disabled={showAnswers}
                                                                                                placeholder="9"
                                                                                                class="inline-block w-48 px-3 py-1 mx-1 rounded border text-black dark:text-white dark:bg-gray-600 focus:border-orange-600/60 focus:ring-1 focus:ring-orange-600/60 outline-none {showAnswers && results ? (results.questions.q9?.isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-red-500 bg-red-50 dark:bg-red-900/20') : 'border-gray-300 dark:border-gray-500 bg-white'}"
                                                                                        />
                                                                                        <span>.</span>
                                                                                                {#if showAnswers && results?.questions.q9}
                                                                                                        <div class="mt-2 text-sm">
                                                                                                                {#if results.questions.q9.isCorrect}
                                                                                                                        <span class="text-teal-600 dark:text-teal-400">✓ Correct!</span>
                                                                                                                {:else}
                                                                                                                        <span class="text-red-600 dark:text-red-400">✗ Incorrect. </span>
                                                                                                                        <span class="text-green-600 dark:text-green-400">
                                                                                                                                Correct: {results.questions.q9.correctAnswers.join(' / ')}
                                                                                                                        </span>
                                                                                                                {/if}
                                                                                                        </div>
                                                                                                {/if}
                                                                                </div>
                                                                        </li>
                                                                        <li class="flex items-start">
                                                                                <span class="mr-2">•</span>
                                                                                <div class="flex-1">
                                                                                        <span>A coordinated system must be designed to create </span>
                                                                                        <input
                                                                                                type="text"
                                                                                                bind:value={answers.q10}
                                                                                                onchange={(e) => updateAnswer('q10', e.target.value)}
                                                                                                disabled={showAnswers}
                                                                                                placeholder="10"
                                                                                                class="inline-block w-48 px-3 py-1 mx-1 rounded border text-black dark:text-white dark:bg-gray-600 focus:border-orange-600/60 focus:ring-1 focus:ring-orange-600/60 outline-none {showAnswers && results ? (results.questions.q10?.isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-red-500 bg-red-50 dark:bg-red-900/20') : 'border-gray-300 dark:border-gray-500 bg-white'}"
                                                                                        />
                                                                                        <span> in its users.</span>
                                                                                                {#if showAnswers && results?.questions.q10}
                                                                                                        <div class="mt-2 text-sm">
                                                                                                                {#if results.questions.q10.isCorrect}
                                                                                                                        <span class="text-teal-600 dark:text-teal-400">✓ Correct!</span>
                                                                                                                {:else}
                                                                                                                        <span class="text-red-600 dark:text-red-400">✗ Incorrect. </span>
                                                                                                                        <span class="text-green-600 dark:text-green-400">
                                                                                                                                Correct: {results.questions.q10.correctAnswers.join(' / ')}
                                                                                                                        </span>
                                                                                                                {/if}
                                                                                                        </div>
                                                                                                {/if}
                                                                                </div>
                                                                        </li>
                                                                </ul>
                                                        </div>
                                                </div>

                                                <!-- Results Display -->
                                                {#if results && showAnswers}
                                                        <div class="mt-8 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-700 p-6">
                                                                <h3 class="mb-6 text-xl font-semibold text-gray-900 dark:text-white text-center"><u>Test Results</u></h3>

                                                                <div class="text-center mb-8">
                                                                        <div class="text-5xl font-bold text-teal-600 dark:text-teal-400 mb-2">
                                                                                {results.score}/{results.total}
                                                                        </div>
                                                                        <div class="text-2xl text-gray-700 dark:text-gray-300">
                                                                                {results.percentage}% Correct
                                                                        </div>
                                                                </div>

                                                                <div class="space-y-4">
                                                                        <h4 class="font-semibold text-lg text-gray-900 dark:text-white">Performance by Question Type:</h4>
                                                                        {#each Object.entries(results.typeAnalysis) as [type, analysis]}
                                                                                <div class="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                                                                                        <div class="flex justify-between items-center mb-2">
                                                                                                <span class="font-medium text-gray-900 dark:text-white">{analysis.name}</span>
                                                                                                <span class="text-lg font-semibold text-gray-900 dark:text-white">
                                                                                                        {analysis.correct}/{analysis.total} ({analysis.percentage}%)
                                                                                                </span>
                                                                                        </div>
                                                                                        {#if analysis.incorrectQuestions.length > 0}
                                                                                                <div class="text-sm text-gray-600 dark:text-gray-400">
                                                                                                        <p class="mb-1">Incorrect: Questions {analysis.incorrectQuestions.map(q => q.number).join(', ')}</p>
                                                                                                        {#if analysis.spellingErrors > 0}
                                                                                                                <p class="text-yellow-600 dark:text-yellow-400">⚠ {analysis.spellingErrors} spelling error(s)</p>
                                                                                                        {/if}
                                                                                                        {#if analysis.blankAnswers > 0}
                                                                                                                <p class="text-red-600 dark:text-red-400">✗ {analysis.blankAnswers} blank answer(s)</p>
                                                                                                        {/if}
                                                                                                </div>
                                                                                        {/if}
                                                                                </div>
                                                                        {/each}
                                                                </div>

                                                                <!-- Action Buttons -->
                                                                <div class="mt-6 flex gap-4 justify-center">
                                                                        <button
                                                                                onclick={resetTimer}
                                                                                class="px-4 py-2 bg-orange-700 hover:bg-orange-800 text-white font-medium rounded-lg transition-colors"
                                                                        >
                                                                                Retake Test
                                                                        </button>
                                                                        <button
                                                                                onclick={() => window.location.href = '/listening'}
                                                                                class="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-orange font-medium rounded-lg border-2 border-orange-600/80 transition-colors"
                                                                        >
                                                                                Back to Listening
                                                                        </button>
                                                                </div>
                                                        </div>
                                                {/if}

                                                <!-- Mark Test Button -->
                                                {#if !hasMarked}
                                                        <div class="mt-6 text-center">
                                                                <button
                                                                        onclick={markTest}
                                                                        disabled={isMarking}
                                                                        class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed border-2 border-orange-600/80 shadow-lg"
                                                                >
                                                                        {isMarking ? 'Marking...' : 'Mark Test'}
                                                                </button>
                                                        </div>
                                                {/if}
                                        </div>
                                </div>
                        </div>

                        <!-- Complete Test Button -->
                        <!-- <div class="mt-6 flex justify-center">
                                <button
                                        onclick={completeTest}
                                        class="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg border border-white transition-colors"
                                >
                                        Submit Answers
                                </button>
                        </div> -->
                </div>
        {:else}
                <!-- Test Completed -->
                <div class="flex flex-col items-center justify-center min-h-screen p-8">
                        <div class="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-8 text-center">
                                <h1 class="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Test Completed!</h1>
                                <p class="text-xl mb-8 text-gray-700 dark:text-gray-300">
                                        Thank you for completing the IE LISTENING Quick-Test.
                                </p>

                                {#if !hasMarked}
                                        <button
                                                onclick={markTest}
                                                disabled={isMarking}
                                                class="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold text-lg rounded-lg transition-colors disabled:opacity-50 mb-4"
                                        >
                                                {isMarking ? 'Marking Test...' : 'Mark My Test'}
                                        </button>
                                {:else if results}
                                        <div class="mb-8">
                                                <div class="text-5xl font-bold text-teal-600 dark:text-teal-400 mb-2">
                                                        {results.score}/{results.total}
                                                </div>
                                                <div class="text-2xl text-gray-700 dark:text-gray-300">
                                                        {results.percentage}% Correct
                                                </div>
                                        </div>
                                {/if}

                                <div class="flex gap-4 justify-center">
                                        <button
                                                onclick={resetTimer}
                                                class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                                        >
                                                Retake Test
                                        </button>
                                        <button
                                                onclick={() => window.location.href = '/listening'}
                                                class="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors"
                                        >
                                                Back to Listening
                                        </button>
                                </div>
                        </div>
                </div>
        {/if}

<!-- CTA CARD -->
<div class="py-12 mb-12 max-w-3xl mx-auto">
        <div class="relative border-amber-200 from-[#fff5e9] to-[#fffdf7] dark:border-amber-800 dark:from-amber-950/30 dark:to-amber-900/20 bg-gradient-to-br border-2 rounded-lg p-8 pt-12 shadow-lg">
                <!-- Top accent bar matching notebook variant -->
                <div class="absolute top-0 left-0 h-4 w-full rounded-t-xl bg-gradient-to-r from-amber-300 to-yellow-200 dark:from-amber-500 dark:to-yellow-400"></div>

                <!-- IE Logo behind title with transparency -->
                <div class="absolute top-10 right-8 opacity-70 md:opacity-90">
                        <img src="/IE_logo.png" alt="InsideIELTS" class="h-8 md:h-14 w-auto" />
                </div>

                <div class="relative">
                        <h3 class="text-2xl font-bold text-amber-800 dark:text-amber-300">Achieve your full IELTS Listening potential.</h3>
                        <p class="mt-1 text-lg text-gray-700 dark:text-white mb-4">
                                Our comprehensive program is your path to IELTS success.
                        </p>
                </div>

                <!-- Benefits -->
                <div class="rounded-lg bg-white p-4 dark:bg-gray-800">
                        <h4 class="mb-4 font-semibold text-gray-800 dark:text-white">Package Benefits:</h4>
                        <ul class="space-y-3">
                                <li class="flex">
                                        <div
                                                class="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/50"
                                        >
                                                <svg
                                                        class="h-4 w-4 text-teal-600 dark:text-teal-400"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                >
                                                        <path
                                                                fill-rule="evenodd"
                                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                clip-rule="evenodd"
                                                        />
                                                </svg>
                                        </div>
                                        <div class="text-gray-700 dark:text-gray-300">
                                                 28 comprehensive lessons with skill-focused materials
                                        </div>
                                </li>
                                <li class="flex">
                                        <div
                                                class="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/50"
                                        >
                                                <svg
                                                        class="h-4 w-4 text-teal-600 dark:text-teal-400"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                >
                                                        <path
                                                                fill-rule="evenodd"
                                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                clip-rule="evenodd"
                                                        />
                                                </svg>
                                        </div>
                                        <div class="text-gray-700 dark:text-gray-300">
                                                 Personal feedback on all Skill Check exercises
                                        </div>
                                </li>
                                <li class="flex">
                                        <div
                                                class="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/50"
                                        >
                                                <svg
                                                        class="h-4 w-4 text-teal-600 dark:text-teal-400"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                >
                                                        <path
                                                                fill-rule="evenodd"
                                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                clip-rule="evenodd"
                                                        />
                                                </svg>
                                        </div>
                                        <div class="text-gray-700 dark:text-gray-300">
                                                Member's page community access
                                        </div>
                                </li>
                                <li class="flex">
                                        <div
                                                class="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/50"
                                        >
                                                <svg
                                                        class="h-4 w-4 text-teal-600 dark:text-teal-400"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                >
                                                        <path
                                                                fill-rule="evenodd"
                                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                clip-rule="evenodd"
                                                        />
                                                </svg>
                                        </div>
                                        <div class="text-gray-700 dark:text-gray-300">
                                                 40+ Virtual Examiner tutorial videos
                                        </div>
                                </li>
                                <li class="flex">
                                        <div
                                                class="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/50"
                                        >
                                                <svg
                                                        class="h-4 w-4 text-teal-600 dark:text-teal-400"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                >
                                                        <path
                                                                fill-rule="evenodd"
                                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                clip-rule="evenodd"
                                                        />
                                                </svg>
                                        </div>
                                        <div class="text-gray-700 dark:text-gray-300">
                                                 Full IELTS format assessment test
                                        </div>
                                </li>
                                <li class="flex">
                                        <div
                                                class="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/50"
                                        >
                                                <svg
                                                        class="h-4 w-4 text-teal-600 dark:text-teal-400"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                >
                                                        <path
                                                                fill-rule="evenodd"
                                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                clip-rule="evenodd"
                                                        />
                                                </svg>
                                        </div>
                                        <div class="text-gray-700 dark:text-gray-300">
                                                <u class="underline underline-offset-2">REAL </u> &nbsp support from &nbsp  <u class="underline underline-offset-2"> REAL </u>&nbsp examiners
                                        </div>
                                </li>
                        </ul>
                </div>
                        <div class="flex items-center justify-between">
                                <div>
                                        <p class="text-lg text-white font-semibold">InsideIELTS Test Preparation program:</p>
                                        </div>
                                <button
                                        href="/IETPP/signup"
                                        class="rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 px-4 py-2 text-xl font-bold text-white shadow-md transition-all duration-150 hover:shadow-lg my-4"

                                >
                                        START NOW
                                </button>
                        </div>
                <div class="rounded-lg bg-white p-4 dark:bg-gray-800">
                        <div class="flex items-start">
                                <svg
                                        class="mr-2 h-5 w-5 text-teal-600 dark:text-teal-400"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                >
                                        <path
                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                stroke="currentColor"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                        />
                                </svg>
                                <p class="text-gray-700 dark:text-gray-300">
                                        <strong>100% Satisfaction Guarantee:</strong> See your score improve or get your money back.
                                </p>
                        </div>
                </div>
        </div>
</div>
</div>