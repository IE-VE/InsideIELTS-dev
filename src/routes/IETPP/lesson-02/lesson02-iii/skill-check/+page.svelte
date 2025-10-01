<script lang="ts">
        import { onMount } from 'svelte';

        let lightboxOpen = $state(false);
        let lightboxImage = $state('');

        // Form data for Summary completion questions (7 questions: 34-40)
        let q34 = $state(''), q35 = $state(''), q36 = $state(''), q37 = $state(''), q38 = $state(''), q39 = $state(''), q40 = $state('');

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
                        // Correct answers for the "An Ideal City" passage (case-insensitive, one word only)
                        const correctAnswers = {
                                q34: ['transport'],      // better transport for trade
                                q35: ['staircases'],     // vertical outdoor staircases
                                q36: ['engineering'],    // expertise in engineering
                                q37: ['rule'],           // this rule still followed
                                q38: ['Roman'],          // cities from Roman times  
                                q39: ['Paris'],          // Paris is one example
                                q40: ['outwards']        // building outwards no longer best approach
                        };

                        const userAnswers = { q34, q35, q36, q37, q38, q39, q40 };
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
                        results.totalQuestions = 7;
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
        <title>IETPP - Lesson 02(iii): Reading Summary completion Skill Check | InsideIELTS</title>
        <meta
                name="description"
                content="Complete IELTS Reading Summary completion skill check exercises with reading passages and instant feedback."
        />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
        <!-- Lesson Header -->
        <div class="max-w-5xl container mx-auto px-6 pt-8">
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg px-6 py-2 mb-8">
                        <div class="text-center">
                                <div class="text-xs text-left text-teal-400">
                                        SC_2.3
                                </div>
                                <h1 class="text-4xl font-bold text-white my-7 tracking-wide">
                                        READING
                                </h1>
                        </div>

                        <div class="flex justify-between items-center">
                                <a
                                        href="/IETPP/lesson-02/lesson02-i"
                                        class="text-teal-400 hover:text-teal-300 font-semibold"
                                        data-sveltekit-reload
                                >
                                        ← Prev
                                </a>

                                <a
                                        href="/IETPP#lesson-02"
                                        class="text-teal-400 hover:text-teal-300 font-semibold"
                                        data-sveltekit-reload
                                >
                                        Contents
                                </a>

                                <a
                                        href="/IETPP/lesson-03"
                                        class="text-teal-400 hover:text-teal-300 font-semibold"
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
                <section class="bg-cyan-800/25 rounded-lg p-4 md:p-10 shadow-sm border border-cyan-600 mb-8">
                        <div class="flex items-center justify-center gap-4 mb-10">
                                <div class="text-4xl text-green-500">✓</div>
                                  <h2 class="text-2xl font-bold text-center text-white tracking-wider">SKILL CHECK 2.3</h2>
                                <div class="text-4xl text-green-500">✓</div>
                        </div>
                        
                        <p class="text-center text-white text-lg mb-8">
                                <strong>Complete this Reading Skill Check exercise then upload your answers for checking and feedback.</strong>
                        </p>

                        <!-- Exercise -->
                        <div class="bg-cyan-700/25 rounded-lg p-4 md:p-8 border border-cyan-600 mb-4 md:mb-8">
                                <div class="bg-blue-600 text-white text-xl px-4 py-2 rounded-lg text-center font-bold mb-8 border-1 border-white tracking-wide">
                                        Summary Completion
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
                                        <h4 class="text-xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">An Ideal City</h4>
                                        
                                        <div class="space-y-4 text-m leading-relaxed text-gray-800 dark:text-gray-200">
                                                <p class="italic mb-4">Leonardo da Vinci's ideal city was centuries ahead of its time.</p>

                                                <p>The word 'genius' is universally associated with the name of Leonardo da Vinci. A true Renaissance man, he embodied scientific spirit, artistic talent and humanist sensibilities. Five hundred years have passed since Leonardo died in his home at Chateau du Clos Lucé, outside Tours, France. Yet far from fading into insignificance, his thinking has carried down the centuries and still surprises today.</p>
                                                
                                                <p>The Renaissance marked the transition from the 15th century to modernity and took place after the spread of the plague in the 14th century, which caused a global crisis resulting in some 200 million deaths across Europe and Asia. Today, the world is on the cusp of a climate crisis, which is predicted to cause widespread displacement, extinctions and death, if left unaddressed. Then, as now, radical solutions were called for to revolutionise the way people lived and safeguard humanity against catastrophe.</p>

                                                <p>Around 1486 — after a pestilence that killed half the population in Milan, Italy — Leonardo turned his thoughts to urban planning problems. Following a typical Renaissance trend, he began to work on an 'ideal city' project, which — due to its excessive costs — would remain unfulfilled. Yet given that unsustainable urban models are a key cause of global climate change today, it's only natural to wonder how Leonardo might have changed the shape of modern cities.</p>

                                                <p>Although the Renaissance is renowned as an era of incredible progress in art and architecture, it is rarely noted that the 15th century also marked the birth of urbanism as a true academic discipline. The rigour and method behind the conscious conception of a city had been largely missing in Western thought until the moment when prominent Renaissance men pushed forward large-scale urban projects in Italy, such as the reconfiguration of the town of Pienza and the expansion of the city of Ferrara. These works surely inspired Leonardo's decision to rethink the design of medieval cities, with their winding and overcrowded streets and with houses piled against one another.</p>

                                                <p>It is not easy to identify a coordinated vision of Leonardo's ideal city because of his disordered way of working with notes and sketches. But from the largest collection of Leonardo's papers ever assembled, a series of innovative thoughts can be reconstructed regarding the foundation of a new city along the Ticino River, which runs from Switzerland into Italy and is 248 kilometres long. He designed the city for the easy transport of goods and clean urban spaces, and he wanted a comfortable and spacious city, with well-ordered streets and architecture. He recommended 'high, strong walls', with 'towers and battlements of all necessary and pleasant beauty'.</p>

                                                <p>His plans for a modern and 'rational' city were consistent with Renaissance ideals. But, in keeping with his personality, Leonardo included several innovations in his urban design. Leonardo wanted the city to be built on several levels, linked with vertical outdoor staircases. This design can be seen in some of today's high-rise buildings but was unconventional at the time. Indeed, this idea of taking full advantage of the interior spaces wasn't implemented until the 1920s and 1930s, with the birth of the Modernist movement.</p>

                                                <p>While in the upper layers of the city, people could walk undisturbed between elegant palaces and streets, the lower layer was the place for services, trade, transport and industry. But the true originality of Leonardo's vision was its fusion of architecture and engineering. Leonardo designed extensive hydraulic plants to create artificial canals throughout the city. The canals, regulated by clocks and basins, were supposed to make it easier for boats to navigate inland. Leonardo also thought that the width of the streets ought to match the average height of the adjacent houses: a rule still followed in many contemporary cities across Italy, to allow access to sun and reduce the risk of damage from earthquakes.</p>

                                                <p>Although some of these features existed in Roman cities, before Leonardo's drawings there had never been a multi-level, compact modern city which was thoroughly technically conceived. Indeed, it wasn't until the 19th century that some of his ideas were applied. For example, the subdivision of the city by function — with services and infrastructures located in the lower levels and wide and well-ventilated boulevards and walkways above for residents — is an idea that can be found in Georges-Eugène Haussmann's renovation of Paris under Emperor Napoleon III between 1853 and 1870.</p>

                                                <p>Today, Leonardo's ideas are not simply valid, they actually suggest a way forward for urban planning. Many scholars think that the compact city, built upwards instead of outwards, integrated with nature (especially water systems), with efficient transport infrastructure, could help modern cities become more efficient and sustainable. This is yet another reason why Leonardo was aligned so closely with modern urban planning and centuries ahead of his time.</p>
                                        </div>
                                </div>
                                
                                <!-- Questions Section -->
                                <div class="md:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg px-4 py-8" bind:this={questionsContainerEl}>
                                        <div>
                                                <h4 class="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">Questions 34–40</h4>
                                                <p class="mb-4 text-sm text-gray-700 dark:text-gray-300"><em>Complete the summary below. Choose <strong>ONE WORD ONLY</strong> from the passage for each answer.</em></p>
                                                <p class="mb-4 text-xs text-gray-600 dark:text-gray-400"><em>Write your answers in boxes 34–40 on your answer sheet.</em></p>
                                                
                                                <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded mb-6">
                                                        <h5 class="text-sm font-bold mb-3 text-gray-800 dark:text-gray-200">Leonardo da Vinci's ideal city</h5>
                                                        
                                                        <div class="space-y-4 text-xs text-gray-700 dark:text-gray-300">
                                                                <p class="mb-4">
                                                                        A collection of Leonardo da Vinci's paperwork reveals his design of a new city beside the Ticino River.
                                                                        This was to provide better <span class="font-medium text-teal-600 dark:text-teal-400">34</span> <input bind:value={q34} type="text" class="inline-block w-20 px-1 py-0.5 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded text-xs text-gray-800 dark:text-gray-200" placeholder="____"> for trade and a less polluted environment.
                                                                        Although Leonardo da Vinci's city shared many of the ideals of his time, some of his innovations were considered
                                                                        unconventional in their design. They included features that can be seen in some tower blocks today, such as
                                                                        <span class="font-medium text-teal-600 dark:text-teal-400">35</span> <input bind:value={q35} type="text" class="inline-block w-20 px-1 py-0.5 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded text-xs text-gray-800 dark:text-gray-200" placeholder="____"> on the exterior of a building.
                                                                </p>
                                                                
                                                                <p class="mb-4">
                                                                        Leonardo da Vinci wasn't only an architect. His expertise in <span class="font-medium text-teal-600 dark:text-teal-400">36</span> <input bind:value={q36} type="text" class="inline-block w-20 px-1 py-0.5 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded text-xs text-gray-800 dark:text-gray-200" placeholder="____"> was evident
                                                                        in his plans for artificial canals within his ideal city. He also believed that the height of houses should relate
                                                                        to the width of streets in case earthquakes occurred. The design of many cities in Italy today follows this
                                                                        <span class="font-medium text-teal-600 dark:text-teal-400">37</span> <input bind:value={q37} type="text" class="inline-block w-20 px-1 py-0.5 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded text-xs text-gray-800 dark:text-gray-200" placeholder="____">.
                                                                </p>
                                                                
                                                                <p class="mb-4">
                                                                        While some cities from <span class="font-medium text-teal-600 dark:text-teal-400">38</span> <input bind:value={q38} type="text" class="inline-block w-20 px-1 py-0.5 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded text-xs text-gray-800 dark:text-gray-200" placeholder="____"> times have aspects that can also be found in Leonardo's designs,
                                                                        his ideas weren't put into practice until long after his death. <span class="font-medium text-teal-600 dark:text-teal-400">39</span> <input bind:value={q39} type="text" class="inline-block w-20 px-1 py-0.5 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded text-xs text-gray-800 dark:text-gray-200" placeholder="____"> is one example of a city
                                                                        that was redesigned in the 19th century in the way that Leonardo had envisaged. His ideas are also relevant to today's
                                                                        world, where building <span class="font-medium text-teal-600 dark:text-teal-400">40</span> <input bind:value={q40} type="text" class="inline-block w-20 px-1 py-0.5 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded text-xs text-gray-800 dark:text-gray-200" placeholder="____"> no longer seems to be the best approach.
                                                                </p>
                                                        </div>
                                                </div>
                                                
                                                <!-- Check Answers Button -->
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
                        
                        <!-- Results Section -->
                        {#if showResults}
                                <div class="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                                        <h4 class="text-xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
                                                Your Results: {markingResults.totalCorrect}/{markingResults.totalQuestions}
                                        </h4>
                                        
                                        <div class="space-y-3">
                                                {#each Object.entries(markingResults).filter(([key]) => key.startsWith('q')) as [key, result]}
                                                        <div class="flex items-center justify-between p-3 rounded-lg {result.isCorrect ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'}">
                                                                <div class="flex items-center gap-3">
                                                                        <span class="font-medium text-teal-600 dark:text-teal-400">
                                                                                {key.replace('q', 'Q')}:
                                                                        </span>
                                                                        <span class="text-gray-800 dark:text-gray-200">
                                                                                Your answer: <strong>{result.userAnswer || '(blank)'}</strong>
                                                                        </span>
                                                                </div>
                                                                <div class="flex items-center gap-3">
                                                                        {#if result.isCorrect}
                                                                                <span class="text-green-600 text-xl">✓</span>
                                                                        {:else}
                                                                                <span class="text-red-600 text-xl">✗</span>
                                                                                <span class="text-sm text-gray-600 dark:text-gray-400">
                                                                                        Correct: <strong>{result.correctAnswers.join(' / ')}</strong>
                                                                                </span>
                                                                        {/if}
                                                                </div>
                                                        </div>
                                                {/each}
                                        </div>
                                        
                                        <div class="mt-6 text-center">
                                                <p class="text-lg text-gray-700 dark:text-gray-300">
                                                        Score: <span class="font-bold text-teal-600 dark:text-teal-400">
                                                                {Math.round((markingResults.totalCorrect / markingResults.totalQuestions) * 100)}%
                                                        </span>
                                                </p>
                                        </div>
                                </div>
                        {/if}
                                </div>

                                <div class="text-center md:mt-12">
                                        <p class="text-white"><b>End of Reading Section 02</b></p>
                                </div>
                </section>
                
                <!-- Footer Navigation -->

                <section class="text-center">                     
                                        <div class="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
                                                <div class="flex justify-between items-center">
                                                        <a
                                                                href="/IETPP#lesson-02"
                                                                class="text-teal-400 hover:text-teal-300 font-semibold"
                                                                data-sveltekit-reload
                                                        >
                                                                ← Back to Contents
                                                        </a>
                                                        
                                                        <a
                                                                href="/IETPP/lesson-03"
                                                                class="text-teal-400 hover:text-teal-300 font-semibold"
                                                                data-sveltekit-reload
                                                        >
                                                                Next Lesson →
                                                        </a>
                                                </div>
                                        </div>
                                </section>
        </div>

        <!-- Lightbox -->
        {#if lightboxOpen}
                <div
                        class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                        onclick={closeLightbox}
                        role="button"
                        tabindex="0"
                        onkeydown={(e) => e.key === 'Enter' && closeLightbox()}
                >
                        <div class="max-w-4xl max-h-full">
                                <img src={lightboxImage} alt="Enlarged view" class="max-w-full max-h-full object-contain rounded-lg" />
                        </div>
                </div>
        {/if}
</div>