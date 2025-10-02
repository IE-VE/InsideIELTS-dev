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
	<title>Writing - LR | InsideIELTS Test Preparation Program</title>
	<meta name="description" content="Master IELTS Writing Lexical Resource criteria with expert guidance and Virtual Examiner videos." />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
	<!-- Lesson Header -->
	<div class="max-w-5xl container mx-auto px-6 pt-8">
		<div class="bg-gray-800 border border-gray-600 rounded-lg px-6 py-2 mb-8">
			<div class="text-center">
				<div class="text-xs text-left text-teal-400">
					IE2401_03.3
				</div>
				<h1 class="text-4xl font-bold text-white my-7">
					WRITING
				</h1>
					</div>

			<div class="flex justify-between items-center">
				<a
					href="/IETPP/lesson-03/lesson03-ii"
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
					href="/IETPP/lesson-03/lesson03-iv"
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

		<!-- Main Section: Writing Lexical Resource -->
		<section class="bg-cyan-800/25 rounded-lg p-4 md:p-10 shadow-sm border border-cyan-600 mb-12">
			<div class="flex items-center justify-center gap-4 mb-10">
				<div class="text-4xl">✏️</div>
				<h2 class="text-3xl font-bold text-center text-white tracking-wide">Lexical Resource</h2>
				<div class="text-4xl">✏️</div>
			</div>
			<div class="max-w-6xl mx-auto">
				<div class="bg-gray-800 rounded-lg p-4 md:p-8 text-lg border border-gray-600 mb-12">

					 <div class="bg-blue-900/50 border border-blue-700 rounded-lg p-4 mb-8">
					<p class="text-white text-lg">
						<strong>Lexical Resource</strong> measures the range and accuracy of the vocabulary you are able to use.
					</p>
						 </div>
					<p class="text-white mb-8">
						Watch this video for an overview of how the four <strong>Lexical Resource</strong> descriptors are used to assess your writing.
					</p>
					<div class="flex justify-center mb-4">
						<a
							href="/LESSONS/les03/03(iii)/ASSESSMENT_Writing-LRintro.mp4"
							target="_blank"
							title="InsideIELTS virtual examiner writing test assessment video LR"
							class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
						>
							Watch VE vid
						</a>
					</div>
					</div>
				
					<div class="bg-gray-800 rounded-lg p-4 md:p-8 text-lg border border-gray-600 mb-8">

					<p class="text-white mb-6">
						The <strong>5 descriptors</strong> used to assess the <strong>LEXICAL RESOURCE</strong> of your <strong>Writing Task</strong> are:
					</p>
					<ul class="text-white mb-8 space-y-2 ml-6">
						<li>• range of vocabulary;</li>
						<li>• ability to use more complex, 'less-common' words and phrases (<strong>B7</strong>);</li>
						<li>• use of collocation and higher-level phraseology (<strong>B7</strong>);</li>
						<li>• word choice;</li>
						<li>• spelling.</li>
					</ul>

					<p class="text-white mb-6">
						This table shows how the five <strong>LR</strong> descriptors change from Band 5
						<strong>(B5)</strong> up to Band 7 <strong>(B7)</strong>:
					</p>

					<div class="flex justify-center mb-8">
						<img
							src="/LESSONS/les03/03(iii)/W_Table-LR.png"
							alt="IELTS Writing rubric LR"
							class="w-full max-w-4xl rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity mt-8 mb-8"
							onclick={() => openLightbox('/LESSONS/les03/03(iii)/W_Table-LR.png')}
							onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les03/03(iii)/W_Table-LR.png')) : null}
							tabindex="0"
						/>
					</div>

					<p class="text-white mb-8">
						To score above <strong>B6</strong> for <strong>Lexical Resource</strong> you must be able to: show a degree of flexibility and precision
						in your choice of language; make some use of less-common words and phrases; and display a level of accuracy in your spelling
						and word choice to cause no difficulty in understanding for the reader.
					</p>

					<p class="text-white mb-6">
						Watch the VE vid below to see examples of each of these descriptors.
					</p>

					<div class="flex justify-center m-12">
						<div class="text-center">
							<a
								href="/LESSONS/les03/03(iii)/ASSESSMENT_Writing-LRdemo.mp4"
								target="_blank"
								title="InsideIELTS virtual examiner writing LR"
								class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
							>
								Watch VE vid - LR
							</a>
						</div>
					</div>

						<div class="text-center mb-6">
					<p class="text-white mb-12 font-bold">
						Now test your understanding of WRITING - LEXICAL RESOURCE
					</p>
					
						<a
							href="/IETPP/lesson-03/lesson03-iii/skill-check"
							class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors border-2 border-white"
						>
							<span>✓</span>
							<span>SKILL CHECK</span>
							<span>✓</span>
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
																	<a																href="/IETPP/lesson-03/lesson03-iv"												class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
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
