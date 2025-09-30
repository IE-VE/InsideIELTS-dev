<script lang="ts">
	import { onMount } from 'svelte';

	let lightboxOpen = false;
	let lightboxImage = '';

	// Answer input variables for practice exercises
	let task1Answer = '';
	let task2Answer = '';

	function openLightbox(imageSrc: string) {
		lightboxImage = imageSrc;
		lightboxOpen = true;
	}

	function closeLightbox() {
		lightboxOpen = false;
		lightboxImage = '';
	}

	// Carousel functionality
	let currentSlide = 0;
	const slides = [
		{ title: "Complaint letter", src: "/writing-images/ielts-writing-test-1-general-complaint.png", alt: "ielts writing test-1 general complaint letter" },
		{ title: "Letter to inform", src: "/writing-images/ielts-writing-test-1-general-inform.png", alt: "ielts writing test-1 general inform letter" },
		{ title: "Request letter", src: "/writing-images/ielts-writing-test-1-general-request.png", alt: "ielts writing test-1 general request letter" }
	];

	function nextSlide() {
		currentSlide = (currentSlide + 1) % slides.length;
	}

	function prevSlide() {
		currentSlide = (currentSlide - 1 + slides.length) % slides.length;
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
		};
	});
</script>

<svelte:head>
	<title>Writing Task 1 - General Training | InsideIELTS Test Preparation Program</title>
	<meta name="description" content="Master IELTS Writing Task 1 General Training with expert letter writing techniques, practice exercises, and Virtual Examiner videos." />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
         <!-- Lesson Header -->
        <div class="max-w-5xl container mx-auto px-3 md:px-6 py-8">
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg px-6 py-2 mb-8">
                        <div class="text-center">
                                <div class="text-xs text-left text-teal-600 dark:text-teal-400">
                                        IE2401_0302
                                </div>
                                <h1 class="text-3xl font-bold text-white my-7">
                                        Writing Task 1 - General Training
                                </h1>
                        </div>
        <!-- Header Nav -->
                        <div class="mt-6 mb-8 text-lg">
                                <ul class="list-disc list-inside space-y-2 text-white">
                                        <li>format & question types</li>
                                        <li>technique</li>
                                        <li>practice</li>
                                </ul>
                        </div>

                        <div class="flex justify-between items-center">
                                <a
                                        href="/IETPP/lesson-03"
                                        class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
                                        data-sveltekit-reload
                                >
                                        ← Prev
                                </a>

                                <a
                                        href="/IETPP#lesson-03"
                                        class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
                                        data-sveltekit-reload
                                >
                                        Contents
                                </a>
                                
                                <a
                                        href="/IETPP/lesson-03T2"
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

                <!-- Section 1: Format and Question Types -->
                <section class="bg-cyan-600/25 rounded-lg p-4 md:p-8 shadow-sm border border-teal-600 mb-8">
                        <h2 class="text-2xl font-bold text-center text-white mb-8">
                                Task 1 (GT) format & question types</h2>
                        <div class="max-w-6xl mx-auto">  

                         <div class="bg-gray-800 rounded-lg p-6 text-lg border border-gray-700 mb-8">
                                        <p class="text-white">
                                                The <strong>Task 1</strong> writing exercise for the
                                                <strong>General Training</strong> module is a <strong>letter</strong>. The topics
                                                are centered around everyday situations and usually require
                                                you to request or convey information, express thanks, or make
                                                a suggestion or complaint in writing.
                                        </p>

                                <div class="flex justify-center m-10">
                                        <a
                                                href="https://insideielts.oppyo.com/video/embed/vqbmpveluv"
                                                target="_blank"
                                                title="InsideIELTS virtual examiner writing test preparation video"
                                                class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
                                        >
                                                Virtual Examiner Video
                                        </a>
                                </div>

                                <p class="text-white mb-6">
                                        The question will ask you to:
                                        <strong><em>"Write a letter to... "</em></strong>,
                                         and then give you three bullet points that you must cover
                                        in your letter.
                                </p>

                                <p class="text-white mb-8">
                                        Here are some sample <strong>Task 1 General Training</strong> questions:
                                </p>

                                <!-- Carousel -->
                                <div class="relative max-w-2xl mx-auto mb-8">
                                        <div class="relative overflow-hidden rounded-lg bg-gray-100">
                                                <div class="flex transition-transform duration-300 ease-in-out"
                                                     style="transform: translateX(-{currentSlide * 100}%)">
                                                        {#each slides as slide, index}
                                                                <div class="w-full flex-shrink-0 bg-white p-4">
                                                                        <h3 class="text-xl font-semibold text-gray-800 text-center mb-4">{slide.title}</h3>
                                                                        <img
                                                                                src={slide.src}
                                                                                alt={slide.alt}
                                                                                class="w-full h-auto cursor-pointer"
                                                                                tabindex="0"
                                                                                role="button"
                                                                                onclick={() => openLightbox(slide.src)}
                                                                                onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox(slide.src)) : null}
                                                                        />
                                                                </div>
                                                        {/each}
                                                </div>
                                                
                                                <!-- Navigation buttons -->
                                                <button 
                                                        class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all"
                                                        onclick={prevSlide}
                                                >
                                                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                                                        </svg>
                                                </button>
                                                
                                                <button 
                                                        class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all"
                                                        onclick={nextSlide}
                                                >
                                                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                                        </svg>
                                                </button>
                                        </div>
                                        
                                        <!-- Slide indicators -->
                                        <div class="text-center mt-4">
                                                <div class="flex justify-center space-x-2">
                                                        {#each slides as _, index}
                                                                <button
                                                                        class="w-2 h-2 rounded-full transition-all {index === currentSlide ? 'bg-teal-600' : 'bg-gray-400'}"
                                                                        onclick={() => currentSlide = index}
                                                                ></button>
                                                        {/each}
                                                </div>
                                        </div>
                                </div>

                                <div class="bg-gray-700 rounded-lg p-6 border border-gray-600">
                                        <p class="text-white text-center">
                                                <strong>Task 1</strong> is worth a third of the available marks for the
                                                writing section, so you should aim to spend around
                                                <strong>20 minutes</strong> on this task.
                                        </p>
                                </div>
                        </div>
                </div>
                </section>

                <!-- Section 2: Technique -->
                <section class="bg-teal-600/25 rounded-lg p-4 md:p-8 shadow-sm border border-teal-600 mb-8">
                        <h2 class="text-2xl font-bold text-center text-white mb-8">
                                Task 1 (GT) technique</h2>
                        
                        <div class="max-w-6xl mx-auto">
                                <div class="bg-gray-800 rounded-lg p-6 text-lg border border-gray-700 mb-8">
                                        <p class="text-white mb-8">Watch the Task 1 General Training letter tutorial videos below:</p>
                                        
                                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                                <!-- Complaint Letter Example -->
                                                <div class="text-center">
                                                        <h4 class="text-lg font-semibold text-white mb-4">1) Complaint letter</h4>
                                                        <img
                                                                src="/writing-images/ielts-writing-test-1-general-complaint.png"
                                                                alt="Task 1 complaint letter example"
                                                                class="w-full rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity mb-6"
                                                                tabindex="0"
                                                                role="button"
                                                                onclick={() => openLightbox('/writing-images/ielts-writing-test-1-general-complaint.png')}
                                                                onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/writing-images/ielts-writing-test-1-general-complaint.png')) : null}
                                                        />

                                                        <div class="mt-8"> <a
                                                                href="https://insideielts.oppyo.com/video/embed/l8ngn5k1wr"
                                                                target="_blank"
                                                                title="InsideIELTS virtual examiner writing test preparation video"
                                                                class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors mb-6"
                                                        >
                                                                Watch VE vid
                                                        </a> </div>

                                                        <div class="bg-gray-700 border border-gray-600 rounded-lg p-4 text-center">
                                                                <p class="text-gray-400 text-sm">Model answer video provides detailed explanation and example response structure for complaint letters.</p>
                                                        </div>
                                                </div>

                                                <!-- Letter to Inform Example -->
                                                <div class="text-center">
                                                        <h4 class="text-lg font-semibold text-white mb-4">2) Letter to inform</h4>
                                                        <img
                                                                src="/writing-images/ielts-writing-test-1-general-inform.png"
                                                                alt="Task 1 letter to inform example"
                                                                class="w-full rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity mb-6"
                                                                tabindex="0"
                                                                role="button"
                                                                onclick={() => openLightbox('/writing-images/ielts-writing-test-1-general-inform.png')}
                                                                onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/writing-images/ielts-writing-test-1-general-inform.png')) : null}
                                                        />

                                                        <div class="mt-8"> <a href="https://insideielts.oppyo.com/video/embed/nm3hxt4rpn"
                                                                target="_blank"
                                                                title="InsideIELTS virtual examiner writing test preparation video"
                                                                class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors mb-6"
                                                        >
                                                                Watch VE vid
                                                        </a>    </div>

                                                        <div class="bg-gray-700 border border-gray-600 rounded-lg p-4 text-center mb-6">
                                                                <p class="text-gray-400 text-sm">Model answer video provides detailed explanation and example response structure for informative letters.</p>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </section>

                <!-- Section 3: Practice -->
                <section class="bg-cyan-800/25 rounded-lg p-4 md:p-8 shadow-sm border border-teal-600 mb-8">
                        <h2 class="text-2xl font-bold text-center text-white mb-8">
                                Task 1 (GT) practice</h2>
                        
                        <div class="max-w-6xl mx-auto">
                                <div class="bg-gray-800 rounded-lg p-6 text-lg border border-gray-700">
                                        <p class="text-white mb-8">
                                                <strong>TASK</strong>: complete and upload this pair of short Task 1 General Training practice exercises.
                                        </p>
                                        
                                        <!-- Practice Exercise 1 -->
                                        <div class="mb-12">
                                                <h3 class="text-xl font-bold text-white mb-6 text-center">1) Letter of complaint</h3>
                                                
                                                <div class="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
                                                        <!-- Left Column - Image (3/5 width) -->
                                                        <div class="md:col-span-3">
                                                                <img
                                                                        src="/LESSONS/les03/T1_GT(6).png"
                                                                        alt="Task 1 GT complaint practice"
                                                                        class="w-full h-auto rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity"
                                                                        tabindex="0"
                                                                        role="button"
                                                                        onclick={() => openLightbox('/LESSONS/les03/T1_GT(6).png')}
                                                                        onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les03/T1_GT(6).png')) : null}
                                                                />
                                                        </div>

                                                        <!-- Right Column - Task Modal (2/5 width) -->
                                                        <div class="md:col-span-2">
                                                                <div class="bg-gray-700 border border-gray-600 rounded-lg p-4">
                                                                        <h4 class="font-bold text-center text-white mb-3 underline md:text-sm lg:text-base">TASK</h4>
                                                                        <p class="text-white mb-3 md:text-sm lg:text-base">
                                                                                Write the opening statement for this Task 1 GT question.
                                                                        </p>
                                                                        <ul class="text-left text-gray-300 space-y-1 mb-3 md:text-sm lg:text-base">
                                                                                <li>• use the appropriate greeting (formal)</li>
                                                                                <li>• say why you are writing</li>
                                                                                <li>• include some details of the specific problem</li>
                                                                        </ul>
                                                                        <p class="md:text-xs lg:text-sm text-gray-400 italic">(Maximum 50 words)</p>
                                                                </div>

                                                                <!-- Answer sheet - visible only on mobile -->
                                                                <div class="md:hidden mt-4">
                                                                        <h4 class="font-bold text-white text-center mb-2">answer sheet</h4>
                                                                        <textarea
                                                                                bind:value={task1Answer}
                                                                                rows="6"
                                                                                placeholder="write your response"
                                                                                class="w-full p-3 border border-gray-500 bg-gray-700 text-white rounded resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
                                                                        ></textarea>
                                                                </div>
                                                        </div>
                                                </div>

                                                <!-- Answer sheet - visible only on tablet and desktop, positioned below columns -->
                                                <div class="hidden md:block mt-6">
                                                        <h4 class="font-bold text-white text-center mb-2">answer sheet</h4>
                                                        <textarea
                                                                bind:value={task1Answer}
                                                                rows="6"
                                                                placeholder="write your response"
                                                                class="w-full p-3 border border-gray-500 bg-gray-700 text-white rounded resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
                                                        ></textarea>
                                                </div>
                                        </div>

                                        <!-- Practice Exercise 2 -->
                                        <div class="mb-8">
                                                <h3 class="text-xl font-bold text-white mb-6 text-center">2) Letter to inform</h3>
                                                
                                                <div class="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
                                                        <!-- Left Column - Image (2/3 width) -->
                                                        <div class="md:col-span-3">
                                                                <img
                                                                        src="/LESSONS/les03/T1_GT(4).png"
                                                                        alt="Task 1 GT inform practice"
                                                                        class="w-full h-auto rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity"
                                                                        tabindex="0"
                                                                        role="button"
                                                                        onclick={() => openLightbox('/LESSONS/les03/T1_GT(4).png')}
                                                                        onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les03/T1_GT(4).png')) : null}
                                                                />
                                                        </div>

                                                        <!-- Right Column - Task Modal (1/3 width) -->
                                                        <div class="md:col-span-2">
                                                                <div class="bg-gray-700 border border-gray-600 rounded-lg p-4">
                                                                        <h4 class="font-bold text-center text-white mb-3 underline md:text-sm lg:text-base">TASK</h4>
                                                                        <p class="text-white mb-3 md:text-sm lg:text-base">
                                                                                List two content details per bullet point for this Task 1 GT question.
                                                                        </p>
                                                                        <ul class="text-left text-gray-300 space-y-1 mb-3 md:text-sm lg:text-base">
                                                                                <li>• your previous accommodation</li>
                                                                                <li>• how to search for accommodation</li>
                                                                                <li>• what to avoid/be wary of</li>
                                                                        </ul>
                                                                        <p class="md:text-xs lg:text-sm text-gray-400 italic">(Maximum 6 points)</p>
                                                                </div>

                                                                <!-- Answer sheet - visible only on mobile -->
                                                                <div class="md:hidden mt-4">
                                                                        <h4 class="font-bold text-white text-center mb-2">answer sheet</h4>
                                                                        <textarea
                                                                                bind:value={task2Answer}
                                                                                rows="6"
                                                                                placeholder="write your response"
                                                                                class="w-full p-3 border border-gray-500 bg-gray-700 text-white rounded resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
                                                                        ></textarea>
                                                                </div>
                                                        </div>
                                                </div>

                                                <!-- Answer sheet - visible only on tablet and desktop, positioned below columns -->
                                                <div class="hidden md:block mt-6">
                                                        <h4 class="font-bold text-white text-center mb-2">answer sheet</h4>
                                                        <textarea
                                                                bind:value={task2Answer}
                                                                rows="6"
                                                                placeholder="write your response"
                                                                class="w-full p-3 border border-gray-500 bg-gray-700 text-white rounded resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
                                                        ></textarea>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </section>

                <!-- Footer Navigation -->
                <section class="text-center py-8">
                        <div class="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
                                <div class="flex justify-between items-center">
                                        <a
                                                href="/IETPP#lesson-03"
                                                class="text-teal-400 hover:underline font-semibold"
                                                data-sveltekit-reload
                                        >
                                                ← Back to Contents
                                        </a>

                                        <a
                                                href="/IETPP/lesson-03T2"
                                                class="text-teal-400 hover:underline font-semibold"
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
                        onkeydown={(e) => e.key === 'Escape' ? closeLightbox() : null}
                >
                        <img
                                src={lightboxImage}
                                alt="Enlarged view"
                                class="max-w-full max-h-full object-contain"
                                onclick={(e) => e.stopPropagation()}
                        />
                        <button
                                class="absolute top-4 right-4 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75"
                                onclick={closeLightbox}
                        >
                                ×
                        </button>
                </div>
        {/if}
</div>
