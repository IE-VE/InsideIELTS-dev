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
	<title>IETPP - Lesson 04: Introduction to the Speaking Test | InsideIELTS</title>
	<meta
		name="description"
		content="Learn IELTS Speaking test format, interview structure, assessment criteria, and watch example interviews with the Virtual Examiner."
	/>
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
	<!-- Lesson Header -->
	<div class="max-w-5xl container mx-auto px-6 pt-8">
		<div class="bg-gray-50 dark:bg-gray-800 rounded-lg px-6 py-2 mb-8">
			<div class="text-center">
				<div class="text-xs text-left text-teal-600 dark:text-teal-400">
					IE2401_04
				</div>
				<h1 class="text-3xl font-bold text-white my-7">
					Introduction to the Speaking Test
				</h1>
			</div>
			<!-- Header Nav -->
			<div class="mt-6 mb-8 text-lg">
				<ul class="list-disc list-inside space-y-2 text-white">
					<li>format and make-up</li>
					<li>assessment</li>
					<li>example questions & answers</li>
				</ul>
			</div>

			<div class="flex justify-between items-center">
				<a
					href="/IETPP/lesson-03"
					class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
					data-sveltekit-reload
				>
					← Prev
				</a>

				<a
					href="/IETPP#lesson-04"
					class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
					data-sveltekit-reload
				>
					Contents
				</a>

				<a
					href="/IETPP/lesson-04/lesson04P1"
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

	<section class="mb-12">
					<div class="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
									<h2 class="text-2xl text-center font-bold text-gray-800 dark:text-white mb-6">
													IELTS Speaking Test Format
									</h2>

									<div class="space-y-6">
													<div class="border-l-4 border-blue-500 pl-6">
																	<h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Test Duration</h3>
														<p class="text-gray-300 mb-6">
															The total duration of the interview will be <strong>13 - 14 minutes</strong>.
														</p>												
														<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-8 ml-4">
																		<li><strong>Part 1 -</strong> after a short introduction you will be asked <strong>8 short answer questions</strong> on two topics lasting <strong>4 - 5 minutes</strong></li>
																		<li><strong>Part 2 -</strong> the <strong>'long turn'</strong> : you are given <strong>1 minute</strong> to prepare and make some notes on a given topic before speaking for <strong>2 minutes</strong> uninterupted.</li>
															<li><strong>Part 3 -</strong> you will discuss <strong>6 questions</strong> related to the topic of your long turn response for the remaining	<strong>4 - 5 minutes</strong> of the interview.</li>
														</ul>
													</div>

													<div class="border-l-4 border-green-500 pl-6">
																	<h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Test Structure</h3>
														<p class="text-gray-300 mb-6">
															The Speaking test takes the form of a face-to-face interview with a qualified <strong>IELTS</strong> speaking examiner. The interview is split into <strong>three sections</strong> and follows a preset script which the examiner must adhere to.
														</p>
																</div>

													<div class="border-l-4 border-purple-500 pl-6">
																	<h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Time Management</h3>
																	<p class="text-gray-700 dark:text-gray-300">The examiner will take full control of all timings for the sections of the speaking test. You only need to make sure you extend the length of your responses until the examiner asks the next question.</p>
													</div>
									</div>
					</div>
	</section>

	<!-- Section 1: Speaking Test Format & Content -->
		<section class="bg-cyan-600/25 rounded-lg p-4 md:p-10 shadow-sm border border-blue-700 mb-8">
			<h2 class="text-2xl font-bold text-center text-white mb-8">
				Speaking Test make-up
			</h2>
			<div class="max-w-6xl mx-auto">

				<div class="bg-gray-800 rounded-lg p-6 md:p-10 text-lg border border-gray-700 mb-8">
					<p class="text-white mb-6">
						The Speaking Test is usually conducted before or after the Listening, Reading and Writing Test on test day, but
						it can be conducted up to one week after sitting the paper based tests.
					</p>

					<div class="flex justify-center mt-10 mb-10">
						<a
							href="https://insideielts.oppyo.com/video/embed/xnlqjz62dx"
							target="_blank"
							title="InsideIELTS virtual examiner speaking test preparation video"
							class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
						>
							Virtual Examiner Video
						</a>
					</div>

					<!-- Part 1 Section -->
					<div class="mb-12">
						<p class="text-white mb-8">
							Let's look at the three sections of the interview in more detail:
						</p>

						<div class="flex flex-col md:flex-row justify-between items-center bg-blue-900 rounded-lg p-4 mb-6 gap-4">
							<p class="text-white font-bold text-lg">
								PART 1 - intro & short answer questions (4-5 mins)
							</p>
							<a
								href="https://insideielts.oppyo.com/video/embed/pyq16syy6d"
								target="_blank"
								title="InsideIELTS virtual examiner speaking test preparation video"
								class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
							>Virtual Examiner Video					
							</a>
						</div>

						<p class="text-white mb-6">
							The examiner will begin the interview by reading out the date and test venue identification details for the benefit of the
							recording. (All <strong>IELTS</strong> interviews are recorded for the full duration of the time you are in the interview room).
						</p>

						<p class="text-white mb-6">
							The examiner will then read out your name and <strong>IELTS</strong> identification number followed by their own name and
							examiner identification number. You will then be asked to show your passport or national ID card for verification.
						</p>

						<p class="text-white mb-8">
							Before asking you two sets of general topic, short answer questions the examiner will begin by asking you about your home
							and where you live <u>or</u> about your study or work situation. The questions will be something like these:
						</p>

						<div class="flex justify-center mb-6">
							<img
								src="/speaking-images/ielts-part-1-speaking-intro.png"
								alt="IELTS Part 1 speaking intro"
								class="max-w-full md:max-w-2xl border-2 border-black rounded"
							/>
						</div>

						<p class="text-center text-white text-2xl my-6">OR</p>

						<div class="flex justify-center mb-8">
							<img
								src="/speaking-images/ielts-part-1-speaking-intro-b.png"
								alt="IELTS Part 1 speaking intro B"
								class="max-w-full md:max-w-2xl border-2 border-black rounded"
							/>
						</div>

						<p class="text-white mb-8">
							Following this the examiner will go straight into two sets of (four) general topic short answer questions. For example:
						</p>

						<div class="flex justify-center mb-6">
							<img
								src="/LESSONS/les04/P1_Q/P1-colours.png"
								alt="IELTS Part 1 speaking questions"
								class="max-w-full md:max-w-2xl border-2 border-black rounded"
							/>
						</div>

						<p class="text-center text-white text-2xl my-6">AND</p>

						<div class="flex justify-center mb-8">
							<img
								src="/LESSONS/les04/P1_Q/P1-cooking.png"
								alt="IELTS Part 1 speaking questions set 2"
								class="max-w-full md:max-w-2xl border-2 border-black rounded"
							/>
						</div>

						<p class="text-white mb-6">
							The total duration for <strong>Part 1</strong> should be about <strong>four and a half to five minutes</strong>.
						</p>

						<p class="text-white mb-8">
							<u>Part 1 is not a discussion</u>, the examiner can use the "<em>Why/Why not?</em>" prompts if he/she feels you are not extending your answer
							sufficiently, but nothing more than that.
						</p>
					</div>

					<hr class="border-gray-600 mb-8" />

					<!-- Part 2 Section -->
					<div class="mb-12">
						<div class="flex flex-col md:flex-row justify-between items-center bg-blue-900 rounded-lg p-4 mb-6 gap-4">
							<p class="text-white font-bold text-lg">
								PART 2 - the long turn (3-4 mins)
							</p>
							<a
								href="https://insideielts.oppyo.com/video/embed/c9ymihgvqs"
								target="_blank"
								title="InsideIELTS virtual examiner speaking test preparation video"
								class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
								>Virtual Examiner Video		
							</a>
						</div>

						<p class="text-white mb-6">
							Upon completion of Part 1 the examiner will say, "<em>Now i'm going to give you a topic and i'd like you to talk
							about it for 1 to 2 minutes.</em>" You will then be given a topic card, pencil and a piece of
							blank paper and allowed <strong>1 minute</strong> to make some notes on the topic.
						</p>

						<p class="text-white mb-6">
							After your 1 minute preparation time the examiner will say, "<em>Remember, you have 1 to 2 minutes for this, so don't worry if i
							stop you, can you start speaking now please.</em>"
						</p>

						<p class="text-white mb-8">
							The examiner will not speak again until your <strong>2 minutes</strong> time is up. (Unless you stop speaking before 1:40s, in which case the
							examiner will prompt you to say more.)
						</p>

						<p class="text-white mb-6">Below is an example of a <strong>Part 2</strong> topic card:</p>

						<div class="flex justify-center mb-8">
							<img
								src="/speaking-images/ielts-part-2-speaking.png"
								alt="IELTS Part 2 speaking topic card"
								class="max-w-full md:max-w-2xl border-2 border-black rounded"
							/>
						</div>

						<p class="text-white mb-8">
							After your two minutes speaking time the examiner will ask you to stop speaking and will ask you a short rounding-off
							question before leading into Part 3. (You should only give a brief one or two sentence reply to this question).
						</p>
					</div>

					<hr class="border-gray-600 mb-8" />

					<!-- Part 3 Section -->
					<div class="mb-8">
						<div class="flex flex-col md:flex-row justify-between items-center bg-blue-900 rounded-lg p-4 mb-6 gap-4">
							<p class="text-white font-bold text-lg">
								PART 3 - discussion (4-5 mins)
							</p>
							<a
								href="https://insideielts.oppyo.com/video/embed/fa82w8g28j"
								target="_blank"
								title="InsideIELTS virtual examiner speaking test preparation video"
								class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
								>Virtual Examiner Video		
							</a>
						</div>

						<p class="text-white mb-6">
							The final section of the speaking test is a <strong>4 to 5 minute</strong> discussion based on topics related to your
							Part 2 long turn.
						</p>

						<p class="text-white mb-6">
							In <strong>Part 3</strong> the examiner has a choice of three sets of three questions, from which he/she will select two to base the
							discussion around. In this final part of the test the examiner is able to discuss the questions in a more natural manner and will
							ask you a few additional follow-up questions based on your answers to previous questions.
						</p>

						<p class="text-white mb-6">
							In this part of the test the examiner is testing your ability to respond to questions in a variety of different ways and is trying
							to elicit specified forms of language in response to the questions.
						</p>

						<p class="text-white mb-6">The questions are structured in the following way:</p>

						<div class="flex justify-center my-8">
							<img
								src="/speaking-images/ielts-part-3-speaking.png"
								alt="IELTS Part 3 speaking questions structure"
								class="max-w-full md:max-w-2xl border-2 border-black rounded"
							/>
						</div>

						<p class="text-white mb-6">
							After around <strong>four and a half minutes</strong> of discussion the examiner will thank you for your time and end the interview.
						</p>

						<div class="flex flex-col md:flex-row justify-between items-center bg-blue-900 rounded-lg p-4 mb-6 gap-4">
							<p class="text-white font-bold text-lg">
								The <strong>total duration</strong> of the interview will be <strong>13 - 14 minutes</strong>.
							</p>
							<a
								href="https://insideielts.oppyo.com/video/embed/1bmcb8wvkl"
								target="_blank"
								title="InsideIELTS virtual examiner speaking test preparation video"
								class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
									>Virtual Examiner Video		
								</a>
						</div>
					</div>

				</div>
			</div>
		</section>

		<!-- Section 2: Speaking Test Assessment -->
		<section class="bg-teal-600/25 rounded-lg p-4 md:p-8 shadow-sm border border-teal-600 mb-8">
			<h2 class="text-2xl font-bold text-center text-white mb-8">Speaking Test assessment</h2>

			<div class="max-w-6xl mx-auto">
				<div class="bg-gray-800 rounded-lg p-6 md:p-10 text-lg border border-gray-700 mb-8">
					<p class="text-white mb-6">
						During the <strong>Speaking Test</strong> interview the examiner is using a <strong>rubric</strong>
						very similar to the one shown below.
					</p>

					<div class="flex justify-center mt-10 mb-10">
						<a
							href="https://insideielts.oppyo.com/video/embed/j12k62ytwn"
							target="_blank"
							title="InsideIELTS virtual examiner speaking test assessment Intro video"
							class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
						>
							Virtual Examiner Video
						</a>
					</div>

					<p class="text-white mb-6">
						You can see the rubric is split into 4 columns. Each column represents one of the <strong>four speaking assessment criteria</strong>:
					</p>

					<ul class="list-disc list-inside space-y-3 text-white mb-8 ml-4">
						<li>FLUENCY & COHERENCE <strong>(FLC)</strong></li>
						<li>LEXICAL RESOURCE <strong>(LR)</strong></li>
						<li>GRAMMATICAL RANGE & ACCURACY <strong>(GRA)</strong></li>
						<li>PRONUNCIATION <strong>(PR)</strong></li>
					</ul>

					<div class="text-center mb-8">
						<h3 class="text-xl font-bold text-white mb-6">
							<u>IELTS Speaking Test Assessment Rubric (public version)</u>
						</h3>
						<div class="flex justify-center">
							<img
								src="/Speaking_rubric.png"
								alt="Official IELTS Speaking Test assessment rubric (public version)"
								class="max-w-full rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity"
								tabindex="0"
								role="button"
								onclick={() => openLightbox('/rubrics/Speaking_rubric.png')}
								onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? (e.preventDefault(), openLightbox('/rubrics/Speaking_rubric.png')) : null}
								title="CLICK to enlarge"
							/>
						</div>
					</div>

					<p class="text-white mb-6">
						Under each of these headings you will see a list of bullet-pointed descriptors which describe the parts of speech which must be
						demonstrated by the candidate in order to achieve the corresponding band score rating.
					</p>

					<p class="text-white mb-6">
						The <strong>IELTS</strong> speaking test examiner has all of these criteria in mind and, as the interview progresses, is looking for examples of each
						in order to be able to score your performance effectively.
					</p>

					<p class="text-white mb-6">
						To be awarded a particular band level rating you must be able to demonstrate <u><strong>all</strong></u> of the descriptors specified at the corresponding
						band level.
					</p>

					<p class="text-white mb-8">
						We'll cover each of the four speaking assessment criteria, their descriptors, and how they are applied to your spoken responses in Lessons <strong>04(i)</strong> - <strong>04(iv)</strong>.
					</p>

				</div>
			</div>
		</section>

		<!-- Section 3: Example Speaking Test -->
		<section class="bg-cyan-800/25 rounded-lg p-4 md:p-8 shadow-sm border border-cyan-600 mb-8">
			<h2 class="text-2xl font-bold text-center text-white mb-8">Example Speaking Test</h2>

			<div class="max-w-6xl mx-auto">
				<div class="bg-gray-800 rounded-lg p-6 md:p-10 text-lg border border-gray-700">
					
					<p class="text-white mb-12">
						Watch this Virtual Examiner Native Speaker interview to get a better idea of the format, parts, timings and question types you will
						face in the Speaking Test interview.
					</p>

					<div class="flex flex-col md:flex-row items-center justify-center gap-16 mb-12">
						<a
							href="https://insideielts.oppyo.com/video/embed/zarg3f9h4o"
							target="_blank"
							title="InsideIELTS VE interview L1"
							class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
								>Virtual Examiner Video		
							</a>
						<a
							href="/LESSONS/les04/NS_INTERVIEW1-Transcript.pdf"
							target="_blank"
							title="view/download transcript"
							class="text-teal-400 hover:text-teal-300 font-bold text-center text-lg"
						>
							Interview Transcript
						</a>
					</div>
					<p class="text-white font-bold text-center mb-8">
						Virtual Examiner Native Speaker Interview Level 1
					</p>

				</div>
			</div>
		</section>
		
		<!-- Footer Navigation -->
										<section class="text-center py-8">

														<div class="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
																		<div class="flex justify-between items-center">
																						<a
																										href="/IETPP#lesson-04"
																										class="text-teal-400 hover:underline font-semibold"
																										data-sveltekit-reload
																						>
																										← Back to Contents
																						</a>

																						<a
																										href="/IETPP/lesson-04/lesson04P1"
																										class="text-teal-400 hover:underline font-semibold"
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
			<div class="max-w-7xl max-h-full">
				<img src={lightboxImage} alt="Enlarged view" class="max-w-full max-h-full object-contain rounded-lg" />
			</div>
		</div>
	{/if}
</div>
