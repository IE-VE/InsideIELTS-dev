<script lang="ts">
        import { onMount } from 'svelte';

        let currentSection = $state(1);
        let timeRemaining = $state(20 * 60); // 20 minutes in seconds
        let isTestStarted = $state(false);
        let isTestCompleted = $state(false);
        let showInstructions = $state(true);
        let answers: Record<number | string, string> = $state({});

        // Timer functionality
        let timer: number;
        let isActive = $state(false);

        // Question type categorization for analysis
        const questionTypes = {
                'paragraph_information': [1, 2, 3, 4, 5],
                'matching': [6, 7, 8],
                'sentence_completion': [9, 10, 11, 12, 13]
        };

        // Time tracking for incomplete answers
        let testStartTime = $state(null);
        let questionTimeStamps = $state({});
        let timeConstraintAnswers = $state([]);

        // Answer key for Forest Management passage
        const answerKey = {
                1: ['B'],
                2: ['A'],
                3: ['C'],
                4: ['E'],
                5: ['B'],
                6: ['B'],
                7: ['C'],
                8: ['C'],
                9: ['fire'],
                10: ['nutrients'],
                11: ['cavities'],
                12: ['hawthorn'],
                13: ['rare']
        };

        // Results state
        let showAnswers = $state(false);
        let results = $state(null);
        let hasMarked = $state(false);
        let isMarking = $state(false);
        let showMarkingModal = $state(false);

        // Highlighting state
        let highlightingEnabled = $state(false);
        let highlightedRanges = $state([]);
        let highlightColors = ['bg-yellow-200', 'bg-green-200', 'bg-blue-200', 'bg-pink-200', 'bg-purple-200'];
        let currentColorIndex = $state(0);

        // Modal state for answers
        let showAnswersModal = $state(false);

        // Modal functions for answers
        function openAnswersModal() {
                showAnswersModal = true;
                document.body.style.overflow = 'hidden';
        }

        function closeAnswersModal() {
                showAnswersModal = false;
                document.body.style.overflow = 'auto';
        }

        // Marking modal functions
        function closeMarkingModal() {
                showMarkingModal = false;
                document.body.style.overflow = 'auto';
        }

        function handleMarkingBackdropClick(event) {
                if (event.target === event.currentTarget) {
                        closeMarkingModal();
                }
        }

        function handleAnswersKeydown(event) {
                if (event.key === 'Escape' && showAnswersModal) {
                        closeAnswersModal();
                }
        }

        function handleAnswersBackdropClick(event) {
                if (event.target === event.currentTarget) {
                        closeAnswersModal();
                }
        }

        // Question data based on the new HTML file
        const paragraphInfoQuestions = [
                { num: 1, text: "bad outcomes for a forest when people focus only on its financial reward" },
                { num: 2, text: "reference to the aspects of any tree that contribute to its worth" },
                { num: 3, text: "mention of the potential use of wood to help run vehicles" },
                { num: 4, text: "examples of insects that attack trees" },
                { num: 5, text: "an alternative name for trees that produce low-use wood" }
        ];

        const matchingQuestions = [
                { num: 6, text: "to remove trees that are diseased" },
                { num: 7, text: "to generate income across a number of years" },
                { num: 8, text: "to create a forest whose trees are close in age" }
        ];

        const matchingOptions = [
                { label: "A", text: "a TSI Cut" },
                { label: "B", text: "a Salvage Cut" },
                { label: "C", text: "a Shelterwood Cut" }
        ];

        const sentenceCompletionQuestions = [
                { num: 9, text: "Some dead wood is removed to avoid the possibility of" },
                { num: 10, text: "The from the tops of cut trees can help improve soil quality. " },
                { num: 11, text: "Some damaged trees should be left, as their provide habitats for a range of creatures. " },
                { num: 12, text: "Some trees that are small, such as , are a source of food for animals and insects. " },
                { num: 13, text: "Any trees that are should be left to grow, as they add to the variety of species in the forest. " }
        ];

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
                timeRemaining = 20 * 60; // Reset to 20 minutes
                answers = {}; // Clear answers
                isTestCompleted = false;
                showAnswers = false;
                hasMarked = false;
        }

        // Enhanced analysis function with question type breakdown
        function analyzeAnswersByType(answers, questionResults) {
                const typeAnalysis = {};
                const questionTypeNames = {
                        'paragraph_information': 'Paragraph Information',
                        'matching': 'Matching',
                        'sentence_completion': 'Sentence Completion'
                };

                Object.entries(questionTypes).forEach(([type, questionNumbers]) => {
                        let correct = 0;
                        let total = 0;
                        let spellingErrors = 0;
                        let timeouts = 0;
                        let blankAnswers = 0;
                        const incorrectQuestions = [];

                        questionNumbers.forEach(num => {
                                const key = num;
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
                                                        // Check for spelling errors (close matches)
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

        // Simple string similarity calculation (Levenshtein distance)
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

        // Function to start test timer
        function startTestTimer() {
                if (!testStartTime) {
                        testStartTime = Date.now();
                }
        }

        // Function to check for time constraint issues
        function checkTimeConstraints() {
                const currentTime = Date.now();
                const testDuration = 20 * 60 * 1000; // 20 minutes in milliseconds

                if (testStartTime && (currentTime - testStartTime) > testDuration) {
                        // Find questions that were never answered due to time
                        Object.keys(answerKey).forEach(key => {
                                const questionNum = parseInt(key);
                                if (!answers[key] && !timeConstraintAnswers.includes(questionNum)) {
                                        timeConstraintAnswers = [...timeConstraintAnswers, questionNum];
                                }
                        });
                }
        }

        // Highlighting functions
        function toggleHighlighting() {
                highlightingEnabled = !highlightingEnabled;
                if (!highlightingEnabled) {
                        // Clear any active selection when disabling
                        window.getSelection()?.removeAllRanges();
                }
        }

        function handleTextSelection() {
                if (!highlightingEnabled) return;

                const selection = window.getSelection();
                if (selection && selection.toString().trim() && !selection.isCollapsed) {
                        const range = selection.getRangeAt(0);

                        // Check if selection is within a passage container
                        const passageContainer = range.commonAncestorContainer.nodeType === Node.TEXT_NODE
                                ? range.commonAncestorContainer.parentElement?.closest('.passage-text')
                                : range.commonAncestorContainer.closest?.('.passage-text');

                        if (passageContainer) {
                                highlightSelectedText(range);
                        }

                        selection.removeAllRanges();
                }
        }

        function highlightSelectedText(range) {
                const span = document.createElement('span');
                span.className = `highlight-text ${highlightColors[currentColorIndex]} dark:opacity-80 cursor-pointer`;
                span.setAttribute('data-highlight-id', Date.now().toString());
                span.style.color = '#000000';

                try {
                        range.surroundContents(span);

                        // Store highlight info
                        highlightedRanges = [...highlightedRanges, {
                                id: span.getAttribute('data-highlight-id'),
                                text: span.textContent,
                                color: highlightColors[currentColorIndex]
                        }];

                        // Cycle to next color
                        currentColorIndex = (currentColorIndex + 1) % highlightColors.length;

                        // Add click listener to remove highlight
                        span.addEventListener('click', (e) => {
                                e.stopPropagation();
                                removeHighlight(span);
                        });
                } catch (error) {
                        // If surroundContents fails, try a different approach
                        console.warn('Could not highlight complex selection:', error);
                }
        }

        function removeHighlight(span) {
                const highlightId = span.getAttribute('data-highlight-id');

                // Remove from state
                highlightedRanges = highlightedRanges.filter(h => h.id !== highlightId);

                // Replace span with its text content
                const parent = span.parentNode;
                const textNode = document.createTextNode(span.textContent);
                parent?.replaceChild(textNode, span);

                // Normalize to merge adjacent text nodes
                parent?.normalize();
        }

        function clearAllHighlights() {
                document.querySelectorAll('.highlight-text').forEach(span => {
                        const parent = span.parentNode;
                        const textNode = document.createTextNode(span.textContent);
                        parent?.replaceChild(textNode, span);
                        parent?.normalize();
                });

                highlightedRanges = [];
                currentColorIndex = 0;
        }

        // Marking functions
        async function markTest() {
                isMarking = true;

                // Show loading for 3 seconds
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

                // Perform detailed analysis by question type
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

        function viewAnswers() {
                if (!hasMarked) {
                        markTest();
                }
                showAnswers = true;
        }

        function hideAnswers() {
                showAnswers = false;
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

        function updateAnswer(questionNumber: number | string, value: string) {
                // Record timestamp for time tracking
                if (!questionTimeStamps[questionNumber]) {
                        questionTimeStamps[questionNumber] = Date.now();
                }

                answers[questionNumber] = value;
        }

        // Add global mouseup event listener for text selection
        function handleGlobalMouseUp() {
                setTimeout(() => {
                        handleTextSelection();
                }, 10);
        }

        onMount(() => {
                startTestTimer();

                // Check for time constraints every 30 seconds
                const timeCheckInterval = setInterval(checkTimeConstraints, 30000);

                // Update timer every second if the test is active
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

<svelte:window onmouseup={handleGlobalMouseUp} />

<div class="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 text-white">
        {#if showInstructions}
                <!-- Instructions Screen -->
                <div class="flex flex-col items-center justify-center min-h-screen p-8">
                        <div class="text-center mb-12">         <h1 class="text-3xl text-center font-black text-white mb-8 inline-block px-10 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 shadow-xl shadow-cyan-500/30 border-2 border-purple-600">
                                IE READING Quick-Test
                        </h1>
                     </div>

                        <div class="max-w-4xl w-full bg-gray-800 rounded-lg shadow-2xl rounded-lg border border-gray-600 p-8">
                                <div class="space-y-6 text-gray-300">
                                        <div class="bg-teal-900/20 p-6 rounded-lg">
                                                <h2 class="text-xl font-semibold text-teal-300 mb-4">Test Instructions</h2>

                                                <ul class="space-y-2 text-gray-300 text-left">
                                                        <li class="flex items-start">
                                                                <span class="text-green-400 mr-2">•</span>
                                                                <span><strong>Time allowed :</strong> 20 minutes</span>
                                                        </li>
                                                        <li class="flex items-start">
                                                                <span class="text-green-400 mr-2">•</span>
                                                                <span><strong>Number of questions :</strong> 13 questions</span>
                                                        </li>
                                                        <li class="flex items-start">
                                                                <span class="text-green-400 mr-2">•</span>
                                                                <span><strong>Passage :</strong> Forest Management in Pennsylvania, USA</span>
                                                        </li>
                                                </ul>
                                        </div>

                                        <div class="bg-blue-800/10 p-6 rounded-lg">
                                                <h3 class="text-lg font-semibold text-blue-300 mb-3">Question Types</h3>
                                                <div class="space-y-3 text-gray-700 dark:text-gray-300 text-left">
                                                        <p><strong>Questions 1-5 :</strong> Paragraph Information (matching information to paragraphs A-G)</p>
                                                        <p><strong>Questions 6-8 :</strong> Matching (match purposes with timber cuts A-C)</p>
                                                        <p><strong>Questions 9-13 :</strong> Sentence Completion (ONE WORD ONLY from the passage)</p>
                                                </div>
                                        </div>

                                        <div class="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
                                                <h2 class="text-xl font-semibold mb-4 text-orange-300">Important Notes</h2>
                                                <ul class="space-y-2 text-gray-700 dark:text-gray-300 text-left">
                                                        <li class="flex items-start">
                                                                <span class="text-yellow-600 dark:text-yellow-400 mr-2">⚠</span>
                                                                <span>Skim the passage carefully before attempting any questions</span>
                                                        </li>
                                                        <li class="flex items-start">
                                                                <span class="text-yellow-600 dark:text-yellow-400 mr-2">⚠</span>
                                                                <span>For sentence completion, use ONE WORD ONLY from the passage</span>
                                                        </li>
                                                        <li class="flex items-start">
                                                                <span class="text-yellow-600 dark:text-yellow-400 mr-2">⚠</span>
                                                                <span>You may use highlighting feature to mark important text</span>
                                                        </li>
                                                </ul>
                                        </div>
                                </div>

                                <div class="mt-8 text-center">
                                        <button
                                                onclick={startTest}
                                                class="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold text-lg rounded-lg transition-colors shadow-lg border-2 border-purple-600"
                                        >
                                                Start Reading Test
                                        </button>
                                </div>
                        </div>
                </div>
        {:else if !isTestCompleted}

                <!-- Test Interface -->
                <div class="container mx-auto px-4 py-8">
                        <!-- Header -->
                        <div class="text-center mb-12">         <h1 class="text-3xl text-center font-black text-white mb-8 inline-block px-10 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 shadow-xl shadow-cyan-500/30 border-2 border-purple-600">
                                        IE READING Quick-Test
                                </h1>
                             </div>

                        <!-- Main Content Area -->
                        <div class="pb-8 rounded-lg shadow-lg border border-gray-600">
                                <!-- Reading Passage -->
                                <div class="flex flex-col md:flex-row gap-6 items-start mb-6">
                                        <!-- Passage Content -->
                                        <div class="md:w-2/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-h-[100vh] overflow-y-auto">
                                                <div class="flex justify-between items-center mb-6">
                                                        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Reading Passage</h2>
                                                        <div class="flex gap-2">
                                                                <button
                                                                        onclick={toggleHighlighting}
                                                                        class="px-4 py-2 rounded-lg font-medium transition-colors {highlightingEnabled ? 'bg-yellow-500 hover:bg-yellow-600 text-white' : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-500 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 border border-yellow-500'}"
                                                                >
                                                                        {highlightingEnabled ? '✓ Highlighter ON' : 'Highlighter'}
                                                                </button>
                                                                {#if highlightedRanges.length > 0}
                                                                        <button
                                                                                onclick={clearAllHighlights}
                                                                                class="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors"
                                                                        >
                                                                                Clear Highlights
                                                                        </button>
                                                                {/if}
                                                        </div>
                                                </div>
                                                <div class="mb-8 rounded-lg bg-gray-50 px-6 py-3 dark:bg-gray-700">
                                                        <p class="text-gray-700 dark:text-gray-300">
                                                                You should spend about 20 minutes on Questions 1–13, which are based on the passage below.
                                                        </p>
                                                </div>

                                                <div class="passage-text prose dark:prose-invert max-w-none mb-8">
                                                        <h3 class="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">Forest Management in Pennsylvania, USA</h3>
                                                        <h4 class="text-lg font-medium mb-6 text-gray-700 dark:text-gray-300">How managing low-quality wood (also known as low-use wood) for bioenergy can encourage sustainable forest management</h4>

                                                        <div class="mb-6">
                                                                <p class="text-gray-800 dark:text-gray-200 mb-4">
                                                                        <strong class="text-gray-900 dark:text-white">A</strong><br/>
                                                                        A tree's 'value' depends on several factors including its species, size, form, condition, quality, function, and accessibility, and depends on the management goals for a given forest. The same tree can be valued very differently by each person who looks at it. A large, straight black cherry tree has high value as timber to be cut into logs or made into furniture, but for a landowner more interested in wildlife habitat, the real value of that stem (or trunk) may be the food it provides to animals. Likewise, if the tree suffers from black knot disease, its value for timber decreases, but to a woodworker interested in making bowls, it brings an opportunity for a unique and beautiful piece of art.
                                                                </p>

                                                                <p class="text-gray-800 dark:text-gray-200 mb-4">
                                                                        <strong class="text-gray-900 dark:text-white">B</strong><br/>
                                                                        In the past, Pennsylvania landowners were solely interested in the value of their trees as high-quality timber. The norm was to remove the stems of highest quality and leave behind poorly formed trees that were not as well suited to the site where they grew. This practice, called 'high-grading', has left a legacy of 'low-use wood' in the forests. Some people even call these 'junk trees', and they are abundant in Pennsylvania. These trees have lower economic value for traditional timber markets, compete for growth with higher-value trees, shade out desirable regeneration and decrease the health of a stand leaving it more vulnerable to poor weather and disease. Management that specifically targets low-use wood can help landowners manage these forest health issues, and wood energy markets help promote this.
                                                                </p>

                                                                <p class="text-gray-800 dark:text-gray-200 mb-4">
                                                                        <strong class="text-gray-900 dark:text-white">C</strong><br/>
                                                                        Wood energy markets can accept less expensive wood material of lower quality than would be suitable for traditional timber markets. Most wood used for energy in Pennsylvania is used to produce heat or electricity through combustion. Many schools and hospitals use wood boiler systems to heat and power their facilities, homes are primarily heated with wood, and some coal plants incorporate wood into their coal streams to produce electricity. Wood can also be gasified for electrical generation and can even be made into liquid fuels like ethanol and gasoline for lorries and cars. All these products are made primarily from low-use wood. Several tree- and plant-cutting approaches, which could greatly improve the long-term quality of a forest, focus strongly or solely on the use of wood for those markets.
                                                                </p>

                                                                <p class="text-gray-800 dark:text-gray-200 mb-4">
                                                                        <strong class="text-gray-900 dark:text-white">D</strong><br/>
                                                                        One such approach is called a Timber Stand Improvement (TSI) Cut. In a TSI Cut, really poor-quality tree and plant material is cut down to allow more space, light, and other resources to the highest-valued stems that remain. Removing invasive plants might be another primary goal of a TSI Cut. The stems that are left behind might then grow in size and develop more foliage and larger crowns or tops that produce more coverage for wildlife; they have a better chance to regenerate in a less crowded environment. TSI Cuts can be tailored to one farmer's specific management goals for his or her land.
                                                                </p>

                                                                <p class="text-gray-800 dark:text-gray-200 mb-4">
                                                                        <strong class="text-gray-900 dark:text-white">E</strong><br/>
                                                                        Another approach that might yield a high amount of low-use wood is a Salvage Cut. With the many pests and pathogens visiting forests including hemlock wooly adelgid, Asian longhorned beetle, emerald ash borer, and gypsy moth, to name just a few, it is important to remember that those working in the forests can help ease these issues through cutting procedures. These types of cut reduce the number of sick trees and seek to manage the future spread of a pest problem. They leave vigorous trees that have stayed healthy enough to survive the outbreak.
                                                                </p>

                                                                <p class="text-gray-800 dark:text-gray-200 mb-4">
                                                                        <strong class="text-gray-900 dark:text-white">F</strong><br/>
                                                                        A Shelterwood Cut, which only takes place in a mature forest that has already been thinned several times, involves removing all the mature trees when other seedlings have become established. This then allows the forester to decide which tree species are regenerated. It leaves a young forest where all trees are at a similar point in their growth. It can also be used to develop a two-tier forest so that there are two harvests and the money that comes in is spread out over a decade or more.
                                                                </p>

                                                                <p class="text-gray-800 dark:text-gray-200 mb-4">
                                                                        <strong class="text-gray-900 dark:text-white">G</strong><br/>
                                                                        Thinnings and dense and dead wood removal for fire prevention also center on the production of low-use wood. However, it is important to remember that some retention of what many would classify as low-use wood is very important. The tops of trees that have been cut down should be left on the site so that their nutrients cycle back into the soil. In addition, trees with many cavities are extremely important habitats for insect predators like woodpeckers, bats and small mammals. They help control problem insects and increase the health and resilience of the forest. It is also important to remember that not all small trees are low-use. For example, many species like hawthorn provide food for wildlife. Finally, rare species of trees in a forest should also stay behind as they add to its structural diversity.
                                                                </p>
                                                        </div>
                                                </div>
                                        </div>

                                        <!-- Questions -->
                                        <div class="md:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-h-[100vh] overflow-y-auto">
                                                <!-- Timer Section -->
                                                <div class="mb-6 bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                                                        <div class="text-xl font-semibold mb-3">
                                                                Time Remaining: <span class="text-teal-400">{formatTime(timeRemaining)}</span>
                                                        </div>
                                                        <button
                                                                onclick={isActive ? pauseTimer : startTimer}
                                                                class="px-3 py-1 rounded-lg font-medium transition-colors {isActive ? 'bg-purple-600 hover:bg-purple-700' : 'bg-teal-600 hover:bg-teal-700'} text-white"
                                                        >
                                                                {isActive ? '⏸ PAUSE' : '▶ START'}
                                                        </button>
                                                </div>

                                                <!-- Questions 1-5 Block -->
                                                <div class="question-block space-y-6 mb-8">
                                                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Questions 1-5</h3>
                                                        <p class="text-gray-700 dark:text-gray-300">Reading Passage 2 has seven paragraphs, <strong>A-G</strong>.</p>
                                                        <p class="text-gray-700 dark:text-gray-300">Which paragraph contains the following information?</p>
                                                        <p class="text-gray-700 dark:text-gray-300 italic">Write the correct letter, A-G, in boxes 1-5 on your answer sheet.</p>
                                                        <p class="text-gray-700 dark:text-gray-300 italic">NB You may use any letter more than once.</p>

                                                        {#each paragraphInfoQuestions as question}
                                                                <div class="question mb-4">
                                                                        <label class="mb-2 block font-medium text-gray-900 dark:text-white">
                                                                                {question.num}. {question.text}
                                                                        </label>
                                                                        <select
                                                                                bind:value={answers[question.num]}
                                                                                disabled={showAnswers}
                                                                                class="w-full rounded-lg border px-2 py-0.5 text-black dark:text-white dark:bg-gray-700 focus:border-purple-600/60 focus:ring-1 focus:ring-purple-600/60 {showAnswers && results ? (results.questions[question.num]?.isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-red-500 bg-red-50 dark:bg-red-900/20') : 'border-gray-300 dark:border-gray-600 bg-white'}"
                                                                        >
                                                                                <option value="">{showAnswers ? "" : "Select answer"}</option>
                                                                                {#each ['A','B','C','D','E','F','G'] as option}
                                                                                        <option value={option}>{option}</option>
                                                                                {/each}
                                                                        </select>
                                                                        {#if showAnswers && results?.questions[question.num]}
                                                                                <div class="mt-2 text-base">
                                                                                        {#if results.questions[question.num].isCorrect}
                                                                                                <span class="text-teal-600 dark:text-teal-400">✓ Correct!</span>
                                                                                        {:else}
                                                                                                <span class="text-red-600 dark:text-red-400">✗ Incorrect.</span>
                                                                                                <span class="text-green-600 dark:text-green-400">
                                                                                                        Correct answer: {results.questions[question.num].correctAnswers.join(' or ')}
                                                                                                </span>
                                                                                        {/if}
                                                                                </div>
                                                                        {/if}
                                                                </div>
                                                        {/each}
                                                </div>

                                                <!-- Questions 6-8 Block -->
                                                <div class="question-block space-y-6 mb-8">
                                                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Questions 6-8</h3>
                                                        <p class="text-gray-700 dark:text-gray-300">Look at the following purposes (Questions 6-8) and the list of timber cuts below.</p>
                                                        <p class="text-gray-700 dark:text-gray-300">Match each purpose with the correct timber cut, <strong>A, B or C</strong>.</p>
                                                        <p class="text-gray-700 dark:text-gray-300">Write the correct letter, A, B or C, in boxes 6-8 on your answer sheet.</p>
                                                        <p class="text-gray-700 dark:text-gray-300 italic">NB You may use any letter more than once.</p>

                                                        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6">
                                                                <h4 class="font-semibold mb-3 text-gray-900 dark:text-white">List of Timber Cuts</h4>
                                                                <div class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                                                        {#each matchingOptions as option}
                                                                                <div><strong>{option.label}.</strong> {option.text}</div>
                                                                        {/each}
                                                                </div>
                                                        </div>

                                                        {#each matchingQuestions as question}
                                                                <div class="question mb-4">
                                                                        <label class="mb-2 block font-medium text-gray-900 dark:text-white">
                                                                                {question.num}. {question.text}
                                                                        </label>
                                                                        <select
                                                                                bind:value={answers[question.num]}
                                                                                disabled={showAnswers}
                                                                                class="w-full rounded-lg border px-2 py-0.5 text-black dark:text-white dark:bg-gray-700 focus:border-purple-600/60 focus:ring-1 focus:ring-purple-600/60 {showAnswers && results ? (results.questions[question.num]?.isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-red-500 bg-red-50 dark:bg-red-900/20') : 'border-gray-300 dark:border-gray-600 bg-white'}"
                                                                        >
                                                                                <option value="">{showAnswers ? "" : "Select answer"}</option>
                                                                                {#each ['A','B','C'] as option}
                                                                                        <option value={option}>{option}</option>
                                                                                {/each}
                                                                        </select>
                                                                        {#if showAnswers && results?.questions[question.num]}
                                                                                <div class="mt-2 text-base">
                                                                                        {#if results.questions[question.num].isCorrect}
                                                                                                <span class="text-teal-600 dark:text-teal-400">✓ Correct!</span>
                                                                                        {:else}
                                                                                                <span class="text-red-600 dark:text-red-400">✗ Incorrect.</span>
                                                                                                <span class="text-green-600 dark:text-green-400">
                                                                                                        Correct answer: {results.questions[question.num].correctAnswers.join(' or ')}
                                                                                                </span>
                                                                                        {/if}
                                                                                </div>
                                                                        {/if}
                                                                </div>
                                                        {/each}
                                                </div>

                                                <!-- Questions 9-13 Block -->
                                                <div class="question-block space-y-6 mb-8">
                                                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Questions 9-13</h3>
                                                        <p class="text-gray-700 dark:text-gray-300">Complete the sentences below.</p>
                                                        <p class="text-gray-700 dark:text-gray-300">Choose <strong>ONE WORD ONLY</strong> from the passage for each answer.</p>
                                                        <p class="text-gray-700 dark:text-gray-300">Write your answers in boxes 9-13 on your answer sheet.</p>

                                                        {#each sentenceCompletionQuestions as question}
                                                                <div class="question mb-4">
                                                                        <label class="mb-2 block font-medium text-gray-900 dark:text-white">
                                                                                {#if question.num === 9}
                                                                                        {question.num}. {question.text}
                                                                                        <input
                                                                                                type="text"
                                                                                                bind:value={answers[question.num]}
                                                                                                disabled={showAnswers}
                                                                                                placeholder="..."
                                                                                                class="ml-2 px-3 py-1 rounded border text-black dark:text-white dark:bg-gray-700 focus:border-purple-600/60 focus:ring-1 focus:ring-purple-600/60 {showAnswers && results ? (results.questions[question.num]?.isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-red-500 bg-red-50 dark:bg-red-900/20') : 'border-gray-300 dark:border-gray-600 bg-white'}"
                                                                                        />
                                                                                {:else if question.num === 10}
                                                                                        {question.num}. The
                                                                                        <input
                                                                                                type="text"
                                                                                                bind:value={answers[question.num]}
                                                                                                disabled={showAnswers}
                                                                                                placeholder="..."
                                                                                                class="mx-2 px-3 py-1 rounded border text-black dark:text-white dark:bg-gray-700 focus:border-purple-600/60 focus:ring-1 focus:ring-purple-600/60 {showAnswers && results ? (results.questions[question.num]?.isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-red-500 bg-red-50 dark:bg-red-900/20') : 'border-gray-300 dark:border-gray-600 bg-white'}"
                                                                                        />
                                                                                        from the tops of cut trees can help improve soil quality.
                                                                                {:else if question.num === 11}
                                                                                        {question.num}. Some damaged trees should be left, as their
                                                                                        <input
                                                                                                type="text"
                                                                                                bind:value={answers[question.num]}
                                                                                                disabled={showAnswers}
                                                                                                placeholder="..."
                                                                                                class="mx-2 px-3 py-1 rounded border text-black dark:text-white dark:bg-gray-700 focus:border-purple-600/60 focus:ring-1 focus:ring-purple-600/60 {showAnswers && results ? (results.questions[question.num]?.isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-red-500 bg-red-50 dark:bg-red-900/20') : 'border-gray-300 dark:border-gray-600 bg-white'}"
                                                                                        />
                                                                                        provide habitats for a range of creatures.
                                                                                {:else if question.num === 12}
                                                                                        {question.num}. Some trees that are small, such as
                                                                                        <input
                                                                                                type="text"
                                                                                                bind:value={answers[question.num]}
                                                                                                disabled={showAnswers}
                                                                                                placeholder="..."
                                                                                                class="mx-2 px-3 py-1 rounded border text-black dark:text-white dark:bg-gray-700 focus:border-purple-600/60 focus:ring-1 focus:ring-purple-600/60 {showAnswers && results ? (results.questions[question.num]?.isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-red-500 bg-red-50 dark:bg-red-900/20') : 'border-gray-300 dark:border-gray-600 bg-white'}"
                                                                                        />
                                                                                        , are a source of food for animals and insects.
                                                                                {:else if question.num === 13}
                                                                                        {question.num}. Any trees that are
                                                                                        <input
                                                                                                type="text"
                                                                                                bind:value={answers[question.num]}
                                                                                                disabled={showAnswers}
                                                                                                placeholder="..."
                                                                                                class="mx-2 px-3 py-1 rounded border text-black dark:text-white dark:bg-gray-700 focus:border-purple-600/60 focus:ring-1 focus:ring-purple-600/60 {showAnswers && results ? (results.questions[question.num]?.isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-red-500 bg-red-50 dark:bg-red-900/20') : 'border-gray-300 dark:border-gray-600 bg-white'}"
                                                                                        />
                                                                                        should be left to grow, as they add to the variety of species in the forest.
                                                                                {/if}
                                                                        </label>
                                                                        {#if showAnswers && results?.questions[question.num]}
                                                                                <div class="mt-2 text-base">
                                                                                        {#if results.questions[question.num].isCorrect}
                                                                                                <span class="text-teal-600 dark:text-teal-400">✓ Correct!</span>
                                                                                        {:else}
                                                                                                <span class="text-red-600 dark:text-red-400">✗ Incorrect.</span>
                                                                                                <span class="text-green-600 dark:text-green-400">
                                                                                                        Correct answer: {results.questions[question.num].correctAnswers.join(' or ')}
                                                                                                </span>
                                                                                        {/if}
                                                                                </div>
                                                                        {/if}
                                                                </div>
                                                        {/each}
                                                </div>

                                                <!-- Results Display -->
                                                {#if results && showAnswers}
                                                        <div class="mt-6 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-700 p-6">
                                                                <h3 class="mb-6 text-xl font-semibold text-gray-900 dark:text-white text-center"><u>Test Results</u></h3>

                                                                <div class="text-center mb-8">
                                                                        <button
                                                                                onclick={() => window.open('#', '_blank')}
                                                                                class="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium"
                                                                        >
                                                                                Query my Results
                                                                        </button>
                                                                        <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                                                                If you are unclear about any answers - just ask!
                                                                        </div>
                                                                </div>

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

                                                                <div class="mt-6 flex gap-4 justify-center">
                                                                        <button
                                                                                onclick={resetTimer}
                                                                                class="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
                                                                        >
                                                                                Retake Test
                                                                        </button>
                                                                        <button
                                                                                onclick={() => window.location.href = '/reading'}
                                                                                class="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg border-2 border-purple-600/80 transition-colors"
                                                                        >
                                                                                Return to Reading
                                                                        </button>
                                                                </div>
                                                        </div>
                                                {/if}

                                                <!-- Mark Test Button -->
                                                {#if !hasMarked}
                                                        <button
                                                                onclick={markTest}
                                                                disabled={isMarking}
                                                                class="mt-6 w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                                        >
                                                                {isMarking ? 'Marking...' : 'Mark Test'}
                                                        </button>
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
                                        Thank you for completing the IE READING Quick-Test.
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
                                                onclick={() => window.location.href = '/reading'}
                                                class="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors"
                                        >
                                                Back to Reading
                                        </button>
                                </div>
                        </div>
                </div>
        {/if}
</div>