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
	<title>Speaking - Grammatical Range & Accuracy | InsideIELTS Test Preparation Program</title>
	<meta name="description" content="Master IELTS Speaking Grammatical Range & Accuracy criteria with expert guidance and Virtual Examiner videos." />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
	<!-- Lesson Header -->
	<div class="max-w-5xl container mx-auto px-6 pt-8">
		<div class="bg-gray-800 border border-gray-600 rounded-lg px-6 py-2 mb-8">
			<div class="text-center">
				<div class="text-xs text-left text-teal-600 dark:text-teal-400">
					IE2401_04.3
				</div>
				<h1 class="text-3xl font-bold text-white my-7">
					SPEAKING
				</h1>
			</div>

			<div class="flex justify-between items-center">
				<a
					href="/IETPP/lesson-04/lesson04(ii)/skill-check"
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
					href="/IETPP/lesson-04/lesson04(iv)"
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

		<!-- Main Section: Speaking Grammatical Range & Accuracy -->
		<section class="bg-teal-600/25 rounded-lg p-4 md:p-10 shadow-sm border border-teal-600 mb-12">
			<div class="flex items-center justify-center gap-4 mb-10">
				<div class="text-4xl">💬</div>
				<h2 class="text-3xl font-bold text-center text-white tracking-wide">Grammatical Range & Accuracy</h2>
				<div class="text-4xl">💬</div>
			</div>
			<div class="max-w-6xl mx-auto">
				<div class="bg-gray-800 rounded-lg p-4 md:p-8 text-lg border border-gray-600 mb-12">

					<p class="text-white mb-8">
						The <strong>Grammatical Range & Accuracy</strong> criterion assesses the range, complexity and accuracy of the grammatical structures of which you are able to make use.
					</p>

					<div class="flex justify-center mb-8">
						<a
							href="https://insideielts.oppyo.com/video/embed/hqbirteg3b"
							target="_blank"
							title="InsideIELTS virtual examiner speaking test assessment video GRA"
							class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
						>
							Watch VE vid
						</a>
					</div>

					<p class="text-white mb-12">
						The <strong>GRA</strong> descriptors are:
					</p>
					<ul class="list-disc list-inside text-white mb-12 space-y-2">
						<li>range of grammatical structures;</li>
						<li>frequency of grammatical errors.</li>
					</ul>

					<p class="text-white mb-6">
						This table shows how these descriptors change from Band 5 <strong>(B5)</strong> up to Band 7 <strong>(B7)</strong>:
					</p>

					<div class="flex justify-center mb-12">
						<img
							src="/LESSONS/les04/04(iii)/S_Table-GRA.png"
							alt="official IELTS speaking rubric Grammatical Range & Accuracy"
							class="w-full max-w-4xl cursor-pointer hover:opacity-80 transition-opacity rounded border border-gray-600"
							onclick={() => openLightbox('/LESSONS/les04/04(iii)/S_Table-GRA.png')}
							onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les04/04(iii)/S_Table-GRA.png')) : null}
							tabindex="0"
						/>
					</div>

					<p class="text-white mb-12">
						To score above <strong>B6</strong> for <strong>Grammatical Range & Accuracy</strong> you must be able to effectively use a range of grammatical structures, and demonstrate frequent error free sentences.
					</p>

					<p class="text-white mb-8">
						The <strong>VE</strong> interview transcript below shows a <strong>GRA B5</strong> level response with frequent grammatical errors highlighted in red. This candidate attempts to use complex sentence structures but produces an overly-long sentence with errors in tense, articles and subject-verb agreement.
					</p>

					<div class="flex justify-center mb-8">
						<img
							src="/LESSONS/les04/04(iii)/GRA_example.png"
							alt="IELTS Speaking Test GRA"
							class="w-full max-w-4xl cursor-pointer hover:opacity-80 transition-opacity rounded border border-gray-600"
							onclick={() => openLightbox('/LESSONS/les04/04(iii)/GRA_example.png')}
							onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les04/04(iii)/GRA_example.png')) : null}
							tabindex="0"
						/>
					</div>

					<p class="text-white mb-12">
						The amended response on the right is grammatically correct with higher-level lexis highlighted in green.
					</p>

					<div class="text-center mb-8">
						<p class="text-2xl font-bold text-white">
							Now test your own &nbsp;SPEAKING - Grammatical Range & Accuracy
						</p>
					</div>

					<div class="flex justify-center">
						<a
							href="/IETPP/lesson-04/lesson04(iii)/skill-check"
							class="inline-flex items-center gap-4 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all transform hover:scale-105 border-2 border-teal-400"
							data-sveltekit-reload
						>
							<span class="text-3xl">✓</span>
							<span>SKILL CHECK</span>
							<span class="text-3xl">✓</span>
						</a>
					</div>
				</div>
			</div>
		</section>

		<!-- Footer Section -->
		<section class="text-center py-8">
			<div class="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
				<p class="text-white mb-6">End of Lesson 04(iii)</p>
				<div class="flex justify-between items-center">
					<a
						href="/IETPP#lesson-04"
						class="text-teal-400 hover:underline font-semibold"
						data-sveltekit-reload
					>
						← Back to Contents
					</a>

					<a
						href="/IETPP/lesson-04/lesson04(iv)"
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
