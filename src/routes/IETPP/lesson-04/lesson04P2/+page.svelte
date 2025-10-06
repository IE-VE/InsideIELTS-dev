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
		{ title: "street market", src: "/LESSONS/les04/P2-market.png", alt: "ielts Part 2 Speaking Test Qs" },
		{ title: "a new experience", src: "/LESSONS/les04/P2-new_experience.png", alt: "ielts Part 2 Speaking Test Qs" },
		{ title: "a journey you remember", src: "/LESSONS/les04/P2-journey.png", alt: "ielts Part 2 Speaking Test Qs" },
		{ title: "something you lost", src: "/LESSONS/les04/P2-something_you_lost.png", alt: "ielts Part 2 Speaking Test Qs" }
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
	<title>Speaking Test - Part 2: long-turn | InsideIELTS Test Preparation Program</title>
	<meta name="description" content="Master IELTS Speaking Part 2 long-turn with structure, technique, example responses, and practice from the Virtual Examiner." />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
	 <!-- Lesson Header -->
	<div class="max-w-5xl container mx-auto px-6 pt-8">
		<div class="bg-gray-50 dark:bg-gray-800 rounded-lg px-6 py-2 mb-8">
			<div class="text-center">
				<div class="text-xs text-left text-teal-600 dark:text-teal-400">
					IE2401_0402
				</div>
				<h1 class="text-3xl font-bold text-white my-7">
					Speaking Test - Part 2: long-turn
				</h1>
			</div>
	<!-- Header Nav -->
			<div class="mt-6 mb-8 text-lg">
				<ul class="list-disc list-inside space-y-2 text-white">
					<li>Part 2 structure & question types</li>
					<li>Example Part 2 long-turn response</li>
					<li>Part 2 practice</li>
				</ul>
			</div>

			<div class="flex justify-between items-center">
				<a
					href="/IETPP/lesson-04/lesson04P1"
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
					href="/IETPP/lesson-04/lesson04P3"
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

		<!-- Section 1: Part 2 Structure & Technique -->
		<section class="bg-teal-600/25 rounded-lg p-4 md:p-8 shadow-sm border border-teal-600 mb-8">
			<h2 class="text-2xl font-bold text-center text-white mb-8">
				Part 2 structure & technique</h2>
			<div class="max-w-6xl mx-auto">  

			 <div class="bg-gray-800 rounded-lg p-6 text-lg border border-gray-700 mb-8">
					<p class="text-white mb-6">
						Upon completion of Part 1 the examiner will say, "<strong><em>Now i'm going to give you a topic and i'd like you to talk
						about it for 1 to 2 minutes.</em></strong>" You will then be given a topic card, pencil and a piece of
						blank paper and allowed <strong>1 minute</strong> to make some notes on the topic.
					</p>

				<div class="flex justify-center m-10">
					<a
						href="https://insideielts.oppyo.com/video/embed/c9ymihgvqs"
						target="_blank"
						title="InsideIELTS virtual examiner speaking test preparation video"
						class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
					>
						Virtual Examiner Video
					</a>
				</div>

				<p class="text-white mb-6">
					After your 1 minute preparation time the examiner will say, "<strong><em>Remember, you have 1 to 2 minutes for this, 
					so don't worry if I stop you, can you start speaking now please.</em></strong>"
				</p>

				<p class="text-white mb-6">
					The examiner will not speak again until your <strong>2 minutes</strong> time
					is up. (Unless you stop speaking before 1:40s, in which case the
					examiner will prompt you to say more.)
				</p>

				<p class="text-white mb-8">Here are some examples of <strong>Part 2</strong> long-turn questions.</p>

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

				<p class="text-white mb-6">
					After your 2 minutes speaking time the examiner will ask you to
					stop speaking and will ask you one or two short rounding-off questions before leading into Part 3.
					(You should give a short 1 or 2 sentence reply to reply to these questions only).
				</p>

				<div class="bg-gray-700 rounded-lg p-6 border border-gray-600 mt-8 mb-2">
					<p class="text-white text-center">
						The total duration for <strong>Part 2</strong> will be just under <strong>4 minutes</strong>.
					</p>
				</div>
			</div>
		</div>
		</section>

		<!-- Section 2: Example Long-turn Response -->
		<section class="bg-cyan-600/25 rounded-lg p-4 md:p-8 shadow-sm border border-blue-600 mb-8">
			<h2 class="text-2xl font-bold text-center text-white mb-8">
				Part 2 example long-turn response</h2>
			
			<div class="max-w-6xl mx-auto">
				<div class="bg-gray-800 rounded-lg p-6 text-lg border border-gray-700 mb-8">
					<p class="text-white mb-8">Watch this example <strong>VE Native Speaker Interview Part 2</strong> response.</p>
					
					<div class="max-w-4xl mx-auto">
						<!-- Example -->
						<div class="text-center">
							<h4 class="text-lg font-semibold text-white mb-4 underline">Topic: Song or piece of music</h4>
							<img
								src="/LESSONS/les04/INT2_L1-new-P2Q-pic.png"
								alt="Speaking Part 2 response - Song or piece of music"
								class="w-full max-w-2xl mx-auto rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity mb-6"
								tabindex="0"
								role="button"
								onclick={() => openLightbox('/LESSONS/les04/INT2_L1-new-P2Q-pic.png')}
								onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les04/INT2_L1-new-P2Q-pic.png')) : null}
							/>

							<div class="m-6">
								<a
									href="/LESSONS/les04/INT2_L1-new-P2Q.mp4"
									target="_blank"
									title="InsideIELTS virtual examiner speaking test preparation video"
									class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
								>  
									Watch Part 2 long-turn example
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Section 3: Practice -->
		<section class="bg-teal-600/25 rounded-lg p-4 md:p-8 shadow-sm border border-teal-600 mb-8">
			<h2 class="text-2xl font-bold text-center text-white mb-8">
				Part 2 practice</h2>
			
			<div class="max-w-6xl mx-auto">
				<div class=" bg-gray-800 rounded-lg p-6 text-lg border border-gray-700">
					<p class="text-white mb-8">
						Plan your own (2 minute) Part 2 response to the question below. 
						Try to complete your planning in under 1 minute.
					</p>
					
					<div class="max-w-4xl mx-auto">
						<!-- Practice Question -->
						<div class="flex justify-center mb-12">
							<img
								src="/LESSONS/les04/QQP2-pracQ.png"
								alt="Part 2 practice question"
								class="w-full max-w-md cursor-pointer hover:opacity-80 transition-opacity"
								tabindex="0"
								role="button"
								onclick={() => openLightbox('/LESSONS/les04/QQP2-pracQ.png')}
								onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les04/QQP2-pracQ.png')) : null}
							/>
						</div>

						<p class="text-white text-center mb-8">
							Then practice your delivery with this VE Part 2 Question Vid:
						</p>

						<div class="text-center">
							<a
								href="/LESSONS/les04/QQP2-prac.mp4"
								target="_blank"
								title="InsideIELTS virtual examiner speaking test preparation video"
								class="inline-block"
							>
								<img
									src="/LESSONS/les04/QQP2-pracpic.png"
									alt="VE Part 2 Q"
									class="w-full max-w-sm mx-auto rounded border border-gray-600 hover:opacity-80 transition-opacity mb-2"
								/>
								<p class="text-sm text-teal-400 font-semibold">VE Part 2 Q</p>
							</a>
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
						href="/IETPP#lesson-04"
						class="text-teal-400 hover:underline font-semibold"
						data-sveltekit-reload
					>
						← Back to Contents
					</a>

					<a
						href="/IETPP/lesson-04/lesson04P3"
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
