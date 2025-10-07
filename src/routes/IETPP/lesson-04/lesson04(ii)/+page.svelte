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
	<title>Speaking - Lexical Resource | InsideIELTS Test Preparation Program</title>
	<meta name="description" content="Master IELTS Speaking Lexical Resource criteria with expert guidance and Virtual Examiner videos." />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
	<!-- Lesson Header -->
	<div class="max-w-5xl container mx-auto px-6 pt-8">
		<div class="bg-gray-800 border border-gray-600 rounded-lg px-6 py-2 mb-8">
			<div class="text-center">
				<div class="text-xs text-left text-teal-600 dark:text-teal-400">
					IE2401_04.2
				</div>
				<h1 class="text-3xl font-bold text-white my-7">
					SPEAKING
				</h1>
			</div>

			<div class="flex justify-between items-center">
				<a
					href="/IETPP/lesson-04/lesson04(i)/skill-check"
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
					href="/IETPP/lesson-04/lesson04(iii)"
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

		<!-- Main Section: Speaking Lexical Resource -->
		<section class="bg-gray-500/25 rounded-lg p-4 md:p-10 shadow-sm border border-gray-600 mb-12">
			<div class="flex items-center justify-center gap-4 mb-10">
				<div class="text-4xl">💬</div>
				<h2 class="text-3xl font-bold text-center text-white tracking-wide">Lexical Resource</h2>
				<div class="text-4xl">💬</div>
			</div>
			<div class="max-w-6xl mx-auto">
				<div class="bg-gray-800 rounded-lg p-4 md:p-8 text-lg border border-gray-600 mb-12">

					<p class="text-white mb-8">
						The <strong>Lexical Resource</strong> criterion assesses the range and complexity of your vocabulary.
					</p>

					<div class="flex justify-center mb-8">
						<a
							href="https://insideielts.oppyo.com/video/embed/wgrbqotnlx"
							target="_blank"
							title="InsideIELTS virtual examiner speaking test assessment video LR"
							class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
						>
							Watch VE vid
						</a>
					</div>

					<p class="text-white mb-8">
						There are three main descriptors within the <strong>LR</strong> criterion that the examiner is focusing on:
					</p>
					<ul class="list-disc list-inside text-white mb-12 space-y-2">
						<li>language resource - how well you can discuss topics using the language you know;</li>
						<li>vocabulary - the range and complexity of the words you know;</li>
						<li>your ability to paraphrase your ideas in a discussion.</li>
					</ul>

					<p class="text-white mb-6">
						This table shows how these three descriptors change from Band 5 <strong>(B5)</strong> up to Band 7 <strong>(B7)</strong>:
					</p>

					<div class="flex justify-center mb-12">
						<img
							src="/LESSONS/les04/04(ii)/S_Table-LR.png"
							alt="official IELTS speaking rubric Lexical Resource"
							class="w-full max-w-4xl cursor-pointer hover:opacity-80 transition-opacity rounded border border-gray-600"
							onclick={() => openLightbox('/LESSONS/les04/04(ii)/S_Table-LR.png')}
							onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les04/04(ii)/S_Table-LR.png')) : null}
							tabindex="0"
						/>
					</div>

					<p class="text-white mb-12">
						To score above <strong>B6</strong> for <strong>Lexical Resource</strong> you must be able to discuss topics flexibly while making use of 
						higher-level vocabulary; and be able to paraphrase, or re-state, your ideas within a discussion without repeating
						your exact wording and phraseology.
					</p>

					<p class="text-white mb-6">
						Watch this <strong>Native Speaker Interview</strong> extract which focuses on <strong>Lexical Resource</strong>. The high-level, 'more-complex',
						vocabulary used by the native speaker is highlighted. He shows full flexibility of language resource when answering the Virtual Examiner's 
						questions and doesn't make repeated use of the same lexis and terminology in his responses on this topic.
					</p>

					<div class="text-center mb-6">
						<p class="text-xl font-semibold text-white"><strong>LR - Shoes</strong></p>
					</div>

					<div class="flex justify-center mb-12">
						<video
							controls
							class="w-full max-w-3xl rounded border border-gray-600"
							title="Work through the IE Test Preparation Program"
						>
							<source src="/LESSONS/les04/04(ii)/NS_INT3_L4cut.mp4" type="video/mp4" />
							Your browser does not support this video format.
						</video>
					</div>

					<div class="text-center mb-8">
						<p class="text-2xl font-bold text-white">
							Now test your own &nbsp;SPEAKING - Lexical Resource
						</p>
					</div>

					<div class="flex justify-center">
						<a
							href="/IETPP/lesson-04/lesson04(ii)/skill-check"
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
				<p class="text-white mb-6">End of Lesson 04(ii)</p>
				<div class="flex justify-between items-center">
					<a
						href="/IETPP#lesson-04"
						class="text-teal-400 hover:underline font-semibold"
						data-sveltekit-reload
					>
						← Back to Contents
					</a>

					<a
						href="/IETPP/lesson-04/lesson04(iii)"
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
