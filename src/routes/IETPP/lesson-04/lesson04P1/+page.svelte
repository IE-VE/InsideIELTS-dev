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
		{ title: "Intro-home", src: "/LESSONS/les04/P1_Q/P1-intro.png", alt: "ielts Part 1 Speaking Test Qs" },
		{ title: "Intro-work", src: "/LESSONS/les04/P1_Q/P1-intro2.png", alt: "ielts Part 1 Speaking Test Qs" },
		{ title: "Intro-study", src: "/LESSONS/les04/P1_Q/P1-intro2b.png", alt: "ielts Part 1 Speaking Test Qs" },
		{ title: "colours", src: "/LESSONS/les04/P1_Q/P1-colours.png", alt: "ielts Part 1 Speaking Test Qs" },
		{ title: "cooking", src: "/LESSONS/les04/P1_Q/P1-cooking.png", alt: "ielts Part 1 Speaking Test Qs" },
		{ title: "dancing", src: "/LESSONS/les04/P1_Q/P1-dancing.png", alt: "ielts Part 1 Speaking Test Qs" },
		{ title: "friends", src: "/LESSONS/les04/P1_Q/P1-friends.png", alt: "ielts Part 1 Speaking Test Qs" },
		{ title: "holidays", src: "/LESSONS/les04/P1_Q/P1-holidays.png", alt: "ielts Part 1 Speaking Test Qs" },
		{ title: "tea & coffee", src: "/LESSONS/les04/P1_Q/P1-tea_coffee.png", alt: "ielts Part 1 Speaking Test Qs" },
		{ title: "walking", src: "/LESSONS/les04/P1_Q/P1-walking.png", alt: "ielts Part 1 Speaking Test Qs" },
		{ title: "wild animals", src: "/LESSONS/les04/P1_Q/P1-wild_animals.png", alt: "ielts Part 1 Speaking Test Qs" },
		{ title: "traffic", src: "/LESSONS/les04/P1_Q/P1-traffic.png", alt: "ielts Part 1 Speaking Test Qs" }
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
	<title>Speaking Test - Part 1 | InsideIELTS Test Preparation Program</title>
	<meta name="description" content="Master IELTS Speaking Part 1 with question types, example responses, and practice exercises from the Virtual Examiner." />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
	 <!-- Lesson Header -->
	<div class="max-w-5xl container mx-auto px-6 pt-8">
		<div class="bg-gray-50 dark:bg-gray-800 rounded-lg px-6 py-2 mb-8">
			<div class="text-center">
				<div class="text-xs text-left text-teal-600 dark:text-teal-400">
					IE2401_0401
				</div>
				<h1 class="text-3xl font-bold text-white my-7">
					Speaking Test - Part 1
				</h1>
			</div>
	<!-- Header Nav -->
			<div class="mt-6 mb-8 text-lg">
				<ul class="list-disc list-inside space-y-2 text-white">
					<li>Part 1 structure & question types</li>
					<li>Example Part 1 responses</li>
					<li>Part 1 question practice</li>
				</ul>
			</div>

			<div class="flex justify-between items-center">
				<a
					href="/IETPP/lesson-04"
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
					href="/IETPP/lesson-04/lesson04P2"
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

		<!-- Section 1: Part 1 Structure & Question Types -->
		<section class="bg-cyan-600/25 rounded-lg p-4 md:p-8 shadow-sm border border-blue-600 mb-8">
			<h2 class="text-2xl font-bold text-center text-white mb-8">
				Part 1 structure & question types</h2>
			<div class="max-w-6xl mx-auto">  

			 <div class="bg-gray-800 rounded-lg p-6 md:p-12 text-lg border border-gray-700 mb-8">
					<p class="text-white mb-6">
						The examiner will begin the interview by reading out the date and
						test venue identification details for the benefit of the
						recording. (All <strong>IELTS</strong> interviews are recorded for the full duration of
						the time you are in the interview room).
					</p>

				<div class="flex justify-center mt-10 mb-10">
					<a
						href="https://insideielts.oppyo.com/video/embed/pyq16syy6d"
						target="_blank"
						title="InsideIELTS virtual examiner speaking test preparation video"
						class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
					>
						Virtual Examiner Video
					</a>
				</div>

				<p class="text-white mb-6">
					The examiner will then read out your name and
					<strong>IELTS</strong> identification number followed by their own name and
					examiner identification number. You will then be asked to show
					your passport or national ID card for verification.
				</p>

				<p class="text-white mb-6">
					The examiner will then choose <strong>1 intro frame</strong> which will be about where you live
					or your current job/studies, plus <strong>2 additional topic question frames</strong> for <strong>Part 1</strong> of the interview.
				</p>

				<p class="text-white mb-8">Here are some <strong>Part 1</strong> example question frames.</p>

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
					The topics chosen are centered around familiar, every day experiences. You should aim to speak for <strong>20-30 seconds</strong> for each question. The examiner can prompt you to extend your response by asking "<em>Why/why not?</em>" if your answers are not long enough, - but nothing more than that.
				</p>

				<div class="bg-gray-700 rounded-lg p-2 border border-gray-600 mt-8 mb-2">
					<p class="text-white text-center">
						The total duration for <strong>Part 1</strong> will be just under <strong>5 minutes</strong>.
					</p>
				</div>
			</div>
		</div>
		</section>

		<!-- Section 2: Example Responses -->
		<section class="bg-teal-600/25 rounded-lg p-4 md:p-8 shadow-sm border border-teal-600 mb-8">
			<h2 class="text-2xl font-bold text-center text-white mb-8">
				Part 1 example responses</h2>
			
			<div class="max-w-6xl mx-auto">
				<div class="bg-gray-800 rounded-lg p-6 text-lg border border-gray-700 mb-8">
					<p class="text-white mb-8">Watch these example <strong>VE Native Speaker Interview Part 1</strong> responses.</p>
					
					<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
						<!-- Example 1 -->
						<div class="text-center">
							<h4 class="text-lg font-semibold text-white mb-4">1) Snacks</h4>
							<img
								src="/LESSONS/les04/INT2-L1-new-P1Q-pic.png"
								alt="Speaking Part 1 response - Snacks"
								class="w-full max-w-md mx-auto rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity mb-6"
								tabindex="0"
								role="button"
								onclick={() => openLightbox('/LESSONS/les04/INT2-L1-new-P1Q-pic.png')}
								onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les04/INT2-L1-new-P1Q-pic.png')) : null}
							/>

							<div class="m-6">
								<a
									href="/LESSONS/les04/INT2-L1-new-P1Q.mp4"
									target="_blank"
									title="InsideIELTS virtual examiner speaking test preparation video"
									class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors mt-6"
								>  
									Watch Part 1 example Q
								</a>
							</div>
						</div>

						<!-- Example 2 -->
						<div class="text-center">
							<h4 class="text-lg font-semibold text-white mb-4">2) Your country</h4>
							<img
								src="/LESSONS/les04/INT3-L1-new-P1Q-pic.png"
								alt="Speaking Part 1 response - Your country"
								class="w-full max-w-md mx-auto rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity mb-6"
								tabindex="0"
								role="button"
								onclick={() => openLightbox('/LESSONS/les04/INT3-L1-new-P1Q-pic.png')}
								onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les04/INT3-L1-new-P1Q-pic.png')) : null}
							/>

							<div class="m-6">
								<a
									href="/LESSONS/les04/INT3-L1-new-P1Q.mp4"
									target="_blank"
									title="InsideIELTS virtual examiner speaking test preparation video"
									class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors mt-6"
								>  
									Watch Part 1 example Q
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Section 3: Practice -->
		<section class="bg-cyan-800/25 rounded-lg p-4 md:p-8 shadow-sm border border-cyan-600 mb-8">
			<h2 class="text-2xl font-bold text-center text-white mb-8">
				Part 1 practice</h2>
			
			<div class="max-w-6xl mx-auto">
				<div class=" bg-gray-800 rounded-lg p-6 text-lg border border-gray-700">
					<p class="text-white mb-8">
						Practice responding to a Part 1 Quick-Question.
					</p>
					
					<div class="max-w-4xl mx-auto">
						<!-- Practice Grid -->
						<div class="flex flex-col items-center mb-8">
							<img
								src="/LESSONS/les04/QQ_pic.png"
								alt="Quick Question"
								class="w-32 h-auto mb-10"
							/>

							<div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl">
								<a
									href="/QQ_vid/QQ1.mp4"
									target="_blank"
									title="What are the most popular types of entertainment in your country?"
									class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded text-center transition-colors"
								>
									Entertainment
								</a>

								<a
									href="/QQ_vid/QQ2.mp4"
									target="_blank"
									title="How often do you eat snacks?"
									class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded text-center transition-colors"
								>
									Snacks
								</a>

								<a
									href="/QQ_vid/QQ3.mp4"
									target="_blank"
									title="Which part of your country do most people live in?"
									class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded text-center transition-colors"
								>
									Your country
								</a>
							</div>
						</div>

						<p class="text-white text-center">
							Watch an <a 
								href="https://youtu.be/l9KIxk_JZwk"
								target="_blank"
								title="VE Quick-Question #1"
								class="text-teal-400 hover:text-teal-300"
							>example Quick-Question</a> response.
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
						href="/IETPP/lesson-04/lesson04P2"
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
