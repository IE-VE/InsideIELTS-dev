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
	<title>Skill Check - Writing LR | InsideIELTS</title>
	<meta name="description" content="Test your understanding of IELTS Writing Lexical Resource criteria." />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
	<div class="max-w-5xl container mx-auto px-6 pt-8">
		<div class="bg-gray-800 border border-gray-600 rounded-lg px-6 py-2 mb-8">
			<div class="text-center">
				<div class="text-xs text-left text-teal-400">
					SC_03.3
				</div>
				<h1 class="text-4xl font-bold text-white my-7 tracking-wide">
					WRITING
				</h1>
			</div>

			<div class="flex justify-between items-center">
				<a
					href="/IETPP/lesson-03/lesson03-ii"
					class="text-teal-400 hover:text-teal-300 font-semibold"
					data-sveltekit-reload
				>
					← Prev
				</a>

				<a
					href="/IETPP#lesson-03"
					class="text-teal-400 hover:text-teal-300 font-semibold"
					data-sveltekit-reload
				>
					Contents
				</a>
				<a
					href="/IETPP/lesson-03/lesson03-iv"
					class="text-teal-400 hover:text-teal-300 font-semibold"
					data-sveltekit-reload
				>
					Next →
				</a>
			</div>
		</div>
	</div>

	<!-- Main Content -->
	<div style="max-width: 1200px;" class="mx-auto px-3 md:px-6 py-8">

		<section class="bg-cyan-800/25 rounded-lg p-4 md:p-10 shadow-sm border border-cyan-600 mb-8">
			<div class="flex items-center justify-center gap-4 mb-8">
							<div class="text-4xl text-green-500">✓</div>
							<h2 class="text-2xl font-bold text-center text-white tracking-wider underline decoration-2 underline-offset-4">SKILL CHECK 3.3</h2>
							<div class="text-4xl text-green-500">✓</div>
			</div>

					<p class="text-white text-center text-lg mb-8 font-bold">
						Complete these skill-check exercises then upload your answers for checking and feedback.
					</p>

			<!-- Exercise -->
				<div class="bg-cyan-700/25 rounded-lg p-4 md:p-8 border border-cyan-600/50 mb-4 md:mb-8">
					<div class="bg-blue-600 text-white text-xl px-4 py-2 rounded-lg text-center font-bold mb-8 border-1 border-white tracking-wide">
									Lexical Resource (LR)
					</div>

							<div class="bg-gray-800 rounded-lg p-4 md:p-12 border border-teal-600/50 mb-4 md:mb-8 max-w-4xl mx-auto space-y-6 text-lg">
								<p class="text-white text-center mb-8"><em>- Answer the following comprehension questions -</em></p>

								<div class="space-y-6">

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
						<div class="max-w-2xl mx-auto bg-white rounded-lg p-4 mb-8 border-2 border-black">
							<img
								src="/LESSONS/les03/03(iii)/SC3.3_Q2.jpg"
								alt="IELTS Task 2 question"
								class="w-full max-w-2xl cursor-pointer hover:opacity-80 transition-opacity"
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
									class="w-full max-w-2xl cursor-pointer hover:opacity-80 transition-opacity border-2 border-black rounded"
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
									class="w-full max-w-2xl cursor-pointer hover:opacity-80 transition-opacity border-2 border-black rounded"
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
									class="text-teal-400 hover:text-teal-300"
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
			<div class="flex justify-center mt-6">
									<button
										onclick={() => handleUpload('Task 2')}
										class="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors disabled:opacity-50"
										>
											Check Answers
									</button>
								</div>
							</div>
						</div>
				<div class="text-center md:mt-12">
							<p class="text-white"><b>End of Lesson 03-iii</b></p>
				</div>
			</section>

	<!-- Footer Navigation -->

		<section class="text-center">
														<div class="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
																		<div class="flex justify-between items-center">
																						<a
																										href="/IETPP#lesson-03"
																										class="text-teal-400 hover:text-teal-300 font-semibold"
																										data-sveltekit-reload
																						>
																										← Back to Contents
																						</a>

																						<a
																										href="/IETPP/lesson-03/lesson03-iv"
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