<script lang="ts">
	import { onMount } from 'svelte';

	let lightboxOpen = false;
	let lightboxImage = '';

	// Form data for Academic
	let q1_ac = '', q2_ac = '', q3_ac = '', q4_ac = '', q5_ac = '', q6_ac = '';

	// Form data for General Training
	let q1_gt = '', q2_gt = '', q3_gt = '', q4_gt = '', q5_gt = '', q6_gt = '';

	// Form data for Task 2
	let q1_t2 = '', q2_t2 = '', q3_t2 = '', q4_t2 = '', q5_t2 = '';

	function openLightbox(imageSrc: string) {
		lightboxImage = imageSrc;
		lightboxOpen = true;
	}

	function closeLightbox() {
		lightboxOpen = false;
		lightboxImage = '';
	}

	function handleUpload(section: string) {
		alert(`Answers for ${section} would be uploaded here. This feature will be implemented in a future update.`);
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
	<title>Skill Check 03(ii) - Writing Task Response | InsideIELTS</title>
	<meta
		name="description"
		content="Complete IELTS Writing Task Achievement and Task Response skill check exercises with comprehension questions."
	/>
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
	<!-- Lesson Header -->
	<div class="max-w-5xl container mx-auto px-6 pt-8">
		<div class="bg-gray-50 dark:bg-gray-800 rounded-lg px-6 py-2 mb-8">
			<div class="text-center">
				<div class="text-xs text-left text-teal-600 dark:text-teal-400">
					SC_03.1(ii)
				</div>
				<h1 class="text-4xl font-bold text-white my-7 tracking-wide">
					WRITING
				</h1>
			</div>

			<div class="flex justify-between items-center">
				<a
					href="/IETPP/lesson-03/lesson03-i"
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
					href="/IETPP/lesson-0/lesson03-ii"
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
		<section class="bg-cyan-600/25 rounded-lg p-4 md:p-10 shadow-sm border border-blue-600 mb-8">
			<div class="flex items-center justify-center gap-4 mb-8">
							<div class="text-4xl text-green-500">✓</div>
							<h2 class="text-2xl font-bold text-center text-white tracking-wider">SKILL CHECK 3.1</h2>
							<div class="text-4xl text-green-500">✓</div>
			</div>

			<p class="text-center text-white text-lg mb-8">
							<strong>Complete this Writing Skill Check exercise then upload your answers for checking and feedback.</strong>
			</p>

								<!-- Exercise -->
			<div class="bg-cyan-500/25 rounded-lg p-4 md:p-8 border border-teal-600/50 mb-4 md:mb-8">
				<div class="bg-blue-600 text-white text-xl px-4 py-2 rounded-lg text-center font-bold mb-8 border-1 border-white tracking-wide">
								Task Response (TR)
				</div>

						<div class="bg-gray-800 rounded-lg p-4 md:p-8 border border-teal-600/50 mb-4 md:mb-8 max-w-4xl mx-auto space-y-6 text-lg">
							<p class="text-white font-bold mb-4"><u>Task 2</u></p>
							<p class="text-white text-center mb-8"><em>- Answer the following comprehension questions -</em></p>

							<div class="space-y-6">
								<!-- Question 1 -->
								<div>
									<p class="text-white mb-2">1. What are the three descriptors used to rate Task Response for your Task 2 essay?</p>
									<textarea
										bind:value={q1_t2}
										rows="3"
										class="w-full bg-gray-600 text-white p-3 rounded border border-gray-500 focus:border-teal-400 focus:outline-none"
										placeholder="answer"
									></textarea>
								</div>

								<p class="text-white font-bold my-6">Questions 2 - 5 refer to the task below.</p>

								<div class="flex justify-center mb-6">
									<img
										src="/LESSONS/les03/03(i)/T2-TRessaySC.png"
										alt="IELTS Task 2 writing TR"
										class="w-full max-w-2xl rounded border-2 border-gray-900 cursor-pointer hover:opacity-80 transition-opacity"
										onclick={() => openLightbox('/LESSONS/les03/03(i)/T2-TRessaySC.png')}
										onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les03/03(i)/T2-TRessaySC.png')) : null}
										tabindex="0"
									/>
								</div>

								<!-- Question 2 -->
								<div>
									<p class="text-white mb-2">2. What are the task requirements for this Task 2 essay question?</p>
									<textarea
										bind:value={q2_t2}
										rows="3"
										class="w-full bg-gray-600 text-white p-3 rounded border border-gray-500 focus:border-teal-400 focus:outline-none"
										placeholder="answer"
									></textarea>
								</div>

								<!-- Question 3 -->
								<div>
									<p class="text-white mb-2">3. What position will you take in this essay? (Do you agree, disagree or partially agree?)</p>
									<textarea
										bind:value={q3_t2}
										rows="1"
										class="w-full bg-gray-600 text-white p-3 rounded border border-gray-500 focus:border-teal-400 focus:outline-none"
										placeholder="answer"
									></textarea>
								</div>

								<!-- Question 4 -->
								<div>
									<p class="text-white mb-2">4. How many body paragraphs will you have in this essay, and what will each discuss?</p>
									<textarea
										bind:value={q4_t2}
										rows="4"
										class="w-full bg-gray-600 text-white p-3 rounded border border-gray-500 focus:border-teal-400 focus:outline-none"
										placeholder="answer"
									></textarea>
								</div>

								<!-- Question 5 -->
								<div>
									<p class="text-white mb-2">5. Write the introduction paragraph for this essay. (max.100 words)</p>
									<textarea
										bind:value={q5_t2}
										rows="5"
										class="w-full bg-gray-600 text-white p-3 rounded border border-gray-500 focus:border-teal-400 focus:outline-none"
										placeholder="answer"
									></textarea>
								</div>

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
								<p class="text-white"><b>End of Lesson 03-i</b></p>
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
																										href="/IETPP/lesson-02/lesson03-ii"
																										class="text-teal-400 hover:text-teal-300 font-semibold"
																										data-sveltekit-reload
																						>
																										Next Lesson →
																						</a>
																		</div>
														</div>
										</section>
	</div>
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

