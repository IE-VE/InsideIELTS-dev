<script lang="ts">
	import { tracking } from '$lib/utils/analytics';
	import {
		Button,
		Heading,
		P,
		List,
		Li
	} from 'flowbite-svelte';
	import {
		ArrowRight,
		Check,
		Star,
		Headphones
	} from 'lucide-svelte';
	import Card from '$lib/components/Card.svelte';
	import Lightbox from '$lib/components/Lightbox.svelte';
	import { onMount } from 'svelte';

	let currentQuestionIndex = $state(0);
	let isPlaying = $state(false);
	let currentTime = $state(0);
	let duration = $state(0);
	let audioElement: HTMLAudioElement;
	let showAnswers = $state(false);

	function handleStartTest() {
		tracking.startTest();
	}

	const questionTypes = [
		{
			title: 'Missing Information',
			description: 'Fill in the gaps with the correct information you hear',
			icon: '📝',
			image: '/listening-images/ielts-listening-missing-information.png'
		},
		{
			title: 'Diagram Labeling',
			description: 'Label parts of a diagram based on the audio',
			icon: '🗺️',
			image: '/listening-images/ielts-listening-diagram-labeling.png'
		},
		{
			title: 'Matching Information',
			description: 'Match speakers to statements or opinions',
			icon: '🔗',
			image: '/listening-images/ielts-listening-matching-information.png'
		},
		{
			title: 'Multiple Choice',
			description: 'Choose the correct answer from multiple options',
			icon: '✅',
			image: '/listening-images/ielts-listening-multiple-choice.png'
		},
		{
			title: 'Sentence Completion',
			description: 'Complete sentences with words from the audio',
			icon: '📋',
			image: '/listening-images/ielts-listening-sentence-completion.png'
		},
		{
			title: 'Short Answer Questions',
			description: 'Answer questions with a few words or numbers',
			icon: '❓',
			image: '/listening-images/ielts-listening-short-answer.png'
		}
	];

	const testSections = [
		{
			section: 'Section 1',
			description: 'Conversation in everyday social context',
			questions: '1-10',
			speakers: '2 speakers'
		},
		{
			section: 'Section 2',
			description: 'Monologue in everyday social context',
			questions: '11-20',
			speakers: '1 speaker'
		},
		{
			section: 'Section 3',
			description: 'Conversation in educational/training context',
			questions: '21-30',
			speakers: '2-4 speakers'
		},
		{
			section: 'Section 4',
			description: 'Monologue on academic subject',
			questions: '31-40',
			speakers: '1 speaker'
		}
	];

	function togglePlayPause() {
		if (!audioElement) return;

		if (isPlaying) {
			audioElement.pause();
		} else {
			audioElement.play();
		}
		isPlaying = !isPlaying;
	}

	function updateTime() {
		if (audioElement) {
			currentTime = audioElement.currentTime;
			duration = audioElement.duration || 0;
		}
	}

	function formatTime(seconds: number): string {
		const mins = Math.floor(seconds / 60);
		const secs = Math.floor(seconds % 60);
		return `${mins}:${secs.toString().padStart(2, '0')}`;
	}

	function nextQuestion() {
		if (currentQuestionIndex < sampleQuestions.length - 1) {
			currentQuestionIndex++;
		}
	}

	function prevQuestion() {
		if (currentQuestionIndex > 0) {
			currentQuestionIndex--;
		}
	}

	onMount(() => {
		if (audioElement) {
			audioElement.addEventListener('timeupdate', updateTime);
			audioElement.addEventListener('loadedmetadata', updateTime);
			audioElement.addEventListener('ended', () => {
				isPlaying = false;
			});
		}
	});
</script>

<svelte:head>
	<title>IELTS Listening Practice - InsideIELTS</title>
	<meta name="description" content="Practice IELTS Listening with our comprehensive test materials. Improve your listening skills with authentic test questions and detailed feedback." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 py-8 dark:from-gray-900 dark:to-gray-800">
	<div class="container mx-auto max-w-6xl px-6 py-8">
		<!-- Header Section -->
		<div class="text-center mb-12">
			<h1 class="text-4xl font-bold text-gray-300 mb-4 tracking-wide underline decoration-8 decoration-orange-600/80 underline-offset-3">
				IELTS LISTENING
			</h1>
			</div>

		<!-- Hero Section -->
		<section
						class="relative bg-gradient-to-br from-teal-100 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 my-16 rounded-xl border border-orange-600/80"
		>
						<div class="absolute inset-0 bg-gradient-to-tr from-teal-200/20 to-transparent rounded-xl"></div>
						<div class="relative max-w-6xl mx-auto px-6 lg:px-12 py-8 md:py-12">
										<h1 class="mb-8 text-left text-3xl md:text-4xl lg:text-5xl font-bold text-white">
														Begin your <span class="text-teal-400"
																		>IE STUDY JOURNEY</span> today...
										</h1>
										<div class="flex flex-col items-center gap-8 md:flex-row md:gap-12 lg:gap-16">
														<div class="mb-10 w-full text-center md:mb-0 md:w-3/5 md:text-left">

																		<p class="mt-4 text-lg md:text-xl">                                                        At <b>InsideIELTS</b> we provide tailormade study programs designed to help you achieve your IELTS score as quickly, easily and efficiently as possible.
																		</p>
																		<p class="mt-6 text-left text-xl">                                                          <strong>Our unique Test Preparation Program offers : </strong>
																		</p>

																		<List tag="ul" class="mt-3">
																						<Li icon class="mb-1">
																										<Check class="mr-2 h-5 w-5 text-teal-400" />                                                             Cutting-edge language analysis technology
																						</Li>
																						<Li icon class="mb-1">
																										<Check class="mr-2 h-5 w-5 text-teal-400" />                                                             Inside-knowledge of official IELTS assessment procedures 
																						</Li>
																						<Li icon>
																										<Check class="mr-2 h-5 w-5 text-teal-400" />
																										Real support from real IELTS examiners
																						</Li>
																																								</List>

																		<p class="mt-4 text-lg md:text-xl">Target your specific areas of weakness and achieve your IELTS goals faster — with smarter, precision-focused learning designed to get results.                                              </p>
																		<div
																						class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start"
																		>
																						<Button
																										href="/IETPP"
																										onclick={handleStartTest}
																										color="primary"
																										class="shadow-lg font-bold border border-white"
																										size="lg"
																						>
																										START NOW
																										<ArrowRight class="ml-2 h-5 w-5" />
																						</Button>

																						<div class="flex items-center">
																										<svg
																														class="mr-1 h-4 w-4 text-teal-600"
																														fill="none"
																														viewBox="0 0 24 24"
																														stroke="currentColor"
																										>
																														<path
																																		stroke-linecap="round"
																																		stroke-linejoin="round"
																																		stroke-width="2"
																																		d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"
																														/>
																										</svg>
																										<P size="sm">100% private - no account needed</P>
																						</div>
																		</div>
														</div>

														<div class="w-full md:w-2/5">
																		<div class="relative mx-auto max-w-sm">
																						<div
																										class="absolute inset-0 rotate-3 transform rounded-lg bg-orange-500"
																						></div>
																						<Card class="relative shadow-lg">
																										<div class="mb-6 text-center">
																														<div
																																		class="mt-3 mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-orange-800"
																														>
																																<Headphones class="h-8 w-8 text-orange-300" />
																														</div>
																														<Heading tag="h4">IELTS Listening Test</Heading>
																														<P class="text-center">Free assessment in minutes</P>
																										</div>
																										<List tag="ul" class="mb-6 space-y-3">
																														<Li icon>
																																		<Star class="mx-3 h-4 w-4 text-orange-300 fill-orange-600" />
																																		Complete 1 Listening Test section
																														</Li>
																														<Li icon>
																																		<Star class="mx-3 h-4 w-4 text-orange-300 fill-orange-600" />
																																		Get your score instantly
																														</Li>
																														<Li icon>
																																		<Star class="mx-3 h-4 w-4 text-orange-300 fill-orange-600" />
																																		Receive personalised feedback
																														</Li>
																										</List>
																										<Button href="/listening/quicktest" onclick={handleStartTest} color="orange" class="w-full bg-orange-500 hover:bg-orange-600">
																														Start Free Test
																										</Button>
																						</Card>
																		</div>
														</div>
										</div>
										<h1 class="mt-10 text-right text-3xl md:text-4xl lg:text-5xl font-bold text-white">
														..to <span class="text-teal-400"
																		>achieve the dreams</span> of your future.
										</h1>
						</div>
		</section>

		<!-- Test Overview -->
		<div class="mb-12">
			<div class="bg-primary-800/10 border-2 border-orange-500/70 border-t-12 border-t-orange-500/70 rounded-lg p-8 shadow-lg">
				<h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
					Format
				</h2>
				<p class="text-left mb-4 text-xl">You have 30 minutes to listen to the recording and write your answers directly on the test
					booklet; then a further 10 minutes at the end of the test to check and transfer your answers onto the answer sheet provided.
				</p>
				<div class="grid md:grid-cols-3 gap-6 text-center">
					<div>
						<div class="text-3xl font-bold text-primary-600 dark:text-primary-400">40 min</div>
						<div class="text-sm text-gray-600 dark:text-gray-300">Total Duration</div>
					</div>
					<div>
						<div class="text-3xl font-bold text-primary-600 dark:text-primary-400">4</div>
						<div class="text-sm text-gray-600 dark:text-gray-300">Sections</div>
					</div>
					<div>
						<div class="text-3xl font-bold text-primary-600 dark:text-primary-400">40</div>
						<div class="text-sm text-gray-600 dark:text-gray-300">Questions</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Assessment Criteria -->
		<div class="mb-12">
			<div class="bg-primary-800/10 border-2 border-orange-500/70 border-t-12 border-t-orange-500/70 rounded-lg p-8 shadow-lg">
				<h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
					Assessment Criteria
				</h2>
				<p class="text-left mb-4 text-xl">The <b>Listening Test</b> is scored using a system that may slightly vary with 
					each <b>IELTS</b> test. Band cut-offs are set after global results are analysed. Approximate scores are:
				</p>
				<div class="grid md:grid-cols-2 gap-8">
					<div>
						<h3 class="font-semibold text-gray-900 dark:text-white mb-3">Band Score Targets</h3>
						<div class="space-y-2 text-sm">
							<div class="flex justify-between">
								<span class="text-gray-600 dark:text-gray-300">Band 9:</span>
								<span class="font-medium text-gray-900 dark:text-white">39-40 correct</span>
							</div>
							<div class="flex justify-between">
								<span class="text-gray-600 dark:text-gray-300">Band 8:</span>
								<span class="font-medium text-gray-900 dark:text-white">36-38 correct</span>
							</div>
							<div class="flex justify-between">
								<span class="text-gray-600 dark:text-gray-300">Band 7:</span>
								<span class="font-medium text-gray-900 dark:text-white">30-35 correct</span>
							</div>
							<div class="flex justify-between">
								<span class="text-gray-600 dark:text-gray-300">Band 6:</span>
								<span class="font-medium text-gray-900 dark:text-white">23-29 correct</span>
							</div>
						</div>
					</div>
					<div>
						<h3 class="font-semibold text-gray-900 dark:text-white mb-3">Key Skills Tested</h3>
						<ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
							<li>• Understanding main ideas and specific details</li>
							<li>• Following conversations and monologues</li>
							<li>• Identifying speaker attitudes and opinions</li>
							<li>• Recognising factual information</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<!-- Question Examples Carousel -->
		<div class="mb-12">
			<div class="bg-primary-800/10 border-2 border-orange-500/70 border-t-12 border-t-orange-500/70 rounded-lg p-8 shadow-lg">
				<h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center flex items-center justify-center">
					<!-- <span class="mr-3 text-3xl">🎧</span> -->
					Question Types
				</h2>
				<p class="text-left mb-4 text-xl">There are <b>6</b> main types of question and the questions increase in difficulty as the test progresses. All                 questions are worth <b>1 mark</b>. The questions will usually be formatted in one of the following ways:</p>
				<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{#each questionTypes as type}
						<div class="text-center">
							<div class="text-2xl mb-3">{type.icon}</div>
							<h3 class="font-semibold text-gray-900 dark:text-white mb-2">{type.title}</h3>
							<p class="text-sm text-gray-600 dark:text-gray-300 mb-3">{type.description}</p>
							<div class="mt-4">
								<Lightbox 
									src={type.image} 
									alt="{type.title} example"
									className="w-full h-auto max-h-48 object-contain mx-auto rounded-lg border border-gray-200 dark:border-gray-700"
								/>
							</div>
						</div>
					{/each}
				</div>
				<p class="mt-6 mb-2 text-xl">It's very important that you accurately follow the instructions for each set of questions.
					If the format of your answer differs from instructed, even if the correct information is included, your answer will be marked <u>WRONG</u>.</p>
			</div>
		</div>

			<!-- Call to Action -->
		<div class="text-center">
			<div class="bg-gray-900 border-2 border-orange-500 border-t-12 border-t-orange-500 rounded-lg p-8 shadow-lg">
				<h2 class="text-2xl font-semibold text-white mb-6 text-center">
					Ready to Test Your Listening Skills?
				</h2>
				<p class="text-gray-300 mb-6 text-xl">
					Take our free 8-minute Listening assessment and get instant feedback on your performance.
				</p>
				<a 
					href="/listening/quicktest"
					class="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-lg transition-colors"
				>
					Take Free Listening Test Now
				</a>
			</div>
		</div>
	</div>
</div>