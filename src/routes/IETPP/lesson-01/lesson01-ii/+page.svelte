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
		return () => document.removeEventListener('keydown', handleKeydown);
	});
</script>

<svelte:head>
	<title>IETPP - Lesson 01(ii): Listening Short Answer | InsideIELTS</title>
	<meta
		name="description"
		content="Master IELTS Listening short answer questions with effective techniques and practice."
	/>
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
	<!-- Lesson Header -->
	<div class="max-w-5xl container mx-auto px-3 md:px-6 py-8">
		<div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
			<div class="text-center">
				<div class="text-xs text-left text-teal-600 dark:text-teal-400 mb-4">
					LESSON CODE: IE2401_01.2
				</div>
				<h1 class="text-3xl font-bold text-white mb-2">
					Skills Practice
				</h1>
				<p class="text-white italic">(60 mins)</p>
			</div>

			<div class="text-right mt-6">
				<a
					href="/IETPP"
					class="text-teal-600 dark:text-teal-400 hover:underline font-semibold"
				>
					← Back to Contents
				</a>
			</div>
		</div>
	</div>

	<!-- Page Content -->
	<div style="max-width: 1200px;" class="mx-auto px-3 md:px-6 py-8">
		<!-- Lesson Title Section -->
		<section class="bg-teal-600/20 rounded-lg p-4 md:p-8 shadow-sm border border-teal-600/50 mb-8">
			<div class="flex items-center justify-center gap-4 mb-6">
				<div class="text-4xl">👂</div>
				<h2 class="text-2xl font-bold text-center text-white">LISTENING - Short answer Q</h2>
				<div class="text-4xl">👂</div>
			</div>
			
			<div class="bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
				<h2 class="text-2xl text-center font-bold text-gray-800 dark:text-gray-200 mb-6">
					Short Answer Questions
				</h2>

				<div class="space-y-6">
					<div>
						<h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">What to Expect</h3>
						<p class="text-gray-700 dark:text-gray-300 mb-4">
							Short answer questions in the IELTS Listening test require you to write brief answers using words directly from the audio. These questions test your ability to identify specific factual information such as names, dates, times, numbers, and locations.
						</p>
					</div>

					<div>
						<h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Key Strategies</h3>
						<div class="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4">
							<ul class="space-y-2 text-gray-700 dark:text-gray-300">
								<li class="flex items-start">
									<span class="text-teal-600 dark:text-teal-400 mr-2">1.</span>
									<span><strong>Check word limits:</strong> Note the maximum number of words allowed (e.g., "no more than 3 words")</span>
								</li>
								<li class="flex items-start">
									<span class="text-teal-600 dark:text-teal-400 mr-2">2.</span>
									<span><strong>Identify question types:</strong> Look for 'wh' words (who, what, when, where, why, how)</span>
								</li>
								<li class="flex items-start">
									<span class="text-teal-600 dark:text-teal-400 mr-2">3.</span>
									<span><strong>Predict answers:</strong> Think about what type of information you need to listen for</span>
								</li>
								<li class="flex items-start">
									<span class="text-teal-600 dark:text-teal-400 mr-2">4.</span>
									<span><strong>Use exact words:</strong> Write exactly what you hear - don't paraphrase or change the form</span>
								</li>
								<li class="flex items-start">
									<span class="text-teal-600 dark:text-teal-400 mr-2">5.</span>
									<span><strong>Listen for signals:</strong> Pay attention to phrases that introduce answers</span>
								</li>
							</ul>
						</div>
					</div>

					<div>
						<h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Common Pitfalls</h3>
						<div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
							<ul class="space-y-2 text-gray-700 dark:text-gray-300">
								<li class="flex items-start">
									<span class="text-red-600 dark:text-red-400 mr-2">⚠️</span>
									<span>Exceeding the word limit - you'll lose marks even if the information is correct</span>
								</li>
								<li class="flex items-start">
									<span class="text-red-600 dark:text-red-400 mr-2">⚠️</span>
									<span>Writing the first thing you hear - speakers often correct themselves or provide additional information</span>
								</li>
								<li class="flex items-start">
									<span class="text-red-600 dark:text-red-400 mr-2">⚠️</span>
									<span>Changing spelling or word forms - write exactly as spoken</span>
								</li>
								<li class="flex items-start">
									<span class="text-red-600 dark:text-red-400 mr-2">⚠️</span>
									<span>Missing distractors - speakers may mention multiple similar options</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div class="max-w-4xl mx-auto">
				<p class="text-white mb-6">
					Short answer questions test your comprehension of the audio passage. They are in the form
					of direct '<strong>wh</strong>' type questions as in the examples below.
				</p>

				<div class="flex justify-center mb-6">
					<img
						src="/LESSONS/les01/01(ii)/short_answer-ex.png"
						alt="IELTS Listening Short Answer Example"
						class="w-full max-w-2xl rounded border-2 border-black cursor-pointer"
						on:click={() => openLightbox('/LESSONS/les01/01(ii)/short_answer-ex.png')}
					/>
				</div>

				<p class="text-white mb-6">
					Follow the instructions for each specific short answer section carefully. The instructions
					will specify the maximum number of words/numbers that you can write, for example,
					"<strong>no more than <em>3 words and/or a number</em></strong>". Write your answers
					directly on the question paper, at the end of the test you will be given time to transfer
					your answers from the question paper to the Listening Test answer sheet.
				</p>

				<div class="flex justify-center mb-8">
					<a
						href="https://insideielts.oppyo.com/video/embed/lz5oaewav6"
						target="_blank"
						title="InsideIELTS virtual examiner listening test short answer"
						class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
					>
						Watch VE vid
					</a>
				</div>

				<h3 class="text-xl font-bold text-white mb-4 underline">Question technique</h3>

				<p class="text-white mb-6">
					Use the time given at the beginning of each section before the audio begins (about
					<strong>40-50 seconds</strong> in total) to take note of the 'wh' question word, e.g.
					who, what, why, where, which or how, and to underline key topic words in the questions.
				</p>

				<div class="flex justify-center mb-6">
					<img
						src="/LESSONS/les01/01(ii)/short_answer-tech.png"
						alt="IELTS Listening Short Answer Technique"
						class="w-full max-w-2xl rounded border-2 border-black cursor-pointer"
						on:click={() => openLightbox('/LESSONS/les01/01(ii)/short_answer-tech.png')}
					/>
				</div>

				<p class="text-white mb-8">
					Be aware of paraphrased answers and synonyms, and also for tricks such as when the speaker
					may say one thing and then change their mind or correct themself.
				</p>

				<p class="text-white mb-6 font-bold">
					Watch this quick Listening Short answer question demonstration vid before testing your
					understanding of this question format.
				</p>

				<div class="flex justify-center mb-8">
					<video
						controls
						class="w-full max-w-2xl bg-black rounded border border-gray-600"
						src="/LESSONS/les01/01(ii)/SA-L_demo.mp4"
					>
						Your browser does not support the video tag.
					</video>
				</div>
			</div>
		</section>

		<!-- End of Lesson -->
		<section class="text-center py-8">
			<p class="text-white mb-4">End of Lesson 01 (ii)</p>
			<a
				href="/IETPP"
				class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded transition-colors"
			>
				← Back to Contents
			</a>
		</section>
	</div>
</div>

<!-- Lightbox Modal -->
{#if lightboxOpen}
	<div
		class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2 md:p-4"
		on:click={closeLightbox}
	>
		<div class="relative max-w-4xl max-h-full">
			<button
				class="absolute top-4 right-4 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-all z-10"
				on:click={closeLightbox}
			>
				×
			</button>
			<img
				src={lightboxImage}
				alt="Enlarged view"
				class="max-w-full max-h-full object-contain rounded"
				on:click|stopPropagation
			/>
		</div>
	</div>
{/if}