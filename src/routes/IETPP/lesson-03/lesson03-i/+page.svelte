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
	<title>Writing - Task Achievement / Task Response | InsideIELTS Test Preparation Program</title>
	<meta name="description" content="Master IELTS Writing Task Achievement and Task Response criteria with expert guidance and Virtual Examiner videos." />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
	<!-- Lesson Header -->
	<div class="max-w-5xl container mx-auto px-6 pt-8">
		<div class="bg-gray-50 dark:bg-gray-800 rounded-lg px-6 py-2 mb-8">
			<div class="text-center">
				<div class="text-xs text-left text-teal-600 dark:text-teal-400">
					IE2401_03.1
				</div>
				<h1 class="text-3xl font-bold text-white my-7">
					WRITING
				</h1>
						</div>

			<div class="flex justify-between items-center">
				<a
					href="/IETPP/lesson-03/lesson-03T2"
					class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
					data-sveltekit-reload
				>
					← Prev
				</a>

				<a
					href="/IETPP#lesson-03"
					class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
					data-sveltekit-reload
				>
					Contents
				</a>
				<a
					href="/IETPP/lesson-03/lesson03-ii"
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

		<!-- Main Section: Writing TA/TR -->
		<section class="bg-cyan-600/25 rounded-lg p-4 md:p-10 shadow-sm border border-blue-600 mb-12">
			<div class="flex items-center justify-center gap-4 mb-10">
				<div class="text-4xl">✏️</div>
				<h2 class="text-3xl font-bold text-center text-white tracking-wide">Task Achievement / Task Response</h2>
				<div class="text-4xl">✏️</div>
			</div>
			<div class="max-w-6xl mx-auto">
				<div class="bg-gray-800 rounded-lg p-4 md:p-8 text-lg border border-gray-600 mb-12">

					 <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8">
					<p class="text-gray-700 dark:text-gray-300 text-lg mb-2">
						<strong>Task Achievement</strong> in <strong>Writing Task 1</strong> and <strong>Task Response</strong> in <strong>Writing Task 2</strong> measure how well you
						fulfill the requirements of the two writing questions. We'll look at the <strong>TA/TR</strong> descriptors for each of the writing tasks individually.
					</p>
					 </div>
					
					<p class="text-white mb-8">
						Watch this video for an overview of how the three <strong>Task Achievement</strong> and <strong>Task Response</strong> descriptors are applied to your writing response.
					</p>

					<div class="flex justify-center mb-4">
						<a
							href="/LESSONS/les03/03(i)/ASSESSMENT_Writing_TATR1.mp4"
							target="_blank"
							title="InsideIELTS virtual examiner writing test assessment video TA"
							class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
						>
							Watch VE vid
						</a>
					</div>
					</div>
				
					<div class="bg-gray-800 rounded-lg p-4 md:p-8 text-lg border border-gray-600 mb-12">

					<!-- Task 1 Section -->
					<h3 class="text-2xl font-bold text-white mb-6 underline">TASK 1</h3>

					<p class="text-white mb-4">
						For the Task 1 <strong>Academic test</strong> you are presented with an informational figure and your task is to,
						<em>'Summarise the information by selecting and reporting the
						main features, and make comparisons where relevant'.</em>
					</p>

					<div class="flex justify-center mb-6">
						<img
							src="/LESSONS/les03/03(i)/T1_AcQ-torn.png"
							alt="IELTS Task 1 Academic writing question"
							class="w-full max-w-2xl rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity mt-8 mb-8"
							onclick={() => openLightbox('/LESSONS/les03/03(i)/T1_AcQ-torn.png')}
							onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les03/03(i)/T1_AcQ-torn.png')) : null}
							tabindex="0"
						/>
					</div>

					<p class="text-white mb-4">
						For the Task 1 <strong>General Training test</strong> you are given a scenario and your task is to,
						<em>'Write a letter to ________'</em>, followed by three bullet points asking you to, for example,
						'<em>say _______, explain _______, suggest _______</em>', certain details relating to the given scenario.
					</p>

					<div class="flex justify-center mb-6">
						<img
							src="/LESSONS/les03/03(i)/T1_GTQ-torn.png"
							alt="IELTS Task 1 General Training writing question"
							class="w-full max-w-2xl rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity mt-8 mb-8"
							onclick={() => openLightbox('/LESSONS/les03/03(i)/T1_GTQ-torn.png')}
							onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les03/03(i)/T1_GTQ-torn.png')) : null}
							tabindex="0"
						/>
					</div>

					<p class="text-white mb-6">
						The <strong>three descriptors</strong> used to rate your <strong>Task Achievement</strong> for <strong>Writing Task 1</strong> are:
					</p>
					<ul class="text-white mb-8 space-y-2 ml-6">
						<li>• covering the task requirements;</li>
			<li>• presenting a clear overview (Ac) / purpose (GT);</li>
						<li>• covering the key features (Ac) / bullet points (GT) given in the question.</li>
					</ul>

					<p class="text-white mb-6">
						This table shows how the three <strong>Task 1 TA</strong> descriptors change from Band 5
						<strong>(B5)</strong> up to Band 7 <strong>(B7)</strong>:
					</p>

					<div class="flex justify-center mb-8">
						<img
							src="/LESSONS/les03/03(i)/W_Table-TA.png"
							alt="IELTS Task 1 writing rubric TA"
							class="w-full max-w-4xl rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity mt-8 mb-8"
							onclick={() => openLightbox('/rubrics/W_Table-TA.png')}
							onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/rubrics/W_Table-TA.png')) : null}
							tabindex="0"
						/>
					</div>

					<p class="text-white mb-8">
						To score above <strong>B6</strong> for <strong>Task Achievement</strong> you must: cover the task requirements,
						present a clear overview (Ac) / purpose (GT), and clearly present the key features (Ac) / bullet points (GT) given in the question.
					</p>

					<p class="text-white mb-6">
						Watch this video for a <strong>Task 1</strong> model answer break-down of <strong>TA</strong> descriptors.
					</p>

					<div class="flex justify-center gap-8 m-12">
						<div class="text-center">
							<a
								href="/LESSONS/les03/03(i)/ASSESSMENT_Writing_TATR-GT.mp4"
								target="_blank"
								title="InsideIELTS virtual examiner writing TA video"
								class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
							>
								Watch VE vid - TA (GT)
							</a>
						</div>
						<div class="text-center">
							<a
								href="/LESSONS/les03/03(i)/ASSESSMENT_Writing_TATR-Ac.mp4"
								target="_blank"
								title="InsideIELTS virtual examiner writing TA video"
								class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
							>
								Watch VE vid - TA (Ac)
							</a>
						</div>
					</div>

					<p class="text-white text-center mb-10 font-bold">
						Test your understanding of WRITING TASK 1 - TASK ACHIEVEMENT
					</p>

					<div class="flex justify-center mb-12">
						<a
							href="/IETPP/lesson-03/lesson03-i/skill-check_T1"
							class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors border-2 border-white"
						>
							<span>✓</span>
							<span>SKILL CHECK</span>
							<span>✓</span>
						</a>
					</div>
					</div>

				<!-- Task 2 Section -->
					<div class="bg-gray-800 rounded-lg p-4 md:p-8 text-lg border border-gray-600 mb-12">

					<h3 class="text-2xl font-bold text-white mb-6 underline mt-4">TASK 2</h3>

					<p class="text-white mb-4">
						There are <strong>three parts</strong> to every <strong>Task 2 essay question</strong>: the topic statement which introduces the subject of the essay;
						the task statement/question, for example, '<em>To what extent do you agree or disagree with this statement?</em>'; and the final
						direction asking you to, '<em>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</em>'
					</p>

					<div class="flex justify-center mb-6">
						<img
							src="/LESSONS/les03/03(i)/T2-breakdown.png"
							alt="IELTS Task 2 writing question breakdown"
							class="w-full max-w-2xl rounded border-2 border-gray-900 cursor-pointer hover:opacity-80 transition-opacity mt-8 mb-8"
							onclick={() => openLightbox('/LESSONS/les03/03(i)/T2-breakdown.png')}
							onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/LESSONS/les03/03(i)/T2-breakdown.png')) : null}
							tabindex="0"
						/>
					</div>

					<p class="text-white mb-6">
						To fulfill the task requirements for the Task 2 essay you must address all three of these points.
					</p>

					<p class="text-white mb-6">
						The <strong>three descriptors</strong> used to assess your <strong>Task Response</strong> for <strong>Writing Task 2</strong> are concerned with:
					</p>
					<ul class="text-white mb-8 space-y-2 ml-6">
						<li>• addressing the task;</li>
						<li>• presenting a clear position;</li>
						<li>• supporting and extending your ideas.</li>
					</ul>

					<p class="text-white mb-6">
						Here's how the three <strong>Task 2 TR</strong> descriptors change from Band 5
						<strong>(B5)</strong> up to Band 7 <strong>(B7)</strong>:
					</p>

					<div class="flex justify-center mb-8">
						<img
							src="/LESSONS/les03/03(i)/W_Table-TR.png"
							alt="IELTS Task 2 writing rubric TR"
							class="w-full max-w-4xl rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity mt-8 mb-8"
							onclick={() => openLightbox('/rubrics/W_Table-TR.png')}
							onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/rubrics/W_Table-TR.png')) : null}
							tabindex="0"
						/>
					</div>

					<p class="text-white mb-8">
						To score above <strong>B6</strong> for <strong>Task Response</strong> you must: address all parts of the task,
						present a clear position throughout the essay, and present, support and extend your ideas.
					</p>

					<p class="text-white mb-6">
						Watch this video for a <strong>Task 2</strong> model answer break-down of <strong>TR</strong> descriptors.
					</p>

					<div class="flex justify-center m-12">
						<div class="text-center">
							<a
								href="/LESSONS/les03/03(i)/ASSESSMENT_Writing_TATR-T2.mp4"
								target="_blank"
								title="InsideIELTS virtual examiner writing TR video"
								class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
							>
								Watch VE vid - TR
							</a>
						</div>
					</div>
						
						<div class="text-center mb-10">
					<p class="text-white mb-12 font-bold">
						Test your understanding of WRITING TASK 2 - TASK RESPONSE
					</p>
		
						<a
							href="/IETPP/lesson-03/lesson03-i/skill-check_T2"
							class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors border-2 border-white"
						>
							<span>✓</span>
							<span>SKILL CHECK</span>
							<span>✓</span>
						</a>
					
						</div>
			</div>
		</section>

				<!-- Footer Navigation -->
									<section class="text-center">          

													<div class="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
																	<div class="flex justify-between items-center">
																					<a
																									href="/IETPP#lesson-03"
																									class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
					data-sveltekit-reload
																					>
																									← Back to Contents
																					</a>
																					<a																href="/IETPP/lesson-02/lesson03-ii"												class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
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
			<div class="max-w-4xl max-h-full">
				<img src={lightboxImage} alt="Enlarged view" class="max-w-full max-h-full object-contain rounded-lg" />
			</div>
		</div>
	{/if}
</div>
