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
	<title>Speaking - Pronunciation | InsideIELTS Test Preparation Program</title>
	<meta name="description" content="Master IELTS Speaking Pronunciation criteria with expert guidance and Virtual Examiner videos." />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
	<!-- Lesson Header -->
	<div class="max-w-5xl container mx-auto px-6 pt-8">
		<div class="bg-gray-800 border border-gray-600 rounded-lg px-6 py-2 mb-8">
			<div class="text-center">
				<div class="text-xs text-left text-teal-600 dark:text-teal-400">
					IE2401_04.4
				</div>
				<h1 class="text-4xl font-bold text-white my-7 tracking-wide">
					SPEAKING
				</h1>
			</div>

			<div class="flex justify-between items-center">
				<a
					href="/IETPP/lesson-04/lesson04(iii)/skill-check"
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
					href="/IETPP/lesson-04/lesson04(iv)/skill-check"
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

		<!-- Main Section: Speaking Pronunciation -->
		<section class="bg-teal-800/25 rounded-lg p-4 md:p-10 shadow-sm border border-teal-700 mb-12">
			<div class="flex items-center justify-center gap-4 mb-10">
				<div class="text-4xl">💬</div>
				<h2 class="text-3xl font-bold text-center text-white tracking-wide underline decoration-2 underline-offset-4">Pronunciation</h2>
				<div class="text-4xl">💬</div>
			</div>
			<div class="max-w-6xl mx-auto">
				<div class="bg-gray-800 rounded-lg p-4 md:p-8 text-lg border border-gray-600 mb-12">
					<div class="bg-blue-900/50 border border-blue-700 rounded-lg p-4 mb-8">
						<p class="text-gray-700 dark:text-gray-300 text-lg">	<strong>Pronunciation</strong> is the final criterion assessed by the Speaking Test examiner.
					</p>
						</div>
					<p class="text-white mb-8">
						 Technically competent speakers sometimes score below average for pronunciation and, as a result, this criterion can often be the cause of lower-than-expected scores in the speaking test.
					</p>

					<div class="flex justify-center mb-8">
						<a
							href="https://insideielts.oppyo.com/video/embed/vyo934gzvg"
							target="_blank"
							title="InsideIELTS virtual examiner speaking test assessment video PR"
							class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors mt-6"
						>
							Watch VE vid
						</a>
					</div>

					<p class="text-white mb-8">
						There are four descriptors within the <strong>PR</strong> criterion that the examiner is focusing on:
					</p>
					<ul class="list-disc list-inside text-white mb-12 space-y-2">
						<li>range of phonological features;</li>
						<li>rhythm, use of stress and intonation;</li>
						<li>clarity of speech and mispronunciation;</li>
						<li>general ease of understanding for the listener.</li>
					</ul>

					<p class="text-white mb-6">
						This table shows how these four descriptors change from Band 4 <strong>(B4)</strong> up to Band 8 <strong>(B8)</strong>:
					</p>

					<div class="flex justify-center mb-12">
						<img
							src="/LESSONS/les04/04(iv)/S_Table-PR.png"
							alt="official IELTS speaking rubric Pronunciation"
							class="w-full max-w-4xl cursor-pointer hover:opacity-80 transition-opacity rounded border border-gray-600 mt-8 mb-8"
							onclick={() => openLightbox('/LESSONS/les04/04(iv)/S_Table-PR.png')}
							onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les04/04(iv)/S_Table-PR.png')) : null}
							tabindex="0"
						/>
					</div>

					<p class="text-white mb-12">
						To score above <strong>B6</strong> for <strong>Pronunciation</strong> you have to be able to make use of a range of phonological features and demonstrate generally correct rhythm, stress and intonation. Occasional mispronunciation of isolated words is acceptable, but overall the examiner must be able to understand your speech without any difficulty.
					</p>

					<p class="text-white mb-8">
						The Native Speaker response below is broken down into phrases for you to listen to and repeat, allowing you to focus on and perfect rhythm, speech rate, stress, and intonation.
					</p>

			
						<p class="text-white mb-8">
							Listen to and repeat the Native Speaker responses in the time-space given. Focus on reproducing the rhythm, intonation and chunking of the native speaker's speech.
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

					<div class="text-center mb-8">
						<p class="text-2xl font-bold text-white">
							Practice SPEAKING - Pronunciation
						</p>
					</div>

					<div class="flex justify-center m-4">
						<a
							href="/IETPP/lesson-04/lesson04(iv)/skill-check"
							class="inline-flex items-center gap-4 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded-lg text-lg transition-all transform hover:scale-105 border-2 border-teal-400"
							data-sveltekit-reload
						>
							<span class="text-2xl">✓</span>
							<span>SKILL CHECK</span>
							<span class="text-2xl">✓</span>
						</a>
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
			<div class="max-w-6xl max-h-full">
				<img src={lightboxImage} alt="Enlarged view" class="max-w-full max-h-full object-contain rounded-lg" />
			</div>
		</div>
	{/if}
</div>
