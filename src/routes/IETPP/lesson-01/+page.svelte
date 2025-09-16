<script lang="ts">
        import { onMount } from 'svelte';

        let lightboxOpen = false;
        let lightboxImage = '';

        // Answer input variables
        let q17 = '', q18 = '', q19 = '', q20 = '';
        let q16 = '', q17_diagram = '', q18_diagram = '', q19_diagram = '', q20_diagram = '';
        let q27 = '', q28 = '', q29 = '', q30 = '';
        
        // Show answers states
        let showAnswersMissing = false;
        let showAnswersDiagram = false;
        let showAnswersMatching = false;

        function openLightbox(imageSrc: string) {
                lightboxImage = imageSrc;
                lightboxOpen = true;
        }

        function closeLightbox() {
                lightboxOpen = false;
                lightboxImage = '';
        }

        function toggleMissingAnswers() {
                showAnswersMissing = !showAnswersMissing;
        }

        function toggleDiagramAnswers() {
                showAnswersDiagram = !showAnswersDiagram;
        }

        function toggleMatchingAnswers() {
                showAnswersMatching = !showAnswersMatching;
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
        <title>IETPP - Lesson 01: Introduction to the Listening Test | InsideIELTS</title>
        <meta
                name="description"
                content="Learn IELTS Listening test format, question types, and practice with authentic examples. Master multiple choice, short answer, and sentence completion questions."
        />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
        <!-- Lesson Header -->
        <div class="max-w-5xl container mx-auto px-3 md:px-6 py-8">
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
                        <div class="text-center">
                                <div class="text-xs text-left text-teal-600 dark:text-teal-400 mb-4">
                                        IE2401_01
                                </div>
                                <h1 class="text-3xl font-bold text-white mb-2">
                                        Introduction to the Listening Test
                                </h1>
                                <!-- <p class="text-white italic">(30 mins)</p> -->
                        </div>

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
        </div>

        <!-- Page Content -->
        <div style="max-width: 1200px;" class="mx-auto px-3 md:px-6 py-8">
                <!-- Lesson Content Overview -->
                <!-- <section class="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700 mb-8">
                        <h2 class="text-xl font-semibold mb-4 text-white">Lesson Content:</h2>
                        <ul class="list-disc text-lg list-inside space-y-2 text-white">
                                <li>Listening Test Format and Question types</li>
                                <li>Example Listening Test questions</li>
                                <li>Listening Test question practice</li>
                        </ul>
                </section>
 -->
                <section class="mb-12">
                        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                                <h2 class="text-2xl text-center font-bold text-gray-800 dark:text-white mb-6">
                                        IELTS Listening Test Format
                                </h2>

                                <div class="space-y-6">
                                        <div class="border-l-4 border-blue-500 pl-6">
                                                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Test Duration</h3>
                                                <p class="text-gray-700 dark:text-gray-300">40 minutes total - approx. 30 mins listening time + 10 minutes for answer transfer at the end of the test.</p>
                                        </div>

                                        <div class="border-l-4 border-green-500 pl-6">
                                                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Test Structure</h3>
                                                <p class="text-gray-700 dark:text-gray-300 mb-6">
                                                        The listening test is made up of 40 questions in four sections:
                                                </p>

                                                <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-8 ml-4">
                                                        <li>Section 1 takes the form of a conversation between two people;</li>
                                                        <li>Section 2 is a monologue based on social topics and situations;</li>
                                                        <li>Section 3 of the listening test is a conversation between up to four people;</li>
                                                        <li>Section 4 will be a monologue set in an educational context.</li>
                                                </ul>
                                        </div>

                                        <div class="border-l-4 border-purple-500 pl-6">
                                                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Scoring</h3>
                                                <p class="text-gray-700 dark:text-gray-300">The listening test is scored out of /40. 1 mark for each question.</p>
                                        </div>
                                </div>
                        </div>
                </section>
                
                <!-- Section 1: Listening Test Format and Question Types -->
                <section class="bg-blue-800/25 rounded-lg p-4 md:p-8 shadow-sm border border-teal-700 mb-8">
                        <h2 class="text-2xl font-bold text-center text-white mb-8">
                                Listening Test Question types
                        </h2>

                        <div class="max-w-4xl mx-auto">
                                                 

                                <div class="bg-gray-800 rounded-lg p-6 text-lg border border-gray-700 mb-8">
                                        <p class="text-white mb-6">
                                                There are <strong>6</strong> main types of question and the questions increase in
                                                difficulty as the test progresses. All questions are worth <strong>1 mark</strong>.
                                        </p>

                                        <p class="text-white mt-4 mb-4">
                                                The questions will be formatted in one of the following ways:
                                        </p>

                                        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
                                                <div class="text-white font-semibold">1) Missing information</div>
                                                <div class="text-white font-semibold">2) Diagram labeling</div>
                                                <div class="text-white font-semibold">3) Matching information</div>
                                                <div class="text-white font-semibold">4) Multiple choice</div>
                                                <div class="text-white font-semibold">5) Sentence completion</div>
                                                <div class="text-white font-semibold">6) Short answer question</div>
                                        </div>

                                        <p class="text-white">
                                                Examples of all these questions are shown on the <a href= "/listening"
                                                                                                    class="text-white hover:text-teal-600 dark:text-white dark:hover:text-teal-400">LISTENING</a> practice page.
                                        </p>
                                </div>
                                <div class="flex justify-center mt-12 mb-12">
                                        <a
                                                href="https://insideielts.oppyo.com/video/embed/ur9tr7bgfl"
                                                target="_blank"
                                                title="InsideIELTS virtual examiner reading test preparation video"
                                                class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
                                        >
                                                Virtual Examiner Video
                                        </a>
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

                <!-- Section 2: Example Listening Questions -->
                <section class="bg-teal-700/25 rounded-lg p-4 md:p-8 shadow-sm border border-teal-600 mb-8">
                        <h2 class="text-2xl font-bold text-center text-white mb-8">Example Listening Questions</h2>

                        <div class="max-w-4xl mx-auto">
                                <p class="text-white mb-8">Watch the 3 Listening question tutorial videos below:</p>

                                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        <div class="text-center">
                                                <h4 class="text-lg font-semibold text-white mb-3">1) Missing information</h4>
                                                <img
                                                        src="/LESSONS/les01/01_L1-dem.png"
                                                        alt="IELTS Listening Missing Information"
                                                        class="w-full rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity mb-8"
                                                        onclick={() => openLightbox('/LESSONS/les01/01_L1-dem.png')}
                                                />
                                                <a
                                                        href="https://insideielts.oppyo.com/video/embed/bbukky49j3"
                                                        target="_blank"
                                                        title="InsideIELTS virtual examiner listening test preparation video"
                                                        class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
                                                >
                                                        Watch VE vid
                                                </a>
                                        </div>

                                        <div class="text-center">
                                                <h4 class="text-lg font-semibold text-white mb-3">2) Diagram completion</h4>
                                                <img
                                                        src="/LESSONS/les01/01_L2-dem.png"
                                                        alt="IELTS Listening Diagram Completion"
                                                        class="w-full rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity mb-8"
                                                        onclick={() => openLightbox('/LESSONS/les01/01_L2-dem.png')}
                                                />
                                                <a
                                                        href="https://insideielts.oppyo.com/video/embed/tletdevf8z"
                                                        target="_blank"
                                                        title="InsideIELTS virtual examiner listening test preparation video"
                                                        class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
                                                >
                                                        Watch VE vid
                                                </a>
                                        </div>

                                        <div class="text-center">
                                                <h4 class="text-lg font-semibold text-white mb-3">3) Matching information</h4>
                                                <img
                                                        src="/LESSONS/les01/01_L3-dem.png"
                                                        alt="IELTS Listening Matching Information"
                                                        class="w-full rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity mb-8"
                                                        onclick={() => openLightbox('/LESSONS/les01/01_L3-dem.png')}
                                                />
                                                <a
                                                        href="https://insideielts.oppyo.com/video/embed/yapqthfd33"
                                                        target="_blank"
                                                        title="InsideIELTS virtual examiner listening test preparation video"
                                                        class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
                                                >
                                                        Watch VE vid
                                                </a>
                                        </div>
                                </div>
                        </div>
                </section>

                <!-- Section 3: Listening Question Practice -->
                <section class="bg-emerald-700/40 rounded-lg p-4 md:p-8 shadow-sm border border-teal-500 mb-8">
                        <h2 class="text-2xl font-bold text-center text-white mb-8">Listening Question Practice</h2>

                        <div class="max-w-6xl mx-auto">
                                <p class="text-white mb-4">
                                        <span class="inline-block bg-red-600 text-white font-bold px-2 py-1 rounded-md border-2 border-yellow-600 shadow-lg mr-2">
                                                TASK >
                                        </span> Complete these three Listening question practice exercises. Enter
                                        your answers on the answer sheets provided before checking your answers in the video
                                        beneath.
                                </p>
                                <p class="text-center text-white font-bold mb-8">
                                        [Don't watch the answer video until you have completed the practice exercises!]
                                </p>

                                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                                        <!-- Exercise 1: Missing Information -->
                                        <div class="bg-gray-800 rounded-lg p-6 border border-gray-600">
                                                <h4 class="text-lg font-semibold text-white mb-4 text-center">
                                                        1) Missing information
                                                </h4>
                                                <img
                                                        src="/LESSONS/les01/01_L1-prac.png"
                                                        alt="Listening missing information practice"
                                                        class="w-full rounded border border-gray-500 mb-4 cursor-pointer"
                                                        onclick={() => openLightbox('/LESSONS/les01/01_L1-prac.png')}
                                                />

                                                <div class="text-center mb-4">
                                                        <p class="text-white mb-2">Q17 - 20 audio</p>
                                                        <audio
                                                                controls
                                                                class="w-full bg-gray-600 rounded"
                                                                src="/LESSONS/les01/01_L1-prac.mp3"
                                                        >
                                                                Your browser does not support the audio element.
                                                        </audio>
                                                </div>

                                                <div class="text-center">
                                                        <p class="text-white mb-3 font-semibold">Answer Sheet</p>
                                                        <div class="flex flex-col gap-3 max-w-xs mx-auto">
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
                                                                                class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm text-left"
                                                                        />
                                                                </div>
                                                        </div>
                                                        
                                                        <!-- Show Answers Button -->
                                                        <div class="text-center mt-8 mb-4">
                                                                <button
                                                                        type="button"
                                                                        onclick={toggleMissingAnswers}
                                                                        class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm transition-colors"
                                                                >
                                                                        {showAnswersMissing ? 'Hide Answers' : 'Show Answers'}
                                                                </button>
                                                        </div>
                                                        
                                                        <!-- Answers Display -->
                                                        {#if showAnswersMissing}
                                                                <div class="bg-gray-700 rounded-lg p-4 mt-4 border border-gray-600">
                                                                        <h4 class="text-lg font-semibold text-white mb-3 text-center">Answers</h4>
                                                                        <div class="space-y-2 text-sm">
                                                                                <div class="p-2 rounded border border-gray-600">
                                                                                        <div class="font-medium text-white">Q17: October 19th</div>
                                                                                </div>
                                                                                <div class="p-2 rounded border border-gray-600">
                                                                                        <div class="font-medium text-white">Q18: 7pm</div>
                                                                                </div>
                                                                                <div class="p-2 rounded border border-gray-600">
                                                                                        <div class="font-medium text-white">Q19: Monday Thursday</div>
                                                                                </div>
                                                                                <div class="p-2 rounded border border-gray-600">
                                                                                        <div class="font-medium text-white">Q20: 18</div>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        {/if}
                                                </div>
                                        </div>

                                        <!-- Exercise 2: Diagram Completion -->
                                        <div class="bg-gray-800 rounded-lg p-6 border border-gray-600">
                                                <h4 class="text-lg font-semibold text-white mb-4 text-center">2) Diagram completion</h4>
                                                <img
                                                        src="/LESSONS/les01/01_L2-prac.png"
                                                        alt="Listening diagram completion practice"
                                                        class="w-full rounded border border-gray-500 mb-4 cursor-pointer"
                                                        onclick={() => openLightbox('/LESSONS/les01/01_L2-prac.png')}
                                                />

                                                <div class="text-center mb-4">
                                                        <p class="text-white mb-2">Q16 - 20 audio</p>
                                                        <audio
                                                                controls
                                                                class="w-full bg-gray-600 rounded"
                                                                src="/LESSONS/les01/01_L2-prac.mp3"
                                                        >
                                                                Your browser does not support the audio element.
                                                        </audio>
                                                </div>

                                                <div class="text-center">
                                                        <p class="text-white mb-3 font-semibold">Answer Sheet</p>
                                                        <div class="flex flex-col gap-3 max-w-xs mx-auto">
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
                                                                                bind:value={q17_diagram}
                                                                                class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm text-left"
                                                                        />
                                                                </div>
                                                                <div class="flex items-center gap-3">
                                                                        <span class="text-white text-sm font-medium w-8">Q18</span>
                                                                        <input 
                                                                                type="text" 
                                                                                bind:value={q18_diagram}
                                                                                class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm text-left"
                                                                        />
                                                                </div>
                                                                <div class="flex items-center gap-3">
                                                                        <span class="text-white text-sm font-medium w-8">Q19</span>
                                                                        <input 
                                                                                type="text" 
                                                                                bind:value={q19_diagram}
                                                                                class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm text-left"
                                                                        />
                                                                </div>
                                                                <div class="flex items-center gap-3">
                                                                        <span class="text-white text-sm font-medium w-8">Q20</span>
                                                                        <input 
                                                                                type="text" 
                                                                                bind:value={q20_diagram}
                                                                                class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm text-left"
                                                                        />
                                                                </div>
                                                        </div>
                                                        
                                                        <!-- Show Answers Button -->
                                                        <div class="text-center mt-8 mb-4">
                                                                <button
                                                                        type="button"
                                                                        onclick={toggleDiagramAnswers}
                                                                        class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm transition-colors"
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
                                                                                        <div class="font-medium text-white">Q16: h</div>
                                                                                </div>
                                                                                <div class="p-2 rounded border border-gray-600">
                                                                                        <div class="font-medium text-white">Q17: d</div>
                                                                                </div>
                                                                                <div class="p-2 rounded border border-gray-600">
                                                                                        <div class="font-medium text-white">Q18: f</div>
                                                                                </div>
                                                                                <div class="p-2 rounded border border-gray-600">
                                                                                        <div class="font-medium text-white">Q19: a</div>
                                                                                </div>
                                                                                <div class="p-2 rounded border border-gray-600">
                                                                                        <div class="font-medium text-white">Q20: e</div>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        {/if}
                                                </div>
                                        </div>

                                        <!-- Exercise 3: Matching Information -->
                                        <div class="bg-gray-800 rounded-lg p-6 border border-gray-600">
                                                <h4 class="text-lg font-semibold text-white mb-4 text-center">
                                                        3) Matching information
                                                </h4>
                                                <img
                                                        src="/LESSONS/les01/01_L3-prac.png"
                                                        alt="Listening matching information practice"
                                                        class="w-full rounded border border-gray-500 mb-4 cursor-pointer"
                                                        onclick={() => openLightbox('/LESSONS/les01/01_L3-prac.png')}
                                                />

                                                <div class="text-center mb-4">
                                                        <p class="text-white mb-2">Q27 - 30 audio</p>
                                                        <audio
                                                                controls
                                                                class="w-full bg-gray-600 rounded"
                                                                src="/LESSONS/les01/01_L3-prac.mp3"
                                                        >
                                                                Your browser does not support the audio element.
                                                        </audio>
                                                </div>

                                                <div class="text-center">
                                                        <p class="text-white mb-3 font-semibold">Answer Sheet</p>
                                                        <div class="flex flex-col gap-3 max-w-xs mx-auto">
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
                                                                                class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm text-left"
                                                                        />
                                                                </div>
                                                        </div>
                                                        
                                                        <!-- Show Answers Button -->
                                                        <div class="text-center mt-8 mb-4">
                                                                <button
                                                                        type="button"
                                                                        onclick={toggleMatchingAnswers}
                                                                        class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm transition-colors"
                                                                >
                                                                        {showAnswersMatching ? 'Hide Answers' : 'Show Answers'}
                                                                </button>
                                                        </div>
                                                        
                                                        <!-- Answers Display -->
                                                        {#if showAnswersMatching}
                                                                <div class="bg-gray-700 rounded-lg p-4 mt-4 border border-gray-600">
                                                                        <h4 class="text-lg font-semibold text-white mb-3 text-center">Answers</h4>
                                                                        <div class="space-y-2 text-sm">
                                                                                <div class="p-2 rounded border border-gray-600">
                                                                                        <div class="font-medium text-white">Q27: d</div>
                                                                                </div>
                                                                                <div class="p-2 rounded border border-gray-600">
                                                                                        <div class="font-medium text-white">Q28: b</div>
                                                                                </div>
                                                                                <div class="p-2 rounded border border-gray-600">
                                                                                        <div class="font-medium text-white">Q29: e</div>
                                                                                </div>
                                                                                <div class="p-2 rounded border border-gray-600">
                                                                                        <div class="font-medium text-white">Q30: f</div>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        {/if}
                                                </div>
                                        </div>
                                </div>

                                <!-- Answer Video -->
                                <div class="text-center">
                                        <h3 class="text-xl font-semibold text-white mb-4">Answers</h3>
                                        <a
                                                href="/LESSONS/les01/L01_answervid.mp4"
                                                target="_blank"
                                                title="InsideIELTS virtual examiner listening test answer video"
                                                class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
                                        >
                                                Virtual Examiner Video
                                        </a>
                                </div>
                        </div>
                </section>


                <!-- End of Lesson -->
                <section class="text-center py-8">
                          <!-- Footer Navigation -->
                        <div class="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
                                <div class="flex justify-between items-center">
                                        <a
                                                href="/IETPP#lesson-01"
                                                class="text-teal-600 dark:text-teal-400 hover:underline font-semibold"
                                                data-sveltekit-reload
                                        >
                                                ← Back to Contents
                                        </a>
                                       <p>End of Intro 01</p>
                                        <a
                                                href="/IETPP/lesson-01/lesson01-i"
                                                class="text-teal-600 dark:text-teal-400 hover:underline font-semibold"
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
                onclick={closeLightbox}
        >
                <div class="relative max-w-4xl max-h-full">
                        <button
                                class="absolute top-4 right-4 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-all z-10"
                                onclick={closeLightbox}
                        >
                                ×
                        </button>
                        <img
                                src={lightboxImage}
                                alt="Enlarged view"
                                class="max-w-full max-h-full object-contain rounded"
                                onclick={(e) => e.stopPropagation()}
                        />
                </div>
        </div>
{/if}