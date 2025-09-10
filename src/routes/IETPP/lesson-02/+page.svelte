<script lang="ts">
	import { onMount } from 'svelte';

	let lightboxOpen = false;
	let lightboxImage = '';

	// Answer input variables for practice exercises
	let q1 = '', q2 = '', q3 = '', q4 = '', q5 = '', q6 = '';
	let q22 = '', q23 = '', q24 = '', q25 = '', q26 = '', q27 = '';
	
	// Results for each exercise
	let showResultsDiagram = false;
	let showResultsFlowchart = false;
	let markingResultsDiagram = {};
	let markingResultsFlowchart = {};
	
	// Loading states
	let loadingDiagram = false;
	let loadingFlowchart = false;

	function openLightbox(imageSrc: string) {
		lightboxImage = imageSrc;
		lightboxOpen = true;
	}

	function closeLightbox() {
		lightboxOpen = false;
		lightboxImage = '';
	}

	function checkDiagramAnswers() {
		loadingDiagram = true;
		showResultsDiagram = false;
		
		setTimeout(() => {
			const correctAnswers = {
				q1: ['coal', 'Coal'],
				q2: ['furnace', 'Furnace'],
				q3: ['gas', 'Gas'],
				q4: ['pipes', 'Pipes'],
				q5: ['turbine', 'Turbine'],
				q6: ['electricity', 'Electricity']
			};

			const userAnswers = { q1, q2, q3, q4, q5, q6 };
			const results = {};
			let totalCorrect = 0;

			Object.entries(userAnswers).forEach(([key, answer]) => {
				const userAnswer = answer.trim();
				const correct = correctAnswers[key].some(correctAnswer => 
					userAnswer === correctAnswer
				);
				
				results[key] = {
					userAnswer: answer,
					isCorrect: correct,
					correctAnswers: correctAnswers[key]
				};
				
				if (correct) totalCorrect++;
			});

			results.totalCorrect = totalCorrect;
			results.totalQuestions = 6;
			markingResultsDiagram = results;
			showResultsDiagram = true;
			loadingDiagram = false;
		}, 3000);
	}

	function checkFlowchartAnswers() {
		loadingFlowchart = true;
		showResultsFlowchart = false;
		
		setTimeout(() => {
			const correctAnswers = {
				q22: ['planning', 'Planning'],
				q23: ['research', 'Research'],
				q24: ['design', 'Design'],
				q25: ['testing', 'Testing'],
				q26: ['production', 'Production'],
				q27: ['marketing', 'Marketing']
			};

			const userAnswers = { q22, q23, q24, q25, q26, q27 };
			const results = {};
			let totalCorrect = 0;

			Object.entries(userAnswers).forEach(([key, answer]) => {
				const userAnswer = answer.trim();
				const correct = correctAnswers[key].some(correctAnswer => 
					userAnswer === correctAnswer
				);
				
				results[key] = {
					userAnswer: answer,
					isCorrect: correct,
					correctAnswers: correctAnswers[key]
				};
				
				if (correct) totalCorrect++;
			});

			results.totalCorrect = totalCorrect;
			results.totalQuestions = 6;
			markingResultsFlowchart = results;
			showResultsFlowchart = true;
			loadingFlowchart = false;
		}, 3000);
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
	<title>IETPP - Lesson 02: Introduction to the Reading Test | InsideIELTS</title>
	<meta
		name="description"
		content="Learn IELTS Reading test format, question types, and practice with authentic examples. Master diagram labeling, flow chart completion, and other reading skills."
	/>
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
	<!-- Lesson Header -->
	<div class="max-w-5xl container mx-auto px-3 md:px-6 py-8">
		<div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
			<div class="text-center">
				<div class="text-xs text-left text-teal-600 dark:text-teal-400 mb-4">
					LESSON CODE: IE2401_02
				</div>
				<h1 class="text-3xl font-bold text-white mb-2">
					Introduction to the Reading Test
				</h1>
				<p class="text-white italic mb-10">(50 mins)</p>
			</div>

			<div class="text-right mt-6">
				<a
					href="/IETPP#lesson-02"
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
		<section class="bg-blue-600/20 rounded-lg p-4 md:p-8 shadow-sm border border-blue-600/50 mb-8">
			<div class="flex items-center justify-center gap-4 mb-6">
				<div class="text-4xl">📖</div>
				<h2 class="text-3xl font-bold text-center text-white">Skills Practice</h2>
				<div class="text-4xl">📖</div>
			</div>

			<div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
				<h2 class="text-2xl text-center font-bold text-gray-800 dark:text-gray-200 mb-6">
					Reading Test Format and Question Types
				</h2>

				<div class="space-y-6">
					<div>
						<h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">What to Expect</h3>
						<p class="text-gray-700 dark:text-gray-300 mb-4">
							The Reading Test is the second test completed on test day and lasts for <strong>1 hour</strong>. You write your answers directly on the answer sheet. The test consists of <strong>40 questions</strong> in <strong>three sections</strong>, each with a reading passage and 13 or 14 questions relating to the passage.
						</p>
					</div>

					<div>
						<h3 class="text-lg font-semibold text-teal-600 dark:text-teal-400 mb-3">Key Strategies</h3>
						<div class="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4">
							<ul class="space-y-2 text-gray-700 dark:text-gray-300">
								<li class="flex items-start">
									<span class="text-teal-600 dark:text-teal-400 mr-2">1.</span>
									<span><strong>Time management:</strong> Spend approximately 20 minutes on each section</span>
								</li>
								<li class="flex items-start">
									<span class="text-teal-600 dark:text-teal-400 mr-2">2.</span>
									<span><strong>Read instructions carefully:</strong> Follow the exact format required for each question type</span>
								</li>
								<li class="flex items-start">
									<span class="text-teal-600 dark:text-teal-400 mr-2">3.</span>
									<span><strong>Skim and scan:</strong> Read passages strategically to locate specific information</span>
								</li>
								<li class="flex items-start">
									<span class="text-teal-600 dark:text-teal-400 mr-2">4.</span>
									<span><strong>Use keywords:</strong> Identify key terms that help you locate answers in the text</span>
								</li>
							</ul>
						</div>
					</div>

					<div>
						<h3 class="text-lg font-semibold text-red-600 dark:text-red-400 mb-3">Common Pitfalls</h3>
						<div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
							<ul class="space-y-2 text-gray-700 dark:text-gray-300">
								<li class="flex items-start">
									<span class="text-red-600 dark:text-red-400 mr-2">⚠️</span>
									<span>Spending too much time on difficult questions - move on and return later</span>
								</li>
								<li class="flex items-start">
									<span class="text-red-600 dark:text-red-400 mr-2">⚠️</span>
									<span>Not following the exact answer format specified in instructions</span>
								</li>
								<li class="flex items-start">
									<span class="text-red-600 dark:text-red-400 mr-2">⚠️</span>
									<span>Reading every word instead of scanning for specific information</span>
								</li>
								<li class="flex items-start">
									<span class="text-red-600 dark:text-red-400 mr-2">⚠️</span>
									<span>Overthinking questions - often the first logical answer is correct</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div class="max-w-4xl mx-auto">
				<p class="text-white mb-6">
					The Reading Test is made up of <strong>40 questions</strong> in <strong>three sections</strong>, each with a reading passage and 13 or 14 questions relating to the passage. The texts are taken from journals, magazines, newspapers and books. You are advised to spend approximately 20 minutes on each section.
				</p>

				<p class="text-white mb-6">
					There are <strong>14</strong> main types of question and the questions increase in difficulty as the test progresses. All questions in the Reading Test are worth <strong>1 mark</strong>.
				</p>

				<div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
					<p class="text-gray-700 dark:text-gray-300 mb-4">
						Review your <strong>READING TEST SKILLS</strong> with the IE <strong>Virtual Examiner</strong>.
					</p>
					<div class="text-center">
						<a 
							href="https://insideielts.oppyo.com/video/embed/5rp7dvrywv"
							target="_blank" 
							title="InsideIELTS virtual examiner reading test skills preparation video"
							class="inline-block"
						>
							<img 
								src="/img/VE-button.png" 
								alt="Virtual Examiner Button" 
								class="w-16 h-16 mx-auto hover:opacity-80 transition-opacity"
							/>
						</a>
					</div>
				</div>

				<p class="text-white mb-4">
					The questions will usually be formatted in one of the following ways:
				</p>

				<div class="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6">
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 text-gray-800 dark:text-gray-200">
						<div class="space-y-2">
							<div class="font-semibold">1) Diagram labeling</div>
							<div class="font-semibold">2) Flow chart completion</div>
							<div class="font-semibold">3) Table completion</div>
							<div class="font-semibold">4) Summary completion</div>
							<div class="font-semibold">5) Sentence completion</div>
							<div class="font-semibold">6) True/False (or Yes/No) / Not given</div>
							<div class="font-semibold">7) Matching information</div>
						</div>
						<div class="space-y-2">
							<div class="font-semibold">8) Multiple choice</div>
							<div class="font-semibold">9) List selection</div>
							<div class="font-semibold">10) Choosing a title</div>
							<div class="font-semibold">11) Categorising information</div>
							<div class="font-semibold">12) Matching sentence endings</div>
							<div class="font-semibold">13) Matching paragraph headings</div>
							<div class="font-semibold">14) Short answer questions</div>
						</div>
					</div>
				</div>

				<p class="text-white mb-6">
					Below you can see examples of the different styles of question you will encounter in the Reading Test.
				</p>

				<!-- Reading Examples Carousel - Simplified for now -->
				<div class="bg-gray-800 rounded-lg p-6 mb-6">
					<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div class="text-center">
							<h4 class="text-lg font-semibold text-white mb-3">Diagram Labeling Example</h4>
							<img
								src="/LESSONS/les02/02_R1-dem500.png"
								alt="Reading diagram labeling example"
								class="w-full rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity"
								on:click={() => openLightbox('/LESSONS/les02/02_R1-dem500.png')}
							/>
							<div class="mt-4">
								<a 
									href="https://insideielts.oppyo.com/video/embed/9btfzaywbo"
									target="_blank" 
									title="InsideIELTS virtual examiner reading test preparation video"
									class="inline-block"
								>
									<img 
										src="/img/VE-button.png" 
										alt="Virtual Examiner Button" 
										class="w-12 h-12 mx-auto hover:opacity-80 transition-opacity"
									/>
								</a>
								<p class="text-xs text-gray-400 mt-2"><strong>Watch VE vid</strong></p>
							</div>
						</div>

						<div class="text-center">
							<h4 class="text-lg font-semibold text-white mb-3">Flow Chart Completion Example</h4>
							<img
								src="/LESSONS/les02/02_R2-dem500.png"
								alt="Reading flow chart completion example"
								class="w-full rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity"
								on:click={() => openLightbox('/LESSONS/les02/02_R2-dem500.png')}
							/>
							<div class="mt-4">
								<a 
									href="https://insideielts.oppyo.com/video/embed/p9o3f38rj9"
									target="_blank" 
									title="InsideIELTS virtual examiner reading test preparation video"
									class="inline-block"
								>
									<img 
										src="/img/VE-button.png" 
										alt="Virtual Examiner Button" 
										class="w-12 h-12 mx-auto hover:opacity-80 transition-opacity"
									/>
								</a>
								<p class="text-xs text-gray-400 mt-2"><strong>Watch VE vid</strong></p>
							</div>
						</div>
					</div>
				</div>

				<div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
					<p class="text-gray-700 dark:text-gray-300 text-center font-bold">
						As with the Listening Test, it is <u>very important</u> that you carefully follow the instructions for each set of questions. If the format of your answer differs from instructed, even if the correct information is included, your answer will be marked WRONG.
					</p>
				</div>
			</div>
		</section>

		<!-- Reading Question Practice Section -->
		<section class="bg-teal-100 dark:bg-teal-900/20 rounded-lg p-4 md:p-8 shadow-sm border border-teal-600/50 mb-8">
			<h2 class="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">Reading Question Practice</h2>
			
			<p class="text-gray-700 dark:text-gray-300 text-center mb-8">
				<strong>TASK</strong>: Complete this pair of reading question practice exercises, before checking your answers in the videos below.
			</p>

			<!-- Diagram Labeling Practice -->
			<div class="bg-white dark:bg-gray-800 rounded-lg p-6 mb-8 border border-gray-300 dark:border-gray-600">
				<h3 class="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center">
					1) Diagram Labeling
				</h3>

				<div class="text-center mb-6">
					<img
						src="/LESSONS/les02/Reading_Diagcompletion-prac.png"
						alt="Reading Diagram Completion Practice"
						class="w-full max-w-2xl mx-auto rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity"
						on:click={() => openLightbox('/LESSONS/les02/Reading_Diagcompletion-prac.png')}
					/>
				</div>

				<div class="text-center mb-4">
					<small class="text-gray-600 dark:text-gray-400"><strong>Reading passage</strong></small>
				</div>

				<!-- Answer Inputs -->
				<div class="text-center">
					<div class="flex flex-col gap-3 max-w-xs mx-auto mb-4">
						<div class="flex items-center gap-3">
							<span class="text-gray-800 dark:text-gray-200 text-sm font-medium w-8">Q1</span>
							<input 
								type="text" 
								bind:value={q1}
								placeholder="enter your answer"
								class="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-500 rounded text-gray-800 dark:text-white text-sm text-left"
							/>
						</div>
						<div class="flex items-center gap-3">
							<span class="text-gray-800 dark:text-gray-200 text-sm font-medium w-8">Q2</span>
							<input 
								type="text" 
								bind:value={q2}
								class="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-500 rounded text-gray-800 dark:text-white text-sm text-left"
							/>
						</div>
						<div class="flex items-center gap-3">
							<span class="text-gray-800 dark:text-gray-200 text-sm font-medium w-8">Q3</span>
							<input 
								type="text" 
								bind:value={q3}
								class="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-500 rounded text-gray-800 dark:text-white text-sm text-left"
							/>
						</div>
						<div class="flex items-center gap-3">
							<span class="text-gray-800 dark:text-gray-200 text-sm font-medium w-8">Q4</span>
							<input 
								type="text" 
								bind:value={q4}
								class="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-500 rounded text-gray-800 dark:text-white text-sm text-left"
							/>
						</div>
						<div class="flex items-center gap-3">
							<span class="text-gray-800 dark:text-gray-200 text-sm font-medium w-8">Q5</span>
							<input 
								type="text" 
								bind:value={q5}
								class="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-500 rounded text-gray-800 dark:text-white text-sm text-left"
							/>
						</div>
						<div class="flex items-center gap-3">
							<span class="text-gray-800 dark:text-gray-200 text-sm font-medium w-8">Q6</span>
							<input 
								type="text" 
								bind:value={q6}
								class="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-500 rounded text-gray-800 dark:text-white text-sm text-left"
							/>
						</div>
					</div>
					<p class="text-xs text-gray-600 dark:text-gray-400 mb-6"><strong>Answer sheet Q1 - 6</strong></p>

					<!-- Check Button -->
					<button
						type="button"
						on:click={checkDiagramAnswers}
						disabled={loadingDiagram}
						class="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded text-sm transition-colors flex items-center justify-center mx-auto"
					>
						{#if loadingDiagram}
							<svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
								<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
								<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
							</svg>
							Processing...
						{:else}
							Check Answers
						{/if}
					</button>

					<!-- Results Display -->
					{#if showResultsDiagram}
						<div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mt-4 border border-gray-300 dark:border-gray-600">
							<h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 text-center">Your Results</h4>
							
							<!-- Score Summary -->
							<div class="text-center mb-4">
								<div class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-1">
									{markingResultsDiagram.totalCorrect}/{markingResultsDiagram.totalQuestions}
								</div>
								<div class="text-sm text-gray-600 dark:text-gray-400">
									{Math.round((markingResultsDiagram.totalCorrect / markingResultsDiagram.totalQuestions) * 100)}% Correct
								</div>
							</div>

							<!-- Individual Results -->
							<div class="space-y-2 text-xs">
								{#each ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'] as questionKey}
									<div class="flex items-center justify-between p-2 rounded border {markingResultsDiagram[questionKey]?.isCorrect ? 'bg-green-100 dark:bg-green-900/20 border-green-300 dark:border-green-800' : 'bg-red-100 dark:bg-red-900/20 border-red-300 dark:border-red-800'}">
										<div class="flex-1">
											<div class="font-medium text-gray-800 dark:text-gray-200">
												{questionKey.toUpperCase()}: "{markingResultsDiagram[questionKey]?.userAnswer || '(blank)'}"
											</div>
											<div class="text-xs text-gray-600 dark:text-gray-400 mt-1">
												Correct: {markingResultsDiagram[questionKey]?.correctAnswers?.join(' / ')}
											</div>
										</div>
										<div class="ml-2">
											{#if markingResultsDiagram[questionKey]?.isCorrect}
												<span class="text-green-600 dark:text-green-400 text-lg">✓</span>
											{:else}
												<span class="text-red-600 dark:text-red-400 text-lg">✗</span>
											{/if}
										</div>
									</div>
								{/each}
							</div>
						</div>
					{/if}
				</div>
			</div>

			<!-- Timer Section -->
			<div class="text-center py-8">
				<p class="text-gray-700 dark:text-gray-300 mb-4">- Beat the clock -</p>
				<div class="text-2xl font-bold text-blue-600 dark:text-blue-400">09:00</div>
			</div>

			<!-- Flowchart Completion Practice -->
			<div class="bg-white dark:bg-gray-800 rounded-lg p-6 mb-8 border border-gray-300 dark:border-gray-600">
				<h3 class="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center">
					2) Flowchart Completion
				</h3>

				<div class="text-center mb-6">
					<img
						src="/LESSONS/les02/Reading_Flowchart-prac.png"
						alt="Reading Flowchart Completion Practice"
						class="w-full max-w-2xl mx-auto rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity"
						on:click={() => openLightbox('/LESSONS/les02/Reading_Flowchart-prac.png')}
					/>
				</div>

				<div class="text-center mb-4">
					<small class="text-gray-600 dark:text-gray-400"><strong>Reading passage</strong></small>
				</div>

				<!-- Answer Inputs -->
				<div class="text-center">
					<div class="flex flex-col gap-3 max-w-xs mx-auto mb-4">
						<div class="flex items-center gap-3">
							<span class="text-gray-800 dark:text-gray-200 text-sm font-medium w-8">Q22</span>
							<input 
								type="text" 
								bind:value={q22}
								placeholder="enter your answer"
								class="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-500 rounded text-gray-800 dark:text-white text-sm text-left"
							/>
						</div>
						<div class="flex items-center gap-3">
							<span class="text-gray-800 dark:text-gray-200 text-sm font-medium w-8">Q23</span>
							<input 
								type="text" 
								bind:value={q23}
								class="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-500 rounded text-gray-800 dark:text-white text-sm text-left"
							/>
						</div>
						<div class="flex items-center gap-3">
							<span class="text-gray-800 dark:text-gray-200 text-sm font-medium w-8">Q24</span>
							<input 
								type="text" 
								bind:value={q24}
								class="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-500 rounded text-gray-800 dark:text-white text-sm text-left"
							/>
						</div>
						<div class="flex items-center gap-3">
							<span class="text-gray-800 dark:text-gray-200 text-sm font-medium w-8">Q25</span>
							<input 
								type="text" 
								bind:value={q25}
								class="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-500 rounded text-gray-800 dark:text-white text-sm text-left"
							/>
						</div>
						<div class="flex items-center gap-3">
							<span class="text-gray-800 dark:text-gray-200 text-sm font-medium w-8">Q26</span>
							<input 
								type="text" 
								bind:value={q26}
								class="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-500 rounded text-gray-800 dark:text-white text-sm text-left"
							/>
						</div>
						<div class="flex items-center gap-3">
							<span class="text-gray-800 dark:text-gray-200 text-sm font-medium w-8">Q27</span>
							<input 
								type="text" 
								bind:value={q27}
								class="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-500 rounded text-gray-800 dark:text-white text-sm text-left"
							/>
						</div>
					</div>
					<p class="text-xs text-gray-600 dark:text-gray-400 mb-6"><strong>Answer sheet Q22 - 27</strong></p>

					<!-- Check Button -->
					<button
						type="button"
						on:click={checkFlowchartAnswers}
						disabled={loadingFlowchart}
						class="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded text-sm transition-colors flex items-center justify-center mx-auto"
					>
						{#if loadingFlowchart}
							<svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
								<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
								<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
							</svg>
							Processing...
						{:else}
							Check Answers
						{/if}
					</button>

					<!-- Results Display -->
					{#if showResultsFlowchart}
						<div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mt-4 border border-gray-300 dark:border-gray-600">
							<h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 text-center">Your Results</h4>
							
							<!-- Score Summary -->
							<div class="text-center mb-4">
								<div class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-1">
									{markingResultsFlowchart.totalCorrect}/{markingResultsFlowchart.totalQuestions}
								</div>
								<div class="text-sm text-gray-600 dark:text-gray-400">
									{Math.round((markingResultsFlowchart.totalCorrect / markingResultsFlowchart.totalQuestions) * 100)}% Correct
								</div>
							</div>

							<!-- Individual Results -->
							<div class="space-y-2 text-xs">
								{#each ['q22', 'q23', 'q24', 'q25', 'q26', 'q27'] as questionKey}
									<div class="flex items-center justify-between p-2 rounded border {markingResultsFlowchart[questionKey]?.isCorrect ? 'bg-green-100 dark:bg-green-900/20 border-green-300 dark:border-green-800' : 'bg-red-100 dark:bg-red-900/20 border-red-300 dark:border-red-800'}">
										<div class="flex-1">
											<div class="font-medium text-gray-800 dark:text-gray-200">
												{questionKey.toUpperCase()}: "{markingResultsFlowchart[questionKey]?.userAnswer || '(blank)'}"
											</div>
											<div class="text-xs text-gray-600 dark:text-gray-400 mt-1">
												Correct: {markingResultsFlowchart[questionKey]?.correctAnswers?.join(' / ')}
											</div>
										</div>
										<div class="ml-2">
											{#if markingResultsFlowchart[questionKey]?.isCorrect}
												<span class="text-green-600 dark:text-green-400 text-lg">✓</span>
											{:else}
												<span class="text-red-600 dark:text-red-400 text-lg">✗</span>
											{/if}
										</div>
									</div>
								{/each}
							</div>
						</div>
					{/if}
				</div>
			</div>

			<!-- Answer Videos Section -->
			<div class="text-center py-8">
				<p class="text-gray-700 dark:text-gray-300 mb-6 text-lg"><strong><u>Answers</u></strong></p>
				
				<div class="flex justify-center gap-8">
					<div class="text-center">
						<a 
							href="/LESSONS/les02/R02_answervid1.mp4"
							target="_blank" 
							title="InsideIELTS virtual examiner reading answers video"
							class="inline-block"
						>
							<img 
								src="/img/VE-button.png" 
								alt="Virtual Examiner Button" 
								class="w-16 h-16 mx-auto hover:opacity-80 transition-opacity"
							/>
						</a>
						<p class="text-gray-700 dark:text-gray-300 mt-2">Ex.1</p>
					</div>
					
					<div class="text-center">
						<a 
							href="/LESSONS/les02/R02_answervid2.mp4"
							target="_blank" 
							title="InsideIELTS virtual examiner reading answers video"
							class="inline-block"
						>
							<img 
								src="/img/VE-button.png" 
								alt="Virtual Examiner Button" 
								class="w-16 h-16 mx-auto hover:opacity-80 transition-opacity"
							/>
						</a>
						<p class="text-gray-700 dark:text-gray-300 mt-2">Ex.2</p>
					</div>
				</div>
			</div>
		</section>

		<!-- End of Lesson -->
		<section class="text-center py-8">
			<p class="text-white mb-12">End of Intro Lesson 02</p>
			<a
				href="/IETPP#lesson-02"
				data-sveltekit-reload
				class="inline-flex items-center text-teal-600 dark:text-teal-400 hover:underline font-semibold"
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