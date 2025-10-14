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
	<title>IETPP - Introduction to the Speaking Test | InsideIELTS</title>
	<meta
		name="description"
		content="Learn IELTS Speaking test format, interview structure, assessment criteria, and watch example interviews with the Virtual Examiner."
	/>
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
	<!-- Lesson Header -->
	<div class="max-w-5xl container mx-auto px-6 pt-8">
		<div class="bg-gray-50 dark:bg-gray-800 rounded-lg px-6 py-2 mb-8">
			<div class="text-center">
				<div class="text-xs text-left text-teal-600 dark:text-teal-400">
					IE2401_05
				</div>
				<h1 class="text-3xl font-bold text-white my-7">
					IETPP Final Full Test
				</h1>
			</div>
			<!-- Header Nav -->
		
			<div class="flex justify-between items-center">
				<a
					href="/IETPP/lesson-03"
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
					href="/IETPP/lesson-04/lesson04P1"
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

	<section class="mb-12">
					<div class="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
									<h2 class="text-2xl text-center font-bold text-gray-800 dark:text-white mb-8 underline decoration-2 underline-offset-3">
													Full Test Format
									</h2>

									<div class="space-y-6">
													<div class="border-l-4 border-blue-500 pl-6">
																	<h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Test Duration</h3>
														<p class="text-gray-300 mb-6">
															The total duration of the IELTS test is  <strong>3 hours</strong>.
														</p>												
														<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-8 ml-4">
												<li>Listening Test <strong>(40 mins)</strong></li>
												<li>Reading Test <strong>(60 mins)</strong></li>
									     <li>Writing Test <strong>(60 mins)</strong></li>
												<li>Speaking Test <strong>(14 mins)</strong></li>
														</ul>
													</div>

													<div class="border-l-4 border-green-500 pl-6">
																	<h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Test Schedule</h3>
														<p class="text-gray-300 mb-6">
															You will usually sit the Listening, Reading and Writing Test sequentially without an extended break between sections. The Speaking Test is usually taken on the same day, but at a separate time according to scheduled time slot.
														</p>
																</div>

													<div class="border-l-4 border-purple-500 pl-6">
																	<h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Time Management</h3>
																	<p class="text-gray-700 dark:text-gray-300">The examiner will take full control of all timings for the sections of the speaking test. You only need to make sure you extend the length of your responses until the examiner asks the next question.</p>
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
																										class="text-teal-400 hover:text-teal-300 font-semibold"
																										data-sveltekit-reload
																						>
																										← Back to Contents
																						</a>

																						<a
																										href="/IETPP/lesson-04/lesson04P1"
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
			<div class="max-w-7xl max-h-full">
				<img src={lightboxImage} alt="Enlarged view" class="max-w-full max-h-full object-contain rounded-lg" />
			</div>
		</div>
	{/if}
</div>
