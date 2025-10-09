<script lang="ts">
	import { onMount } from 'svelte';

	let lightboxOpen = false;
	let lightboxImage = '';

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
		{ title: "street market", src: "/LESSONS/les04/P3-market.png", alt: "ielts Part 3 Speaking Test Qs" },
		{ title: "a new experience", src: "/LESSONS/les04/P3-new_experience.png", alt: "ielts Part 3 Speaking Test Qs" },
		{ title: "a journey you remember", src: "/LESSONS/les04/P3-journey.png", alt: "ielts Part 3 Speaking Test Qs" },
		{ title: "something you lost", src: "/LESSONS/les04/P3-something_you_lost.png", alt: "ielts Part 3 Speaking Test Qs" }
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
		
		return () => {
			document.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

<svelte:head>
	<title>Speaking Test - Part 3: discussion | InsideIELTS Test Preparation Program</title>
	<meta name="description" content="Master IELTS Speaking Part 3 discussion with structure, technique, example responses, and practice from the Virtual Examiner." />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
	 <!-- Lesson Header -->
	<div class="max-w-5xl container mx-auto px-6 pt-8">
		<div class="bg-gray-50 dark:bg-gray-800 rounded-lg px-6 py-2 mb-8">
			<div class="text-center">
				<div class="text-xs text-left text-teal-600 dark:text-teal-400">
					IE2401_0403
				</div>
				<h1 class="text-3xl font-bold text-white my-7">
					Speaking Test - Part 3: discussion
				</h1>
			</div>
	<!-- Header Nav -->
			<div class="mt-6 mb-8 text-lg">
				<ul class="list-disc list-inside space-y-2 text-white">
					<li>Part 3 structure & question types</li>
					<li>Example Part 3 Discussion</li>
					<li>Part 3 practice</li>
				</ul>
			</div>

			<div class="flex justify-between items-center">
				<a
					href="/IETPP/lesson-04/lesson04P2"
					class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
					data-sveltekit-reload
				>
					← Prev
				</a>

				<a
					href="/IETPP#lesson-04"
					class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
					data-sveltekit-reload
				>
					Contents
				</a>
				<a
					href="/IETPP/lesson-04/lesson04(i)"
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

		<!-- Section 1: Part 3 Structure & Technique -->
		<section class="bg-cyan-600/25 rounded-lg p-4 md:p-8 shadow-sm border border-blue-600 mb-8">
			<h2 class="text-2xl font-bold text-center text-white mb-8 underline decoration-1 underline-offset-3">
				Part 3 structure & technique</h2>
			<div class="max-w-6xl mx-auto">  

			 <div class="bg-gray-800 rounded-lg p-6 text-lg border border-gray-700 mb-8">
					<p class="text-white mb-6">
						The final section of the speaking test is a
						<strong>4 to 5 minute</strong> discussion based on topics related to your
						Part 2 long turn.
					</p>

					<p class="text-white mb-6">
						In <strong>Part 3</strong> the examiner has a choice of three sets of three
						questions, from which he/she <strong>will select two</strong> to base the
						discussion around. In this final part of the test the examiner is
						able to discuss the questions in a more natural manner and will
						ask you a few additional follow-up questions based on your answers
						to previous questions.
					</p>

				<div class="flex justify-center m-10">
					<a
						href="https://insideielts.oppyo.com/video/embed/fa82w8g28j"
						target="_blank"
						title="InsideIELTS virtual examiner speaking test preparation video"
						class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
					>
						Virtual Examiner Video
					</a>
				</div>

				<p class="text-white mb-6">
					In this final part of the interview the examiner is trying
					to elicit specified forms of language in response to the question prompts and is
					providing you with the opportunity to display the the highest level of your language ability.
				</p>

				<p class="text-white mb-8">The questions are structured in the following way:</p>

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

				<p class="text-white mb-8">
					At the end of the second Part 3 frame the
					examiner will thank you for your time and end the interview.
				</p>

				<div class="bg-gray-700 rounded-lg p-2 border border-gray-600 mt-8 mb-2">
					<p class="text-white text-center">
						The total duration of <strong>Part 3</strong> will be
						just under <strong>5 minutes</strong>.
					</p>
							</div>
			</div>
		</div>
		</section>

		<!-- Section 2: Example Discussion Responses -->
		<section class="bg-teal-600/25 rounded-lg p-4 md:p-8 shadow-sm border border-teal-600 mb-8">
			<h2 class="text-2xl font-bold text-center text-white mb-8 underline decoration-1 underline-offset-3">
				Part 3 example discussion responses</h2>
			
			<div class="max-w-6xl mx-auto">
				<div class="bg-gray-800 rounded-lg p-6 text-lg border border-gray-700 mb-8">
					<p class="text-white mb-4">Watch this example <strong>VE Native Speaker Interview Part 3</strong> response.</p>
					<p class="text-white italic mb-8">
						(Take note of the follow-up questions asked by the examiner to develop the conversation).
					</p>
					
					<div class="max-w-4xl mx-auto">
						<!-- Example -->
						<div class="text-center">
							<h4 class="text-lg font-semibold text-white mb-4">Topic: Music and young people</h4>
							<img
								src="/LESSONS/les04/INT2-L1-new-P3Q-pic.png"
								alt="Speaking Part 3 response - Music and young people"
								class="w-full max-w-2xl mx-auto rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity mb-6"
								tabindex="0"
								role="button"
								onclick={() => openLightbox('/LESSONS/les04/INT2-L1-new-P3Q-pic.png')}
								onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les04/INT2-L1-new-P3Q-pic.png')) : null}
							/>

							<div class="mt-12 mb-6">
								<a
									href="/LESSONS/les04/INT2_L1-new-P3Q.mp4"
									target="_blank"
									title="InsideIELTS virtual examiner speaking test preparation video"
									class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
								>  
									Watch Part 3 discussion example
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Section 3: Practice -->
		<section class="bg-cyan-800/25 rounded-lg p-4 md:p-8 shadow-sm border border-cyan-600 mb-8">
			<h2 class="text-2xl font-bold text-center text-white mb-8 underline decoration-1 underline-offset-3">
				Part 3 practice</h2>
			
			<div class="max-w-6xl mx-auto">
				<div class=" bg-gray-800 rounded-lg p-6 text-lg border border-gray-700">
					<p class="text-white mb-8">
						Now practice responding to a Part 3 Discussion question with follow-up question.
					</p>
					
					<div class="max-w-4xl mx-auto">
						<!-- Practice Video -->
						<div class="text-center">
							<a
								href="/LESSONS/les04/QQP3-prac.mp4"
								target="_blank"
								title="InsideIELTS virtual examiner speaking test preparation video"
								class="inline-block"
							>
								<img
									src="/LESSONS/les04/QQP3-pracpic.png"
									alt="VE Part 3 Q"
									class="w-full max-w-sm mx-auto rounded border border-gray-600 hover:opacity-80 transition-opacity mb-2"
								/>
								<p class="text-sm text-teal-400 font-semibold">VE Part 3 Q</p>
							</a>
						</div>

						<p class="text-white text-center mt-8 italic">
							( The sub-topic is "<em>famous people in your country</em>", - following on from Part 2 )
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Footer Navigation -->
		<section class="text-center py-8">
			<div class="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
			
				<div class="flex justify-between items-center">
					<a
						href="/IETPP#lesson-04"
						class="text-teal-400 hover:underline font-semibold"
						data-sveltekit-reload
					>
						← Back to Contents
					</a>

					<a
						href="/IETPP/lesson-05"
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
			onkeydown={(e) => e.key === 'Enter' && closeLightbox()}
		>
			<div class="max-w-4xl max-h-full">
				<img src={lightboxImage} alt="Enlarged view" class="max-w-full max-h-full object-contain rounded-lg" />
			</div>
		</div>
	{/if}
</div>
