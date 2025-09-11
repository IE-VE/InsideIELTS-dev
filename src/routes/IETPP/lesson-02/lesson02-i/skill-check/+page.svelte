<script lang="ts">
        import { onMount } from 'svelte';

        let lightboxOpen = false;
        let lightboxImage = '';

        // Form data
        let q1 = '', q2 = '', q3 = '', q4 = '', q5 = '', q6 = '';

        // Results for the exercise
        let showResults = false;
        let markingResults = {};
        
        // Loading state
        let loadingAnswers = false;
        
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

        function checkAllAnswers() {
                loadingAnswers = true;
                showResults = false;
                
                setTimeout(() => {
                        const correctAnswers = {
                                q1: ['B', 'b'],
                                q2: ['C', 'c'],
                                q3: ['F', 'f'],
                                q4: ['D', 'd'],
                                q5: ['E', 'e'],
                                q6: ['A', 'a']
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
                
                return () => {
                        document.removeEventListener('keydown', handleKeydown);
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
        <div class="max-w-5xl container mx-auto px-3 md:px-6 py-12">
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-12">
                        <div class="text-center">
                                <div class="text-xs text-left text-teal-600 dark:text-teal-400 mb-4">
                                        SC2(i)
                                </div>
                                <h1 class="text-3xl font-bold text-white mb-2">
                                        READING - Matching Information
                                </h1>
        
                        </div>

                        <div class="text-right mt-6">
                                <a
                                        href="/IETPP/lesson-02/lesson02-i"
                                        class="text-teal-600 dark:text-teal-400 hover:underline font-semibold"
                                >
                                        ← Back to Lesson
                                </a>
                        </div>
                </div>
        </div>

        <!-- Page Content -->
        <div style="max-width: 1200px;" class="mx-auto px-3 md:px-6 py-12">
                <!-- Skill Check Title -->
                <section class="bg-blue-600/20 rounded-lg p-6 md:p-10 shadow-sm border border-blue-600/50 mb-12">
                        <div class="flex items-center justify-center gap-4 mb-10">
                                <div class="text-4xl text-green-500">✓</div>
                                <h2 class="text-3xl font-bold text-center text-white">SKILL CHECK</h2>
                                <div class="text-4xl text-green-500">✓</div>
                        </div>
                        
                        <p class="text-center text-white text-xl mb-16">
                                <strong>Complete this Reading Skill Check exercise then upload your answers for checking and feedback.</strong>
                        </p>

                        <!-- Exercise -->
                        <!-- SC2I_PASSAGE_START -->
                        <div class="bg-blue-600 text-white px-4 py-2 rounded-lg text-center font-bold mb-10">
                                SC2(i)
                        </div>
                        
                        <h3 class="text-2xl font-bold text-center text-white mb-8">READING - Matching information</h3>
                        
                        <!-- Desktop: Side-by-side layout (768px+), Mobile: Stacked -->
                        <div class="flex flex-col md:flex-row gap-6 items-start mb-6 min-h-0">
                                <!-- Reading Passage -->
                                <div class="md:w-2/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 overflow-y-auto" bind:this={passageScrollEl}>
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
                                                                                <p class="mb-2">reference to an appealing way of using dance that the writer is not proposing</p>
                                                                                <input type="text" bind:value={q1} placeholder="A–G" maxlength="1" class="w-12 px-2 py-1 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-center text-sm font-medium" />
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div class="text-sm">
                                                                <div class="flex items-start gap-2">
                                                                        <span class="font-medium text-blue-600 dark:text-blue-400">2.</span>
                                                                        <div class="flex-1">
                                                                                <p class="mb-2">an example of a contrast between past and present approaches to building</p>
                                                                                <input type="text" bind:value={q2} placeholder="A–G" maxlength="1" class="w-12 px-2 py-1 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-center text-sm font-medium" />
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div class="text-sm">
                                                                <div class="flex items-start gap-2">
                                                                        <span class="font-medium text-blue-600 dark:text-blue-400">3.</span>
                                                                        <div class="flex-1">
                                                                                <p class="mb-2">mention of an objective of both dance and engineering</p>
                                                                                <input type="text" bind:value={q3} placeholder="A–G" maxlength="1" class="w-12 px-2 py-1 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-center text-sm font-medium" />
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div class="text-sm">
                                                                <div class="flex items-start gap-2">
                                                                        <span class="font-medium text-blue-600 dark:text-blue-400">4.</span>
                                                                        <div class="flex-1">
                                                                                <p class="mb-2">reference to an unforeseen problem arising from ignoring the climate</p>
                                                                                <input type="text" bind:value={q4} placeholder="A–G" maxlength="1" class="w-12 px-2 py-1 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-center text-sm font-medium" />
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div class="text-sm">
                                                                <div class="flex items-start gap-2">
                                                                        <span class="font-medium text-blue-600 dark:text-blue-400">5.</span>
                                                                        <div class="flex-1">
                                                                                <p class="mb-2">why some measures intended to help people are being reversed</p>
                                                                                <input type="text" bind:value={q5} placeholder="A–G" maxlength="1" class="w-12 px-2 py-1 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-center text-sm font-medium" />
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div class="text-sm" data-question="6">
                                                                <div class="flex items-start gap-2">
                                                                        <span class="font-medium text-blue-600 dark:text-blue-400">6.</span>
                                                                        <div class="flex-1">
                                                                                <p class="mb-2">reference to how transport has an impact on human lives</p>
                                                                                <input type="text" bind:value={q6} placeholder="A–G" maxlength="1" class="w-12 px-2 py-1 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-center text-sm font-medium" />
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <!-- SC2I_PASSAGE_END -->

                        <!-- SC2I_ANSWERS_START -->
                        <!-- <h4 class="text-xl font-bold text-center text-white mb-6">ANSWERS</h4>
                        <div class="bg-gray-800/50 rounded-lg p-6 md:p-8 border border-gray-700">
                                <div class="flex flex-col gap-3 max-w-xs mx-auto mb-8">
                                        <div class="flex items-center gap-3">
                                                <span class="text-white text-sm font-medium w-8">Q1</span>
                                                <input type="text" bind:value={q1} placeholder="A–G" maxlength="1" class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm" />
                                        </div>
                                        <div class="flex items-center gap-3">
                                                <span class="text-white text-sm font-medium w-8">Q2</span>
                                                <input type="text" bind:value={q2} placeholder="A–G" maxlength="1" class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm" />
                                        </div>
                                        <div class="flex items-center gap-3">
                                                <span class="text-white text-sm font-medium w-8">Q3</span>
                                                <input type="text" bind:value={q3} placeholder="A–G" maxlength="1" class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm" />
                                        </div>
                                        <div class="flex items-center gap-3">
                                                <span class="text-white text-sm font-medium w-8">Q4</span>
                                                <input type="text" bind:value={q4} placeholder="A–G" maxlength="1" class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm" />
                                        </div>
                                        <div class="flex items-center gap-3">
                                                <span class="text-white text-sm font-medium w-8">Q5</span>
                                                <input type="text" bind:value={q5} placeholder="A–G" maxlength="1" class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm" />
                                        </div>
                                        <div class="flex items-center gap-3">
                                                <span class="text-white text-sm font-medium w-8">Q6</span>
                                                <input type="text" bind:value={q6} placeholder="A–G" maxlength="1" class="flex-1 px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white text-sm" />
                                        </div>
                                </div>
                                <p class="text-xs text-gray-300 text-center">Enter letters A–G only</p>
                        </div> -->
                        <!-- SC2I_ANSWERS_END -->
                </section>

                <!-- Check Answers Section -->
                <section class="bg-gray-800 rounded-lg p-6 md:p-10 shadow-sm border border-gray-700 mb-12">
                        <div class="text-center">
                                <h3 class="text-2xl font-bold text-white mb-12">Submit Your Answers</h3>
                                
                                <!-- Check Button -->
                                <div class="text-center mb-10">
                                        <button
                                                type="button"
                                                on:click={checkAllAnswers}
                                                disabled={loadingAnswers}
                                                class="bg-green-600 hover:bg-green-700 disabled:bg-green-400 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors flex items-center justify-center mx-auto border-white border-2"
                                        >
                                                {#if loadingAnswers}
                                                        <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                        Processing...
                                                {:else}
                                                        UPLOAD
                                                {/if}
                                        </button>
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
                        </div>
                </section>

                <!-- Back Link -->
                <section class="text-center py-12">
                        <p class="text-white mb-16">
                                <a href="/IETPP#lesson-02" class="text-teal-400 hover:underline">
                                        ← Back to Progress Table
                                </a>
                        </p>
                </section>
        </div>
</div>

<!-- Lightbox Modal -->
{#if lightboxOpen}
        <div 
                class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
                on:click={closeLightbox}
        >
                <div class="max-w-full max-h-full">
                        <img
                                src={lightboxImage}
                                alt="Enlarged view"
                                class="max-w-full max-h-full object-contain rounded"
                                on:click|stopPropagation
                        />
                </div>
                <button
                        type="button"
                        on:click={closeLightbox}
                        class="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
                        aria-label="Close lightbox"
                >
                        ×
                </button>
        </div>
{/if}