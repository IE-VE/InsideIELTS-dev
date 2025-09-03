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
	<title>IETPP - Lesson 01: Introduction to the Listening Test | InsideIELTS</title>
	<meta
		name="description"
		content="Learn IELTS Listening test format, question types, and practice with authentic examples. Master multiple choice, short answer, and sentence completion questions."
	/>
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
	<!-- Header Section -->
	<header class="bg-gray-800 border-b border-gray-700">
		<div class="container mx-auto px-6 py-6">
			<div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
				<div class="text-center lg:text-left">
					<div class="text-sm text-teal-400 font-medium mb-2">LESSON CODE: IE2401_01</div>
					<h1 class="text-3xl font-bold text-white mb-2">Introduction to the Listening Test</h1>
					<p class="text-gray-400 italic">(30 mins)</p>
				</div>
				<a
					href="/IETPP"
					class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded transition-colors text-center"
				>
					← Back to Contents
				</a>
			</div>
		</div>
	</header>

	<main class="container mx-auto px-6 py-8">
		<!-- Lesson Content Overview -->
		<section class="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700 mb-8">
			<h2 class="text-lg font-semibold mb-4 text-white">Lesson Content:</h2>
			<ul class="list-disc list-inside space-y-2 text-white">
				<li>Listening Test Format and Question types</li>
				<li>Example Listening Test questions</li>
				<li>Listening Test question practice</li>
			</ul>
		</section>

		<!-- Section 1: Listening Test Format and Question Types -->
		<section class="bg-teal-900/30 rounded-lg p-8 shadow-sm border border-teal-700 mb-8">
			<h2 class="text-2xl font-bold text-center text-white mb-8">
				Listening Test Format and Question types
			</h2>

			<div class="max-w-4xl mx-auto">
				<p class="text-white mb-6">
					The Listening Test is the first test that you will complete on test day. The test lasts
					for <strong>40 minutes</strong>. You have 30 minutes to listen to the recording and write
					your answers directly on the test booklet, and then a further 10 minutes at the end of the
					test to transfer your answers onto the answer sheet provided.
				</p>

				<div class="flex justify-center mb-6">
					<a
						href="https://insideielts.oppyo.com/video/embed/ur9tr7bgfl"
						target="_blank"
						title="InsideIELTS virtual examiner listening test preparation video"
						class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
					>
						Virtual Examiner Video
					</a>
				</div>

				<p class="text-white mb-6">
					The listening test is made up of <strong>40 questions</strong> in <strong>four sections</strong>:
				</p>

				<ul class="list-disc list-inside space-y-2 text-white mb-8 ml-4">
					<li>Section 1 takes the form of a conversation between two people;</li>
					<li>Section 2 is a monologue based on social topics and situations;</li>
					<li>Section 3 of the listening test is a conversation between up to four people;</li>
					<li>Section 4 will be a monologue set in an educational context.</li>
				</ul>

				<div class="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-8">
					<p class="text-white mb-4">
						There are <strong>6</strong> main types of question and the questions increase in
						difficulty as the test progresses. All questions are worth <strong>1 mark</strong>.
					</p>

					<p class="text-white mb-4">
						The questions will usually be formatted in one of the following ways:
					</p>

					<div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
						<div class="text-white font-semibold">1) Missing information</div>
						<div class="text-white font-semibold">2) Diagram labeling</div>
						<div class="text-white font-semibold">3) Matching information</div>
						<div class="text-white font-semibold">4) Multiple choice</div>
						<div class="text-white font-semibold">5) Sentence completion</div>
						<div class="text-white font-semibold">6) Short answer question</div>
					</div>

					<p class="text-white">
						Below you can see examples of the different styles of question you will encounter in the
						Listening Test.
					</p>
				</div>

				<div class="bg-yellow-900/30 border border-yellow-700 rounded-lg p-6">
					<p class="text-white">
						It's <u>very important</u> that you accurately follow the instructions for each set of
						questions: if the format of your answer differs from instructed, even if the correct
						information is included, your answer will be marked <u>WRONG</u>.
					</p>
				</div>
			</div>
		</section>

		<!-- Section 2: Example Listening Questions -->
		<section class="bg-gray-700/50 rounded-lg p-8 shadow-sm border border-gray-600 mb-8">
			<h2 class="text-2xl font-bold text-center text-white mb-8">Example Listening Questions</h2>

			<div class="max-w-4xl mx-auto">
				<p class="text-white mb-8">Watch the 3 Listening question tutorial videos below:</p>

				<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div class="text-center">
						<h4 class="text-lg font-semibold text-white mb-3">1) Missing information</h4>
						<img
							src="/LESSONS/les01/01_L1-dem.png"
							alt="IELTS Listening Missing Information"
							class="w-full rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity mb-4"
							on:click={() => openLightbox('/LESSONS/les01/01_L1-dem.png')}
						/>
						<a
							href="https://insideielts.oppyo.com/video/embed/bbukky49j3"
							target="_blank"
							title="InsideIELTS virtual examiner listening test preparation video"
							class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
						>
							Watch VE vid
						</a>
					</div>

					<div class="text-center">
						<h4 class="text-lg font-semibold text-white mb-3">2) Diagram completion</h4>
						<img
							src="/LESSONS/les01/01_L2-dem.png"
							alt="IELTS Listening Diagram Completion"
							class="w-full rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity mb-4"
							on:click={() => openLightbox('/LESSONS/les01/01_L2-dem.png')}
						/>
						<a
							href="https://insideielts.oppyo.com/video/embed/tletdevf8z"
							target="_blank"
							title="InsideIELTS virtual examiner listening test preparation video"
							class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
						>
							Watch VE vid
						</a>
					</div>

					<div class="text-center">
						<h4 class="text-lg font-semibold text-white mb-3">3) Matching information</h4>
						<img
							src="/LESSONS/les01/01_L3-dem.png"
							alt="IELTS Listening Matching Information"
							class="w-full rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity mb-4"
							on:click={() => openLightbox('/LESSONS/les01/01_L3-dem.png')}
						/>
						<a
							href="https://insideielts.oppyo.com/video/embed/yapqthfd33"
							target="_blank"
							title="InsideIELTS virtual examiner listening test preparation video"
							class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
						>
							Watch VE vid
						</a>
					</div>
				</div>
			</div>
		</section>

		<!-- Section 3: Listening Question Practice -->
		<section class="bg-teal-900/30 rounded-lg p-8 shadow-sm border border-teal-700 mb-8">
			<h2 class="text-2xl font-bold text-center text-white mb-8">Listening question practice</h2>

			<div class="max-w-6xl mx-auto">
				<p class="text-white mb-4">
					<strong>TASK</strong>: Complete these three Listening question practice exercises. Enter
					your answers on the answer sheets provided before checking your answers in the video
					beneath.
				</p>
				<p class="text-center text-white font-bold mb-8">
					[Don't watch the answer video until you have completed the practice exercises!]
				</p>

				<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
					<!-- Exercise 1: Missing Information -->
					<div class="bg-gray-800 rounded-lg p-6 border border-gray-600">
						<h4 class="text-lg font-semibold text-white mb-4 text-center">
							1) Missing information
						</h4>
						<img
							src="/LESSONS/les01/01_L1-prac.png"
							alt="Listening missing information practice"
							class="w-full rounded border border-gray-500 mb-4 cursor-pointer"
							on:click={() => openLightbox('/LESSONS/les01/01_L1-prac.png')}
						/>

						<div class="text-center mb-4">
							<p class="text-white mb-2">Q17 - 20 audio</p>
							<audio
								controls
								class="w-full bg-gray-600 rounded"
								src="/LESSONS/les01/01_L1-prac.mp3"
							>
								Your browser does not support the audio element.
							</audio>
						</div>

						<div class="text-center">
							<p class="text-white mb-3 font-semibold">Answer Sheet</p>
							<div class="space-y-2">
								<input
									type="text"
									placeholder="Q17 - enter your answer"
									class="w-full px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 text-sm"
								/>
								<input
									type="text"
									placeholder="Q18"
									class="w-full px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 text-sm"
								/>
								<input
									type="text"
									placeholder="Q19"
									class="w-full px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 text-sm"
								/>
								<input
									type="text"
									placeholder="Q20"
									class="w-full px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 text-sm"
								/>
							</div>
						</div>
					</div>

					<!-- Exercise 2: Diagram Completion -->
					<div class="bg-gray-800 rounded-lg p-6 border border-gray-600">
						<h4 class="text-lg font-semibold text-white mb-4 text-center">2) Diagram completion</h4>
						<img
							src="/LESSONS/les01/01_L2-prac.png"
							alt="Listening diagram completion practice"
							class="w-full rounded border border-gray-500 mb-4 cursor-pointer"
							on:click={() => openLightbox('/LESSONS/les01/01_L2-prac.png')}
						/>

						<div class="text-center mb-4">
							<p class="text-white mb-2">Q16 - 20 audio</p>
							<audio
								controls
								class="w-full bg-gray-600 rounded"
								src="/LESSONS/les01/01_L2-prac.mp3"
							>
								Your browser does not support the audio element.
							</audio>
						</div>

						<div class="text-center">
							<p class="text-white mb-3 font-semibold">Answer Sheet</p>
							<div class="space-y-2">
								<input
									type="text"
									placeholder="Q16 - enter your answer"
									class="w-full px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 text-sm"
								/>
								<input
									type="text"
									placeholder="Q17"
									class="w-full px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 text-sm"
								/>
								<input
									type="text"
									placeholder="Q18"
									class="w-full px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 text-sm"
								/>
								<input
									type="text"
									placeholder="Q19"
									class="w-full px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 text-sm"
								/>
								<input
									type="text"
									placeholder="Q20"
									class="w-full px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 text-sm"
								/>
							</div>
						</div>
					</div>

					<!-- Exercise 3: Matching Information -->
					<div class="bg-gray-800 rounded-lg p-6 border border-gray-600">
						<h4 class="text-lg font-semibold text-white mb-4 text-center">
							3) Matching information
						</h4>
						<img
							src="/LESSONS/les01/01_L3-prac.png"
							alt="Listening matching information practice"
							class="w-full rounded border border-gray-500 mb-4 cursor-pointer"
							on:click={() => openLightbox('/LESSONS/les01/01_L3-prac.png')}
						/>

						<div class="text-center mb-4">
							<p class="text-white mb-2">Q27 - 30 audio</p>
							<audio
								controls
								class="w-full bg-gray-600 rounded"
								src="/LESSONS/les01/01_L3-prac.mp3"
							>
								Your browser does not support the audio element.
							</audio>
						</div>

						<div class="text-center">
							<p class="text-white mb-3 font-semibold">Answer Sheet</p>
							<div class="space-y-2">
								<input
									type="text"
									placeholder="Q27 - enter your answer"
									class="w-full px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 text-sm"
								/>
								<input
									type="text"
									placeholder="Q28"
									class="w-full px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 text-sm"
								/>
								<input
									type="text"
									placeholder="Q29"
									class="w-full px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 text-sm"
								/>
								<input
									type="text"
									placeholder="Q30"
									class="w-full px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 text-sm"
								/>
							</div>
						</div>
					</div>
				</div>

				<!-- Answer Video -->
				<div class="text-center">
					<h3 class="text-xl font-semibold text-white mb-4">Answers</h3>
					<a
						href="/LESSONS/les01/L01_answervid.mp4"
						target="_blank"
						title="InsideIELTS virtual examiner listening test answer video"
						class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
					>
						Virtual Examiner Video
					</a>
				</div>
			</div>
		</section>

		<!-- Skills Practice Links -->
		<section class="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700 mb-8">
			<h2 class="text-xl font-semibold text-white mb-6 text-center">Skills Practice</h2>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
				<a
					href="/IETPP/lesson-01/multiple-choice"
					class="block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded text-center transition-colors"
				>
					<div class="text-sm mb-1">01 (i)</div>
					<div>Multiple Choice</div>
					<div class="text-xs mt-1">(60 mins)</div>
				</a>
				<a
					href="/IETPP/lesson-01/short-answer"
					class="block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded text-center transition-colors"
				>
					<div class="text-sm mb-1">01 (ii)</div>
					<div>Short Answer</div>
					<div class="text-xs mt-1">(60 mins)</div>
				</a>
				<a
					href="/IETPP/lesson-01/sentence-completion"
					class="block bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded text-center transition-colors"
				>
					<div class="text-sm mb-1">01 (iii)</div>
					<div>Sentence Completion</div>
					<div class="text-xs mt-1">(40 mins)</div>
				</a>
			</div>
		</section>

		<!-- End of Lesson -->
		<section class="text-center py-8">
			<p class="text-white mb-4">End of Intro Lesson 01</p>
			<a
				href="/IETPP"
				class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded transition-colors"
			>
				← Back to Contents
			</a>
		</section>
	</main>
</div>

<!-- Lightbox Modal -->
{#if lightboxOpen}
	<div
		class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
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