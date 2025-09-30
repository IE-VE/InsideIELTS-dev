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
	<title>Skill Check 03(i) - Writing Task Achievement | InsideIELTS</title>
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
					SC_03.1(i)
				</div>
				<h1 class="text-4xl font-bold text-white my-7 tracking-wide">
					WRITING
				</h1>
			</div>

			<div class="flex justify-between items-center">
				<a
					href="/IETPP/lesson-03"
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

					<p class="text-white mb-8 text-center text-sm">
						[ *Choose TASK 1 Academic <u><b>or</b></u> Task 1 General Training ]
					</p>

					<!-- Exercise -->
			<div class="bg-cyan-500/25 rounded-lg p-4 md:p-8 border border-teal-600/50 mb-4 md:mb-8">
				<div class="bg-blue-600 text-white text-xl px-4 py-2 rounded-lg text-center font-bold mb-8 border-1 border-white tracking-wide">
								Task Achievement (TA)
				</div>

						<div class="bg-gray-800 rounded-lg p-4 md:p-8 border border-teal-600/50 mb-4 md:mb-8 max-w-4xl mx-auto space-y-6 text-lg">
							<p class="text-white font-bold mb-4"><u>T1 Academic</u></p>
							<p class="text-white text-center mb-8"><em>- Answer the following comprehension questions -</em></p>

							<div class="space-y-6">
								<!-- Question 1 -->
								<div>
									<p class="text-white mb-2">1. What are the three descriptors used to rate Task Achievement for your Task 1 Academic report?</p>
									<textarea
										bind:value={q1_ac}
										rows="3"
										class="w-full bg-gray-700 text-white p-3 rounded border border-gray-500 focus:border-teal-400 focus:outline-none"
										placeholder="answer"
									></textarea>
								</div>

								<!-- Question 2 -->
								<div>
									<p class="text-white mb-2">2. What are the task requirements for the Task 1 Academic report?</p>
									<textarea
										bind:value={q2_ac}
										rows="3"
										class="w-full bg-gray-700 text-white p-3 rounded border border-gray-500 focus:border-teal-400 focus:outline-none"
										placeholder="answer"
									></textarea>
								</div>

								<p class="text-white font-bold my-6">Questions 3 - 6 refer to the figure below.</p>

								<div class="flex justify-center mb-6">
									<img
										src="/LESSONS/les03/03(i)/T1_Ac-TAgraphSC.png"
										alt="IELTS Task 1 Academic writing TA"
										class="w-full max-w-2xl rounded border-2 border-gray-900 cursor-pointer hover:opacity-80 transition-opacity"
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
										class="w-full bg-gray-700 text-white p-3 rounded border border-gray-500 focus:border-teal-400 focus:outline-none"
										placeholder="answer"
									></textarea>
								</div>

								<!-- Question 4 -->
								<div>
									<p class="text-white mb-2">4. State one key feature of this figure.</p>
									<textarea
										bind:value={q4_ac}
										rows="3"
										class="w-full bg-gray-700 text-white p-3 rounded border border-gray-500 focus:border-teal-400 focus:outline-none"
										placeholder="answer"
									></textarea>
								</div>

								<!-- Question 5 -->
								<div>
									<p class="text-white mb-2">5. Make one relevant comparison between Sydney and Brisbane. (<em>Use figures in your answer.</em>)</p>
									<textarea
										bind:value={q5_ac}
										rows="3"
										class="w-full bg-gray-700 text-white p-3 rounded border border-gray-500 focus:border-teal-400 focus:outline-none"
										placeholder="answer"
									></textarea>
								</div>

								<!-- Question 6 -->
								<div>
									<p class="text-white mb-2">6. Summarise the information shown in the graph. Begin your answer, '<em>In summary, of the five cities surveyed, the highest proportion of residents...</em>'</p>
									<textarea
										bind:value={q6_ac}
										rows="6"
										class="w-full bg-gray-700 text-white p-3 rounded border border-gray-500 focus:border-teal-400 focus:outline-none"
										placeholder="answer"
									></textarea>
								</div>

								<div class="flex justify-center mt-6">
									<button
										onclick={() => handleUpload('Academic')}
										class="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors disabled:opacity-50"
										>
											Check Answers
									</button>
								</div>
							</div>
						</div>

				<!-- General Training Section -->
				<div class="bg-gray-800 rounded-lg p-4 md:p-8 border border-teal-600/50 mb-4 md:mb-8 max-w-4xl mx-auto space-y-6 text-lg">
				<div class="space-y-6">
						<p class="text-white font-bold mb-4"><u>T1 General Training</u></p>
						<p class="text-white text-center mb-8"><em>- Answer the following comprehension questions -</em></p>

						<div class="space-y-6">
							<!-- Question 1 -->
							<div>
								<p class="text-white mb-2">1. What are the three descriptors used to rate Task Achievement for your Task 1 General Training letter?</p>
								<textarea
									bind:value={q1_gt}
									rows="3"
									class="w-full bg-gray-700 text-white p-3 rounded border border-gray-500 focus:border-teal-400 focus:outline-none"
									placeholder="answer"
								></textarea>
							</div>

							<p class="text-white font-bold my-6">Questions 2 - 6 refer to the task below.</p>

							<div class="flex justify-center mb-6">
								<img
									src="/LESSONS/les03/03(i)/T1_GT-TAletterSC.png"
									alt="IELTS Task 1 General Training writing TA"
									class="w-full max-w-2xl rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity"
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
									class="w-full bg-gray-700 text-white p-3 rounded border border-gray-500 focus:border-teal-400 focus:outline-none"
									placeholder="answer"
								></textarea>
							</div>

							<!-- Question 3 -->
							<div>
								<p class="text-white mb-2">3. Is the tone of this letter going to be formal, semi-formal or informal?</p>
								<textarea
									bind:value={q3_gt}
									rows="1"
									class="w-full bg-gray-700 text-white p-3 rounded border border-gray-500 focus:border-teal-400 focus:outline-none"
									placeholder="answer"
								></textarea>
							</div>

							<!-- Question 4 -->
							<div>
								<p class="text-white mb-2">4. State your purpose for this letter. Begin the sentence, '<em>Regrettably, I am writing to inform you...</em>'</p>
								<textarea
									bind:value={q4_gt}
									rows="3"
									class="w-full bg-gray-700 text-white p-3 rounded border border-gray-500 focus:border-teal-400 focus:outline-none"
									placeholder="answer"
								></textarea>
							</div>

							<!-- Question 5 -->
							<div>
								<p class="text-white mb-2">5. What is your job and how is the evening course negatively affecting your job performance?</p>
								<textarea
									bind:value={q5_gt}
									rows="3"
									class="w-full bg-gray-700 text-white p-3 rounded border border-gray-500 focus:border-teal-400 focus:outline-none"
									placeholder="answer"
								></textarea>
							</div>

							<!-- Question 6 -->
							<div>
								<p class="text-white mb-2">6. Write the last sentence of this letter. Begin the sentence, '<em>I hope that...</em>'</p>
								<textarea
									bind:value={q6_gt}
									rows="3"
									class="w-full bg-gray-700 text-white p-3 rounded border border-gray-500 focus:border-teal-400 focus:outline-none"
									placeholder="answer"
								></textarea>
							</div>

							<div class="flex justify-center mt-6">
								<button
									onclick={() => handleUpload('General Training')}
									class="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors disabled:opacity-50"
								>
									Check Answers
								</button>
							</div>
						</div>
					</div>
				</div>				
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

