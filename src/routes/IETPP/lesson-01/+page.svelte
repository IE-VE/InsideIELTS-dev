<script lang="ts">
        import { onMount } from 'svelte';

        let lightboxOpen = false;
        let lightboxImage = '';

        // Answer input variables
        let q17 = '', q18 = '', q19 = '', q20 = '';
        let q16 = '', q17_diagram = '', q18_diagram = '', q19_diagram = '', q20_diagram = '';
        let q27 = '', q28 = '', q29 = '', q30 = '';
        
        // Results
        let showResults = false;
        let markingResults = {};

        function openLightbox(imageSrc: string) {
                lightboxImage = imageSrc;
                lightboxOpen = true;
        }

        function closeLightbox() {
                lightboxOpen = false;
                lightboxImage = '';
        }

        function checkAnswers() {
                const correctAnswers = {
                        // Missing information
                        q17: ['october 19th', 'october 19', '19th october', '19 october'],
                        q18: ['7pm', '7 pm', '19:00', 'seven pm'],
                        q19: ['monday thursday', 'thursday monday', 'monday and thursday'],
                        q20: ['18', 'eighteen'],
                        // Diagram completion
                        q16: ['h'],
                        q17_diagram: ['d'],
                        q18_diagram: ['f'],
                        q19_diagram: ['a'],
                        q20_diagram: ['e'],
                        // Matching information
                        q27: ['d'],
                        q28: ['b'],
                        q29: ['e'],
                        q30: ['f']
                };

                const userAnswers = {
                        q17, q18, q19, q20,
                        q16, q17_diagram, q18_diagram, q19_diagram, q20_diagram,
                        q27, q28, q29, q30
                };

                const results = {};
                let totalCorrect = 0;

                Object.entries(userAnswers).forEach(([key, answer]) => {
                        const userAnswer = answer.toLowerCase().trim();
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
                results.totalQuestions = 14;
                markingResults = results;
                showResults = true;
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
        <div class="container mx-auto px-6 py-8">
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
                        <div class="text-center">
                                <div class="text-[8px] md:text-[10px] text-left font-bold text-teal-600 dark:text-teal-400 mb-2">
                                        LESSON CODE: IE2401_01
                                </div>
                                <h1 class="text-3xl font-bold text-white mb-2">
                                        Introduction to the Listening Test
                                </h1>
                                <p class="text-white italic">(30 mins)</p>
                        </div>

                        <div class="text-center mt-6">
                                <a
                                        href="/IETPP"
                                        class="text-teal-600 dark:text-teal-400 hover:underline font-semibold"
                                >
                                        &lt; -- Back to Contents --&gt;
                                </a>
                        </div>
                </div>

                <!-- Lesson Content Overview -->
                <section class="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700 mb-8">
                        <h2 class="text-lg font-semibold mb-4 text-white">Lesson Content:</h2>
                        <ul class="list-disc list-inside space-y-2 text-white">
                                <li>Listening Test Format and Question types</li>
                                <li>Example Listening Test questions</li>
                                <li>Listening Test question practice</li>
                        </ul>
                </section>

                <!-- Section 1: Listening Test Format and Question Types -->
                <section class="bg-teal-900/30 rounded-lg p-8 shadow-sm border border-teal-700 mb-8">
                        <h2 class="text-2xl font-bold text-center text-white mb-8">
                                Listening Test Format and Question types
                        </h2>

                        <div class="max-w-4xl mx-auto">
                                <p class="text-white mb-6">
                                        The Listening Test is the first test that you will complete on test day. The test lasts
                                        for <strong>40 minutes</strong>. You have 30 minutes to listen to the recording and write
                                        your answers directly on the test booklet, and then a further 10 minutes at the end of the
                                        test to transfer your answers onto the answer sheet provided.
                                </p>

                                <div class="flex justify-center mb-6">
                                        <a
                                                href="https://insideielts.oppyo.com/video/embed/ur9tr7bgfl"
                                                target="_blank"
                                                title="InsideIELTS virtual examiner listening test preparation video"
                                                class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
                                        >
                                                Virtual Examiner Video
                                        </a>
                                </div>

                                <p class="text-white mb-6">
                                        The listening test is made up of <strong>40 questions</strong> in <strong>four sections</strong>:
                                </p>

                                <ul class="list-disc list-inside space-y-2 text-white mb-8 ml-4">
                                        <li>Section 1 takes the form of a conversation between two people;</li>
                                        <li>Section 2 is a monologue based on social topics and situations;</li>
                                        <li>Section 3 of the listening test is a conversation between up to four people;</li>
                                        <li>Section 4 will be a monologue set in an educational context.</li>
                                </ul>

                                <div class="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-8">
                                        <p class="text-white mb-4">
                                                There are <strong>6</strong> main types of question and the questions increase in
                                                difficulty as the test progresses. All questions are worth <strong>1 mark</strong>.
                                        </p>

                                        <p class="text-white mb-4">
                                                The questions will usually be formatted in one of the following ways:
                                        </p>

                                        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                                                <div class="text-white font-semibold">1) Missing information</div>
                                                <div class="text-white font-semibold">2) Diagram labeling</div>
                                                <div class="text-white font-semibold">3) Matching information</div>
                                                <div class="text-white font-semibold">4) Multiple choice</div>
                                                <div class="text-white font-semibold">5) Sentence completion</div>
                                                <div class="text-white font-semibold">6) Short answer question</div>
                                        </div>

                                        <p class="text-white">
                                                Below you can see examples of the different styles of question you will encounter in the
                                                Listening Test.
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

                <!-- Section 2: Example Listening Questions -->
                <section class="bg-gray-700/50 rounded-lg p-8 shadow-sm border border-gray-600 mb-8">
                        <h2 class="text-2xl font-bold text-center text-white mb-8">Example Listening Questions</h2>

                        <div class="max-w-4xl mx-auto">
                                <p class="text-white mb-8">Watch the 3 Listening question tutorial videos below:</p>

                                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        <div class="text-center">
                                                <h4 class="text-lg font-semibold text-white mb-3">1) Missing information</h4>
                                                <img
                                                        src="/LESSONS/les01/01_L1-dem.png"
                                                        alt="IELTS Listening Missing Information"
                                                        class="w-full rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity mb-4"
                                                        on:click={() => openLightbox('/LESSONS/les01/01_L1-dem.png')}
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
                                                        class="w-full rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity mb-4"
                                                        on:click={() => openLightbox('/LESSONS/les01/01_L2-dem.png')}
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
                                                        class="w-full rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity mb-4"
                                                        on:click={() => openLightbox('/LESSONS/les01/01_L3-dem.png')}
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
                <section class="bg-teal-900/30 rounded-lg p-8 shadow-sm border border-teal-700 mb-8">
                        <h2 class="text-2xl font-bold text-center text-white mb-8">Listening question practice</h2>

                        <div class="max-w-6xl mx-auto">
                                <p class="text-white mb-4">
                                        <strong>TASK</strong>: Complete these three Listening question practice exercises. Enter
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
                                                        on:click={() => openLightbox('/LESSONS/les01/01_L1-prac.png')}
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
                                                        <div class="space-y-2">
                                                                <input
                                                                        type="text"
                                                                        placeholder="Q17 - enter your answer"
                                                                        bind:value={q17}
                                                                        class="w-full px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 text-sm"
                                                                />
                                                                <input
                                                                        type="text"
                                                                        placeholder="Q18"
                                                                        bind:value={q18}
                                                                        class="w-full px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 text-sm"
                                                                />
                                                                <input
                                                                        type="text"
                                                                        placeholder="Q19"
                                                                        bind:value={q19}
                                                                        class="w-full px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 text-sm"
                                                                />
                                                                <input
                                                                        type="text"
                                                                        placeholder="Q20"
                                                                        bind:value={q20}
                                                                        class="w-full px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 text-sm"
                                                                />
                                                        </div>
                                                </div>
                                        </div>

                                        <!-- Exercise 2: Diagram Completion -->
                                        <div class="bg-gray-800 rounded-lg p-6 border border-gray-600">
                                                <h4 class="text-lg font-semibold text-white mb-4 text-center">2) Diagram completion</h4>
                                                <img
                                                        src="/LESSONS/les01/01_L2-prac.png"
                                                        alt="Listening diagram completion practice"
                                                        class="w-full rounded border border-gray-500 mb-4 cursor-pointer"
                                                        on:click={() => openLightbox('/LESSONS/les01/01_L2-prac.png')}
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
                                                        <div class="space-y-2">
                                                                <input
                                                                        type="text"
                                                                        placeholder="Q16 - enter your answer"
                                                                        bind:value={q16}
                                                                        class="w-full px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 text-sm"
                                                                />
                                                                <input
                                                                        type="text"
                                                                        placeholder="Q17"
                                                                        bind:value={q17_diagram}
                                                                        class="w-full px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 text-sm"
                                                                />
                                                                <input
                                                                        type="text"
                                                                        placeholder="Q18"
                                                                        bind:value={q18_diagram}
                                                                        class="w-full px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 text-sm"
                                                                />
                                                                <input
                                                                        type="text"
                                                                        placeholder="Q19"
                                                                        bind:value={q19_diagram}
                                                                        class="w-full px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 text-sm"
                                                                />
                                                                <input
                                                                        type="text"
                                                                        placeholder="Q20"
                                                                        bind:value={q20_diagram}
                                                                        class="w-full px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 text-sm"
                                                                />
                                                        </div>
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
                                                        on:click={() => openLightbox('/LESSONS/les01/01_L3-prac.png')}
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
                                                        <div class="space-y-2">
                                                                <input
                                                                        type="text"
                                                                        placeholder="Q27 - enter your answer"
                                                                        bind:value={q27}
                                                                        class="w-full px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 text-sm"
                                                                />
                                                                <input
                                                                        type="text"
                                                                        placeholder="Q28"
                                                                        bind:value={q28}
                                                                        class="w-full px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 text-sm"
                                                                />
                                                                <input
                                                                        type="text"
                                                                        placeholder="Q29"
                                                                        bind:value={q29}
                                                                        class="w-full px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 text-sm"
                                                                />
                                                                <input
                                                                        type="text"
                                                                        placeholder="Q30"
                                                                        bind:value={q30}
                                                                        class="w-full px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 text-sm"
                                                                />
                                                        </div>
                                                </div>
                                        </div>
                                </div>

                                <!-- Check My Answers Button -->
                                <div class="text-center mb-8">
                                        <button
                                                type="button"
                                                onclick={checkAnswers}
                                                class="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors"
                                        >
                                                Check My Answers
                                        </button>
                                </div>

                                <!-- Results Display -->
                                {#if showResults}
                                        <div class="bg-gray-800 rounded-lg p-6 mb-8 border border-gray-600">
                                                <h3 class="text-xl font-semibold text-white mb-6 text-center">Your Results</h3>
                                                
                                                <!-- Score Summary -->
                                                <div class="text-center mb-6">
                                                        <div class="text-3xl font-bold text-white mb-2">
                                                                {markingResults.totalCorrect}/{markingResults.totalQuestions}
                                                        </div>
                                                        <div class="text-lg text-gray-300">
                                                                {Math.round((markingResults.totalCorrect / markingResults.totalQuestions) * 100)}% Correct
                                                        </div>
                                                </div>

                                                <!-- Detailed Results -->
                                                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                                        <!-- Missing Information Results -->
                                                        <div>
                                                                <h4 class="text-lg font-semibold text-white mb-3 border-b border-gray-600 pb-2">Missing Information (Q17-Q20)</h4>
                                                                <div class="space-y-2 text-sm">
                                                                        {#each ['q17', 'q18', 'q19', 'q20'] as questionKey}
                                                                                <div class="flex items-center justify-between p-2 rounded border {markingResults[questionKey]?.isCorrect ? 'bg-green-900/20 border-green-800' : 'bg-red-900/20 border-red-800'}">
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

                                                        <!-- Diagram Completion Results -->
                                                        <div>
                                                                <h4 class="text-lg font-semibold text-white mb-3 border-b border-gray-600 pb-2">Diagram Completion (Q16-Q20)</h4>
                                                                <div class="space-y-2 text-sm">
                                                                        {#each ['q16', 'q17_diagram', 'q18_diagram', 'q19_diagram', 'q20_diagram'] as questionKey, index}
                                                                                <div class="flex items-center justify-between p-2 rounded border {markingResults[questionKey]?.isCorrect ? 'bg-green-900/20 border-green-800' : 'bg-red-900/20 border-red-800'}">
                                                                                        <div class="flex-1">
                                                                                                <div class="font-medium text-white">
                                                                                                        Q{16 + index}: "{markingResults[questionKey]?.userAnswer || '(blank)'}"
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

                                                        <!-- Matching Information Results -->
                                                        <div>
                                                                <h4 class="text-lg font-semibold text-white mb-3 border-b border-gray-600 pb-2">Matching Information (Q27-Q30)</h4>
                                                                <div class="space-y-2 text-sm">
                                                                        {#each ['q27', 'q28', 'q29', 'q30'] as questionKey}
                                                                                <div class="flex items-center justify-between p-2 rounded border {markingResults[questionKey]?.isCorrect ? 'bg-green-900/20 border-green-800' : 'bg-red-900/20 border-red-800'}">
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
                                        </div>
                                {/if}

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

                <!-- Skills Practice Links -->
                <section class="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700 mb-8">
                        <h2 class="text-xl font-semibold text-white mb-6 text-center">Skills Practice</h2>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <a
                                        href="/IETPP/lesson-01/multiple-choice"
                                        class="block bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-6 rounded text-center transition-colors"
                                >
                                        <div class="text-sm mb-1">01 (i)</div>
                                        <div>Multiple Choice</div>
                                        <div class="text-xs mt-1">(60 mins)</div>
                                </a>
                                <a
                                        href="/IETPP/lesson-01/short-answer"
                                        class="block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded text-center transition-colors"
                                >
                                        <div class="text-sm mb-1">01 (ii)</div>
                                        <div>Short Answer</div>
                                        <div class="text-xs mt-1">(60 mins)</div>
                                </a>
                                <a
                                        href="/IETPP/lesson-01/sentence-completion"
                                        class="block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-6 rounded text-center transition-colors"
                                >
                                        <div class="text-sm mb-1">01 (iii)</div>
                                        <div>Sentence Completion</div>
                                        <div class="text-xs mt-1">(40 mins)</div>
                                </a>
                        </div>
                </section>

                <!-- End of Lesson -->
                <section class="text-center py-8">
                        <p class="text-white mb-4">End of Intro Lesson 01</p>
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
                class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
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