<script lang="ts">
	import { onMount } from 'svelte';

	let lightboxOpen = false;
	let lightboxImage = '';

	// Form data
	let q11 = '', q12 = '', q13 = '', q14 = '', q15 = '';
	let q21 = '', q22 = '', q23 = '', q24 = '', q25 = '';

	function openLightbox(imageSrc: string) {
		lightboxImage = imageSrc;
		lightboxOpen = true;
	}

	function closeLightbox() {
		lightboxOpen = false;
		lightboxImage = '';
	}

	function handleSubmit(event: Event) {
		event.preventDefault();
		
		const answers = {
			skill_id: 'SC1(i)',
			exercise1: [q11, q12, q13, q14, q15],
			exercise2: [q21, q22, q23, q24, q25]
		};

		console.log('Submitted answers:', answers);
		alert('Answers submitted! (This is a demo - functionality to be implemented)');
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
	<title>IETPP - Lesson 01(i): Listening Multiple Choice Skill Check | InsideIELTS</title>
	<meta
		name="description"
		content="Complete IELTS Listening multiple choice skill check exercises with audio practice and instant feedback."
	/>
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
	<!-- Lesson Header -->
	<div class="max-w-5xl container mx-auto px-6 py-8">
		<div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
			<div class="text-center">
				<div class="text-xs text-left text-teal-600 dark:text-teal-400 mb-4">
					SKILL CHECK: SC1(i)
				</div>
				<h1 class="text-3xl font-bold text-white mb-2">
					LISTENING - Multiple Choice
				</h1>
				<p class="text-white italic">Skill Check</p>
			</div>

			<div class="text-right mt-6">
				<a
					href="/IETPP/lesson-01/lesson01-i"
					class="text-teal-600 dark:text-teal-400 hover:underline font-semibold"
				>
					← Back to Lesson
				</a>
			</div>
		</div>
	</div>

	<!-- Page Content -->
	<div style="max-width: 1200px;" class="mx-auto px-6 py-8">
		<!-- Skill Check Title -->
		<section class="bg-blue-600/20 rounded-lg p-8 shadow-sm border border-blue-600/50 mb-8">
			<div class="flex items-center justify-center gap-4 mb-8">
				<div class="text-4xl text-green-500">✓</div>
				<h2 class="text-3xl font-bold text-center text-white">SKILL CHECK</h2>
				<div class="text-4xl text-green-500">✓</div>
			</div>
			
			<p class="text-center text-white text-xl mb-8">
				<strong>Complete these Listening skill-check exercises then upload your answers for checking and feedback.</strong>
			</p>

			<!-- Exercise 1 -->
			<div class="bg-teal-600/20 rounded-lg p-8 border border-teal-600/50 mb-8">
				<div class="bg-blue-600 text-white px-4 py-2 rounded-lg text-center font-bold mb-6">
					SC1(i)
				</div>
				
				<h3 class="text-2xl font-bold text-center text-white mb-8">LISTENING - Multiple choice</h3>

				<div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
					<h4 class="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6 underline">Multiple choice ex.1</h4>

					<!-- Audio Player -->
					<div class="flex justify-center mb-4">
						<audio
							controls
							class="bg-gray-600 rounded-lg p-4"
							src="/LESSONS/les01/01(i)/SC_L-multiplechoice1.mp3"
						>
							Your browser does not support the audio element.
						</audio>
					</div>
					<div class="text-center mb-6">
						<small class="text-gray-600 dark:text-gray-400 font-bold">Q11 - 15 audio</small>
					</div>

					<!-- Question Image -->
					<div class="text-center mb-8">
						<img
							src="/LESSONS/les01/01(i)/SC_L-multiplechoice1.png"
							alt="Listening multiple choice questions 11-15"
							class="mx-auto rounded border border-gray-600 cursor-pointer max-w-full"
							on:click={() => openLightbox('/LESSONS/les01/01(i)/SC_L-multiplechoice1.png')}
						/>
						<p class="text-sm text-gray-600 dark:text-gray-400 mt-2">Click to enlarge</p>
					</div>

					<!-- Answer Inputs -->
					<div class="text-center">
						<h5 class="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4 underline">ANSWERS</h5>
						<div class="grid grid-cols-5 gap-4 max-w-lg mx-auto">
							<input 
								type="text" 
								bind:value={q11}
								placeholder="Q11"
								class="px-3 py-2 border border-gray-300 rounded bg-white text-gray-800 text-center"
							/>
							<input 
								type="text" 
								bind:value={q12}
								placeholder="Q12"
								class="px-3 py-2 border border-gray-300 rounded bg-white text-gray-800 text-center"
							/>
							<input 
								type="text" 
								bind:value={q13}
								placeholder="Q13"
								class="px-3 py-2 border border-gray-300 rounded bg-white text-gray-800 text-center"
							/>
							<input 
								type="text" 
								bind:value={q14}
								placeholder="Q14"
								class="px-3 py-2 border border-gray-300 rounded bg-white text-gray-800 text-center"
							/>
							<input 
								type="text" 
								bind:value={q15}
								placeholder="Q15"
								class="px-3 py-2 border border-gray-300 rounded bg-white text-gray-800 text-center"
							/>
						</div>
					</div>
				</div>

				<!-- Exercise 2 -->
				<div class="bg-teal-700/30 rounded-lg p-6 shadow-sm border border-teal-700/50">
					<h4 class="text-xl font-bold text-white mb-6 underline">Multiple choice ex.2</h4>

					<!-- Audio Player -->
					<div class="flex justify-center mb-4">
						<audio
							controls
							class="bg-gray-600 rounded-lg p-4"
							src="/LESSONS/les01/01(i)/SC_L-multiplechoice2.mp3"
						>
							Your browser does not support the audio element.
						</audio>
					</div>
					<div class="text-center mb-6">
						<small class="text-gray-300 font-bold">Q21 - 25 audio</small>
					</div>

					<!-- Question Image -->
					<div class="text-center mb-8">
						<img
							src="/LESSONS/les01/01(i)/SC_L-multiplechoice2.png"
							alt="Listening multiple choice questions 21-25"
							class="mx-auto rounded border border-gray-600 cursor-pointer max-w-full"
							on:click={() => openLightbox('/LESSONS/les01/01(i)/SC_L-multiplechoice2.png')}
						/>
						<p class="text-sm text-gray-300 mt-2">Click to enlarge</p>
					</div>

					<!-- Answer Inputs -->
					<div class="text-center">
						<div class="grid grid-cols-5 gap-4 max-w-lg mx-auto mb-6">
							<input 
								type="text" 
								bind:value={q21}
								placeholder="Q21"
								class="px-3 py-2 border border-gray-300 rounded bg-white text-gray-800 text-center"
							/>
							<input 
								type="text" 
								bind:value={q22}
								placeholder="Q22"
								class="px-3 py-2 border border-gray-300 rounded bg-white text-gray-800 text-center"
							/>
							<input 
								type="text" 
								bind:value={q23}
								placeholder="Q23"
								class="px-3 py-2 border border-gray-300 rounded bg-white text-gray-800 text-center"
							/>
							<input 
								type="text" 
								bind:value={q24}
								placeholder="Q24"
								class="px-3 py-2 border border-gray-300 rounded bg-white text-gray-800 text-center"
							/>
							<input 
								type="text" 
								bind:value={q25}
								placeholder="Q25"
								class="px-3 py-2 border border-gray-300 rounded bg-white text-gray-800 text-center border-b-2 border-black"
							/>
						</div>

						<!-- Submit Button -->
						<button 
							on:click={handleSubmit}
							class="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg"
						>
							UPLOAD ANSWERS
						</button>
					</div>
				</div>
			</div>
		</section>

		<!-- End of Lesson -->
		<section class="text-center py-8">
			<p class="text-white mb-4">End of Skill Check 01 (i)</p>
			<a
				href="/IETPP"
				class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded transition-colors"
			>
				← Back to Contents
			</a>
		</section>
	</div>
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