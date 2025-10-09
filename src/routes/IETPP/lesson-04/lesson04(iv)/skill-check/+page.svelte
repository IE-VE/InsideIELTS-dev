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
	<title>Skill Check - Speaking PR | InsideIELTS</title>
	<meta name="description" content="Test your understanding of IELTS Speaking Pronunciation criteria." />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
	<!-- Header -->
	<div class="max-w-5xl container mx-auto px-6 pt-8">
		<div class="bg-gray-800 border border-gray-600 rounded-lg px-6 py-2 mb-8">
			<div class="text-center">
				<div class="text-xs text-left text-teal-400">
					SC_04.4
				</div>
				<h1 class="text-4xl font-bold text-white my-7 tracking-wide">
					SPEAKING
				</h1>
			</div>

			<div class="flex justify-between items-center">
				<a
					href="/IETPP/lesson-04/lesson04(iv)"
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
					href="/IETPP#lesson-05"
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
		<section class="bg-teal-800/25 rounded-lg p-4 md:p-10 shadow-sm border border-teal-700 mb-8">
			<div class="flex items-center justify-center gap-4 mb-8">
				<div class="text-4xl text-green-500">✓</div>
				<h2 class="text-2xl font-bold text-center text-white tracking-wider underline decoration-2 underline-offset-4">SKILL CHECK 4.4</h2>
				<div class="text-4xl text-green-500">✓</div>
			</div>
			<p class="text-center text-white text-lg mb-8">
				<strong>Complete this skill-check exercise to practice your PR skills.</strong>
			</p>

			<!-- Exercise -->
			<div class="bg-teal-700/25 rounded-lg p-4 md:p-8 border border-teal-700/50 mb-4 md:mb-8">
				<div class="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold py-1 px-4 rounded-lg text-lg transition-all transform hover:scale-105 border-2 border-teal-400 tracking-wide text-center mb-8">
					Pronunciation
				</div>

				<div class="bg-gray-800 rounded-lg p-4 md:p-8 border border-cyan-600/50 mb-4 md:mb-8 max-w-4xl mx-auto space-y-6 text-lg">
					<div class="text-center">
						<p class="text-2xl font-bold text-white underline mb-8">TASK</p>
					</div>

					<p class="text-white text-center mb-8">
						Listen to and read this Native Speaker Part 2 response on the topic of hobbies.
					</p>

					<!-- Native Speaker Interview Video -->
					<div class="flex justify-center mb-4">
						<audio
										controls
										class="w-full max-w-md bg-gray-600 rounded-lg p-4"
										src="/LESSONS/les04/04(iv)/Dad-P2cut.mp3"
						>
										Your browser does not support the audio element.
						</audio>
					</div>
					<div class="text-center mb-6">
						<small class="text-gray-600 dark:text-gray-400 font-bold">Part 2 extract</small>
					</div>

					<p class="text-white text-center mb-8">
						Focus on the rhythm, intonation and chunking of the native speaker's speech.
					</p>
					<!-- Question Image -->
					<div class="text-center mb-8">
						<img
										src="/LESSONS/les04/04(iv)/Dad_P2.png"
										alt="Listening multiple choice questions 11-15"
										class="w-full mx-auto max-w-xl rounded border border-gray-600 cursor-pointer max-w-full"
										onclick={() => openLightbox('/LESSONS/les01/01(i)/SC_L-multiplechoice1.png')}
						/>
				
					</div>

					
						<p class="text-white mb-8">
						When you are ready click the link below to record yourself reading the extract.
					</p>
					<div class="flex justify-center mb-12">
						<a
							href="https://insideielts.oppyo.com/quick-questions?qid=3"
							target="_blank"
							title="Which part of your country do most people live in?"
							class="inline-block bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold py-1 px-4 rounded-lg text-lg transition-all transform hover:scale-105 border-2 border-teal-400 disabled:opacity-50"
						>
							TASK
						</a>
					</div>

					<p class="text-white mb-8">
						You will be rated based on the 4 PR descriptors.
					</p>		
				</div>
			</div>
			<div class="text-center md:mt-12">
						<p class="text-white"><b>End of Lesson 04-iv</b></p>
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
						href="/IETPP#lesson-04"
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
