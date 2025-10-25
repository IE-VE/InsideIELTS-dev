<script lang="ts">
        import { onMount } from 'svelte';

        let currentSection = $state(1);
        let timeRemaining = $state(60 * 60); // 60 minutes in seconds
        let isTestStarted = $state(false);
        let isTestCompleted = $state(false);
        let showInstructions = $state(true);
        let answers: Record<number | string, string> = $state({}); // Allow string keys for '21b'

        // Timer functionality
        let timer: number;
        let isActive = $state(false); // Added for timer control

        // Question type categorization for analysis
        const questionTypes = {
                'true_false_not_given': [1, 2, 3, 4, 5, 6, 7, 8], // Passage 1: True/False/Not Given
                'multiple_choice_response': [9, 10, 11, 12, 13], // Passage 1: Response selection 
                'passage_title': [14], // Passage 1: Title selection
                'table_completion': [15, 16, 17, 18, 19, 20, 21], // Passage 2: Table completion
                'short_answer': [22, 23, 24, 25, 26], // Passage 2: Short answer questions
                'multiple_choice': [27, 28, 29], // Passage 3: Multiple choice
                'matching': [30, 31], // Passage 3: Matching
                'summary_completion': [32, 33, 34, 35, 36, 37, 38, 39], // Passage 3: Summary completion
                'final_multiple_choice': [40] // Passage 3: Final multiple choice
        };

        // Time tracking for incomplete answers
        let testStartTime = $state(null);
        let questionTimeStamps = $state({});
        let timeConstraintAnswers = $state([]);

        // Answer key for Reading Test 1
        const answerKey = {
                1: ['FALSE'],
                2: ['FALSE'],
                3: ['TRUE'],
                4: ['TRUE'],
                5: ['FALSE'],
                6: ['NOT GIVEN'],
                7: ['TRUE'],
                8: ['NOT GIVEN'],
                9: ['M'],
                10: ['E'],
                11: ['G'],
                12: ['P'],
                13: ['B'],
                14: ['C'],
                15: ['tastebuds'],
                16: ['baleen', 'the baleen whales'],
                17: ['forward, downward'],
                18: ['freshwater dolphin(s)', 'freshwater dolphins'],
                19: ['water', 'the water'],
                20: ['lower frequencies', 'the lower frequencies'],
                21: ['bowhead', 'humpback'], // Updated for separate inputs
                '21b': ['bowhead', 'humpback'], // Added separate key for the second input
                22: ['touch', 'sense of touch'],
                23: ['fresh water dolphin(s)', 'fresh water dolphins'],
                24: ['airborne flying fish'],
                25: ['clear water(s)', 'clear open water'],
                26: ['acoustic sense', 'the acoustic sense'],
                27: ['C'],
                28: ['C'],
                29: ['A'],
                30: ['C'],
                31: ['A'],
                32: ['pairs'],
                33: ['shapes'],
                34: ['sighted'],
                35: ['sighted'],
                36: ['blind'],
                37: ['similar'],
                38: ['sighted'],
                39: ['similar'],
                40: ['B']
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
                // Stay on the test page instead of redirecting
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

        function handleMarkingKeydown(event) {
                // Assuming this was intended for another modal, keeping it for now
        }

        // Question data based on the original HTML file - exact wording
        const passage1Questions = {
                trueFalse: [
                        { num: 1, text: "The plight of the rainforests has largely been ignored by the media." },
                        { num: 2, text: "Children only accept opinions on rainforests that they encounter in their classrooms." },
                        { num: 3, text: "It has been suggested that children hold mistaken views about the 'pure' science that they study at school." },
                        { num: 4, text: "The fact that children's ideas about science form part of a larger framework of ideas means that it is easier to change them." },
                        { num: 5, text: "The study involved asking children a number of yes/no questions such as 'Are there any rainforests in Africa?'" },
                        { num: 6, text: "Girls are more likely than boys to hold mistaken views about the rainforests' destruction." },
                        { num: 7, text: "The study reported here follows on from a series of studies that have looked at children's understanding of rainforests." },
                        { num: 8, text: "A second study has been planned to investigate primary school children's ideas about rainforests." }
                ],
                responseOptions: [
                        { label: "A", text: "There is a complicated combination of reasons for the loss of the rainforests." },
                        { label: "B", text: "The rainforests are being destroyed by the same things that are destroying the forests of Western Europe." },
                        { label: "C", text: "Rainforests are located near the Equator." },
                        { label: "D", text: "Brazil is home to the rainforests." },
                        { label: "E", text: "Without rainforests some animals would have nowhere to live." },
                        { label: "F", text: "Rainforests are important habitats for a lot of plants." },
                        { label: "G", text: "People are responsible for the loss of the rainforests." },
                        { label: "H", text: "The rainforests are a source of oxygen." },
                        { label: "I", text: "Rainforests are of consequence for a number of different reasons." },
                        { label: "J", text: "As the rainforests are destroyed, the world gets warmer." },
                        { label: "K", text: "Without rainforests there would not be enough oxygen in the air." },
                        { label: "L", text: "There are people for whom the rainforests are home." },
                        { label: "M", text: "Rainforests are found in Africa." },
                        { label: "N", text: "Rainforests are not really important to human life." },
                        { label: "O", text: "The destruction of the rainforests is the direct result of logging activity." },
                        { label: "P", text: "Humans depend on the rainforests for their continuing existence." }
                ],
                responseQuestions: [
                        { num: 9, text: "What was the children's most frequent response when asked where the rainforests were?" },
                        { num: 10, text: "What was the most common response to the question about the importance of the rainforests?" },
                        { num: 11, text: "What did most children give as the reason for the loss of the rainforests?" },
                        { num: 12, text: "Why did most children think it important for the rainforests to be protected?" },
                        { num: 13, text: "Which of the responses is cited as unexpectedly uncommon, given the amount of time spent on the issue by the newspapers and television?" }
                ],
                multipleChoice: {
                        num: 14,
                        text: "Which of the following is the most suitable title for Reading Passage 1?",
                        options: [
                                "A. The development of a programme in environmental studies within a science curriculum",
                                "B. Children's ideas about the rainforests and the implications for course design",
                                "C. The extent to which children have been misled by the media concerning the rainforests",
                                "D. How to collect, collate and describe the ideas of secondary school children",
                                "E. The importance of the rainforests and the reasons for their destruction"
                        ]
                }
        };

        const passage2Questions = {
                tableCompletion: [
                        { num: 15, text: "nerves linked to their __________ are underdeveloped" },
                        { num: 16, text: "__________" },
                        { num: 17, text: "__________ and __________" },
                        { num: 18, text: "__________" },
                        { num: 19, text: "exceptional in __________ and good in air–water interface" },
                        { num: 20, text: "usually use __________; repertoire limited" },
                        { num: 21, text: "__________ whales and __________ whales" }
                ],
                shortAnswer: [
                        { num: 22, text: "Which of the senses is described here as being involved in mating?" },
                        { num: 23, text: "Which species swims upside down while eating?" },
                        { num: 24, text: "What can bottlenose dolphins follow from under the water?" },
                        { num: 25, text: "Which type of habitat is related to good visual ability?" },
                        { num: 26, text: "Which of the senses is best developed in cetaceans?" }
                ]
        };

        const passage3Questions = {
                multipleChoice: [
                        {
                                num: 27,
                                text: "In the first paragraph the writer makes the point that blind people",
                                options: [
                                        "A. may be interested in studying art.",
                                        "B. can draw outlines of different objects and surfaces.",
                                        "C. can recognise conventions such as perspective.",
                                        "D. can draw accurately."
                                ]
                        },
                        {
                                num: 28,
                                text: "The writer was surprised because the blind woman",
                                options: [
                                        "A. drew a circle on her own initiative.",
                                        "B. did not understand what a wheel looked like.",
                                        "C. included a symbol representing movement.",
                                        "D. was the first person to use lines of motion."
                                ]
                        },
                        {
                                num: 29,
                                text: "From the experiment described in Part 1, the writer found that the blind subjects",
                                options: [
                                        "A. had good understanding of symbols representing movement.",
                                        "B. could control the movement of wheels very accurately.",
                                        "C. worked together well as a group in solving problems.",
                                        "D. got better results than the sighted undergraduates."
                                ]
                        }
                ],
                matching: [
                        { num: 30, text: "30" },
                        { num: 31, text: "31" },
                        { num: 32, text: "32" }
                ],
                matchingOptions: [
                        "A. steady spinning",
                        "B. jerky movement",
                        "C. rapid spinning",
                        "D. wobbling movement",
                        "E. use of brakes"
                ],
                summaryCompletion: [
                        { num: 33, text: "In the experiment described in Part 2, a set of word __________ was used to investigate whether blind and sighted people perceived the symbolism in abstract __________ in the same way." },
                        { num: 34, text: "Subjects were asked which word fitted best with a circle and which with a square. From the __________ volunteers, everyone thought a circle fitted 'soft' while a square fitted 'hard'." },
                        { num: 35, text: "However, only 51% of the __________ volunteers assigned a circle to __________." },
                        { num: 36, text: "When the test was later repeated with __________ volunteers, it was found that they made __________ choices." }
                ],
                finalMultipleChoice: {
                        num: 40,
                        text: "Which of the following statements best summarises the writer's general conclusion?",
                        options: [
                                "A. The blind represent some aspects of reality differently from sighted people.",
                                "B. The blind comprehend visual metaphors in similar ways to sighted people.",
                                "C. The blind may create unusual and effective symbols to represent reality.",
                                "D. The blind may be successful artists if given the right training."
                        ]
                }
        };

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
                timeRemaining = 60 * 60; // Reset to 60 minutes
                currentTime = 0;
                answers = {}; // Clear answers
                isTestCompleted = false; // Reset completion status
                showAnswers = false; // Hide answers
                hasMarked = false; // Reset marked status
        }

        // Enhanced analysis function with question type breakdown
        function analyzeAnswersByType(answers, questionResults) {
                const typeAnalysis = {};
                const questionTypeNames = {
                        'true_false_not_given': 'True/False/Not Given',
                        'multiple_choice_response': 'Multiple Choice Response',
                        'passage_title': 'Passage Title Selection',
                        'table_completion': 'Table Completion',
                        'short_answer': 'Short Answer Questions',
                        'multiple_choice': 'Multiple Choice',
                        'matching': 'Matching',
                        'summary_completion': 'Summary Completion',
                        'final_multiple_choice': 'Final Multiple Choice'
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
                                                // Analyze why the answer was wrong
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
                const testDuration = 60 * 60 * 1000; // 60 minutes in milliseconds
                
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

                // Iterate through all possible question numbers, including '21b'
                const allQuestionNumbers = new Set([
                        ...Object.keys(answerKey).map(n => parseInt(n, 10)).filter(n => !isNaN(n)),
                        '21b'
                ]);

                for (const questionKey of allQuestionNumbers) {
                        // Handle the case where a question might not have a corresponding answerKey entry
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
                        } else if (questionKey === 21) { // Special handling for Q21 table entry which combines two inputs
                                const userAnswerPart1 = answers[21]?.toString().trim().toLowerCase() || '';
                                const userAnswerPart2 = answers['21b']?.toString().trim().toLowerCase() || '';
                                const correctAnswersQ21 = answerKey[21];

                                if (correctAnswersQ21) {
                                        const correctSetQ21 = new Set(correctAnswersQ21.map(ans => ans.toLowerCase().trim()));
                                        if (correctSetQ21.has(userAnswerPart1) && correctSetQ21.has(userAnswerPart2)) {
                                                isCorrect = true;
                                        }
                                }
                        }


                        questionResults[questionKey] = {
                                userAnswer: answers[questionKey] || '',
                                correctAnswers: correctAnswers,
                                isCorrect: isCorrect
                        };
                        
                        // Increment correct counter if answer is correct
                        if (isCorrect) {
                                correct++;
                        }
                }

                // Special handling for Q21 if it was not covered in the loop
                if (allQuestionNumbers.has(21) && !questionResults[21]) {
                        const userAnswerPart1 = answers[21]?.toString().trim().toLowerCase() || '';
                        const userAnswerPart2 = answers['21b']?.toString().trim().toLowerCase() || '';
                        const correctAnswersQ21 = answerKey[21];
                        let isCorrectQ21 = false;
                        if (correctAnswersQ21) {
                                const correctSetQ21 = new Set(correctAnswersQ21.map(ans => ans.toLowerCase().trim()));
                                if (correctSetQ21.has(userAnswerPart1) && correctSetQ21.has(userAnswerPart2)) {
                                        isCorrectQ21 = true;
                                }
                        }
                        questionResults[21] = {
                                userAnswer: answers[21] || '', // This might need adjustment to reflect both inputs if needed
                                correctAnswers: correctAnswersQ21 || [],
                                isCorrect: isCorrectQ21
                        };
                        if (isCorrectQ21) {
                                correct++;
                        }
                } else if (allQuestionNumbers.has(21) && questionResults[21] && questionResults[21].isCorrect) {
                        correct++;
                }

                // Ensure count for '21b' is consistent if it's a separate check
                if (allQuestionNumbers.has('21b') && !questionResults['21b']) {
                        const userAnswerPart2 = answers['21b']?.toString().trim().toLowerCase() || '';
                        const correctAnswersQ21b = answerKey['21b'];
                        let isCorrectQ21b = false;
                        if (correctAnswersQ21b) {
                                const correctSetQ21b = new Set(correctAnswersQ21b.map(ans => ans.toLowerCase().trim()));
                                if (correctSetQ21b.has(userAnswerPart2)) {
                                        isCorrectQ21b = true;
                                }
                        }
                        questionResults['21b'] = {
                                userAnswer: answers['21b'] || '',
                                correctAnswers: correctAnswersQ21b || [],
                                isCorrect: isCorrectQ21b
                        };
                        // Note: We don't increment 'correct' here for '21b' as it's part of Q21.
                } else if (allQuestionNumbers.has('21b') && questionResults['21b'] && questionResults['21b'].isCorrect) {
                        // This branch might be redundant if '21b' is handled within Q21 logic.
                }


                // Perform detailed analysis by question type
                const typeAnalysis = analyzeAnswersByType(answers, questionResults);

                // Recalculate total based on the number of unique question keys processed
                const actualTotalQuestions = Object.keys(questionResults).length;
                results = {
                        score: correct,
                        total: actualTotalQuestions, // Use the count of processed questions for total
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
                // Optionally call markTest() here if you want results immediately upon completion
                // markTest();
        }

        function formatTime(seconds: number): string {
                const hours = Math.floor(seconds / 3600);
                const minutes = Math.floor((seconds % 3600) / 60);
                const secs = seconds % 60;
                return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }

        function goToSection(section: number) {
                currentSection = section;
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
                                completeTest();
                                clearInterval(timer);
                        }
                }, 1000);

                // Add event listener for Escape key when answer modal is open
                document.addEventListener('keydown', handleAnswersKeydown);
                
                // Add global mouseup listener for text highlighting
                document.addEventListener('mouseup', handleGlobalMouseUp);

                return () => {
                        if (timer) clearInterval(timer);
                        clearInterval(timeCheckInterval);
                        document.removeEventListener('keydown', handleAnswersKeydown);
                        document.removeEventListener('mouseup', handleGlobalMouseUp);
                        document.body.style.overflow = 'auto';
                };
        });
</script>

<svelte:head>
        <title>IELTS Reading Quick-Test - InsideIELTS</title>
        <meta name="description" content="Complete IELTS Reading practice test with authentic passages and detailed feedback." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        {#if showInstructions}
                <!-- Instructions Screen -->
                      <div class="container mx-auto px-6 py-8">
                        <div class="text-center mb-12">         <h1 class="text-3xl text-center font-black text-white mb-8 inline-block px-10 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 shadow-xl shadow-cyan-500/30 border border-white">
                                                                        IE READING Quick-Test
                                        </h1>
                                <p class="text-xl m-6 max-w-4xl mx-auto">You will be given one Reading Passage with 13 questions. Complete the exercise in one sitting.         
                                </p></div>

                                        <div class="max-w-4xl mx-auto">
                                                <div class="bg-gray-800 border border-gray-600 rounded-lg shadow-lg p-8">                       

                                                        <div class="space-y-6 text-gray-700 dark:text-gray-300">
                                                                <div class="bg-teal-900/20 p-6 rounded-lg">
                                                        <h2 class="text-xl font-semibold text-teal-700 dark:text-teal-300 mb-4">Test Instructions</h2>
                                                        <ul class="space-y-2">
                                                                <li>• Time allowed: <strong>20 minutes</strong></li>
                                                                <li>• Number of questions: <strong>14</strong></li>     
                                                                <li>• Answer all questions - there is no penalty for incorrect answers</li>                                                           <li>• Your progress will be saved automatically</li>
                                                        </ul>
                                                </div>

                                                                <div class="bg-blue-800/10 p-6 rounded-lg">                                                     
                                                                                <h3 class="text-lg font-semibold text-orange-700 dark:text-orange-300 mb-3">Scoring Guidelines</h3>
                                                                                <ul class="space-y-1">
                                                                                        <li>• All questions are worth <strong>1 mark</strong></li>
                                                                                        <li>• Correct capitalisation must be used</li>
                                                                                            <li>• Incorrectly spelt answers are marked <strong>WRONG</strong></li>
                                                                                            <li>• Answering guidelines <strong>MUST</strong> be followed.</li>
                                                                                                                        </ul>
                                                                        </div>
                                                                </div>
                                        

                                        <div class="text-center mt-8">
                                                <button
                                                        onclick={startTest}
                                                        class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-lg text-lg border border-white transition-colors"
                                                >
                                                        Start Reading Test
                                                </button>
                                        </div>
                                </div>
                        </div>
                </div>
        {:else if isTestCompleted}
                
                <!-- Results Screen -->
                <div class="container mx-auto px-6 py-8">
                        <div class="max-w-4xl mx-auto">
                                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
                                        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Test Completed!</h1>
                                        <p class="text-lg text-gray-700 dark:text-gray-300 mb-8">
                                                Thank you for completing the IELTS Reading Quick-Test.
                                        </p>
                                        <div class="space-y-4">
                                                <p class="text-gray-600 dark:text-gray-400">
                                                        Answers submitted: {Object.keys(answers).length} out of 40
                                                </p>
                                                <button
                                                        onclick={() => window.location.reload()}
                                                        class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-lg"
                                                >
                                                        Retake Test
                                                </button>
                                        </div>
                                </div>
                        </div>
                </div>
        {:else}
                
                <!-- Test Interface -->
                <div class="mx-auto px-4">
                        <div class="text-center py-8">          <h1 class="text-3xl text-center font-black text-white mb-8 inline-block px-10 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 shadow-xl shadow-cyan-500/30 border border-white">
                                IE READING Quick-Test
                        </h1>
                        </div>

                          <!-- Main Content -->
                        
                        <!-- Timer and Navigation Header -->
                        <div class=" max-w-4xl mx-auto rounded-lg shadow-md p-4 mb-6 bg-white dark:bg-gray-800">
                                {#if showAnswers}
                                        <!-- Title Display when showing answers -->
                                        <div class="text-center mb-4">
                                                <h1 class="text-2xl font-bold text-teal-600 dark:text-teal-400">
                                                        Reading Test Answers & Score
                                                </h1>
                                        </div>
                                {:else}
                                        <!-- Timer Display -->
                                        <div class="text-center mb-4">
                                                <div class="text-2xl font-bold text-teal-600 dark:text-teal-400">
                                                        {formatTime(timeRemaining)}
                                                </div>
                                                <div class="text-sm text-gray-300 dark:text-gray-200">Time Remaining</div>
                                        </div>

                                        <!-- Timer Control Buttons -->
                                        <div class="flex justify-center gap-2 mb-8">
                                                {#if isActive}
                                                        <button
                                                                onclick={pauseTimer}
                                                                class="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded text-sm"
                                                        >
                                                                PAUSE TIMER
                                                        </button>
                                                {:else}
                                                        <button
                                                                onclick={startTimer}
                                                                class="px-3 py-1 bg-green-600 hover:bg-green-700 text-white font-medium rounded text-sm"
                                                        >
                                                                START
                                                        </button>
                                                {/if}
                                        </div>
                                {/if}

                                
                                <!-- Highlighting Controls -->
                                <div class="flex flex-wrap justify-center gap-2 mb-6">
                                        <button
                                                onclick={toggleHighlighting}
                                                class="px-4 py-2 rounded-md font-medium transition-colors {highlightingEnabled ? 'bg-yellow-500 text-white' : 'bg-gray-600 text-gray-300 hover:bg-gray-500 border border-yellow-400'}"
                                        >
                                                {highlightingEnabled ? '🖍️ Highlighting ON' : '🖍️ Enable Highlighting'}
                                        </button>
                                        
                                        {#if highlightedRanges.length > 0}
                                                <button
                                                        onclick={clearAllHighlights}
                                                        class="px-4 py-2 rounded-md font-medium transition-colors bg-red-500 text-white hover:bg-red-600"
                                                >
                                                        Clear All Highlights
                                                </button>
                                        {/if}
                                        
                                        {#if highlightingEnabled}
                                                <div class="flex items-center gap-2 px-3 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-md text-sm text-blue-700 dark:text-blue-300">
                                                        <span>💡 Select text to highlight. Click highlighted text to remove.</span>
                                                </div>
                                        {/if}
                                </div>
                        </div>

                        <!-- Main Content Area -->
                        <div class="pb-8">
                                {#if currentSection === 1}
                                        <!-- Reading Passage 1 -->
                                        <div class="flex flex-col md:flex-row gap-6 items-start mb-6">
                                                <!-- Reading Passage 1 -->
                                                <div class="md:w-2/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-h-[100vh] overflow-y-auto">
                                                        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Reading Passage</h2>
                                                        <div class="mb-6 rounded-lg bg-gray-50 p-6 dark:bg-gray-700">
                                                                <p class="mb-4 text-gray-700 dark:text-gray-300">
                                                                        You should spend about 20 minutes on Questions 1–14, which are based on the passage below.
                                                                </p>
                                                        </div>

                                                        <div class="passage-text prose dark:prose-invert max-w-none mb-8">
                                                                <h3 class="text-xl font-semibold mb-4">Children's Ideas About Rainforests</h3>

                                                                <div class="mb-6">
                                                                        <img src="/reading-images/rainforest-destruction.png" alt="Rainforest destruction showing environmental impact" class="float-right ml-6 mb-4 w-1/3 rounded-lg shadow-lg" />
                                                                        <p>Adults and children are frequently confronted with statements about the alarming rate of loss of tropical rainforests. For example, one graphic illustration to which children might readily relate is the estimate that rainforests are being destroyed at a rate equivalent to one thousand football fields every forty minutes – about the duration of a normal classroom period. In the face of the frequent and often vivid media coverage, it is likely that children will have formed ideas about rainforests – what and where they are, why they are important, what endangers them – independent of any formal tuition. It is also possible that some of these ideas will be mistaken.</p>
                                                                </div>

                                                                <p>Many studies have shown that children harbour misconceptions about 'pure', curriculum science. These misconceptions do not remain isolated but become incorporated into a multifaceted, but organised, conceptual framework, making it and the component ideas, some of which are erroneous, more robust but also accessible to modification. These ideas may be developed by children absorbing ideas through the popular media. Sometimes this information may be erroneous. It seems schools may not be providing an opportunity for children to re-express their ideas and so have them tested and refined by teachers and their peers.</p>

                                                                <p>Despite the extensive coverage in the popular media of the destruction of rainforests, little formal information is available about children’s ideas in this area. The aim of the    present study is to start to provide such information, to help teachers design their educational strategies to build upon correct ideas and to  displace misconceptions and to  plan programmes in environmental studies in their schools.</p>

                                                                <p>The study surveys children’s scientific knowledge and attitudes to rainforests.      Secondary school children were asked to complete a questionnaire containing five        open-form questions. The most frequent responses to the first question were descriptions which are self-evident from the term ‘rainforest’. Some children described them        as damp, wet or hot. The second question concerned the geographical location of rainforests. The commonest responses were continents or countries: Africa (given by 43% of children), South America (30%), Brazil (25%). Some children also gave more   general locations, such as being near the Equator.</p>

                                                                <p>Responses to question three concerned the importance of rainforests. The dominant idea, raised by 64% of the pupils, was that rainforests provide animals with habitats. Fewer students responded that rainforests provide plant habitats, and even fewer    mentioned the indigenous populations of rainforests.</p>

                                                                <p>Similarly, but at a lower level, more girls (13%) than boys (5%) said that rainforests       provided human habitats. These observations are generally consistent with our previous studies of pupils’ views about the use and conservation of rainforests, in which                                                 girls were shown to be more sympathetic to animals and expressed views which seem       to place an intrinsic value on non-human animal life.</p>

                                                                <p>The fourth question concerned the causes of the destruction of rainforests. Perhaps  encouragingly, more than half of the pupils (59%) identified that it is human activities which are destroying rainforests, some personalising the responsibility by the use of terms such as ‘we are’. About 18% of the pupils referred specifically to logging activity</p>

                                                                <p>One misconception, expressed by some 10% of the pupils, was that acid rain is        responsible for rainforest destruction; a similar proportion said that pollution is     destroying rainforests. Here, children are confusing rainforest destruction with        damage to the forests of Western Europe by these factors. While two fifths of the students provided the information that the rainforests provide oxygen, in some cases this                             response also embraced the misconception that rainforest destruction would reduce atmospheric oxygen, making the atmosphere incompatible with human life on Earth.</p>

                                                                <p>In answer to the final question about the importance of rainforest conservation, the majority of children simply said that we need rainforests to survive. Only a few of the pupils (6%) mentioned that rainforest destruction may contribute to global warming. This is surprising considering the high level of media coverage on this issue. Some children expressed the idea that the conservation of rainforests is not important.</p>
                                                <p>The results of this study suggest that certain ideas predominate in the thinking of  children about rainforests. Pupils’ responses indicate some misconceptions in basic     scientific knowledge of rainforests’ ecosystems such as their ideas about rainforests as                                        habitats for animals, plants and humans and the relationship between climatic change    and destruction of rainforests.</p>

                                                        <p>Pupils did not volunteer ideas that suggested that they appreciated the complexity of        causes of rainforest destruction. In other words, they gave no indication of an appreciation of either the range of ways in which rainforests are important or the complex social, economic and political factors which drive the activities which are destroying                       the rainforests. One encouragement is that the results of similar studies about other   environmental issues suggest that older children seem to acquire the ability to appreciate, value and evaluate conflicting views. Environmental education offers an arena in    which these skills can be developed, which is essential for these children as future decision-makers.</p>
                                                        </div>
                                                </div>
                                                <!-- Questions for Passage 1 -->
                                                <div class="md:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-h-[100vh] overflow-y-auto">
                                                        <!-- Questions 1-8 Block -->
                                                        <div class="question-block space-y-6">
                                                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Questions 1-8</h3>
                                                                <p class="text-gray-700 dark:text-gray-300">Do the following statements agree with the information given in Reading Passage 1?</p>
                                                                <p class="text-gray-700 dark:text-gray-300">In boxes 1–8 on your answer sheet write</p>
                                                                <div class="ml-4 text-gray-700 dark:text-gray-300">
                                                                        <p><strong>TRUE</strong> if the statement agrees with the information</p>
                                                                        <p><strong>FALSE</strong> if the statement contradicts the information</p>
                                                                        <p><strong>NOT GIVEN</strong> if there is no information on this</p>
                                                                </div>

                                                                {#each passage1Questions.trueFalse as question}
                                                                        <div class="question mb-4">
                                                                                <label class="mb-2 block font-medium text-gray-900 dark:text-white">
                                                                                        {question.num}. {question.text}
                                                                                </label>
                                                                                <select
                                                                                        bind:value={answers[question.num]}
                                                                                        disabled={showAnswers}
                                                                                        class="w-full rounded-lg border px-2 py-0.5 text-black dark:text-white dark:bg-gray-700 {showAnswers && results ? (results.questions[question.num]?.isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-red-500 bg-red-50 dark:bg-red-900/20') : 'border-gray-300 dark:border-gray-600 bg-white'}"
                                                                                >
                                                                                        <option value="">{showAnswers ? "" : "Select answer"}</option>
                                                                                        <option value="TRUE">TRUE</option>
                                                                                        <option value="FALSE">FALSE</option>
                                                                                        <option value="NOT GIVEN">NOT GIVEN</option>
                                                                                </select>
                                                                                {#if showAnswers && results?.questions[question.num]}
                                                                                        <div class="mt-2 text-base">
                                                                                                {#if results.questions[question.num].isCorrect}
                                                                                                        <span class="text-teal-200">✓ Correct!</span>
                                                                                                {:else}
                                                                                                        <span class="text-red-600 dark:text-red-400">✗ Incorrect.</span>
                                                                                                        <span class="text-green-300">
                                                                                                                Correct answer: {results.questions[question.num].correctAnswers.join(' or ')}
                                                                                                        </span>
                                                                                                {/if}                                                                                        </div>                                                                                {/if}                                                                        </div>
                                                                {/each}
                                                        </div>

                                                        <!-- Questions 9-13 Block -->
                                                        <div class="question-block space-y-6">
                                                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mt-8">Questions 9-13</h3>
                                                                <p class="text-gray-700 dark:text-gray-300">The box below gives a list of responses <strong>A–P</strong> to the questionnaire discussed in Reading Passage 1.</p>
                                                                <p class="text-gray-700 dark:text-gray-300">Answer the following questions by choosing the correct responses <strong>A–P</strong>.</p>
                                                                <p class="text-gray-700 dark:text-gray-300">Write your answers in boxes 9–13 on your answer sheet.</p>

                                                                <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6">
                                                                        <h4 class="font-semibold mb-3">Response Options A–P:</h4>
                                                                        <div class="grid grid-cols-1 gap-2 text-sm">
                                                                                {#each passage1Questions.responseOptions as option}
                                                                                        <div><strong>{option.label}.</strong> {option.text}</div>
                                                                                {/each}
                                                                        </div>
                                                                </div>

                                                                {#each passage1Questions.responseQuestions as question}
                                                                        <div class="question mb-4">
                                                                                <label class="mb-2 block font-medium text-gray-900 dark:text-white">
                                                                                        {question.num}. {question.text}
                                                                                </label>
                                                                                <select
                                                                                        bind:value={answers[question.num]}
                                                                                        disabled={showAnswers}
                                                                                        class="w-full rounded-lg border px-2 py-0.5 text-black dark:text-white dark:bg-gray-700 {showAnswers && results ? (results.questions[question.num]?.isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-red-500 bg-red-50 dark:bg-red-900/20') : 'border-gray-300 dark:border-gray-600 bg-white'}"
                                                                                >
                                                                                        <option value="">{showAnswers ? "" : "Select answer"}</option>
                                                                                        {#each ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P'] as option}
                                                                                                <option value={option}>{option}</option>
                                                                                        {/each}
                                                                                </select>
                                                                                {#if showAnswers && results?.questions[question.num]}
                                                                                        <div class="mt-2 text-base">
                                                                                                {#if results.questions[question.num].isCorrect}
                                                                                                        <span class="text-teal-200">✓ Correct!</span>
                                                                                                {:else}
                                                                                                        <span class="text-red-600 dark:text-red-400">✗ Incorrect.</span>
                                                                                                        <span class="text-green-300">
                                                                                                                Correct answer: {results.questions[question.num].correctAnswers.join(' or ')}
                                                                                                        </span>
                                                                                                {/if}
                                                                                        </div>
                                                                                {/if}
                                                                        </div>
                                                                {/each}
                                                        </div>

                                                        <!-- Question 14 Block -->
                                                        <div class="question-block space-y-6">
                                                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mt-8">Question 14</h3>
                                                                <p class="text-gray-700 dark:text-gray-300">Choose the correct letter, <strong>A-E</strong>.</p>

                                                                <div class="question mb-4">
                                                                        <label class="mb-2 block font-medium text-gray-900 dark:text-white">
                                                                                {passage1Questions.multipleChoice.num}. {passage1Questions.multipleChoice.text}
                                                                        </label>
                                                                        <div class="space-y-2">
                                                                                {#each passage1Questions.multipleChoice.options as option}
                                                                                        <label class="flex items-center">
                                                                                                <input
                                                                                                        type="radio"
                                                                                                        name="q{passage1Questions.multipleChoice.num}"
                                                                                                        value={option.charAt(0)}
                                                                                                        onchange={(e) => updateAnswer(passage1Questions.multipleChoice.num, e.target.value)}
                                                                                                        disabled={showAnswers}
                                                                                                        class="mr-2 {showAnswers && results ? (results.questions[passage1Questions.multipleChoice.num]?.userAnswer === option.charAt(0) ? (results.questions[passage1Questions.multipleChoice.num]?.isCorrect ? 'accent-green-500' : 'accent-red-500') : '') : ''}"
                                                                                                />
                                                                                                <span class="text-gray-700 dark:text-gray-300">{option}</span>
                                                                                        </label>                                                                                {/each}                                                                        </div>
                                                                        {#if showAnswers && results?.questions[passage1Questions.multipleChoice.num]}
                                                                                <div class="mt-2 text-base">
                                                                                        {#if results.questions[passage1Questions.multipleChoice.num].isCorrect}
                                                                                                <span class="text-teal-200">✓ Correct!</span>
                                                                                        {:else}
                                                                                                <span class="text-red-600 dark:text-red-400">✗ Incorrect.</span>
                                                                                                <span class="text-green-300">
                                                                                                        Correct answer: {results.questions[passage1Questions.multipleChoice.num].correctAnswers.join(' or ')}
                                                                                                </span>
                                                                                        {/if}                                                                         </div>                                                                        {/if}
                                                                </div>
                                                        </div>

                                                        <!-- Results Display for Passage 1 -->
                                                        {#if results && showAnswers}
                                                                <div class="mt-6 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-700 p-6">
                                                                        <!-- Test Results title -->
                                                                        <h3 class="mb-6 text-xl font-semibold text-gray-900 dark:text-white text-center"><u>Test Results</u></h3>

                                                                        <!-- Query button and help text -->
                                                                        <div class="text-center mb-8">
                                                                                <button
                                                                                        onclick={() => window.open('#', '_blank')}
                                                                                        class="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium"
                                                                                >
                                                                                        Query my Results
                                                                                </button>
                                                                                <div class="text-sm text-white dark:text-gray-400 mt-1">
                                                                                        If you are unclear about any answers - just ask!
                                                                                </div>
                                                                        </div>
                                                                        <div class="mb-6 text-center">
                                                                                <div class="text-3xl font-bold text-teal-600 dark:text-teal-400">
                                                                                        {results.score}/40
                                                                                </div>
                                                                                <div class="text-sm text-white dark:text-gray-300">
                                                                                        {results.percentage}% Correct
                                                                                </div>
                                                                        </div>
                                                                        <!-- Band Score Estimate -->
                                                                        <div class="text-center mb-8">
                                                                                <div class="text-lg font-semibold text-gray-900 dark:text-white">
                                                                                        Estimated Band Score:
                                                                                        <span class="text-teal-600 dark:text-teal-400">
                                                                                                {#if results.score >= 37}7.5-9.0
                                                                                                {:else if results.score >= 33}7.0
                                                                                                {:else if results.score >= 30}6.5
                                                                                                {:else if results.score >= 27}6.0
                                                                                                {:else if results.score >= 23}5.5
                                                                                                {:else if results.score >= 19}5.0
                                                                                                {:else if results.score >= 15}4.5
                                                                                                {:else if results.score >= 11}4.0
                                                                                                {:else if results.score >= 8}3.5
                                                                                                {:else if results.score >= 5}3.0
                                                                                                {:else if results.score >= 3}2.5
                                                                                                {:else if results.score >= 1}2.0
                                                                                                {:else}1.0{/if}
                                                                                        </span>
                                                                                </div>
                                                                        </div>
                                                                        <!-- Bottom buttons -->
                                                                        <div class="flex justify-between items-center gap-1">
                                                                                <button
                                                                                        onclick={() => { showMarkingModal = true; document.body.style.overflow = 'hidden'; }}
                                                                                        class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium"
                                                                                >
                                                                                        View Detailed Analysis
                                                                                </button>
                                                                                <button
                                                                                        onclick={() => window.location.href = '/'}
                                                                                        class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                                                                                >                                                                                       Close
                                                                                </button>
                                                                        </div>
                                                                </div>
                                                        {/if}
                                                </div>
                                        </div>                                
                                                        {/if}
                                                        </div>
                                                </div>
                                        
                                {/if}

                                <!-- Action Button -->
                                                   <div class="mt-6 pb-8 flex flex-col gap-4 items-center">
                                                <button
                                                        type="button"
                                                        onclick={() => { if (!hasMarked && !isMarking) markTest(); }}
                                                        disabled={isMarking}
                                                        class="inline-flex items-center justify-center px-8 py-4 bg-green-800 text-white font-medium rounded-lg hover:bg-green-700 transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                        {#if isMarking}
                                                                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                                                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                                </svg>
                                                                Processing Test...
                                                        {:else}
                                                                ✅ Mark my Test
                                                        {/if}
                                                </button>
                                        </div>
                        
        
        <!-- Answer Key Modal -->
        {#if showAnswersModal}
                <div
                        class="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50 dark:bg-opacity-80"
                        onclick={handleAnswersBackdropClick}
                        role="dialog"
                        aria-modal="true"
                >
                        <div class="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-3xl w-full mx-4 my-8">
                                <div class="p-6">
                                        <div class="flex justify-between items-center mb-5">

                                      </div>
                                        <div class="max-w-none overflow-y-auto max-h-[70vh]">
                                                <h3 class="text-xl font-semibold mb-6 text-gray-900 dark:text-white text-center">Reading Test 1 - Answer Key</h3>
                                                <div class="grid grid-cols-3 gap-6 text-sm text-gray-900 dark:text-white">
                                                        <!-- Section 1: Questions 1-14 -->
                                                        <div>
                                                                <h4 class="font-semibold mb-3 text-teal-600 dark:text-teal-400 text-center">Section 1 (Q1-14)</h4>
                                                                {#each Object.entries(answerKey).slice(0, 14) as [questionNum, answersArray]}
                                                                        <div class="mb-2">
                                                                                <span class="font-medium">{questionNum}.</span>
                                                                                <span>{answersArray.join(' / ')}</span>
                                                                        </div>
                                                                {/each}
                                                        </div>

                                                        <!-- Section 2: Questions 15-26 -->
                                                        <div>
                                                                <h4 class="font-semibold mb-3 text-teal-600 dark:text-teal-400 text-center">Section 2 (Q15-26)</h4>
                                                                {#each Object.entries(answerKey).slice(14, 26) as [questionNum, answersArray]}
                                                                        <div class="mb-2">
                                                                                <span class="font-medium">{questionNum}.</span>
                                                                                <span>{answersArray.join(' / ')}</span>
                                                                        </div>
                                                                {/each}
                                                        </div>

                                                        <!-- Section 3: Questions 27-40 -->
                                                        <div>
                                                                <h4 class="font-semibold mb-3 text-teal-600 dark:text-teal-400 text-center">Section 3 (Q27-40)</h4>
                                                                {#each Object.entries(answerKey).slice(26, 40) as [questionNum, answersArray]}
                                                                        <div class="mb-2">
                                                                                <span class="font-medium">{questionNum}.</span>
                                                                                <span>{answersArray.join(' / ')}</span>
                                                                        </div>
                                                                {/each}
                                                        </div>
                                                </div>
                                        </div>

                                        <!-- Modal Footer -->
                                        <div class="flex justify-end p-4 border-t border-gray-200 dark:border-gray-700 mt-6">
                                                <button
                                                        onclick={closeAnswersModal}
                                                        class="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
                                                >
                                                        Close
                                                </button>
                                        </div>
                                </div>
                        </div>
                </div>
        {/if}

<!-- Detailed Analysis Results Modal -->
{#if showMarkingModal && results}
        <div 
                class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-1 sm:p-4 pb-2 sm:pb-8"
                onclick={handleMarkingBackdropClick}
                role="dialog"
                aria-modal="true"
                aria-labelledby="marking-modal-title"
        >
                <div class="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-6xl w-full max-h-[98vh] sm:max-h-[92vh] overflow-hidden">
                        <!-- Modal Header -->
                        <div class="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200 dark:border-gray-700">
                                <div>
                                        <h2 id="marking-modal-title" class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                                                Your Reading Test Results
                                        </h2>
                                        <p class="text-sm sm:text-lg md:text-xl mt-0 sm:mt-1 space-x-1 sm:space-x-2">
                                                Score: <span class="font-bold text-green-600 text-lg sm:text-xl md:text-2xl">{results.score || 0}</span>/<span class="font-bold text-lg sm:text-xl md:text-2xl">40</span> 
                                                | Band Score: <span class="font-bold text-blue-600 text-lg sm:text-xl md:text-2xl">
                                                        {#if results.score >= 37}7.5-9.0
                                                        {:else if results.score >= 33}7.0
                                                        {:else if results.score >= 30}6.5
                                                        {:else if results.score >= 27}6.0
                                                        {:else if results.score >= 23}5.5
                                                        {:else if results.score >= 19}5.0
                                                        {:else if results.score >= 15}4.5
                                                        {:else if results.score >= 11}4.0
                                                        {:else if results.score >= 8}3.5
                                                        {:else if results.score >= 5}3.0
                                                        {:else if results.score >= 3}2.5
                                                        {:else if results.score >= 1}2.0
                                                        {:else}1.0{/if}
                                                </span>
                                        </p>
                                </div>
                        </div>

                        <!-- Modal Content -->
                        <div class="p-4 sm:p-6 overflow-y-auto max-h-[calc(98vh-200px)] sm:max-h-[calc(92vh-200px)]">
                                <!-- Question Type Analysis Summary -->
                                {#if results.typeAnalysis}
                                        <div class="mb-8">
                                                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">📊 Analysis by Question Type</h3>
                                                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                                                        {#each Object.entries(results.typeAnalysis) as [type, analysis]}
                                                                <div class="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                                                                        <h4 class="font-semibold text-gray-900 dark:text-white text-sm mb-2">{analysis.name}</h4>
                                                                        <div class="text-2xl font-bold mb-2">
                                                                                <span class="text-green-600">{analysis.correct}</span><span class="text-gray-400">/{analysis.total}</span>
                                                                        </div>
                                                                        <div class="text-sm text-gray-600 dark:text-gray-300 mb-2">
                                                                                {analysis.percentage}% correct
                                                                        </div>
                                                                        {#if analysis.spellingErrors > 0 || analysis.timeouts > 0 || analysis.blankAnswers > 0}
                                                                                <div class="text-xs space-y-1">
                                                                                        {#if analysis.spellingErrors > 0}
                                                                                                <div class="text-orange-600 dark:text-orange-400">📝 {analysis.spellingErrors} spelling error{analysis.spellingErrors > 1 ? 's' : ''}</div>
                                                                                        {/if}
                                                                                        {#if analysis.timeouts > 0}
                                                                                                <div class="text-red-600 dark:text-red-400">⏰ {analysis.timeouts} timeout{analysis.timeouts > 1 ? 's' : ''}</div>
                                                                                        {/if}
                                                                                        {#if analysis.blankAnswers > 0 && analysis.timeouts === 0}
                                                                                                <div class="text-gray-500 dark:text-gray-400">❌ {analysis.blankAnswers} blank</div>
                                                                                        {/if}
                                                                                </div>
                                                                        {/if}
                                                                </div>
                                                        {/each}
                                                </div>
                                        </div>
                                        
                                        <!-- Detailed Error Analysis -->
                                        <div class="mb-8 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                                                <h3 class="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-3">🔍 Performance Insights</h3>
                                                <div class="grid md:grid-cols-2 gap-4 text-sm">
                                                        <div>
                                                                <h4 class="font-medium text-gray-900 dark:text-white mb-2">Areas for Improvement:</h4>
                                                                <ul class="space-y-1 text-gray-700 dark:text-gray-300">
                                                                        {#each Object.entries(results.typeAnalysis) as [type, analysis]}
                                                                                {#if analysis.percentage < 70}
                                                                                        <li>• <strong>{analysis.name}</strong>: {analysis.percentage}% - Practice needed</li>
                                                                                {/if}
                                                                        {/each}
                                                                </ul>
                                                        </div>
                                                        <div>
                                                                <h4 class="font-medium text-gray-900 dark:text-white mb-2">Strengths:</h4>
                                                                <ul class="space-y-1 text-gray-700 dark:text-gray-300">
                                                                        {#each Object.entries(results.typeAnalysis) as [type, analysis]}
                                                                                {#if analysis.percentage >= 80}
                                                                                        <li>• <strong>{analysis.name}</strong>: {analysis.percentage}% - Excellent!</li>
                                                                                {/if}
                                                                        {/each}
                                                                </ul>
                                                        </div>
                                                </div>
                                                <div class="mt-4 text-center">
                                                         <p class="text-m text-white mb-3 mt-3"><b>Address your areas of weakness with personalised strategies</b></p>
                                                        <button
                                                                type="button"
                                                                class="px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
                                                                onclick={() => window.location.href = '/reading/practice'}
                                                        >
                                                                📈 Improve my Score
                                                        </button>
                                                </div>
                                        </div>
                                {/if}

                                <!-- Detailed Question Results -->
                                <div class="grid md:grid-cols-3 gap-6 text-sm">
                                        <!-- Passage 1 -->
                                        <div class="space-y-4">
                                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">Passage 1 (Questions 1-14)</h3>
                                                <div class="space-y-2">
                                                        {#each Object.entries(results.questions).filter(([key]) => parseInt(key) >= 1 && parseInt(key) <= 14) as [questionKey, result]}
                                                                <div class="flex items-center justify-between p-3 rounded-lg border {result.isCorrect ? 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800' : 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800'}">
                                                                        <div class="flex-1">
                                                                                <div class="font-medium">
                                                                                        Q{questionKey}: 
                                                                                        <span class="text-gray-600 dark:text-gray-300">"{result.userAnswer || '(blank)'}"</span>
                                                                                </div>
                                                                                <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                                                                        Correct: {result.correctAnswers.join(' / ')}
                                                                                </div>
                                                                        </div>
                                                                        <div class="ml-4">
                                                                                {#if result.isCorrect}
                                                                                        <span class="text-green-600 text-xl">✓</span>
                                                                                {:else}
                                                                                        <span class="text-red-600 text-xl">✗</span>
                                                                                {/if}
                                                                        </div>
                                                                </div>
                                                        {/each}
                                                </div>
                                        </div>

                                </div>

                                <!-- Modal Footer -->
                                <div class="flex justify-center p-4 sm:p-6 border-t border-gray-200 dark:border-gray-700 mt-8">
                                        <button 
                                                class="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                                                onclick={closeMarkingModal}
                                        >
                                                Return to Test
                                        </button>
                                </div>
                        </div>
                </div>
        </div>
{/if}
</div>

<style>
        /* Custom styles for the reading test interface */
        .prose {
                line-height: 1.7;
        }

        .prose p, .prose div {
                margin-bottom: 1rem;
        }

        /* Ensure proper spacing for questions */
        input[type="text"], select {
                transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
                color: black !important;
        }

        /* Dark mode input text color */
        :global(.dark) input[type="text"], :global(.dark) select {
                color: white !important;
        }

        /* Ensure input text is always dark for readability */
        input[type="text"], select {
                color: black !important;
        }

        /* Dark mode input text color */
        :global(.dark) input[type="text"], :global(.dark) select {
                color: white !important;
        }

        /* Disabled input text color (after marking) should be black in both light and dark mode */
        input[type="text"]:disabled, select:disabled {
                color: black !important;
        }

        :global(.dark) input[type="text"]:disabled, :global(.dark) select:disabled {
                color: black !important;
        }

        input[type="text"]:focus, select:focus {
                box-shadow: 0 0 0 3px rgba(45, 212, 191, 0.1);
        }
        /* Style for radio buttons */
        input[type="radio"] {
                transform: scale(1.1);
                margin-right: 0.5rem;
        }
        /* Style for accent color on checked radio buttons */
        input[type="radio"]:checked {
                accent-color: #0d9488; /* teal-600 */
        }
        /* Adjustments for feedback styling */
        .border-green-500 { border-color: #10b981; } /* green-500 */
        .bg-green-50 { background-color: #f0fdf4; } /* green-50 */
        .dark .bg-green-900\/20 { background-color: rgba(16, 185, 129, 0.2); } /* dark green-900/20 */

        .border-red-500 { border-color: #ef4444; } /* red-500 */
        .bg-red-50 { background-color: #fef2f2; } /* red-50 */
        .dark .bg-red-900\/20 { background-color: rgba(239, 68, 68, 0.2); } /* dark red-900/20 */

        .text-green-600 { color: #047857; } /* green-600 */
        .dark .text-green-400 { color: #84cc13; } /* dark green-400 */
        .text-red-600 { color: #b91c1c; } /* red-600 */
        .dark .text-gray-400 { color: #d1d5db; } /* dark gray-300 for better visibility */
        .text-gray-600 { color: #4b5563; } /* gray-600 */
        .dark .text-gray-300 { color: #d1d5db; } /* dark gray-300 for better visibility */

        /* Tailwind Button Classes (for clarity, assuming these are available or defined elsewhere) */
        .bg-primary { background-color: #0d9488; } /* teal-600 */
        .hover\:bg-primary-700:hover { background-color: #0f766e; } /* teal-700 */
        .bg-light { background-color: #f3f4f6; } /* gray-100 */
        .hover\:bg-gray-200:hover { background-color: #e5e7eb; } /* gray-200 */
        .text-gray-800 { color: #1f2937; } /* gray-800 */
        .bg-alternative { background-color: #3b82f6; } /* blue-500 */
        .hover\:bg-blue-700:hover { background-color: #1d4ed8; } /* blue-700 */

        /* Custom layout for side-by-side display */
        @media (min-width: 768px) {
                .md\:flex-row {
                        flex-direction: row;
                }
                .md\:w-2\/5 {
                        width: 40%;
                }
                .md\:w-3\/5 {
                        width: 60%;
                }
                .max-h-\[70vh\] {
                        max-height: 70vh;
                }
                .overflow-y-auto {
                        overflow-y: auto;
                }
        }
        
        /* Highlighting styles */
        .highlight-text {
                padding: 2px 4px;
                border-radius: 3px;
                cursor: pointer;
                transition: all 0.2s ease;
                user-select: text;
                -webkit-user-select: text;
                -moz-user-select: text;
                -ms-user-select: text;
                color: rgb(0 0 0) !important;
        }
        
        .highlight-text:hover {
                opacity: 0.8;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
        }
        
        /* Highlight color classes */
        .bg-yellow-200 {
                background-color: rgb(254 240 138);
                color: rgb(0 0 0);
        }
        
        .bg-green-200 {
                background-color: rgb(187 247 208);
                color: rgb(0 0 0);
        }
        
        .bg-blue-200 {
                background-color: rgb(191 219 254);
                color: rgb(0 0 0);
        }
        
        .bg-pink-200 {
                background-color: rgb(251 207 232);
                color: rgb(0 0 0);
        }
        
        .bg-purple-200 {
                background-color: rgb(233 213 255);
                color: rgb(0 0 0);
        }
        
        /* Dark mode highlighting */
        .dark .highlight-text {
                opacity: 0.8;
        }
        
        .dark .bg-yellow-200 {
                background-color: rgb(161 98 7);
                color: rgb(0 0 0);
        }
        
        .dark .bg-green-200 {
                background-color: rgb(22 101 52);
                color: rgb(0 0 0);
        }
        
        .dark .bg-blue-200 {
                background-color: rgb(30 64 175);
                color: rgb(0 0 0);
        }
        
        .dark .bg-pink-200 {
                background-color: rgb(157 23 77);
                color: rgb(0 0 0);
        }
        
        .dark .bg-purple-200 {
                background-color: rgb(107 33 168);
                color: rgb(0 0 0);
        }
</style>