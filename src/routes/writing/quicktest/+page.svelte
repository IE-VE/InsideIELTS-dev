<script lang="ts">
        import { onMount } from 'svelte';

        let timeRemaining = $state(10 * 60); // 10 minutes in seconds
        let isTestCompleted = $state(false);
        let showInstructions = $state(true);
        let answer = $state('');

        // Timer functionality
        let timer: number;
        let isActive = $state(false);

        function startTest() {
                showInstructions = false;
                startTimer();
        }

        function startTimer() {
                isActive = true;
        }

        function pauseTimer() {
                isActive = false;
        }

        function completeTest() {
                isTestCompleted = true;
                clearInterval(timer);
        }

        function formatTime(seconds: number): string {
                const minutes = Math.floor(seconds / 60);
                const secs = seconds % 60;
                return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }

        function countWords(text: string): number {
                if (!text.trim()) return 0;
                return text.trim().split(/\s+/).length;
        }

        onMount(() => {
                timer = setInterval(() => {
                        if (isActive && timeRemaining > 0) {
                                timeRemaining--;
                        } else if (timeRemaining <= 0) {
                                completeTest();
                                clearInterval(timer);
                        }
                }, 1000);

                return () => {
                        if (timer) clearInterval(timer);
                };
        });
</script>

<svelte:head>
        <title>IELTS Writing Quick-Test - InsideIELTS</title>
        <meta name="description" content="Complete a 10-minute IELTS Writing Quick-Test. Write at least 100 words on a single task and get instant feedback on your writing skills." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        {#if showInstructions}
                <!-- Instructions Screen -->
                <div class="container mx-auto px-6 py-8">
        <div class="text-center mb-12">         <h1 class="text-3xl text-center font-black text-white mb-8 inline-block px-10 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 shadow-xl shadow-cyan-500/30 border-2 border-green-400/60">
                                                        IE WRITING Quick-Test
                        </h1>
                <p class="text-xl m-6 max-w-4xl mx-auto">You will be given a short writing task that replicates Writing Test reqirements. Complete the exercise in one sitting.         
                </p></div>
        
                        <div class="max-w-4xl mx-auto">
                                <div class="bg-gray-800 border border-gray-600 rounded-lg shadow-lg p-8">                       

                                        <div class="space-y-6 text-gray-700 dark:text-gray-300">
                                                <div class="bg-teal-900/20 p-6 rounded-lg">
                                                        <h2 class="text-xl font-semibold text-teal-300 mb-4">Test Instructions</h2>
                                                        <ul class="space-y-2">
                                                                <li>• Time allowed: <strong>10 minutes</strong></li>
                                                                <li>• Number of tasks: <strong>1</strong></li>
                                                                <li>• <strong>Length</strong>: write at least <strong>100 words</strong></li>
                                                        </ul>
														 </div>

                                                <div class="bg-blue-800/10 p-6 rounded-lg">                                                     
                                                        <h3 class="text-lg font-semibold text-orange-700 dark:text-orange-300 mb-3">Assessment Criteria</h3>
                                                        <ul class="space-y-1">
                                                                <li>• <strong>Task Achievement/Response:</strong> How well you address the task requirements</li>
                                                                <li>• <strong>Coherence & Cohesion:</strong> Organisation and flow of your writing</li>
                                                                <li>• <strong>Lexical Resource:</strong> Range and accuracy of vocabulary</li>
                                                                <li>• <strong>Grammatical Range & Accuracy:</strong> Range and accuracy of grammar</li>
                                                        </ul>
                                                </div>
                                        </div>

                                        <div class="text-center mt-8">
                                                <button
                                                        onclick={startTest}
                                                        class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg text-lg border-2 border-green-400/60 transition-colors"
                                                >
                                                        Start Writing Test
                                                </button>
                                        </div>
                                </div>
                        </div>
                </div>
                
        {:else if isTestCompleted}
                <!-- Results Screen -->
                <div class="container mx-auto px-6 py-8">
                        <div class="max-w-4xl mx-auto">
                                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center border border-gray-600">
                                        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Test Completed!</h1>
                                        <p class="text-lg text-gray-700 dark:text-gray-300 mb-8">
                                                Thank you for completing the IELTS Writing Quick-Test.
                                        </p>
                                        
                                        <div class="space-y-4 mb-8">
                                                <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                                        <h3 class="font-semibold mb-2">Your Writing Summary</h3>
                                                        <div class="text-sm">
                                                                <div>
                                                                        <strong>Words written:</strong> {countWords(answer)} words
                                                                </div>
                                                        </div>
                                                </div>
                                                
                                                <p class="text-gray-600 dark:text-gray-400">
                                                        For detailed feedback on your writing, consider our personalised assessment service.
                                                </p>
                                        </div>
                                        
                                        <div class="space-x-4">
                                                <button
                                                        onclick={() => window.location.reload()}
                                                        class="bg-green-600/80 hover:bg-green-700/80 text-white font-bold py-2 px-6 rounded-lg"
                                                >
                                                        Retake Test
                                                </button>
                                                <button
                                                        onclick={() => window.location.href = '/writing'}
                                                        class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 border-2 border-green-600/80 rounded-lg"
                                                >
                                                        Back to Writing
                                                </button>
                                        </div>
                                </div>
                        </div>
                </div>
        {:else}
                <!-- Test Interface -->
                <div class="max-w-4xl mx-auto px-4">
                        <div class="text-center py-8">          <h1 class="text-3xl text-center font-black text-white mb-8 inline-block px-10 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 shadow-xl shadow-cyan-500/30 border-2 border-green-400/60">
                                IE WRITING Quick-Test
                        </h1>
                        </div>
                                                                         <!-- Main Content -->                                                                        
          <!-- Timer and Navigation Header -->             <div class="pb-8">                                              <div class="bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-600">
                                                        <div class="mb-6 p-6 rounded-lg bg-gray-700">
                                                                <h2 class="text-2xl font-bold text-white text-center mb-4 tracking-wide underline decoration-2 underline-offset-3">Task</h2>
                                                                
                                                                <!-- Timer and Navigation Header -->
                                                                <div class="grid md:grid-cols-2 gap-6">
                                                                        <!-- Left Column: Time Limit + Timer -->
                                                                        <div class="text-center">
                                                                                <div class="font-semibold text-gray-300 mb-2">Time Limit</div>
                                                                                <div class="text-sm text-gray-400 mb-3">10 minutes recommended</div>
                                                                                <div class="text-2xl font-bold text-teal-600 dark:text-teal-400">
                                                                                        {formatTime(timeRemaining)}
                                                                                </div>
                                                                                <div class="text-sm text-gray-600 dark:text-gray-300 mt-1">Time Remaining</div>
                                                                        </div>
                                                                        
                                                                        <!-- Right Column: Word Limit + Word Count -->
                                                                        <div class="text-center">
                                                                                <div class="font-semibold text-gray-300 mb-2">Word Limit</div>
                                                                                <div class="text-sm text-gray-400 mb-3">At least 100 words</div>
                                                                                <div class="text-2xl font-bold {countWords(answer) >= 100 ? 'text-green-600' : 'text-red-600'}">
                                                                                        {countWords(answer)}
                                                                                </div>
                                                                                <div class="text-sm text-gray-600 dark:text-gray-300 mt-1">Current Words</div>
                                                                        </div>
                                                                </div>

                                                                <!-- Timer Control Buttons -->
                                                                <div class="flex justify-center gap-2 mt-6">
                                                                        {#if isActive}
                                                                                <button
                                                                                        onclick={pauseTimer}
                                                                                        class="px-3 py-1 bg-green-600/80 hover:bg-green-700/80 text-white font-medium rounded text-sm"
                                                                                >
                                                                                        PAUSE TIMER
                                                                                </button>
                                                                        {:else}
                                                                                <button
                                                                                        onclick={startTimer}
                                                                                        class="px-10 py-1 bg-green-600/80 hover:bg-green-700/80 text-white font-medium rounded text-sm"
                                                                                >
                                                                                        START
                                                                                </button>
                                                                        {/if}
                                                                </div>                                                                                          <!-- Writing Task -->
                                                        <div class="space-y-6 my-10">
                                                                <div class="border border-cyan/20 rounded-lg p-6 m-6 bg-gray-100">
                                                                        <p class="text-black font-semibold mb-4">Write about the following topic:</p>
                                        <div class="border-2 border-black p-4 m-6">                            <p class="text-xl font-semibold text-black mb-4">Globalisation is good.</p>
                                                                        <p class="text-lg text-black font-semibold">Say why you <u>support</u> this statement.</p>
                                        </div>
                                                                        <p class="text-lg text-black font-semibold mb-6">Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
                                                                        <p class="text-lg text-black font-semibold mb-6">You do not need to introduce the topic. The topic sentence has been started for you.</p>
                                                                        <p class="text-lg text-black font-semibold">Write at least 100 words.</p>
                                                                </div>                                                                                                                                                                                                                                  </div>
                                                                <div class="flex flex-col items-center">
                                                                        <label for="answer-textarea" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                                                Your Answer:
                                                                        </label>
                                                                        <div class="w-full max-w-[700px] border border-gray-500 rounded-lg bg-gray-900 p-6 focus-within:ring-2 focus-within:ring-teal-500 focus-within:border-teal-500">
                                                                                <p class="text-white text-lg">One reason why globalisation is a positive force in today's world is that...</p>
                                                                                <textarea
                                                                                        id="answer-textarea"
                                                                                        bind:value={answer}
                                                                                        placeholder="..."

                                                                                        class="w-full h-80 p-0 border-0 bg-transparent text-white text-lg resize-none"></textarea>
                                                                        </div>
                                                                        <div class="w-full max-w-[700px] mt-4 p-4 bg-blue-900/40 border border-blue-700 rounded-lg mb-4">
                                                                                <p class="text-sm text-blue-800 dark:text-blue-200">
                                                                                        <strong>💡 Final Check:</strong> Use any remaining time to check for any content and spelling errors. Then submit your responses for grading.
                                                                                </p>
                                                                        </div>                                     </div>                                          </div>                                                </div>                                                                                
                        <!-- Complete Test Button -->
                        
                                        <div class="mt-6 flex justify-center">
                                                <button
                                                        onclick={completeTest}
                                                        class="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg border border-white transition-colors"
                                                >
                                                        Mark my Response
                                                </button>
                                        </div>
                        
                        </div>
                </div>
        {/if}
</div>

<style>
        textarea {
                font-family: 'Arial', sans-serif;
                line-height: 1.5;
        }
        
        textarea:focus {
                box-shadow: 0 0 0 3px rgba(45, 212, 191, 0.1);
        }
</style>