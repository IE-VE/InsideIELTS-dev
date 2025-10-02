<script lang="ts">
	import { onMount } from 'svelte';

	let answer1 = '';
	let answer2 = '';
	let answer3 = '';
	let answer4 = '';
	let answer5 = '';
	let answer6 = '';

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

	function handleUpload() {
		alert('Upload functionality will be implemented soon!');
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
	<title>Skill Check - Writing Lexical Resource | InsideIELTS</title>
	<meta name="description" content="Test your understanding of IELTS Writing Lexical Resource criteria." />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
	<!-- Header -->
	<div class="max-w-5xl container mx-auto px-3 md:px-6 py-8">
		<div class="bg-gray-50 dark:bg-gray-800 rounded-lg px-6 py-4 mb-8">
			<div class="text-center">
				<h1 class="text-3xl font-bold text-teal-400 my-4 flex items-center justify-center gap-3">
					<span class="text-4xl">✓</span>
					<span>Skill Check</span>
					<span class="text-4xl">✓</span>
				</h1>
			</div>

			<div class="flex justify-between items-center mt-4">
				<a
					href="/IETPP/lesson-03/lesson03-iii"
					class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
					data-sveltekit-reload
				>
					← Back to Lesson
				</a>

				<a
					href="/IETPP#lesson-03"
					class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
					data-sveltekit-reload
				>
					Contents
				</a>
			</div>
		</div>
	</div>

	<!-- Main Content -->
	<div style="max-width: 1200px;" class="mx-auto px-3 md:px-6 py-8">
		<section class="bg-teal-100 dark:bg-teal-900 rounded-lg p-4 md:p-8 shadow-sm border border-blue-600 mb-8">
			<div class="max-w-6xl mx-auto">
				
				<!-- Introduction -->
				<div class="bg-gray-800 rounded-lg p-6 text-lg border border-gray-700 mb-8">
					<p class="text-white mb-8 font-bold">
						Complete these skill-check exercises then upload your answers for checking and feedback.
					</p>

					<!-- Section Header -->
					<div class="bg-blue-900 rounded-lg p-6 mb-6 border-2 border-blue-500">
						<p class="text-teal-400 text-xl font-bold mb-4">SC3(iii)</p>
						<h2 class="text-white text-2xl font-bold text-center mb-6">WRITING - Lexical Resource</h2>

						<p class="text-white mb-6 italic">- Answer the following comprehension questions -</p>

						<!-- Question 1 -->
						<div class="mb-8">
							<p class="text-white mb-3">
								1. What are the 5 descriptors used to rate your <em>Lexical Resource</em> for <strong>IELTS</strong> writing Task 1 and 2?
							</p>
							<textarea
								bind:value={answer1}
								rows="5"
								class="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-teal-400 focus:outline-none"
								placeholder="answer"
							></textarea>
						</div>

						<p class="text-white text-center mb-8 italic">
							Use the example Task 2 question below to guide your answers to Q2 - 5.
						</p>

						<!-- Task 2 Question Image -->
						<div class="bg-white rounded-lg p-4 mb-8 border-2 border-black">
							<img
								src="/LESSONS/les03/03(iii)/SC3.3_Q2.jpg"
								alt="IELTS Task 2 question"
								class="w-full cursor-pointer hover:opacity-80 transition-opacity"
								onclick={() => openLightbox('/LESSONS/les03/03(iii)/SC3.3_Q2.jpg')}
								onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les03/03(iii)/SC3.3_Q2.jpg')) : null}
								tabindex="0"
							/>
						</div>

						<!-- Question 2 -->
						<div class="mb-8">
							<p class="text-white mb-3">
								2. FLEXIBILITY & PRECISION - paraphrase the question, using synonyms to replace the words:
								<em>successful, persuading, buy things, common, pay attention</em>.
							</p>
							<textarea
								bind:value={answer2}
								rows="4"
								class="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-teal-400 focus:outline-none"
								placeholder="answer"
							></textarea>
						</div>

						<!-- Question 3 -->
						<div class="mb-8">
							<p class="text-white mb-3">
								3. LESS COMMON LEXICAL ITEMS - Complete the following two topic sentences using some examples of 
								higher-level vocabulary in your answer:<br />
								a) <em>'The main reason that advertising is so effective these days is...'</em><br />
								b) <em>'A big problem with advertising is...'</em>
							</p>
							<textarea
								bind:value={answer3}
								rows="6"
								class="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-teal-400 focus:outline-none"
								placeholder="answer"
							></textarea>
						</div>

						<!-- Question 4 -->
						<div class="mb-8">
							<p class="text-white mb-3">
								4. STYLE & COLLOCATION - Find and write down 5 examples of collocation in the model answer paragraph
								below. (<em>The first example is shown.</em>)
							</p>
							<div class="flex justify-center mb-6">
								<img
									src="/LESSONS/les03/03(iii)/SC3.3_Q4.png"
									alt="IELTS collocation example"
									class="w-full max-w-4xl cursor-pointer hover:opacity-80 transition-opacity border-2 border-black rounded"
									onclick={() => openLightbox('/LESSONS/les03/03(iii)/SC3.3_Q4.png')}
									onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les03/03(iii)/SC3.3_Q4.png')) : null}
									tabindex="0"
								/>
							</div>
							<textarea
								bind:value={answer4}
								rows="5"
								class="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-teal-400 focus:outline-none"
								placeholder="answer"
							></textarea>
						</div>

						<!-- Question 5 -->
						<div class="mb-8">
							<p class="text-white mb-3">
								5. WORD CHOICE & SPELLING - Find 2 examples of an error in word choice and 3 spelling errors
								in the example paragraph below.
							</p>
							<div class="flex justify-center mb-6">
								<img
									src="/LESSONS/les03/03(iii)/SC3.3_Q6.png"
									alt="IELTS word choice and spelling errors"
									class="w-full max-w-4xl cursor-pointer hover:opacity-80 transition-opacity border-2 border-black rounded"
									onclick={() => openLightbox('/LESSONS/les03/03(iii)/SC3.3_Q6.png')}
									onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les03/03(iii)/SC3.3_Q6.png')) : null}
									tabindex="0"
								/>
							</div>
							<textarea
								bind:value={answer5}
								rows="5"
								class="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-teal-400 focus:outline-none"
								placeholder="answer"
							></textarea>
						</div>

						<!-- Question 6 -->
						<div class="mb-8">
							<p class="text-white mb-3">
								6. Using the LR descriptors shown in the <a
									href="/LESSONS/les03/03(iii)/ASSESSMENT_Writing-LRintro.mp4"
									target="_blank"
									class="text-teal-400 hover:text-teal-300 underline"
									title="InsideIELTS virtual examiner writing test assessment video LR"
								>Lexical Resource Intro Vid</a> rate the example low-level paragraph above and say why you rated it so.
							</p>
							<textarea
								bind:value={answer6}
								rows="6"
								class="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-teal-400 focus:outline-none"
								placeholder="answer"
							></textarea>
						</div>

						<!-- Upload Button -->
						<div class="flex justify-center mt-8">
							<button
								onclick={handleUpload}
								class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-lg border-2 border-teal-400 transition-colors text-lg"
							>
								UPLOAD
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Lesson End Section -->
		<section class="text-center py-8">
			<div class="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
				<p class="text-white mb-6">End of Skill Check 03(iii)</p>
				<a
					href="/IETPP#lesson-03"
					class="text-teal-400 hover:underline font-semibold"
					data-sveltekit-reload
				>
					← Back to Contents
				</a>
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
