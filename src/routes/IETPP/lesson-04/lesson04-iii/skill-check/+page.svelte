<script lang="ts">
	import { onMount } from 'svelte';

	let lightboxOpen = false;
	let lightboxImage = '';

	let answer1 = '';
	let answer2 = '';
	let answer3 = '';
	let answer4 = '';

	function openLightbox(imageSrc: string) {
		lightboxImage = imageSrc;
		lightboxOpen = true;
	}

	function closeLightbox() {
		lightboxOpen = false;
		lightboxImage = '';
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
	<title>Skill Check - Speaking GRA | InsideIELTS</title>
	<meta name="description" content="Test your understanding of IELTS Speaking Grammatical Range & Accuracy criteria." />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
	<!-- Header -->
	<div class="max-w-5xl container mx-auto px-6 pt-8">
		<div class="bg-gray-800 border border-gray-600 rounded-lg px-6 py-2 mb-8">
			<div class="text-center">
				<div class="text-xs text-left text-teal-400">
					SC_04.3
				</div>
				<h1 class="text-4xl font-bold text-white my-7 tracking-wide">
					SPEAKING
				</h1>
			</div>

			<div class="flex justify-between items-center">
				<a
					href="/IETPP/lesson-04/lesson04-iii"
					class="text-teal-400 hover:text-teal-300 font-semibold"
					data-sveltekit-reload
				>
					← Prev
				</a>

				<a
					href="/IETPP#lesson-04"
					class="text-teal-400 hover:text-teal-300 font-semibold"
					data-sveltekit-reload
				>
					Contents
				</a>
				<a
					href="/IETPP/lesson-04/lesson04-iv"
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
			<div class="flex items-center justify-center gap-4 mb-8">
				<div class="text-4xl text-green-500">✓</div>
				<h2 class="text-2xl font-bold text-center text-white tracking-wider underline decoration-2 underline-offset-4">SKILL CHECK 4.3</h2>
				<div class="text-4xl text-green-500">✓</div>
			</div>
			<p class="text-center text-white text-lg mb-8">
				<strong>Complete this skill-check exercise then upload your answers for correction and feedback.</strong>
			</p>

			<!-- Exercise -->
			<div class="bg-cyan-700/25 rounded-lg p-4 md:p-8 border border-cyan-600/50 mb-4 md:mb-8">
				<div class="bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold py-1 px-4 rounded-lg text-lg transition-all border-2 border-teal-400 tracking-wide text-center mb-8">
					Grammatical Range & Accuracy
				</div>

				<div class="bg-gray-800 rounded-lg p-4 md:p-8 border border-cyan-600/50 mb-4 md:mb-8 max-w-4xl mx-auto space-y-6 text-lg">
					<p class="text-white mb-12">
						To score well for Speaking <strong>GRA</strong> you need to be able to make use of complex sentence forms that are free from error.
					</p>

					<div class="text-center my-8">
						<p class="text-2xl font-bold text-white underline mb-8">TASK</p>
					</div>

					<p class="text-white mb-12 font-medium">
						Rewrite the four <strong>B5</strong> example speaking test responses below to produce grammatically correct complex sentences.
					</p>

					<!-- Question 1 -->
					<div class="mb-8">
						<p class="text-white text-xl font-bold mb-4">1.</p>
						<div class="mb-6">
							<img
								src="/LESSONS/les04/04(iii)/SC_GRA1.png"
								alt="IELTS SPEAKING GRA"
								class="w-full cursor-pointer hover:opacity-80 transition-opacity rounded border-2 border-black mb-4"
								onclick={() => openLightbox('/LESSONS/les04/04(iii)/SC_GRA1.png')}
								onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les04/04(iii)/SC_GRA1.png')) : null}
								tabindex="0"
							/>
							<textarea
								bind:value={answer1}
								rows="4"
								class="w-full p-3 bg-gray-700 text-white rounded border border-gray-600 focus:border-teal-400 focus:outline-none"
								placeholder=" answer"
							></textarea>
						</div>
					</div>

					<!-- Question 2 -->
					<div class="mb-8">
						<p class="text-white text-xl font-bold mb-4">2.</p>
						<div class="mb-6">
							<img
								src="/LESSONS/les04/04(iii)/SC_GRA2.png"
								alt="IELTS SPEAKING GRA"
								class="w-full cursor-pointer hover:opacity-80 transition-opacity rounded border-2 border-black mb-4"
								onclick={() => openLightbox('/LESSONS/les04/04(iii)/SC_GRA2.png')}
								onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les04/04(iii)/SC_GRA2.png')) : null}
								tabindex="0"
							/>
							<textarea
								bind:value={answer2}
								rows="4"
								class="w-full p-3 bg-gray-700 text-white rounded border border-gray-600 focus:border-teal-400 focus:outline-none"
								placeholder=" answer"
							></textarea>
						</div>
					</div>

					<!-- Question 3 -->
					<div class="mb-8">
						<p class="text-white text-xl font-bold mb-4">3.</p>
						<div class="mb-6">
							<img
								src="/LESSONS/les04/04(iii)/SC_GRA3.png"
								alt="IELTS SPEAKING GRA"
								class="w-full cursor-pointer hover:opacity-80 transition-opacity rounded border-2 border-black mb-4"
								onclick={() => openLightbox('/LESSONS/les04/04(iii)/SC_GRA3.png')}
								onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les04/04(iii)/SC_GRA3.png')) : null}
								tabindex="0"
							/>
							<textarea
								bind:value={answer3}
								rows="4"
								class="w-full p-3 bg-gray-700 text-white rounded border border-gray-600 focus:border-teal-400 focus:outline-none"
								placeholder=" answer"
							></textarea>
						</div>
					</div>

					<!-- Question 4 -->
					<div class="mb-8">
						<p class="text-white text-xl font-bold mb-4">4.</p>
						<div class="mb-6">
							<img
								src="/LESSONS/les04/04(iii)/SC_GRA4.png"
								alt="IELTS SPEAKING GRA"
								class="w-full cursor-pointer hover:opacity-80 transition-opacity rounded border-2 border-black mb-4"
								onclick={() => openLightbox('/LESSONS/les04/04(iii)/SC_GRA4.png')}
								onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les04/04(iii)/SC_GRA4.png')) : null}
								tabindex="0"
							/>
							<textarea
								bind:value={answer4}
								rows="4"
								class="w-full p-3 bg-gray-700 text-white rounded border border-gray-600 focus:border-teal-400 focus:outline-none"
								placeholder=" answer"
							></textarea>
						</div>
					</div>

					<!-- Upload Button - for GRA WRITING analysis and feedback -->
					<div class="flex justify-center mb-8">
						<button
							class="px-6 py-2 bg-green-600 hover:bg-green-700 border-2 border-white text-white font-bold rounded-lg transition-colors transition-all transform hover:scale-105"
							>
								Check Answers
						</button>
					</div>
					<p class="text-white mb-4">
						You will be rated based on <b>GRA</b> descriptors.
					</p>	
				</div>
			</div>
			<div class="text-center md:mt-12">
						<p class="text-white"><b>End of Lesson 04-iii</b></p>
			</div>
		</section>

		<!-- Footer Section -->
		<section class="text-center py-8">
			<div class="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
				<div class="flex justify-between items-center">
					<a
						href="/IETPP#lesson-04"
						class="text-teal-400 hover:text-teal-300 font-semibold"
						data-sveltekit-reload
					>
						← Back to Contents
					</a>

					<a
						href="/IETPP/lesson-04/lesson04-iv"
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
			<div class="max-w-6xl max-h-full">
				<img src={lightboxImage} alt="Enlarged view" class="max-w-full max-h-full object-contain rounded-lg" />
			</div>
		</div>
	{/if}
</div>
