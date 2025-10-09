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
	<title>Writing - GRA | InsideIELTS Test Preparation Program</title>
	<meta name="description" content="Master IELTS Writing Grammatical Range & Accuracy criteria with expert guidance and Virtual Examiner videos." />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
	
	<!-- Lesson Header -->
	<div class="max-w-5xl container mx-auto px-6 pt-8">
		<div class="bg-gray-800 border border-gray-600 rounded-lg px-6 py-2 mb-8">
			<div class="text-center">
				<div class="text-xs text-left text-teal-400">
					IE2401_03.4
				</div>
				<h1 class="text-4xl font-bold text-white my-7 tracking-wide">
					WRITING
				</h1>
					</div>

			<div class="flex justify-between items-center">
				<a
					href="/IETPP/lesson-03/lesson03-iii"
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
					href="/IETPP/lesson-04"
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

		<!-- Main Section: Writing Grammatical Range & Accuracy -->
		<section class="bg-teal-800/25 rounded-lg p-4 md:p-10 shadow-sm border border-teal-700 mb-12">
			<div class="flex items-center justify-center gap-4 mb-10">
				<div class="text-4xl">✏️</div>
				<h2 class="text-3xl font-bold text-center text-white tracking-wide underline decoration-2 underline-offset-4">Grammatical Range & Accuracy</h2>
				<div class="text-4xl">✏️</div>
			</div>
			<div class="max-w-6xl mx-auto">
				<div class="bg-gray-800 rounded-lg p-4 md:p-10 text-lg border border-gray-600 mb-12">

					 <div class="bg-blue-900/50 border border-blue-700 rounded-lg p-4 mb-8">
					<p class="text-white text-lg">
						<strong>Grammatical Range & Accuracy (GRA)</strong> rates the variety, complexity and accuracy of the sentence structures, tenses and word forms you use in your writing responses.
					</p>
						 </div>
						 <p class="text-white mb-8">
							 Watch this video for an explanation of the <strong>Grammatical Range & Accuracy</strong> descriptors.
						 </p>
					
					<div class="flex justify-center mb-4">
						<a
							href="/LESSONS/les03/03(iv)/ASSESSMENT_Writing-GRAintro.mp4"
							target="_blank"
							title="InsideIELTS virtual examiner writing test assessment video GRA"
							class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
						>
							Watch VE vid
						</a>
					</div>
					</div>
				
					<div class="bg-gray-800 rounded-lg p-4 md:p-10 text-lg border border-gray-600 mb-8">
						
					<p class="text-white mb-6">
						There are only <strong>two descriptors</strong> used to rate <strong>GRA</strong>:
					</p>
					<ul class="text-white mb-8 space-y-2 ml-6">
						<li>• range and complexity of sentence structures;</li>
						<li>• accuracy of grammar and punctuation;</li>
					</ul>

					<p class="text-white mb-6">
						This table shows how the <strong>GRA</strong> descriptors change from Band 5
						<strong>(B5)</strong> up to Band 7 <strong>(B7)</strong>:
					</p>

					<div class="flex justify-center mb-8">
						<img
							src="/LESSONS/les03/03(iv)/W_Table-GRA.png"
							alt="IELTS Writing rubric GRA"
							class="w-full max-w-4xl rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity mt-8 mb-8"
							onclick={() => openLightbox('/LESSONS/les03/03(iv)/W_Table-GRA.png')}
							onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les03/03(iv)/W_Table-GRA.png')) : null}
							tabindex="0"
						/>
					</div>

					<p class="text-white mb-8">
						To score above <strong>B6</strong> for <strong>Grammatical Range & Accuracy</strong> you have to demonstrate use of a variety of complex
						sentence structures (as well as simple and compound sentences) with frequent error-free sentences in your writing;
						and have a sufficiently low level of grammatical and punctuation errors so as to cause no problems with understanding
						for the reader.
					</p>

					<p class="text-white mb-6">
						Watch the VE vid below to see examples of each of these descriptors.
					</p>

					<div class="flex justify-center m-12">
						<div class="text-center">
							<a
								href="/LESSONS/les03/03(iv)/ASSESSMENT_Writing-GRAdemo.mp4"
								target="_blank"
								title="InsideIELTS virtual examiner writing test assessment video GRA"
								class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
							>
								Watch VE vid - GRA
							</a>
						</div>
					</div>

						<div class="text-center mb-6">
					<p class="text-white mb-12 font-bold">
						Now test your understanding of WRITING - GRAMMATICAL RANGE & ACCURACY
					</p>
				
						<a
							href="/IETPP/lesson-03/lesson03-iv/skill-check"
							class="inline-flex items-center gap-4 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded-lg text-lg transition-all transform hover:scale-105 border-2 border-teal-400"
						>
							<span class="text-2xl">✓</span>
							<span>SKILL CHECK</span>
							<span class="text-2xl">✓</span>
						</a>
					</div>
				</div>
			</div>
		</section>

		<!-- Footer Navigation -->
						<section class="text-center">          

										<div class="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
														<div class="flex justify-between items-center">
																		<a
																						href="/IETPP#lesson-03"
																						class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
		data-sveltekit-reload
																		>
																						← Back to Contents
																		</a>
																		<a																href="/IETPP/lesson-04"												class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
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
