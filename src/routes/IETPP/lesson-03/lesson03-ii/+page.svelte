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
	<title>Writing - C&C | InsideIELTS Test Preparation Program</title>
	<meta name="description" content="Master IELTS Writing Coherence & Cohesion criteria with expert guidance and Virtual Examiner videos." />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
	<!-- Lesson Header -->
	<div class="max-w-5xl container mx-auto px-6 pt-8">
		<div class="bg-gray-800 border border-gray-600 rounded-lg px-6 py-2 mb-8">
			<div class="text-center">
				<div class="text-xs text-left text-teal-400">
					IE2401_03.2
				</div>
				<h1 class="text-4xl font-bold text-white my-7">
					WRITING
				</h1>
			</div>

			<div class="flex justify-between items-center">
				<a
					href="/IETPP/lesson-03/lesson03-i"
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
					href="/IETPP/lesson-03/lesson03-iii"
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

		<!-- Main Section: Writing CC -->
			<section class="bg-teal-600/25 rounded-lg p-4 md:p-10 shadow-sm border border-teal-600 mb-12">
				<div class="flex items-center justify-center gap-4 mb-10">
					<div class="text-4xl">✏️</div>
					<h2 class="text-3xl font-bold text-center text-white tracking-wide">Coherence & Cohesion</h2>
					<div class="text-4xl">✏️</div>
				</div>
				<div class="max-w-6xl mx-auto">
					<div class="bg-gray-800 rounded-lg p-4 md:p-8 text-lg border border-gray-600 mb-12">

						 <div class="bg-blue-900/50 border border-blue-700 rounded-lg p-4 mb-8">
						<p class="text-white text-lg">
						<strong>Coherence & Cohesion</strong> is a measure of how well your writing task is structured in terms of organisation of ideas,
						clarity of information/argument, and ease of understanding for the reader.
					</p>
							 </div>
					<p class="text-white mb-8">
						Watch this video for an overview of how the four <strong>Coherence & Cohesion</strong> descriptors are used to assess your writing.
					</p>

					<div class="flex justify-center mb-4">
						<a
							href="/LESSONS/les03/03(ii)/ASSESSMENT_Writing-CCintro.mp4"
							target="_blank"
							title="InsideIELTS virtual examiner writing test assessment video CC"
							class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
						>
							Watch VE vid
						</a>
					</div>
						</div>

								<div class="bg-gray-800 rounded-lg p-4 md:p-8 text-lg border border-gray-600 mb-8">
									
					<p class="text-white mb-6">
						The <strong>four descriptors</strong> used to assess the <strong>Coherence & Cohesion</strong> of your <strong>Writing Task</strong> are:
					</p>
					<ul class="text-white mb-8 space-y-2 ml-6">
						<li>• arrangement of information and ideas;</li>
						<li>• range and use of cohesive devices;</li>
						<li>• use of referencing;</li>
						<li>• and, (for Task 2 only), paragraphing.</li>
					</ul>

					<p class="text-white mb-6">
						This table shows how the four <strong>Task 1 TA</strong> descriptors change from Band 5 <strong>(B5)</strong> up to Band 7 <strong>(B7)</strong>:
					</p>

					<div class="flex justify-center mb-8">
						<img
							src="/LESSONS/les03/03(ii)/W_Table-CC(T2).png"
							alt="IELTS Writing rubric CC"
							class="w-full max-w-4xl rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity mt-8 mb-8"
							onclick={() => openLightbox('/LESSONS/les03/03(ii)/W_Table-CC(T2).png')}
							onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les03/03(ii)/W_Table-CC(T2).png')) : null}
							tabindex="0"
						/>
					</div>

					<p class="text-white mb-8">
						To score above <strong>B6</strong> for <strong>Coherence & Cohesion</strong> you must: present your information and ideas clearly
						and show a logical progression to your response; make effective use of cohesive devices; use paragraphing correctly
						(for Task 2).
					</p>

					<p class="text-white mb-6">
						Watch this video for a model answer break-down of <strong>CC</strong> descriptors.
					</p>

					<div class="flex justify-center m-12">
						<div class="text-center">
							<a
								href="/LESSONS/les03/03(ii)/ASSESSMENT_Writing-CCdemo.mp4"
								target="_blank"
								title="InsideIELTS virtual examiner writing CC"
								class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
							>
								Watch VE vid - CC
							</a>
						</div>
					</div>
									
									<div class="text-center mb-6">
					<p class="text-white mb-12 font-bold">
						Now test your understanding of WRITING - COHERENCE & COHESION
					</p>

						<a
							href="/IETPP/lesson-03/lesson03-ii/skill-check"
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
																	<a																href="/IETPP/lesson-03/lesson03-iii"												class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
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
