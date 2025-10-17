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
	<title>IETPP - Full IELTS Test | InsideIELTS</title>
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
				<h1 class="text-3xl font-bold text-white mb-7">
					IETPP
				</h1>
				<p class="text-3xl font-bold text-white my-7 tracking-wide underline decoration-2 underline-offset-4">
					Final Test
				</p>
			</div>

			<div class="mt-6 mb-8 text-lg">
							<ul class="list-disc list-inside space-y-2 text-white ml-6">
											<li> <strong>Listening Test</strong> <small>  (40 mins)</small></li>
												<li><strong>Reading Test</strong> <small>  (60 mins)</small></li>
											 <li><strong>Writing Test</strong> <small>  (60 mins)</small></li>
												<li><strong>Speaking Test</strong> <small>(14 mins)</small></li>
							</ul>
			</div>
			<!-- Header Nav -->
		
			<div class="text-center">
							<a
					href="/IETPP#lesson-05"
					class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
					data-sveltekit-reload
				>
					- Contents -
				</a>
			</div>
		</div>
	</div>

	<!-- Page Content -->
	<div style="max-width: 1200px;" class="mx-auto px-3 md:px-6 py-8">

	<section class="mb-12">
					<div class="bg-gray-800 rounded-lg p-10 shadow-sm border border-gray-200 dark:border-gray-700">
							
									<div class="space-y-6">
												<p class="text-lg mb-10">You have now completed all sections of the <b>InsideIELTS Test Preparation Program</b> and will take the final assessment test. Try to stick to the time limits for each test and complete each test start-to-finish without a break.												
												</p>

										<!-- Four Large Buttons -->
										 <div class="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
														 <a href="/IETPP/lesson-05/lesson05-i" data-sveltekit-reload class="block">
																		 <button class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform duration-300 ease-in-out w-full">
																						 <div class="text-xl">Listening Test</div>
																		 </button>
														 </a>

														 <a href="/IETPP/lesson-05/lesson05-ii" data-sveltekit-reload class="block">
																		 <button class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full">
																						 <div class="text-xl">Reading Test</div>
																		 </button>
														 </a>

														 <a href="/IETPP/lesson-05/lesson05-iii" data-sveltekit-reload class="block">
																		 <button class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full">
																						 <div class="text-xl">Writing Test</div>
																		 </button>
														 </a>
											 			<a href="/IETPP/lesson-05/lesson05-iv" data-sveltekit-reload class="block">
																<button class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full">
																				<div class="text-xl">Speaking Test</div>
																</button>
												</a>
										 </div>
										<p class="text-lg pt-6">Your scores and feedback will be posted to the <b>Member's Page</b>.																					</p>
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
