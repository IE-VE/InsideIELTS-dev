<script lang="ts">
	import { onMount } from 'svelte';

	let lightboxOpen = false;
	let lightboxImage = '';

	// Form data for sentence completion questions (15-20 and 25-30)
	let q15 = '', q16 = '', q17 = '', q18 = '', q19 = '', q20 = '';
	let q25 = '', q26 = '', q27 = '', q28 = '', q29 = '', q30 = '';

	// Results for all exercises
	let showResults = false;
	let markingResults = {};
	
	// Loading state
	let loadingAnswers = false;

	function openLightbox(imageSrc: string) {
		lightboxImage = imageSrc;
		lightboxOpen = true;
	}

	function closeLightbox() {
		lightboxOpen = false;
		lightboxImage = '';
	}

	function checkAllAnswers() {
		loadingAnswers = true;
		showResults = false;
		
		setTimeout(() => {
			// Correct answers for sentence completion questions (case-insensitive)
			const correctAnswers = {
				q15: ['business', 'business center', 'business centre'],
				q16: ['reception', 'front desk', 'reception desk'],
				q17: ['conference', 'conference room', 'meeting room'],
				q18: ['parking', 'car park', 'parking lot'],
				q19: ['wifi', 'wi-fi', 'internet', 'wireless'],
				q20: ['restaurant', 'dining room', 'cafe'],
				q25: ['monday', 'monday morning'],
				q26: ['9am', '9:00', 'nine', '9 am', 'nine am'],
				q27: ['smith', 'mr smith', 'dr smith'],
				q28: ['library', 'main library', 'central library'],
				q29: ['student', 'student id', 'student card'],
				q30: ['level 3', 'third floor', 'floor 3']
			};

			const userAnswers = { q15, q16, q17, q18, q19, q20, q25, q26, q27, q28, q29, q30 };
			const results = {};
			let totalCorrect = 0;

			Object.entries(userAnswers).forEach(([key, answer]) => {
				const userAnswer = answer.toLowerCase().trim();
				const correct = correctAnswers[key].some(correctAnswer => 
					userAnswer === correctAnswer.toLowerCase()
				);
				
				results[key] = {
					userAnswer: answer,
					isCorrect: correct,
					correctAnswers: correctAnswers[key]
				};
				
				if (correct) totalCorrect++;
			});

			results.totalCorrect = totalCorrect;
			results.totalQuestions = 12;
			markingResults = results;
			showResults = true;
			loadingAnswers = false;
		}, 3000);
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
	<title>Skill Check 01 (iii) - Sentence Completion | InsideIELTS</title>
	<meta name="description" content="Practice IELTS Listening sentence completion questions with InsideIELTS Test Preparation Program" />
</svelte:head>

<div class="min-h-screen" style="background: linear-gradient(135deg, #0f4c75 0%, #3282b8 50%, #bbe1fa 100%);">
	<div class="container mx-auto px-6 md:px-20 py-12">
		<!-- Header Section -->
		<section class="text-center mb-12 max-w-5xl mx-auto">
			<div class="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-white/20">
				<div class="text-right mb-6">
					<a
						href="/IETPP#lesson-01"
						class="text-teal-600 dark:text-teal-400 hover:underline font-semibold"
					>
						← Back to Contents
					</a>
				</div>

				<div class="flex items-center justify-center gap-4 mb-6">
					<span class="text-4xl text-green-400">✓</span>
					<h1 class="text-4xl md:text-5xl font-bold text-white">Skill Check</h1>
					<span class="text-4xl text-green-400">✓</span>
				</div>

				<p class="text-xl text-white mb-8">
					<strong>Complete these Listening skill-check exercises then check your answers for feedback.</strong>
				</p>

				<div class="bg-blue-600/30 rounded-lg p-6 border border-blue-400/30">
					<p class="text-lg font-bold text-white mb-2">SC1(iii)</p>
					<h2 class="text-2xl font-bold text-white">LISTENING - Sentence completion</h2>
				</div>
			</div>
		</section>

		<!-- Exercise 1: Questions 15-20 -->
		<section class="max-w-5xl mx-auto mb-12">
			<div class="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-white/20">
				<h3 class="text-2xl font-bold text-white mb-6 underline">Sentence completion ex.1</h3>

				<!-- Audio Player -->
				<div class="text-center mb-8">
					<audio
						controls
						class="mx-auto bg-gray-600 rounded-lg p-4"
						style="background-color: #666;"
						src="/LESSONS/les01/01(iii)/15.1.2cut.mp3"
					>
						Your browser does not support the audio element.
					</audio>
					<p class="text-sm text-white mt-2"><strong>Q15 - 20 audio</strong></p>
				</div>

				<!-- Question Image -->
				<div class="text-center mb-8">
					<img
						src="/LESSONS/les01/01(iii)/SC_L-sentencecompletion1.png"
						alt="Listening sentence completion Q15-20"
						title="Click to enlarge"
						class="mx-auto max-w-full cursor-pointer rounded border border-gray-600 hover:border-white transition-all"
						on:click={() => openLightbox('/LESSONS/les01/01(iii)/SC_L-sentencecompletion1.png')}
					/>
				</div>
			</div>
		</section>

		<!-- Exercise 2: Questions 25-30 -->
		<section class="max-w-5xl mx-auto mb-12">
			<div class="bg-teal-600/30 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-teal-400/30">
				<h3 class="text-2xl font-bold text-white mb-6 underline">Sentence completion ex.2</h3>

				<!-- Audio Player -->
				<div class="text-center mb-8">
					<audio
						controls
						class="mx-auto bg-gray-600 rounded-lg p-4"
						style="background-color: #666;"
						src="/LESSONS/les01/01(iii)/9.2.3cut.mp3"
					>
						Your browser does not support the audio element.
					</audio>
					<p class="text-sm text-white mt-2"><strong>Q25 - 30 audio</strong></p>
				</div>

				<!-- Question Image -->
				<div class="text-center mb-8">
					<img
						src="/LESSONS/les01/01(iii)/SC_L-sentencecompletion2.png"
						alt="Listening sentence completion Q25-30"
						title="Click to enlarge"
						class="mx-auto max-w-full cursor-pointer rounded border border-gray-600 hover:border-white transition-all"
						on:click={() => openLightbox('/LESSONS/les01/01(iii)/SC_L-sentencecompletion2.png')}
					/>
				</div>
			</div>
		</section>

		<!-- Answer Section -->
		<section class="max-w-5xl mx-auto mb-12">
			<div class="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-white/20">
				<h3 class="text-2xl font-bold text-white text-center mb-8 underline">ANSWERS</h3>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					<!-- Questions 15-20 -->
					<div class="space-y-4">
						<h4 class="text-lg font-semibold text-white text-center mb-4">Questions 15-20</h4>
						
						<div class="space-y-3">
							<div class="flex items-center gap-3">
								<label for="q15" class="text-white font-medium w-8">15.</label>
								<input
									type="text"
									id="q15"
									bind:value={q15}
									placeholder="Enter your answer"
									class="flex-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-teal-400 focus:outline-none"
								/>
							</div>
							
							<div class="flex items-center gap-3">
								<label for="q16" class="text-white font-medium w-8">16.</label>
								<input
									type="text"
									id="q16"
									bind:value={q16}
									placeholder="Enter your answer"
									class="flex-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-teal-400 focus:outline-none"
								/>
							</div>
							
							<div class="flex items-center gap-3">
								<label for="q17" class="text-white font-medium w-8">17.</label>
								<input
									type="text"
									id="q17"
									bind:value={q17}
									placeholder="Enter your answer"
									class="flex-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-teal-400 focus:outline-none"
								/>
							</div>
							
							<div class="flex items-center gap-3">
								<label for="q18" class="text-white font-medium w-8">18.</label>
								<input
									type="text"
									id="q18"
									bind:value={q18}
									placeholder="Enter your answer"
									class="flex-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-teal-400 focus:outline-none"
								/>
							</div>
							
							<div class="flex items-center gap-3">
								<label for="q19" class="text-white font-medium w-8">19.</label>
								<input
									type="text"
									id="q19"
									bind:value={q19}
									placeholder="Enter your answer"
									class="flex-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-teal-400 focus:outline-none"
								/>
							</div>
							
							<div class="flex items-center gap-3">
								<label for="q20" class="text-white font-medium w-8">20.</label>
								<input
									type="text"
									id="q20"
									bind:value={q20}
									placeholder="Enter your answer"
									class="flex-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-teal-400 focus:outline-none border-b-2 border-b-black"
								/>
							</div>
						</div>
					</div>

					<!-- Questions 25-30 -->
					<div class="space-y-4">
						<h4 class="text-lg font-semibold text-white text-center mb-4">Questions 25-30</h4>
						
						<div class="space-y-3">
							<div class="flex items-center gap-3">
								<label for="q25" class="text-white font-medium w-8">25.</label>
								<input
									type="text"
									id="q25"
									bind:value={q25}
									placeholder="Enter your answer"
									class="flex-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-teal-400 focus:outline-none"
								/>
							</div>
							
							<div class="flex items-center gap-3">
								<label for="q26" class="text-white font-medium w-8">26.</label>
								<input
									type="text"
									id="q26"
									bind:value={q26}
									placeholder="Enter your answer"
									class="flex-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-teal-400 focus:outline-none"
								/>
							</div>
							
							<div class="flex items-center gap-3">
								<label for="q27" class="text-white font-medium w-8">27.</label>
								<input
									type="text"
									id="q27"
									bind:value={q27}
									placeholder="Enter your answer"
									class="flex-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-teal-400 focus:outline-none"
								/>
							</div>
							
							<div class="flex items-center gap-3">
								<label for="q28" class="text-white font-medium w-8">28.</label>
								<input
									type="text"
									id="q28"
									bind:value={q28}
									placeholder="Enter your answer"
									class="flex-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-teal-400 focus:outline-none"
								/>
							</div>
							
							<div class="flex items-center gap-3">
								<label for="q29" class="text-white font-medium w-8">29.</label>
								<input
									type="text"
									id="q29"
									bind:value={q29}
									placeholder="Enter your answer"
									class="flex-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-teal-400 focus:outline-none"
								/>
							</div>
							
							<div class="flex items-center gap-3">
								<label for="q30" class="text-white font-medium w-8">30.</label>
								<input
									type="text"
									id="q30"
									bind:value={q30}
									placeholder="Enter your answer"
									class="flex-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-teal-400 focus:outline-none border-b-2 border-b-black"
								/>
							</div>
						</div>
					</div>
				</div>

				<!-- Check Answers Button -->
				<div class="text-center mt-8">
					<button
						on:click={checkAllAnswers}
						disabled={loadingAnswers}
						class="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition-colors border-2 border-white"
					>
						{#if loadingAnswers}
							<span class="flex items-center gap-2">
								<span class="animate-spin">⏳</span>
								Checking Answers...
							</span>
						{:else}
							CHECK ANSWERS
						{/if}
					</button>
				</div>

				<!-- Results Section -->
				{#if showResults}
					<div class="mt-8 bg-gray-800/50 rounded-lg p-6 border border-gray-600">
						<h4 class="text-xl font-bold text-white text-center mb-4">
							Your Results: {markingResults.totalCorrect}/{markingResults.totalQuestions}
						</h4>
						
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
							<!-- Results for Questions 15-20 -->
							<div>
								<h5 class="font-semibold text-white mb-3 text-center">Questions 15-20</h5>
								<div class="space-y-2">
									{#each ['q15', 'q16', 'q17', 'q18', 'q19', 'q20'] as questionKey}
										<div class="flex items-center justify-between bg-gray-700/50 rounded p-3">
											<div class="flex-1">
												<div class="font-medium text-white">
													{questionKey.toUpperCase()}: "{markingResults[questionKey]?.userAnswer || '(blank)'}"
												</div>
												<div class="text-xs text-gray-400 mt-1">
													Correct: {markingResults[questionKey]?.correctAnswers?.join(' / ')}
												</div>
											</div>
											<div class="ml-3">
												{#if markingResults[questionKey]?.isCorrect}
													<span class="text-green-400 text-xl">✓</span>
												{:else}
													<span class="text-red-400 text-xl">✗</span>
												{/if}
											</div>
										</div>
									{/each}
								</div>
							</div>

							<!-- Results for Questions 25-30 -->
							<div>
								<h5 class="font-semibold text-white mb-3 text-center">Questions 25-30</h5>
								<div class="space-y-2">
									{#each ['q25', 'q26', 'q27', 'q28', 'q29', 'q30'] as questionKey}
										<div class="flex items-center justify-between bg-gray-700/50 rounded p-3">
											<div class="flex-1">
												<div class="font-medium text-white">
													{questionKey.toUpperCase()}: "{markingResults[questionKey]?.userAnswer || '(blank)'}"
												</div>
												<div class="text-xs text-gray-400 mt-1">
													Correct: {markingResults[questionKey]?.correctAnswers?.join(' / ')}
												</div>
											</div>
											<div class="ml-3">
												{#if markingResults[questionKey]?.isCorrect}
													<span class="text-green-400 text-xl">✓</span>
												{:else}
													<span class="text-red-400 text-xl">✗</span>
												{/if}
											</div>
										</div>
									{/each}
								</div>
							</div>
						</div>
					</div>
				{/if}
			</div>
		</section>

		<!-- End of Lesson -->
		<section class="text-center py-8">
			<p class="text-white mb-12">End of Skill Check 01 (iii)</p>
			<a
				href="/IETPP#lesson-01"
				data-sveltekit-reload
				class="inline-flex items-center text-teal-600 dark:text-teal-400 hover:underline font-semibold"
			>
				← Back to Course Contents
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