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
					href="/IETPP#lesson-04"
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
		<section class="bg-cyan-600/25 rounded-lg p-4 md:p-10 shadow-sm border border-blue-700 mb-8">
			<div class="flex items-center justify-center gap-4 mb-8">
				<div class="text-4xl text-green-500">✓</div>
				<h2 class="text-2xl font-bold text-center text-white tracking-wider">SKILL CHECK 4.4</h2>
				<div class="text-4xl text-green-500">✓</div>
			</div>
			<p class="text-center text-white text-lg mb-8">
				<strong>Complete this skill-check exercise to practice your PR skills.</strong>
			</p>

			<!-- Exercise -->
			<div class="bg-cyan-500/25 rounded-lg p-4 md:p-8 border border-cyan-600/50 mb-4 md:mb-8">
				<div class="bg-blue-600 text-white text-xl px-4 py-2 rounded-lg text-center font-bold mb-8 border-1 border-white tracking-wide">
					Pronunciation
				</div>

				<div class="bg-gray-800 rounded-lg p-4 md:p-8 border border-cyan-600/50 mb-4 md:mb-8 max-w-4xl mx-auto space-y-6 text-lg">
					<div class="text-center my-8">
						<p class="text-2xl font-bold text-white underline mb-8">TASK</p>
					</div>

					<p class="text-white mb-8">
						Listen to and repeat the Native Speaker responses in the time-space given.
					</p>

					<p class="text-white mb-12">
						Focus on reproducing the rhythm, intonation and chunking of the native speaker's speech.
					</p>

					<!-- Native Speaker Interview Video -->
					<div class="flex justify-center mb-12">
						<video
							controls
							class="w-full max-w-3xl rounded border-2 border-gray-600"
							title="Work through the IE Test Preparation Program"
						>
							<source src="/LESSONS/les04/04(iv)/NS_INT2_L2cut.mp4" type="video/mp4" />
							<track kind="captions" />
							Your browser does not support this video format.
						</video>
					</div>

					<p class="text-white mb-8">
						To continue Pronunciation practice with this Native Speaker Interview, click the link below then select <span class="text-blue-400 font-bold">LEVEL 2</span>.
					</p>

					<!-- Go To NS-INT Link -->
					<div class="flex justify-center mb-12">
						<a
							href="https://insideielts.oppyo.com/native-speaker-interviews?vid=2"
							target="_blank"
							title="Native Speaker Interview 2"
							class="inline-block bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded-lg text-lg transition-all transform hover:scale-105 border-2 border-teal-400"
						>
							Go To NS-INT
						</a>
					</div>

					<p class="text-white mb-8">
						When you have practiced the full interview click the link below to record and upload the full interview.
					</p>

					<!-- Native Speaker Interview Image -->
					<div class="flex justify-center mb-12">
						<img
							src="/LESSONS/les04/04(iv)/NS_INT-pic.png"
							alt="VE Rated Interview"
							class="w-full max-w-xs cursor-pointer hover:opacity-80 transition-opacity rounded"
							onclick={() => openLightbox('/LESSONS/les04/04(iv)/NS_INT-pic.png')}
							onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les04/04(iv)/NS_INT-pic.png')) : null}
							tabindex="0"
						/>
					</div>

					<!-- VE Rated Interview Link -->
					<div class="flex justify-center mb-12">
						<a
							href="https://insideielts.oppyo.com/interviews?vid=2"
							target="_blank"
							title="Native Speaker Interview 2"
							class="inline-block bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded-lg text-lg transition-all transform hover:scale-105 border-2 border-teal-400"
						>
							VE Rated Interview #2
						</a>
					</div>
				</div>
			</div>
		</section>

		<!-- Footer Section -->
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
						href="/IETPP#lesson-04"
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
			<div class="max-w-6xl max-h-full">
				<img src={lightboxImage} alt="Enlarged view" class="max-w-full max-h-full object-contain rounded-lg" />
			</div>
		</div>
	{/if}
</div>
