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
	<title>Skill Check - Speaking LR | InsideIELTS</title>
	<meta name="description" content="Test your understanding of IELTS Speaking Lexical Resource criteria." />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
	<!-- Header -->
	<div class="max-w-5xl container mx-auto px-6 pt-8">
		<div class="bg-gray-800 border border-gray-600 rounded-lg px-6 py-2 mb-8">
			<div class="text-center">
				<div class="text-xs text-left text-teal-400">
					SC_04.2
				</div>
				<h1 class="text-4xl font-bold text-white my-7 tracking-wide">
					SPEAKING
				</h1>
			</div>

			<div class="flex justify-between items-center">
				<a
					href="/IETPP/lesson-04/lesson04-ii"
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
					href="/IETPP/lesson-04/lesson04-iii"
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
		<section class="bg-teal-600/25 rounded-lg p-4 md:p-10 shadow-sm border border-teal-600 mb-8">
			<div class="flex items-center justify-center gap-4 mb-8">
				<div class="text-4xl text-green-500">✓</div>
				<h2 class="text-2xl font-bold text-center text-white tracking-wider underline decoration-2 underline-offset-4">SKILL CHECK 4.2</h2>
				<div class="text-4xl text-green-500">✓</div>
			</div>
			<p class="text-center text-white text-lg mb-8">
				<strong>Complete this skill-check exercise then upload your recording for rating and feedback.</strong>
			</p>

			<!-- Exercise -->
			<div class="bg-teal-500/25 rounded-lg p-4 md:p-8 border border-teal-600/50 mb-4 md:mb-8">
				<div class="bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold py-1 px-4 rounded-lg text-lg border-2 border-teal-400 tracking-wide text-center mb-8">
					Lexical Resource
				</div>

				<div class="bg-gray-800 rounded-lg p-4 md:p-8 border border-cyan-600/50 mb-4 md:mb-8 max-w-4xl mx-auto space-y-6 text-lg">
					<p class="text-white mb-8">
						To score well for Speaking LR you need to demonstrate a wide range of vocabulary as well as be able to confidently (and correctly) use 'more-complex' lexis and terminology.
					</p>

					<p class="text-white mb-12 italic">
						[ Note: <em>A high-level vocabulary cannot be achieved overnight, and you <u>should not</u> use words and phrases that you are not familiar with in your speaking test interview. - The following exercise is designed to help you practice techniques for actively expanding your lexical range</em>. ]
					</p>

					<p class="text-white mb-12 font-medium">
						Below is a simple Part 1 question on the topic of: ' <em>your country</em> '.
					</p>

					<!-- Part 1 Question Image -->
					<div class="flex justify-center mb-12">
						<img
							src="/LESSONS/les04/04(ii)/P1Q.png"
							alt="IELTS SPEAKING LR"
							class="w-full max-w-lg cursor-pointer hover:opacity-80 transition-opacity rounded border-2 border-black"
							onclick={() => openLightbox('/LESSONS/les04/04(ii)/P1Q.png')}
							onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les04/04(ii)/P1Q.png')) : null}
							tabindex="0"
						/>
					</div>

					<div class="text-center my-8">
						<p class="text-2xl font-bold text-white underline mb-8">TASK</p>
					</div>

					<p class="text-white mb-12">
						Use any resources you have to briefly research and plan your response to this question. You should make use of multiple examples of high-level vocabulary and aim to speak for at least 30 seconds.
					</p>

					<!-- Quick Question Image -->
					<div class="flex justify-center mb-12">
						<img
							src="/LESSONS/les04/04(ii)/QQ_pic4ii.png"
							alt="VE Quick Question"
							class="w-full max-w-xs cursor-pointer hover:opacity-80 transition-opacity rounded"
						/>
					</div>

					<p class="text-white mb-8">
						Click the link below to record your response to this VE Quick Question.
					</p>

					<!-- VE Quick Question Link - for LR analysis feedback -->
					<div class="flex justify-center mb-8">
						<a
							href="https://insideielts.oppyo.com/quick-questions?qid=3"
							target="_blank"
							title="Which part of your country do most people live in?"
							class="px-6 py-2 bg-green-600 hover:bg-green-700 border-2 border-white text-white font-bold rounded-lg transition-colors transition-all transform hover:scale-105"
							>
								SC TASK
						</a>
					</div>

					<p class="text-white mb-8">
						You will be rated based on the <b>3 LR</b> descriptors.
					</p>
				</div>
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
						href="/IETPP/lesson-04/lesson04-iii"
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
