<script lang="ts">
        import { onMount } from 'svelte';

        let lightboxOpen = $state(false);
        let lightboxImage = $state('');

        // Form data
        let q1 = $state(''), q2 = $state(''), q3 = $state(''), q4 = $state(''), q5 = $state(''), q6 = $state('');

        // Results for the exercise
        let showResults = $state(false);
        let markingResults = $state({});

        // Loading state
        let loadingAnswers = $state(false);

        // Highlighting state
        let highlightingEnabled = $state(false);
        let highlightedRanges = $state([]);

        // Height sync elements
        let questionsContainerEl: HTMLElement;
        let passageScrollEl: HTMLElement;

        function syncHeights() {
                if (!passageScrollEl) return;
                const isDesktop = window.innerWidth >= 768;
                if (isDesktop && questionsContainerEl) {
                        // Set reading passage height to match questions container height
                        passageScrollEl.style.height = `${questionsContainerEl.offsetHeight}px`;
                } else {
                        passageScrollEl.style.height = '';
                }
        }

        function openLightbox(imageSrc: string) {
                lightboxImage = imageSrc;
                lightboxOpen = true;
        }

        function closeLightbox() {
                lightboxOpen = false;
                lightboxImage = '';
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

                        // Only highlight if within the passage container
                        const passageContainer = range.commonAncestorContainer.nodeType === Node.TEXT_NODE
                                ? range.commonAncestorContainer.parentElement?.closest('.passage-text')
                                : range.commonAncestorContainer.closest?.('.passage-text');

                        if (passageContainer) {
                                highlightSelectedText(range);
                        }

                        selection.removeAllRanges();
                }
        }

        function highlightSelectedText(range: Range) {
                const span = document.createElement('span');
                span.className = 'highlight-text bg-yellow-200 dark:bg-yellow-600 cursor-pointer';
                span.setAttribute('data-highlight-id', Date.now().toString());

                try {
                        range.surroundContents(span);

                        // Store highlight info
                        highlightedRanges = [...highlightedRanges, {
                                id: span.getAttribute('data-highlight-id'),
                                text: span.textContent
                        }];

                        // Add click listener to remove highlight
                        span.addEventListener('click', (e) => {
                                e.stopPropagation();
                                removeHighlight(span);
                        });
                } catch (error) {
                        // If surroundContents fails for complex selections
                        console.warn('Could not highlight complex selection:', error);
                }
        }

        function removeHighlight(span: HTMLSpanElement) {
                const highlightId = span.getAttribute('data-highlight-id');

                // Remove from state
                highlightedRanges = highlightedRanges.filter(h => h.id !== highlightId);

                // Replace span with its text content
                const parent = span.parentNode;
                if (parent) {
                        parent.replaceChild(document.createTextNode(span.textContent || ''), span);
                        parent.normalize(); // Merge adjacent text nodes
                }
        }

        function clearAllHighlights() {
                // Remove all highlight spans
                const highlightSpans = document.querySelectorAll('.highlight-text[data-highlight-id]');
                highlightSpans.forEach(span => {
                        const parent = span.parentNode;
                        if (parent) {
                                parent.replaceChild(document.createTextNode(span.textContent || ''), span);
                                parent.normalize();
                        }
                });

                // Clear state
                highlightedRanges = [];
        }

        function checkAllAnswers() {
                loadingAnswers = true;
                showResults = false;

                setTimeout(() => {
                        const correctAnswers = {
                                q1: ['B'],
                                q2: ['C'],
                                q3: ['F'],
                                q4: ['D'],
                                q5: ['E'],
                                q6: ['A']
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

                // Setup height sync
                const ro = new ResizeObserver(syncHeights);
                if (questionsContainerEl) ro.observe(questionsContainerEl);
                window.addEventListener('resize', syncHeights);
                syncHeights();

                // Add text selection handlers
                document.addEventListener('mouseup', handleTextSelection);
                document.addEventListener('touchend', handleTextSelection);

                return () => {
                        document.removeEventListener('keydown', handleKeydown);
                        document.removeEventListener('mouseup', handleTextSelection);
                        document.removeEventListener('touchend', handleTextSelection);
                        ro.disconnect();
                        window.removeEventListener('resize', syncHeights);
                };
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
        <div class="max-w-5xl container mx-auto px-6 pt-8">
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg px-6 py-2 mb-8">
                        <div class="text-center">
                                <div class="text-xs text-left text-teal-600 dark:text-teal-400">
                                        SC_2.1
                                </div>
                                <h1 class="text-4xl font-bold text-white my-7 tracking-wide">
                                        READING
                                </h1>
                        </div>

                        <div class="flex justify-between items-center">
                                <a
                                        href="/IETPP/lesson-02/lesson02-i"
                                        class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
                                        data-sveltekit-reload
                                >
                                        ← Prev
                                </a>

                                <a
                                        href="/IETPP#lesson-02"
                                        class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
                                        data-sveltekit-reload
                                >
                                        Contents
                                </a>

                                <a
                                        href="/IETPP/lesson-02/lesson02-ii"
                                        class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
                                        data-sveltekit-reload
                                >
                                        Next →
                                </a>
                        </div>
                </div>
        </div>

        <!-- Page Content -->
        <div style="max-width: 1200px;" class="mx-auto px-3 md:px-6 py-8">
                <!-- Skill Check Title -->
                <section class="bg-cyan-600/25 rounded-lg p-4 md:p-10 shadow-sm border border-blue-600 mb-8">
                        <div class="flex items-center justify-center gap-4 mb-10">
                                <div class="text-4xl text-green-500">✓</div>
                                <h2 class="text-2xl font-bold text-center text-white tracking-wider">SKILL CHECK 2.1</h2>
                                <div class="text-4xl text-green-500">✓</div>
                        </div>

                        <p class="text-center text-white text-lg mb-8">
                                <strong>Complete this Reading Skill Check exercise then upload your answers for checking and feedback.</strong>
                        </p>

                        <!-- Exercise -->
                        <div class="bg-cyan-500/25 rounded-lg p-4 md:p-8 border border-teal-600/50 mb-8">
                                <div class="bg-blue-600 text-white text-xl px-4 py-2 rounded-lg text-center font-bold mb-8 border-1 border-white">
                                        Matching Information
                                </div>

                                <!-- Highlighting Controls -->
                                <div class="flex flex-wrap justify-center gap-2 mb-6">
                                        <button
                                                onclick={toggleHighlighting}
                                                class="px-4 py-2 rounded-md font-medium transition-colors {highlightingEnabled ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500'}"
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
                                </div>

                                {#if highlightingEnabled}
                                        <div class="flex justify-center mb-6">
                                                <div class="flex items-center gap-2 px-3 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-md text-sm text-blue-700 dark:text-blue-300">
                                                        <span>💡 Select text to highlight. Click highlighted text to remove.</span>
                                                </div>
                                        </div>
                                {/if}

                                <!-- Desktop: Side-by-side layout (768px+), Mobile: Stacked -->
                                <div class="flex flex-col md:flex-row gap-6 items-start mb-6 min-h-0">
                                        <!-- Reading Passage -->
                                        <div class="md:w-2/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 overflow-y-auto passage-text" bind:this={passageScrollEl}>
                                                <h4 class="text-xl font-bold mb-6 text-center">Could Urban Engineers Learn from Dance?</h4>
                                                <div class="space-y-4 text-m leading-relaxed">
                                                        <p class="relative pl-5"><span class="font-bold absolute -left-3">A.</span>The way we travel around cities has a major impact on whether they are sustainable. Transportation is climate change's fastest growing contributor, so to reduce emissions, more residents need to be persuaded to use public transport, walk, bike, or travel by some other form of transport, rather than drive cars. Various city councils have invested heavily in public transport networks and bike lanes, but the take-up has been disappointing. Psychology and practicality are other considerations: people's perceptions of route options can be flawed, and it can be hard to work out the logistics of a journey between multiple locations using several modes of transport. Surveying what works and what doesn't, a new guide is being drawn up for city officials on how to provide higher-quality, easier-to-navigate systems that boost traveling efficiency and reduce carbon emissions. The research looks both to the psychology of travel decisions and to the mechanics of "wayfinding", that is, how people navigate through spaces. City officials often "have a feeling" about why a transport system works or doesn't, the researchers say, but rarely "a way to design it better". It is here that dance may hold some of the answers.</p>

                                                        <p class="relative pl-5"><span class="font-bold absolute -left-3">B.</span>Dance might hold some of the answers. That sounds ridiculous, I know, but it is not as odd as it first appears. Both dance and the flow of people through a city involve bodies moving through space in both planned and unpredictable ways. "There is already something choreographic about the way traffic flows through a well-designed city," notes Jennie Syson, director of the World Cities Culture Forum. The question is whether the latest discoveries in choreography a field that is continually experimenting with how the human body moves through space, both alone and in groups might help us find more efficient ways for people to move through cities. The world's most eminent choreographer, Twyla Tharp, has deliberately used scientific research and analytical tools to create performance pieces, as well as using her work to better understand such research. Scientists, meanwhile, are increasingly using this analogy to describe their work: scientists studying the flocking behaviour of birds, for example, often use choreographic terms like "coordination", "sudden direction change" and "collective movement" when describing their research.</p>

                                                        <p class="relative pl-5"><span class="font-bold absolute -left-3">C.</span>Whereas medieval builders improvised and adapted construction through the intimacy of their relationship with materials and environment, building designs are now conceived and stored in media separated from the physical and social realities they are building for, often someone else's reality. The products of design from building to infrastructure to articles like bridges often bear the marks of their detachment: generic, efficient, but somehow lacking in fit to their specific contexts. This is partly an inevitable result of increased scale, but a design practice that is rooted in experience (embodied knowledge) provides a useful complement to the abstracted processes necessary to realize large and complex designs. Unthinking use of design software then prevents conceptual creativity. A lot of design software is predicated on the idea that design is a problem to be solved through the accelerated comparison of options, and the design options are generally an inheritance from the way we've already been designing. Compare this to dance, where choreographers have a deep connection to the body, and have developed a sophisticated understanding of how materials and spaces interconnect. The choreographer Wayne McGregor uses mathematical models and algorithmic processes in his work, but the way he describes his relationship with technology is instructive: "The computer is not the brain; the body is the brain." In other words, digital tools should be used to support and augment bodily knowledge, not to replace it.</p>

                                                        <p class="relative pl-5"><span class="font-bold absolute -left-3">D.</span>To illustrate, Sennett discusses the Peachtree Center in Atlanta, USA, a development typical of the "fast-track" style of urban development. The hostile link between the multileveled shopping mall and car park ensures a stream of people who use their cars and avoid the street level. The engineers did not design for how bodies would occupy, affect and reshape these spaces over time – they failed to take into account basic considerations about how we move. The same lack of attention to embodied considerations in the design of the MARTA mass transit system has resulted in physical barriers that reduce the efficiency of movement through the transit system. The problems with the Peachtree Center continue with patterns of development through Atlanta that have led to a reliance on car transport. When the urban development was being planned, some of these problems might not have been apparent, but the design professionals, had they considered the bodily experience of people moving through these spaces, might have anticipated how the development would play out when translated into reality.</p>

                                                        <p class="relative pl-5"><span class="font-bold absolute -left-3">E.</span>The same is true in transport engineering. The guard rails that were installed to shield cyclists in Holland, and which were subsequently copied across Europe, are now being removed. Why? Because the experience of cyclists – the knowledge they have developed of how to navigate traffic through their evolving relationship with cars – has changed over time. The designers of the guard rails assumed that the biggest safety risk was contact between cars and bikes, so they built a shield. But a rash of bike-bike collisions caused by the rails and their restricted space resulted in calls to remove them. This is precisely the type of problem that might be foreseen and avoided by thinking with the body: the designers might have spent time cycling in areas where guard rails were being proposed, or at least thinking through this kind of interface. The result: guard rails are disappearing cities across Europe, causing disruption, cost, and waste.</p>

                                                        <p class="relative pl-5"><span class="font-bold absolute -left-3">F.</span>If their designers had had the tools to think with their bodies – to experience what it might be like to hear, see, feel, and move through the spaces they were creating – they might have been able to design a transport system that was better adapted to the realities of the human body. This is what choreographers do: they think through the body. They understand how we see (visual perception), how we hear (auditory perception), how we feel (haptic perception), and how we move (proprioception). They have an understanding of how to work with these perceptions to create coherent, compelling experiences. I believe this kind of knowledge could help with tackling problems in the built environment. Being attentive to the lived embodied experience – especially to the multisensory, motor aspects of the experience – might help us design more humane and more environmentally responsible living environments.</p>

                                                        <p class="relative pl-5"><span class="font-bold absolute -left-3">G.</span>Observing the choreographer Wayne McGregor, the author discusses how choreographers develop their understanding of movement by developing an intimate knowledge of dance from the body outward, becoming movement researchers in the process. The choreographer is a "close observer of bodies in movement" and the nature of the relationship between the body and the space it occupies. This involves understanding not just the aesthetics of movement but also the ways in which movement creates emotional impacts: how we move affects how we feel. An arm raised to shoulder height has a different emotional connotation from an arm raised above the head; a sudden direction change in movement communicates something different from a gradual change in direction. Choreographers who understand these connections between movement, emotion, and meaning can make their art more effective at achieving its goals – not only to look good, but also to provoke a desired reaction in an audience. Such knowledge could inform designers seeking to create built environments and transportation systems that are not only functional, but are also emotionally satisfying: places that make people feel good about living there and, in turn, will motivate them to want to stay there. The goal is not to abandon the analytical processes and the rules we have developed to design our cities, but to reinvigorate them with a more felt sense of experience. Cities should not only function efficiently, but they should also be places where people enjoy their daily lives.</p>
                                                </div>
                                        </div>

                                        <!-- Questions Section -->
                                        <div class="md:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8" bind:this={questionsContainerEl}>
                                                <div>
                                                        <h4 class="text-lg font-bold mb-4">Questions 1–6</h4>
                                                        <p class="mb-4 text-sm">Reading Passage 1 has seven paragraphs, A–G. Which paragraph contains the following information?</p>
                                                        <p class="mb-4 text-sm font-medium">Write the correct letter, A–G, in boxes 1–6 on your answer sheet.</p>
                                                        <div class="space-y-4">
                                                                <div class="text-sm">
                                                                        <div class="flex items-start gap-2">
                                                                                <span class="font-medium text-blue-600 dark:text-blue-400">1.</span>
                                                                                <div class="flex-1">
                                                                                        <p class="mb-2">Reference to an appealing way of using dance that the writer is not proposing.</p>
                                                                                        <select bind:value={q1} class="w-16 px-2 py-1 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-left text-sm font-medium">
                                                                                                <option value="A">A</option>
                                                                                                <option value="B">B</option>
                                                                                                <option value="C">C</option>
                                                                                                <option value="D">D</option>
                                                                                                <option value="E">E</option>
                                                                                                <option value="F">F</option>
                                                                                                <option value="G">G</option>
                                                                                        </select>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div class="text-sm">
                                                                        <div class="flex items-start gap-2">
                                                                                <span class="font-medium text-blue-600 dark:text-blue-400">2.</span>
                                                                                <div class="flex-1">
                                                                                        <p class="mb-2">An example of a contrast between past and present approaches to building.</p>
                                                                                        <select bind:value={q2} class="w-16 px-2 py-1 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-left text-sm font-medium">
                                                                                                <option value="A">A</option>
                                                                                                <option value="B">B</option>
                                                                                                <option value="C">C</option>
                                                                                                <option value="D">D</option>
                                                                                                <option value="E">E</option>
                                                                                                <option value="F">F</option>
                                                                                                <option value="G">G</option>
                                                                                        </select>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div class="text-sm">
                                                                        <div class="flex items-start gap-2">
                                                                                <span class="font-medium text-blue-600 dark:text-blue-400">3.</span>
                                                                                <div class="flex-1">
                                                                                        <p class="mb-2">Mention of an objective of both dance and engineering.</p>
                                                                                        <select bind:value={q3} class="w-16 px-2 py-1 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-left text-sm font-medium">
                                                                                                <option value="A">A</option>
                                                                                                <option value="B">B</option>
                                                                                                <option value="C">C</option>
                                                                                                <option value="D">D</option>
                                                                                                <option value="E">E</option>
                                                                                                <option value="F">F</option>
                                                                                                <option value="G">G</option>
                                                                                        </select>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div class="text-sm">
                                                                        <div class="flex items-start gap-2">
                                                                                <span class="font-medium text-blue-600 dark:text-blue-400">4.</span>
                                                                                <div class="flex-1">
                                                                                        <p class="mb-2">Reference to an unforeseen problem arising from ignoring the climate.</p>
                                                                                        <select bind:value={q4} class="w-16 px-2 py-1 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-left text-sm font-medium">
                                                                                                <option value="A">A</option>
                                                                                                <option value="B">B</option>
                                                                                                <option value="C">C</option>
                                                                                                <option value="D">D</option>
                                                                                                <option value="E">E</option>
                                                                                                <option value="F">F</option>
                                                                                                <option value="G">G</option>
                                                                                        </select>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div class="text-sm">
                                                                        <div class="flex items-start gap-2">
                                                                                <span class="font-medium text-blue-600 dark:text-blue-400">5.</span>
                                                                                <div class="flex-1">
                                                                                        <p class="mb-2">Why some measures intended to help people are being reversed.</p>
                                                                                        <select bind:value={q5} class="w-16 px-2 py-1 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-left text-sm font-medium">
                                                                                                <option value="A">A</option>
                                                                                                <option value="B">B</option>
                                                                                                <option value="C">C</option>
                                                                                                <option value="D">D</option>
                                                                                                <option value="E">E</option>
                                                                                                <option value="F">F</option>
                                                                                                <option value="G">G</option>
                                                                                        </select>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div class="text-sm" data-question="6">
                                                                        <div class="flex items-start gap-2">
                                                                                <span class="font-medium text-blue-600 dark:text-blue-400">6.</span>
                                                                                <div class="flex-1">
                                                                                        <p class="mb-2">Reference to how transport has an impact on human lives.</p>
                                                                                        <select bind:value={q6} class="w-16 px-2 py-1 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-left text-sm font-medium">
                                                                                                <option value="A">A</option>
                                                                                                <option value="B">B</option>
                                                                                                <option value="C">C</option>
                                                                                                <option value="D">D</option>
                                                                                                <option value="E">E</option>
                                                                                                <option value="F">F</option>
                                                                                                <option value="G">G</option>
                                                                                        </select>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>

                                                        <!-- CHECK_ANSWERS_BUTTON: keep inside questions container -->
                                                        <div class="mt-8 text-center">
                                                                <button
                                                                        onclick={checkAllAnswers}
                                                                        disabled={loadingAnswers}
                                                                        class="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors disabled:opacity-50"
                                                                >
                                                                        {#if loadingAnswers}
                                                                                <div class="flex items-center gap-2 justify-center">
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
                        <div class="text-center mt-8">
                                <p class="text-white"><b>End of Lesson 02-i</b></p>
                        </div>
                </section>


                  <!-- Footer Navigation -->

                <section class="text-center">
                                        <div class="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
                                                <div class="flex justify-between items-center">
                                                        <a
                                                                href="/IETPP#lesson-02"
                                                                class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
                                                                data-sveltekit-reload
                                                        >
                                                                ← Back to Contents
                                                        </a>

                                                        <a
                                                                href="/IETPP/lesson-02/lesson02-ii"
                                                                class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
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

<style>
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

        /* Yellow highlight color */
        .bg-yellow-200 {
                background-color: rgb(254 240 138);
                color: rgb(0 0 0);
        }

        /* Dark mode highlighting */
        .dark .highlight-text {
                opacity: 0.8;
        }

        .dark .bg-yellow-600 {
                background-color: rgb(202 138 4);
                color: rgb(255 255 255);
        }
</style>