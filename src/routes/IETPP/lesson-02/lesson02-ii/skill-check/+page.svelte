<script lang="ts">
        import { onMount } from 'svelte';

        let lightboxOpen = $state(false);
        let lightboxImage = $state('');

        // Form data for True/False/Not given questions (5 questions from HTML file)
        let q1 = $state(''), q2 = $state(''), q3 = $state(''), q4 = $state(''), q5 = $state('');

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
                        // Correct answers for the "Remarkable Beetle" passage (case-insensitive)
                        const correctAnswers = {
                                q1: ['Not given'],  // Bush flies easier to control than buffalo flies
                                q2: ['No'],         // Four thousand species brought to Australia by CSIRO
                                q3: ['Yes'],         // CSIRO brought beetles over fourteen-year period (1968-1982)
                                q4: ['Yes'],         // At least twenty-six species became established
                                q5: ['No']          // Immediate improvement to cow pasture quality
                        };

                        const userAnswers = { q1, q2, q3, q4, q5 };
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
                        results.totalQuestions = 5;
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
        <title>IETPP - Lesson 02(ii): Reading True/False/Not given Skill Check | InsideIELTS</title>
        <meta
                name="description"
                content="Complete IELTS Reading True/False/Not given skill check exercises with reading passages and instant feedback."
        />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
        <!-- Lesson Header -->
        <div class="max-w-5xl container mx-auto px-3 md:px-6 py-12">
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-12">
                        <div class="text-center">
                                <div class="text-xs text-left text-teal-600 dark:text-teal-400 mb-4">
                                        SC2(ii)
                                </div>
                                <h1 class="text-3xl font-bold text-white mb-2">
                                        READING - True/False/Not given
                                </h1>
        
                        </div>

                        <div class="text-right mt-6">
                                <a
                                        href="/IETPP/lesson-02/lesson02-ii"
                                        class="text-teal-600 dark:text-teal-400 hover:underline font-semibold"
                                >
                                        ← Back to Lesson
                                </a>
                        </div>
                </div>
        </div>

        <!-- Page Content -->
        <div style="max-width: 1200px;" class="mx-auto px-3 md:px-6 py-2">
                <!-- Skill Check Title -->
                <section class="bg-teal-600/20 rounded-lg p-6 md:p-10 shadow-sm border border-blue-600/50 mb-12">
                        <div class="flex items-center justify-center gap-4 mb-10">
                                <div class="text-4xl text-green-500">✓</div>
                                <h2 class="text-3xl font-bold text-center text-white">SKILL CHECK</h2>
                                <div class="text-4xl text-green-500">✓</div>
                        </div>
                        
                        <p class="text-center text-white text-xl mb-12">
                                <strong>Complete this Reading Skill Check exercise then upload your answers for checking and feedback.</strong>
                        </p>

                        <!-- Exercise -->
                        <!-- SC2II_PASSAGE_START -->
                        <div class="bg-teal-600 text-white px-4 py-2 rounded-lg text-center font-bold mb-10">
                                SC2(ii)
                        </div>
                        
                        <h3 class="text-2xl font-bold text-center text-white mb-8">READING - True/False/Not given</h3>
                        
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
                                        <h4 class="text-xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">A Remarkable Beetle</h4>
                                        
                                        <div class="space-y-4 text-m leading-relaxed text-gray-800 dark:text-gray-200">
                                                <div class="float-right ml-4 mb-2 mt-2">
                                                        <div class="text-sm text-gray-600 dark:text-gray-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded">
                                                                <img src="/reading-images/dung-beetle.png" alt="Dung beetle rolling dung" class="w-50 object-cover rounded"/>
                                                        </div>
                                                </div>
                                                
                                                <p>Some of the most remarkable beetles are the dung beetles, which spend almost their whole lives eating and breeding in dung.</p>

                                                <p>More than 4,000 species of these remarkable creatures have evolved and adapted to the world's different climates and the dung of its many animals. Australia's native dung beetles are scrub and woodland dwellers, specialising in coarse marsupial droppings and avoiding the soft cattle dung in which bush flies and buffalo flies breed.</p>

                                                <p>In the early 1960s George Bornemissza, then a scientist at the Australian Government's premier research organisation, the Commonwealth Scientific and Industrial Research Organisation (CSIRO), suggested that dung beetles should be introduced to Australia to control dung-breeding flies. Between 1968 and 1982, the CSIRO imported insects from about 50 different species of dung beetle, from Asia, Europe and Africa, aiming to match them to different climatic zones in Australia. Of the 26 species that are known to have become successfully integrated into the local environment, only one, an African species released in northern Australia, has reached its natural boundary.</p>

                                                <p>Introducing dung beetles into a pasture is a simple process: approximately 1,500 beetles are released, a handful at a time, into fresh cow pats in the cow pasture. The beetles immediately disappear beneath the pats digging and tunnelling and, if they successfully adapt to their new environment, soon become a permanent, self-sustaining part of the local ecology. In time they multiply and within three or four years the benefits to the pasture are obvious.</p>

                                                <p>Dung beetles work from the inside of the pat so they are sheltered from predators such as birds and foxes. Most species burrow into the soil and bury dung in tunnels directly underneath the pats, which are hollowed out from within. Some large species originating from France excavate tunnels to a depth of approximately 30 cm below the dung pat. These beetles make sausage-shaped brood chambers along the tunnels. The shallowest tunnels belong to a much smaller Spanish species that buries dung in chambers that hang like fruit from the branches of a pear tree.</p>
                                        </div>
                                </div>
                                
                                <!-- Questions Section -->
                                <div class="md:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8" bind:this={questionsContainerEl}>
                                        <div>
                                                <h4 class="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">Questions 1–5</h4>
                                                <p class="mb-4 text-sm text-gray-700 dark:text-gray-300">Do the following statements reflect the claims of the writer in Reading Passage 1?</p>
                                                
                                                <div class="mb-4 text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 p-3 rounded">
                                                        <p class="mb-2"><em>In boxes 1–5 on your answer sheet write</em></p>
                                                        <ul class="space-y-1">
                                                                <li><strong>YES</strong> – if the statement reflects the claims of the writer</li>
                                                                <li><strong>NO</strong> – if the statement contradicts the claims of the writer</li>
                                                                <li><strong>NOT GIVEN</strong> – if it is impossible to say what the writer thinks about this</li>
                                                        </ul>
                                                </div>
                                                
                                                <div class="space-y-4">
                                                        <div class="text-sm">
                                                                <div class="flex items-start gap-2">
                                                                        <span class="font-medium text-teal-600 dark:text-teal-400 min-w-[20px]">1.</span>
                                                                        <div class="flex-1">
                                                                                <p class="mb-2 text-gray-700 dark:text-gray-300">Bush flies are easier to control than buffalo flies.</p>
                                                                                <select
                                                                                        bind:value={q1}
                                                                                        class="w-full px-2 py-1 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-sm text-gray-800 dark:text-gray-200"
                                                                                >
                                                                                        <option value="">Choose answer...</option>
                                                                                        <option value="Yes">Yes</option>
                                                                                        <option value="No">No</option>
                                                                                        <option value="Not given">Not given</option>
                                                                                </select>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        
                                                        <div class="text-sm">
                                                                <div class="flex items-start gap-2">
                                                                        <span class="font-medium text-teal-600 dark:text-teal-400 min-w-[20px]">2.</span>
                                                                        <div class="flex-1">
                                                                                <p class="mb-2 text-gray-700 dark:text-gray-300">Four thousand species of dung beetle were initially brought to Australia by the CSIRO.</p>
                                                                                <select
                                                                                        bind:value={q2}
                                                                                        class="w-full px-2 py-1 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-sm text-gray-800 dark:text-gray-200"
                                                                                >
                                                                                        <option value="">Choose answer...</option>
                                                                                        <option value="Yes">Yes</option>
                                                                                        <option value="No">No</option>
                                                                                        <option value="Not given">Not given</option>
                                                                                </select>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        
                                                        <div class="text-sm">
                                                                <div class="flex items-start gap-2">
                                                                        <span class="font-medium text-teal-600 dark:text-teal-400 min-w-[20px]">3.</span>
                                                                        <div class="flex-1">
                                                                                <p class="mb-2 text-gray-700 dark:text-gray-300">Dung beetles were brought to Australia by the CSIRO over a fourteen-year period.</p>
                                                                                <select
                                                                                        bind:value={q3}
                                                                                        class="w-full px-2 py-1 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-sm text-gray-800 dark:text-gray-200"
                                                                                >
                                                                                        <option value="">Choose answer...</option>
                                                                                        <option value="Yes">Yes</option>
                                                                                        <option value="No">No</option>
                                                                                        <option value="Not given">Not given</option>
                                                                                </select>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        
                                                        <div class="text-sm">
                                                                <div class="flex items-start gap-2">
                                                                        <span class="font-medium text-teal-600 dark:text-teal-400 min-w-[20px]">4.</span>
                                                                        <div class="flex-1">
                                                                                <p class="mb-2 text-gray-700 dark:text-gray-300">At least twenty-six of the introduced species have become established in Australia.</p>
                                                                                <select
                                                                                        bind:value={q4}
                                                                                        class="w-full px-2 py-1 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-sm text-gray-800 dark:text-gray-200"
                                                                                >
                                                                                        <option value="">Choose answer...</option>
                                                                                        <option value="Yes">Yes</option>
                                                                                        <option value="No">No</option>
                                                                                        <option value="Not given">Not given</option>
                                                                                </select>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        
                                                        <div class="text-sm">
                                                                <div class="flex items-start gap-2">
                                                                        <span class="font-medium text-teal-600 dark:text-teal-400 min-w-[20px]">5.</span>
                                                                        <div class="flex-1">
                                                                                <p class="mb-2 text-gray-700 dark:text-gray-300">The dung beetles cause an immediate improvement to the quality of a cow pasture.</p>
                                                                                <select
                                                                                        bind:value={q5}
                                                                                        class="w-full px-2 py-1 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-sm text-gray-800 dark:text-gray-200"
                                                                                >
                                                                                        <option value="">Choose answer...</option>
                                                                                        <option value="Yes">Yes</option>
                                                                                        <option value="No">No</option>
                                                                                        <option value="Not given">Not given</option>
                                                                                </select>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>

                                                <!-- Submit Button -->
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
                        
                        <!-- Results -->
                        {#if showResults}
                                <div class="mt-12 bg-gray-800 rounded-lg p-6 border border-gray-600">
                                        <h4 class="text-xl font-bold mb-4 text-center text-white">Your Results</h4>
                                        <div class="text-center mb-6">
                                                <div class="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-lg">
                                                        Score: {markingResults.totalCorrect}/{markingResults.totalQuestions}
                                                        ({Math.round((markingResults.totalCorrect / markingResults.totalQuestions) * 100)}%)
                                                </div>
                                        </div>
                                        
                                        <div class="grid gap-3">
                                                {#each Object.entries(markingResults).slice(0, 5) as [key, result]}
                                                        <div class="flex items-center justify-between p-3 bg-gray-700 rounded">
                                                                <span class="font-medium">Question {key.replace('q', '')}:</span>
                                                                <div class="flex items-center gap-3">
                                                                        <span class="text-sm">Your answer: <strong>{result.userAnswer || 'No answer'}</strong></span>
                                                                        <span class="text-xs text-gray-400">Correct: {result.correctAnswers.join(' / ')}</span>
                                                                        {#if result.isCorrect}
                                                                                <span class="text-green-400 font-bold">✓</span>
                                                                        {:else}
                                                                                <span class="text-red-400 font-bold">✗</span>
                                                                        {/if}
                                                                </div>
                                                        </div>
                                                {/each}
                                        </div>
                                        
                                        <div class="mt-6 text-center">
                                                <p class="text-gray-300 mb-4">
                                                        {#if markingResults.totalCorrect === markingResults.totalQuestions}
                                                                🎉 Perfect score! Excellent work!
                                                        {:else if markingResults.totalCorrect >= markingResults.totalQuestions * 0.8}
                                                                👍 Great job! You're doing well with True/False/Not given questions.
                                                        {:else if markingResults.totalCorrect >= markingResults.totalQuestions * 0.6}
                                                                📚 Good effort! Keep practicing to improve your skills.
                                                        {:else}
                                                                💪 Keep practicing! Focus on distinguishing between False and Not given answers.
                                                        {/if}
                                                </p>
                                        </div>
                                </div>
                        {/if}
                        <!-- SC2II_PASSAGE_END -->
                </section>

                <!-- End of Exercise -->
                <section class="text-center py-12">
                        <p class="text-white mb-16">End of Skill Check 02(ii)</p>
                        <a
                                href="/IETPP/lesson-02/lesson02-ii"
                                class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                        >
                                ← Back to Lesson 02(ii)
                        </a>
                </section>
        </div>

        <!-- Lightbox -->
        {#if lightboxOpen}
                <div 
                        class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                        onclick={closeLightbox}
                >
                        <div class="max-w-4xl max-h-full overflow-auto">
                                <img
                                        src={lightboxImage}
                                        alt="Enlarged view"
                                        class="w-full h-auto rounded-lg shadow-xl"
                                        onclick={(e) => e.stopPropagation()}
                                />
                                <button
                                        onclick={closeLightbox}
                                        class="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
                                >
                                        ×
                                </button>
                        </div>
                </div>
        {/if}
</div>