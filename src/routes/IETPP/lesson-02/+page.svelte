<script lang="ts">
        import { onMount } from 'svelte';

        let lightboxOpen = false;
        let lightboxImage = '';

        // Answer input variables for practice exercises
        let q1 = '', q2 = '', q3 = '', q4 = '', q5 = '', q6 = '';
        let q22 = '', q23 = '', q24 = '', q25 = '', q26 = '', q27 = '';
        
        // Show/hide answers for each exercise
        let showAnswersDiagram = false;
        let showAnswersFlowchart = false;

        // Timer state for both exercises (9 minutes = 540 seconds)
        let timerDiagram = 540;
        let timerFlowchart = 540;
        let isRunningDiagram = false;
        let isRunningFlowchart = false;
        let intervalDiagram: number | null = null;
        let intervalFlowchart: number | null = null;

        function openLightbox(imageSrc: string) {
                lightboxImage = imageSrc;
                lightboxOpen = true;
        }

        function closeLightbox() {
                lightboxOpen = false;
                lightboxImage = '';
        }

        function toggleDiagramAnswers() {
                showAnswersDiagram = !showAnswersDiagram;
        }

        function toggleFlowchartAnswers() {
                showAnswersFlowchart = !showAnswersFlowchart;
        }

        // Timer formatting function
        function formatTime(seconds: number): string {
                const mins = Math.floor(seconds / 60);
                const secs = seconds % 60;
                return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }

        // Diagram timer functions
        function startDiagramTimer() {
                if (!isRunningDiagram && timerDiagram > 0) {
                        isRunningDiagram = true;
                        intervalDiagram = window.setInterval(() => {
                                timerDiagram--;
                                if (timerDiagram <= 0) {
                                        stopDiagramTimer();
                                }
                        }, 1000);
                }
        }

        function stopDiagramTimer() {
                isRunningDiagram = false;
                if (intervalDiagram) {
                        clearInterval(intervalDiagram);
                        intervalDiagram = null;
                }
        }

        function resetDiagramTimer() {
                stopDiagramTimer();
                timerDiagram = 540; // Reset to 9 minutes
        }

        // Flowchart timer functions
        function startFlowchartTimer() {
                if (!isRunningFlowchart && timerFlowchart > 0) {
                        isRunningFlowchart = true;
                        intervalFlowchart = window.setInterval(() => {
                                timerFlowchart--;
                                if (timerFlowchart <= 0) {
                                        stopFlowchartTimer();
                                }
                        }, 1000);
                }
        }

        function stopFlowchartTimer() {
                isRunningFlowchart = false;
                if (intervalFlowchart) {
                        clearInterval(intervalFlowchart);
                        intervalFlowchart = null;
                }
        }

        function resetFlowchartTimer() {
                stopFlowchartTimer();
                timerFlowchart = 540; // Reset to 9 minutes
        }

        onMount(() => {
                function handleKeydown(event: KeyboardEvent) {
                        if (event.key === 'Escape' && lightboxOpen) {
                                closeLightbox();
                        }
                }

                document.addEventListener('keydown', handleKeydown);
                
                // Cleanup function
                return () => {
                        document.removeEventListener('keydown', handleKeydown);
                        // Clean up timers
                        if (intervalDiagram) clearInterval(intervalDiagram);
                        if (intervalFlowchart) clearInterval(intervalFlowchart);
                };
        });
</script>

<svelte:head>
        <title>IETPP - Lesson 02: Introduction to the Reading Test | InsideIELTS</title>
        <meta
                name="description"
                content="Learn IELTS Reading test format, question types, and practice with authentic examples. Master diagram labeling, flow chart completion, and other reading skills."
        />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
        <!-- Lesson Header -->
        <div class="max-w-5xl container mx-auto px-3 md:px-6 py-8">
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
                        <div class="text-center">
                                <div class="text-xs text-left text-teal-600 dark:text-teal-400 mb-4">
                                        LESSON CODE: IE2401_02
                                </div>
                                <h1 class="text-3xl font-bold text-white mb-2">
                                        Introduction to the Reading Test
                                </h1>
                                <!-- <p class="text-white italic">(60 mins)</p> -->
                        </div>

                        <div class="text-right mt-6">
                                <a
                                        href="/IETPP#lesson-02"
                                        class="text-teal-600 dark:text-teal-400 hover:underline font-semibold"
                                        data-sveltekit-reload
                                >
                                        ← Back to Contents
                                </a>
                        </div>
                </div>
        </div>

        <!-- Page Content -->
        <div style="max-width: 1200px;" class="mx-auto px-3 md:px-6 py-8">
                <!-- Lesson Content Overview -->
                <section class="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700 mb-8">
                        <h2 class="text-xl font-semibold mb-4 text-white">Lesson Content:</h2>
                        <ul class="list-disc text-lg list-inside space-y-2 text-white">
                                <li>Reading Test Format and Question types</li>
                                <li>Example Reading Test questions</li>
                                <li>Reading Test question practice</li>
                        </ul>
                </section>

                <!-- Section 1: Reading Test Format and Question Types -->
                <section class="bg-teal-900/30 rounded-lg p-4 md:p-8 shadow-sm border border-teal-700 mb-8">
                        <h2 class="text-2xl font-bold text-center text-white mb-8">
                                Reading Test Format and Question types
                        </h2>

                        <div class="max-w-4xl mx-auto">
                                <p class="text-white text-lg mb-8">
                                        The Reading Test is the second test that you will complete on test day. The test lasts
                                        for <strong>60 minutes</strong>. You write your answers directly on the answer sheet
                                        provided.
                                </p>

                                <div class="flex justify-center mb-12">
                                        <a
                                                href="https://insideielts.oppyo.com/video/embed/5rp7dvrywv"
                                                target="_blank"
                                                title="InsideIELTS virtual examiner reading test preparation video"
                                                class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
                                        >
                                                Virtual Examiner Video
                                        </a>
                                </div>

                                <p class="text-white mb-6">
                                        The reading test is made up of <strong>40 questions</strong> in <strong>three sections</strong>:
                                </p>

                                <ul class="list-disc list-inside space-y-2 text-white mb-8 ml-4">
                                        <li>Section 1 contains a text of general interest with 13 or 14 questions;</li>
                                        <li>Section 2 has a text related to work or training with 13 or 14 questions;</li>
                                        <li>Section 3 contains a more complex text on an academic topic with 13 or 14 questions.</li>
                                </ul>

                                <div class="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-8">
                                        <p class="text-white mb-4">
                                                There are <strong>14</strong> main types of question and the questions increase in
                                                difficulty as the test progresses. All questions are worth <strong>1 mark</strong>.
                                        </p>

                                        <p class="text-white mb-4">
                                                The questions will usually be formatted in one of the following ways:
                                        </p>

                                        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                                                <div class="text-white font-semibold">1) Diagram labeling</div>
                                                <div class="text-white font-semibold">8) Multiple choice</div>
                                                <div class="text-white font-semibold">2) Flow chart completion</div>
                                                <div class="text-white font-semibold">9) List selection</div>
                                                <div class="text-white font-semibold">3) Table completion</div>
                                                <div class="text-white font-semibold">10) Choosing a title</div>
                                                <div class="text-white font-semibold">4) Summary completion</div>
                                                <div class="text-white font-semibold">11) Categorising information</div>
                                                <div class="text-white font-semibold">5) Sentence completion</div>
                                                <div class="text-white font-semibold">12) Matching sentence endings</div>
                                                <div class="text-white font-semibold">6) True/False/Not given</div>
                                                <div class="text-white font-semibold">13) Matching paragraph headings</div>
                                                <div class="text-white font-semibold">7) Matching information</div>
                                                <div class="text-white font-semibold">14) Short answer questions</div>
                                        </div>

                                        <p class="text-white">
                                                Below you can see examples of the different styles of question you will encounter in the
                                                Reading Test.
                                        </p>
                                </div>

                                <div class="bg-yellow-900/30 border border-yellow-700 rounded-lg p-6">
                                        <p class="text-white">
                                                It's <u>very important</u> that you accurately follow the instructions for each set of
                                                questions: if the format of your answer differs from instructed, even if the correct
                                                information is included, your answer will be marked <u>WRONG</u>.
                                        </p>
                                </div>
                        </div>
                </section>

                <!-- Section 2: Example Reading Questions -->
                <section class="bg-gray-700/50 rounded-lg p-4 md:p-8 shadow-sm border border-gray-600 mb-8">
                        <h2 class="text-2xl font-bold text-center text-white mb-8">Example Reading Questions</h2>

                        <div class="max-w-4xl mx-auto">
                                <p class="text-white mb-8">Watch the 2 Reading question tutorial videos below:</p>

                                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div class="text-center">
                                                <h4 class="text-lg font-semibold text-white mb-3">1) Diagram labeling</h4>
                                                <img
                                                        src="/LESSONS/les02/02_R1-dem500.png"
                                                        alt="IELTS Reading Diagram Labeling"
                                                        class="w-full rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity mb-12"
                                                        onclick={() => openLightbox('/LESSONS/les02/02_R1-dem500.png')}
                                                />
                                                <a
                                                        href="https://insideielts.oppyo.com/video/embed/9btfzaywbo"
                                                        target="_blank"
                                                        title="InsideIELTS virtual examiner reading test preparation video"
                                                        class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
                                                >
                                                        Watch VE vid
                                                </a>
                                        </div>

                                        <div class="text-center">
                                                <h4 class="text-lg font-semibold text-white mb-3">2) Flow chart completion</h4>
                                                <img
                                                        src="/LESSONS/les02/02_R2-dem500.png"
                                                        alt="IELTS Reading Flow Chart Completion"
                                                        class="w-full rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity mb-12"
                                                        onclick={() => openLightbox('/LESSONS/les02/02_R2-dem500.png')}
                                                />
                                                <a
                                                        href="https://insideielts.oppyo.com/video/embed/p9o3f38rj9"
                                                        target="_blank"
                                                        title="InsideIELTS virtual examiner reading test preparation video"
                                                        class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
                                                >
                                                        Watch VE vid
                                                </a>
                                        </div>
                                </div>
                        </div>
                </section>

                <!-- Section 3: Reading Question Practice -->
                <section class="bg-teal-900/30 rounded-lg p-4 md:p-8 shadow-sm border border-teal-700 mb-8">
                        <h2 class="text-2xl font-bold text-center text-white mb-8">Reading Question Practice</h2>

                        <div class="max-w-6xl mx-auto">
                                <p class="text-white mb-4">
                                        <span class="inline-block bg-red-500 text-white font-bold px-2 py-1 rounded-md border-2 border-yellow-600 shadow-lg mr-2">
                                                TASK >
                                        </span>Complete these two Reading question practice exercises. Enter
                                        your answers on the answer sheets provided before checking your answers in the video
                                        beneath.
                                </p>
                                <p class="text-center text-white font-bold mb-8">
                                        [Don't watch the answer video until you have completed the practice exercises!]
                                </p>

                                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                                        <!-- Exercise 1: Diagram Labeling -->
                                        <div class="bg-gray-800 rounded-lg p-6 border border-gray-600">
                                                <h4 class="text-lg font-semibold text-white mb-4 text-center">
                                                        1) Diagram labeling
                                                </h4>
                                                <img
                                                        src="/LESSONS/les02/Reading_Diagcompletion-prac.png"
                                                        alt="Reading diagram labeling practice"
                                                        class="w-full rounded border border-gray-500 mb-8 cursor-pointer"
                                                        onclick={() => openLightbox('/LESSONS/les02/Reading_Diagcompletion-prac.png')}
                                                />

                                                <div class="text-center mb-8">
                                                        <div class="mb-4">
                                                                <p class="text-teal-600 dark:text-teal-400  text-lg font-bold mb-2">
                                                                        Beat the clock - {formatTime(timerDiagram)}
                                                                </p>
                                                                <div class="flex gap-2 justify-center">
                                                                        <button
                                                                                onclick={isRunningDiagram ? stopDiagramTimer : startDiagramTimer}
                                                                                class="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-3 rounded text-sm transition-colors"
                                                                                disabled={timerDiagram <= 0}
                                                                        >
                                                                                {isRunningDiagram ? 'Stop' : 'Start'}
                                                                        </button>
                                                                        <button
                                                                                onclick={resetDiagramTimer}
                                                                                class="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-sm transition-colors"
                                                                        >
                                                                                Reset
                                                                        </button>
                                                                </div>
                                                        </div>
                                                </div>

                                                <div class="text-center">
                                                        <p class="text-white mb-4 font-semibold">Answer Sheet</p>
                                                        <div class="flex flex-col gap-3 max-w-xs mx-auto">
                                                                <div class="flex items-center gap-3">
                                                                        <span class="text-white text-sm font-medium w-8">Q1</span>
                                                                        <input 
                                                                                type="text" 
                                                                                bind:value={q1}
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
                                                                                class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm text-left"
                                                                        />
                                                                </div>
                                                        </div>

                                                        <!-- Show Answers Button -->
                                                        <div class="text-center mt-4 mb-4">
                                                                <button
                                                                        type="button"
                                                                        onclick={toggleDiagramAnswers}
                                                                        class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm transition-colors mt-6 mb-8"
                                                                >
                                                                        {showAnswersDiagram ? 'Hide Answers' : 'Show Answers'}
                                                                </button>
                                                        </div>

                                                        <!-- Answers Display -->
                                                        {#if showAnswersDiagram}
                                                                <div class="bg-gray-700 rounded-lg p-4 mt-4 border border-gray-600">
                                                                        <h4 class="text-lg font-semibold text-white mb-3 text-center">Answers</h4>
                                                                        <div class="space-y-2 text-sm">
                                                                                <div class="p-2 rounded border border-gray-600">
                                                                                        <div class="font-medium text-white">Q1: coal</div>
                                                                                </div>
                                                                                <div class="p-2 rounded border border-gray-600">
                                                                                        <div class="font-medium text-white">Q2: furnace</div>
                                                                                </div>
                                                                                <div class="p-2 rounded border border-gray-600">
                                                                                        <div class="font-medium text-white">Q3: gas</div>
                                                                                </div>
                                                                                <div class="p-2 rounded border border-gray-600">
                                                                                        <div class="font-medium text-white">Q4: pipes</div>
                                                                                </div>
                                                                                <div class="p-2 rounded border border-gray-600">
                                                                                        <div class="font-medium text-white">Q5: turbine</div>
                                                                                </div>
                                                                                <div class="p-2 rounded border border-gray-600">
                                                                                        <div class="font-medium text-white">Q6: electricity</div>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        {/if}
                                                </div>

                                                <div class="mt-6 text-center">
                                                        <p class="text-white mb-2">Answer video</p>
                                                        <video controls class="w-full rounded border border-gray-500">
                                                                <source src="/LESSONS/les02/R02_answervid1.mp4" type="video/mp4" />
                                                                Your browser does not support the video tag.
                                                        </video>
                                                </div>
                                        </div>

                                        <!-- Exercise 2: Flow Chart Completion -->
                                        <div class="bg-gray-800 rounded-lg p-6 border border-gray-600">
                                                <h4 class="text-lg font-semibold text-white mb-4 text-center">
                                                        2) Flow chart completion
                                                </h4>
                                                <img
                                                        src="/LESSONS/les02/Reading_Flowchart-prac.png"
                                                        alt="Reading flow chart completion practice"
                                                        class="w-full rounded border border-gray-500 mb-8 cursor-pointer"
                                                        onclick={() => openLightbox('/LESSONS/les02/Reading_Flowchart-prac.png')}
                                                />

                                                <div class="text-center mb-8">
                                                        <div class="mb-4">
                                                                <p class="text-teal-600 dark:text-teal-400  text-lg font-bold mb-2">
                                                                        Beat the clock - {formatTime(timerFlowchart)}
                                                                </p>
                                                                <div class="flex gap-2 justify-center">
                                                                        <button
                                                                                onclick={isRunningFlowchart ? stopFlowchartTimer : startFlowchartTimer}
                                                                                class="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-3 rounded text-sm transition-colors"
                                                                                disabled={timerFlowchart <= 0}
                                                                        >
                                                                                {isRunningFlowchart ? 'Stop' : 'Start'}
                                                                        </button>
                                                                        <button
                                                                                onclick={resetFlowchartTimer}
                                                                                class="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-sm transition-colors"
                                                                        >
                                                                                Reset
                                                                        </button>
                                                                </div>
                                                        </div>
                                                </div>

                                                <div class="text-center">
                                                        <p class="text-white mb-3 font-semibold">Answer Sheet</p>
                                                        <div class="flex flex-col gap-3 max-w-xs mx-auto">
                                                                <div class="flex items-center gap-3">
                                                                        <span class="text-white text-sm font-medium w-8">Q22</span>
                                                                        <input 
                                                                                type="text" 
                                                                                bind:value={q22}
                                                                                class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm text-left"
                                                                        />
                                                                </div>
                                                                <div class="flex items-center gap-3">
                                                                        <span class="text-white text-sm font-medium w-8">Q23</span>
                                                                        <input 
                                                                                type="text" 
                                                                                bind:value={q23}
                                                                                class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm text-left"
                                                                        />
                                                                </div>
                                                                <div class="flex items-center gap-3">
                                                                        <span class="text-white text-sm font-medium w-8">Q24</span>
                                                                        <input 
                                                                                type="text" 
                                                                                bind:value={q24}
                                                                                class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm text-left"
                                                                        />
                                                                </div>
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
                                                        </div>

                                                        <!-- Show Answers Button -->
                                                        <div class="text-center mt-4 mb-4">
                                                                <button
                                                                        type="button"
                                                                        onclick={toggleFlowchartAnswers}
                                                                        class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm transition-colors mt-6 mb-8"
                                                                >
                                                                        {showAnswersFlowchart ? 'Hide Answers' : 'Show Answers'}
                                                                </button>
                                                        </div>

                                                        <!-- Answers Display -->
                                                        {#if showAnswersFlowchart}
                                                                <div class="bg-gray-700 rounded-lg p-4 mt-4 border border-gray-600">
                                                                        <h4 class="text-lg font-semibold text-white mb-3 text-center">Answers</h4>
                                                                        <div class="space-y-2 text-sm">
                                                                                <div class="p-2 rounded border border-gray-600">
                                                                                        <div class="font-medium text-white">Q22: planning</div>
                                                                                </div>
                                                                                <div class="p-2 rounded border border-gray-600">
                                                                                        <div class="font-medium text-white">Q23: research</div>
                                                                                </div>
                                                                                <div class="p-2 rounded border border-gray-600">
                                                                                        <div class="font-medium text-white">Q24: design</div>
                                                                                </div>
                                                                                <div class="p-2 rounded border border-gray-600">
                                                                                        <div class="font-medium text-white">Q25: testing</div>
                                                                                </div>
                                                                                <div class="p-2 rounded border border-gray-600">
                                                                                        <div class="font-medium text-white">Q26: production</div>
                                                                                </div>
                                                                                <div class="p-2 rounded border border-gray-600">
                                                                                        <div class="font-medium text-white">Q27: marketing</div>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        {/if}
                                                </div>

                                                <div class="mt-6 text-center">
                                                        <p class="text-white mb-2">Answer video</p>
                                                        <video controls class="w-full rounded border border-gray-500">
                                                                <source src="/LESSONS/les02/R02_answervid2.mp4" type="video/mp4" />
                                                                Your browser does not support the video tag.
                                                        </video>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </section>

                <!-- Footer Navigation -->
                <div class="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
                        <div class="flex justify-between items-center">
                                <a
                                        href="/IETPP#lesson-02"
                                        class="text-teal-600 dark:text-teal-400 hover:underline font-semibold"
                                        data-sveltekit-reload
                                >
                                        ← Back to Course Contents
                                </a>
                                <a
                                        href="/IETPP/lesson-03"
                                        class="text-teal-600 dark:text-teal-400 hover:underline font-semibold"
                                        data-sveltekit-reload
                                >
                                        Next Lesson →
                                </a>
                        </div>
                </div>
        </div>
</div>

<!-- Lightbox Modal -->
{#if lightboxOpen}
        <div
                class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                onclick={closeLightbox}
        >
                <div class="max-w-4xl max-h-full">
                        <img
                                src={lightboxImage}
                                alt="Enlarged view"
                                class="max-w-full max-h-full object-contain rounded"
                                onclick={(e) => e.stopPropagation()}
                        />
                </div>
        </div>
{/if}