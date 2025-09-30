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
	<title>Skill Check 03(i) - Writing Task Achievement/Task Response | InsideIELTS</title>
	<meta
		name="description"
		content="Complete IELTS Writing Task Achievement and Task Response skill check exercises with comprehension questions."
	/>
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
	<!-- Lesson Header -->
	<div class="max-w-5xl container mx-auto px-3 md:px-6 py-8">
		<div class="bg-gray-50 dark:bg-gray-800 rounded-lg px-6 py-2 mb-8">
			<div class="text-center">
				<div class="text-xs text-left text-teal-600 dark:text-teal-400">
					SC_03(i)
				</div>
				<h1 class="text-4xl font-bold text-white my-7 tracking-wide">
					WRITING - Skill Check
				</h1>
			</div>

			<div class="flex justify-between items-center">
				<a
					href="/IETPP/lesson-03/lesson03-i"
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

	<!-- Page Content -->
	<div style="max-width: 1200px;" class="mx-auto px-3 md:px-6 py-8">

		<!-- Main Section -->
		<section class="bg-cyan-600/25 rounded-lg p-4 md:p-8 shadow-sm border border-teal-600 mb-8">
			<div class="max-w-6xl mx-auto">
				<div class="bg-gray-800 rounded-lg p-6 text-lg border border-gray-700 mb-8">
					
					<div class="flex items-center justify-center gap-3 mb-8">
						<span class="text-teal-400 text-3xl">✓</span>
						<h2 class="text-2xl font-bold text-white">Skill Check</h2>
						<span class="text-teal-400 text-3xl">✓</span>
					</div>

					<p class="text-white mb-6 font-bold text-center">
						Complete these skill-check exercises then upload your answers for checking and feedback.
					</p>

					<p class="text-white mb-8 text-center text-sm">
						[ *Choose TASK 1 Academic <u><b>or</b></u> Task 1 General Training ]
					</p>

					<!-- Academic Section -->
					<div class="bg-gray-700 rounded-lg p-6 mb-8" id="T1SC">
						<div class="text-teal-400 font-bold mb-4">SC3(i):Ac</div>
						<h3 class="text-xl font-bold text-white text-center mb-6">WRITING - Task Achievement (Ac)</h3>

						<div class="space-y-6">
							<p class="text-white font-bold mb-4"><u>T1 Academic</u></p>
							<p class="text-white mb-6"><em>- Answer the following comprehension questions -</em></p>

							<div class="space-y-6">
								<!-- Question 1 -->
								<div>
									<p class="text-white mb-2">1. What are the three descriptors used to rate Task Achievement for your Task 1 Academic report?</p>
									<textarea
										bind:value={q1_ac}
										rows="3"
										class="w-full bg-gray-600 text-white p-3 rounded border border-gray-500 focus:border-teal-400 focus:outline-none"
										placeholder="answer"
									></textarea>
								</div>

								<!-- Question 2 -->
								<div>
									<p class="text-white mb-2">2. What are the task requirements for the Task 1 Academic report?</p>
									<textarea
										bind:value={q2_ac}
										rows="3"
										class="w-full bg-gray-600 text-white p-3 rounded border border-gray-500 focus:border-teal-400 focus:outline-none"
										placeholder="answer"
									></textarea>
								</div>

								<p class="text-white font-bold my-6">Questions 3 - 6 refer to the figure below.</p>

								<div class="flex justify-center mb-6">
									<img
										src="/LESSONS/les03/03(i)/T1_Ac-TAgraphSC.png"
										alt="IELTS Task 1 Academic writing TA"
										class="w-full max-w-3xl rounded border-2 border-gray-900 cursor-pointer hover:opacity-80 transition-opacity"
										onclick={() => openLightbox('/LESSONS/les03/03(i)/T1_Ac-TAgraphSC.png')}
										onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les03/03(i)/T1_Ac-TAgraphSC.png')) : null}
										tabindex="0"
									/>
								</div>

								<!-- Question 3 -->
								<div>
									<p class="text-white mb-2">3. Write an overview for this figure. Begin your answer, '<em>The bar graph shows...</em>'</p>
									<textarea
										bind:value={q3_ac}
										rows="3"
										class="w-full bg-gray-600 text-white p-3 rounded border border-gray-500 focus:border-teal-400 focus:outline-none"
										placeholder="answer"
									></textarea>
								</div>

								<!-- Question 4 -->
								<div>
									<p class="text-white mb-2">4. State one key feature of this figure.</p>
									<textarea
										bind:value={q4_ac}
										rows="3"
										class="w-full bg-gray-600 text-white p-3 rounded border border-gray-500 focus:border-teal-400 focus:outline-none"
										placeholder="answer"
									></textarea>
								</div>

								<!-- Question 5 -->
								<div>
									<p class="text-white mb-2">5. Make one relevant comparison between Sydney and Brisbane. (<em>Use figures in your answer.</em>)</p>
									<textarea
										bind:value={q5_ac}
										rows="3"
										class="w-full bg-gray-600 text-white p-3 rounded border border-gray-500 focus:border-teal-400 focus:outline-none"
										placeholder="answer"
									></textarea>
								</div>

								<!-- Question 6 -->
								<div>
									<p class="text-white mb-2">6. Summarise the information shown in the graph. Begin your answer, '<em>In summary, of the five cities surveyed, the highest proportion of residents...</em>'</p>
									<textarea
										bind:value={q6_ac}
										rows="6"
										class="w-full bg-gray-600 text-white p-3 rounded border border-gray-500 focus:border-teal-400 focus:outline-none"
										placeholder="answer"
									></textarea>
								</div>

								<div class="flex justify-center mt-6">
									<button
										onclick={() => handleUpload('Academic')}
										class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded border-2 border-teal-400 transition-colors"
									>
										UPLOAD
									</button>
								</div>
							</div>
						</div>
					</div>

					<!-- General Training Section -->
					<div class="bg-gray-700 rounded-lg p-6 mb-8">
						<div class="text-teal-400 font-bold mb-4">SC3(i):GT</div>
						<h3 class="text-xl font-bold text-white text-center mb-6">WRITING - Task Achievement (GT)</h3>

						<div class="space-y-6">
							<p class="text-white font-bold mb-4"><u>T1 General Training</u></p>
							<p class="text-white mb-6"><em>- Answer the following comprehension questions -</em></p>

							<div class="space-y-6">
								<!-- Question 1 -->
								<div>
									<p class="text-white mb-2">1. What are the three descriptors used to rate Task Achievement for your Task 1 General Training letter?</p>
									<textarea
										bind:value={q1_gt}
										rows="3"
										class="w-full bg-gray-600 text-white p-3 rounded border border-gray-500 focus:border-teal-400 focus:outline-none"
										placeholder="answer"
									></textarea>
								</div>

								<p class="text-white font-bold my-6">Questions 2 - 6 refer to the task below.</p>

								<div class="flex justify-center mb-6">
									<img
										src="/LESSONS/les03/03(i)/T1_GT-TAletterSC.png"
										alt="IELTS Task 1 General Training writing TA"
										class="w-full max-w-3xl rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity"
										onclick={() => openLightbox('/LESSONS/les03/03(i)/T1_GT-TAletterSC.png')}
										onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les03/03(i)/T1_GT-TAletterSC.png')) : null}
										tabindex="0"
									/>
								</div>

								<!-- Question 2 -->
								<div>
									<p class="text-white mb-2">2. What are the task requirements for this Task 1 General Training letter?</p>
									<textarea
										bind:value={q2_gt}
										rows="3"
										class="w-full bg-gray-600 text-white p-3 rounded border border-gray-500 focus:border-teal-400 focus:outline-none"
										placeholder="answer"
									></textarea>
								</div>

								<!-- Question 3 -->
								<div>
									<p class="text-white mb-2">3. Is the tone of this letter going to be formal, semi-formal or informal?</p>
									<textarea
										bind:value={q3_gt}
										rows="1"
										class="w-full bg-gray-600 text-white p-3 rounded border border-gray-500 focus:border-teal-400 focus:outline-none"
										placeholder="answer"
									></textarea>
								</div>

								<!-- Question 4 -->
								<div>
									<p class="text-white mb-2">4. State your purpose for this letter. Begin the sentence, '<em>Regrettably, I am writing to inform you...</em>'</p>
									<textarea
										bind:value={q4_gt}
										rows="3"
										class="w-full bg-gray-600 text-white p-3 rounded border border-gray-500 focus:border-teal-400 focus:outline-none"
										placeholder="answer"
									></textarea>
								</div>

								<!-- Question 5 -->
								<div>
									<p class="text-white mb-2">5. What is your job and how is the evening course negatively affecting your job performance?</p>
									<textarea
										bind:value={q5_gt}
										rows="3"
										class="w-full bg-gray-600 text-white p-3 rounded border border-gray-500 focus:border-teal-400 focus:outline-none"
										placeholder="answer"
									></textarea>
								</div>

								<!-- Question 6 -->
								<div>
									<p class="text-white mb-2">6. Write the last sentence of this letter. Begin the sentence, '<em>I hope that...</em>'</p>
									<textarea
										bind:value={q6_gt}
										rows="3"
										class="w-full bg-gray-600 text-white p-3 rounded border border-gray-500 focus:border-teal-400 focus:outline-none"
										placeholder="answer"
									></textarea>
								</div>

								<div class="flex justify-center mt-6">
									<button
										onclick={() => handleUpload('General Training')}
										class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded border-2 border-teal-400 transition-colors"
									>
										UPLOAD
									</button>
								</div>
							</div>
						</div>
					</div>

					<!-- Task 2 Section -->
					<div class="bg-gray-700 rounded-lg p-6 mb-8" id="T2SC">
						<div class="text-teal-400 font-bold mb-4">SC3(i):T2</div>
						<h3 class="text-xl font-bold text-white text-center mb-6">WRITING - Task Response</h3>

						<div class="space-y-6">
							<p class="text-white font-bold mb-4"><u>TASK 2</u></p>
							<p class="text-white mb-6"><em>- Answer the following comprehension questions -</em></p>

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
										class="w-full max-w-3xl rounded border-2 border-gray-900 cursor-pointer hover:opacity-80 transition-opacity"
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
										class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded border-2 border-teal-400 transition-colors"
									>
										UPLOAD
									</button>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>

		<!-- Lesson End Section -->
		<section class="text-center py-8">
			<div class="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
				<p class="text-white mb-6">End of Skill Check 03(i)</p>
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
			<div class="max-w-4xl max-h-full">
				<img src={lightboxImage} alt="Enlarged view" class="max-w-full max-h-full object-contain rounded-lg" />
			</div>
		</div>
	{/if}
</div>
