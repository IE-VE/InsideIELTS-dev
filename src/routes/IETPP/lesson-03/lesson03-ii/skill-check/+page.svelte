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
	<title>Skill Check - Writing C&C | InsideIELTS</title>
	<meta name="description" content="Test your understanding of IELTS Writing Coherence & Cohesion criteria." />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
	<!-- Header -->
	<div class="max-w-5xl container mx-auto px-6 pt-8">
		<div class="bg-gray-800 border border-gray-600 rounded-lg px-6 py-2 mb-8">
			<div class="text-center">
				<div class="text-xs text-left text-teal-400">
					SC_03.2
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
					href="/IETPP/lesson-03/lesson03-iii"
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
							<h2 class="text-2xl font-bold text-center text-white tracking-wider underline decoration-2 underline-offset-4">SKILL CHECK 3.2</h2>
							<div class="text-4xl text-green-500">✓</div>
			</div>
			<p class="text-white mb-8 font-bold">
				For CC, LR and GRA practice we will focus on the Task 2 essay. (The assessment criteria and descriptors are the same for both tasks.)
			</p>
			<p class="text-center text-white text-lg mb-8">
							<strong>Complete this Writing Skill Check exercise then upload your answers for checking and feedback.</strong>
			</p>

			<!-- Exercise -->
			<div class="bg-cyan-500/25 rounded-lg p-4 md:p-8 border border-teal-600/50 mb-4 md:mb-8">
				<div class="bg-blue-600 text-white text-xl px-4 py-2 rounded-lg text-center font-bold mb-8 border-1 border-white tracking-wide">
								Coherence & Cohesion (CC)
				</div>

						<div class="bg-gray-800 rounded-lg p-4 md:p-8 border border-teal-600/50 mb-4 md:mb-8 max-w-4xl mx-auto space-y-6 text-lg">
							<p class="text-white text-center mb-8"><em>- Answer the following comprehension questions -</em></p>

							<div class="space-y-6">

						<!-- Question 1 -->
						<div class="mb-8">
							<p class="text-white mb-3">
								1. What are the 4 descriptors used to rate the <em>Coherence & Cohesion</em> of your Task 2 essay?
							</p>
							<textarea
								bind:value={answer1}
								rows="4"
								class="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-teal-400 focus:outline-none"
								placeholder="answer"
							></textarea>
						</div>

						<p class="text-white mb-8 text-center italic">
							Questions 2 - 5 refer to the sample (Band 7) Task 2 response below.
						</p>

						<!-- Sample Image -->
						<div class="bg-white rounded-lg p-4 m-8 border-2 border-black">
							<img
								src="/LESSONS/les03/03(ii)/CC_T2sample.png"
								alt="IELTS Task 2 sample answer"
								class="w-full cursor-pointer hover:opacity-80 transition-opacity"
								onclick={() => openLightbox('/LESSONS/les03/03(ii)/CC_T2sample.png')}
								onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les03/03(ii)/CC_T2sample.png')) : null}
								tabindex="0"
							/>
						</div>

						<!-- Question 2 -->
						<div class="mb-8">
							<p class="text-white mb-3">
								2. What is the correct order of the paragraphs in this essay? (<em>Use the cohesive 
								devices and organisation of information/ideas to help you.</em>)
							</p>
							<textarea
								bind:value={answer2}
								rows="1"
								class="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-teal-400 focus:outline-none"
								placeholder="answer"
							></textarea>
						</div>

						<!-- Question 3 -->
						<div class="mb-8">
							<p class="text-white mb-3">
								3. List three cohesive devices used in paragraphs A, D and E.
							</p>
							<textarea
								bind:value={answer3}
								rows="3"
								class="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-teal-400 focus:outline-none"
								placeholder="answer"
							></textarea>
						</div>

						<!-- Question 4 -->
						<div class="mb-8">
							<p class="text-white mb-3">
								4. Find and explain three examples of referencing (used appropriately).
							</p>
							<textarea
								bind:value={answer4}
								rows="6"
								class="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-teal-400 focus:outline-none"
								placeholder="answer"
							></textarea>
						</div>

						<!-- Question 5 -->
						<div class="mb-8">
							<p class="text-white mb-3">
								5. What is the central topic (main idea) in body paragraph A and body paragraph E?
							</p>
							<textarea
								bind:value={answer5}
								rows="6"
								class="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-teal-400 focus:outline-none"
								placeholder="answer"
							></textarea>
						</div>

						<!-- Question 6 -->
						<div class="mb-8">
							<p class="text-white mb-3">
								6. Fill the gaps in the Task 2 essay extracts below.
							</p>
							<div class="flex justify-center m-8">
								<img
									src="/LESSONS/les03/03(ii)/SC3(ii)-Q6.png"
									alt="IELTS CC gapfill"
									class="w-full max-w-4xl cursor-pointer hover:opacity-80 transition-opacity border-2 border-black rounded"
									onclick={() => openLightbox('/LESSONS/les03/03(ii)/SC3(ii)-Q6.png')}
									onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les03/03(ii)/SC3(ii)-Q6.png')) : null}
									tabindex="0"
								/>
							</div>
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
									class="inline-flex items-center gap-4 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded-lg text-lg transition-all transform hover:scale-105 border-2 border-teal-400 disabled:opacity-50"
									>
										Check Answers
								</button>
							</div>
						</div>
					</div>
			<div class="text-center md:mt-12">
							<p class="text-white"><b>End of Lesson 03-ii</b></p>
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
																										href="/IETPP/lesson-03/lesson03-iii"
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