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
		Star
	} from 'lucide-svelte';
	import Card from '$lib/components/Card.svelte';
	import Lightbox from '$lib/components/Lightbox.svelte';

	function handleStartTest() {
		tracking.startTest();
	}

	const questionTypes = [
		{
			title: 'Matching Headings',
			description: 'Match headings to paragraphs or section',
			icon: '📋',
			image: '/reading-images/ielts-reading-headings.png'
		},
		{
			title: 'Matching Paragraph Information',
			description: 'Match information to specific paragraphs',
			icon: '🔗',
			image: '/reading-images/ielts-reading-matching.png'
		},
		{
			title: 'Matching Features',
			description: 'Match statements to people, theories, or events',
			icon: '🎯',
			image: '/reading-images/ielts-reading-features.png'
		},
		{
			title: 'Matching Sentence Endings',
			description: 'Complete sentences by choosing correct endings',
			icon: '🔚',
			image: '/reading-images/ielts-reading-endings.png'
		},
		{
			title: 'True False Not Given or Yes No Not Given',
			description: 'Identify if statements are true, false, or not given',
			icon: '🔍',
			image: '/reading-images/ielts-reading-true-false.png'
		},
		{
			title: 'Multiple Choice',
			description: 'Choose the correct answer from several options',
			icon: '✅',
			image: '/reading-images/ielts-reading-multiple-choice.png'
		},
		{
			title: 'List of Options',
			description: 'Select multiple correct answers from a list',
			icon: '📝',
			image: '/reading-images/ielts-reading-list-options.png'
		},
		{
			title: 'Choose a Title',
			description: 'Select the most appropriate title for the passage',
			icon: '🏷️',
			image: '/reading-images/ielts-reading-title.png'
		},
		{
			title: 'Short Answers',
			description: 'Answer questions with words from the text',
			icon: '❓',
			image: '/reading-images/ielts-reading-short-answer.png'
		},
		{
			title: 'Sentence/Summary Completion',
			description: 'Complete sentences or summaries with words from the text',
			icon: '📄',
			image: '/reading-images/ielts-reading-completion.png'
		},
		{
			title: 'Table Completion',
			description: 'Fill in missing information in tables',
			icon: '📊',
			image: '/reading-images/ielts-reading-table.png'
		},
		{
			title: 'Flow Chart/Diagram Completion',
			description: 'Complete flow charts or diagrams with information from the text',
			icon: '🗺️',
			image: '/reading-images/ielts-reading-diagram.png'
		}
	];

	const testSections = [
		{
			section: 'Passage 1',
			description: 'General interest topic with everyday language',
			questions: '13 or 14 questions',
			difficulty: 'Easier'
		},
		{
			section: 'Passage 2',
			description: 'Work-related or general academic topic',
			questions: '13 or 14 questions',
			difficulty: 'Medium'
		},
		{
			section: 'Passage 3',
			description: 'Academic topic with complex language',
			questions: '13 or 14 questions',
			difficulty: 'Harder'
		}
	];
</script>

<svelte:head>
	<title>IELTS Reading Practice - InsideIELTS</title>
	<meta name="description" content="Practice IELTS Reading with our comprehensive test materials. Improve your reading skills with authentic test passages and detailed feedback." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 py-8 dark:from-gray-900 dark:to-gray-800">
	<div class="container mx-auto max-w-6xl px-6 py-8">
		<!-- Header Section -->
		<div class="text-center mb-12">
			<h1 class="text-4xl font-bold text-gray-300 mb-4 tracking-wide underline decoration-8 decoration-purple-600/60 underline-offset-3">
				IELTS READING
			</h1>			
		</div>

		<!-- Hero Section -->
		<section
						class="relative bg-gradient-to-br from-teal-100 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 my-16 rounded-xl border border-purple-600/60"
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
																										href="/IETPP/signup"
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
																																		d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
																														/>
																										</svg>
																										<P size="sm">100% private - no account needed</P>
																						</div>
																		</div>
														</div>

														<div class="w-full md:w-2/5">
																		<div class="relative mx-auto max-w-sm">
																						<div
																										class="absolute inset-0 rotate-3 transform rounded-lg bg-purple-500"
																						></div>
																						<Card class="relative shadow-lg">
																										<div class="mb-6 text-center">
																														<div
																																		class="mt-3 mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-purple-800"
																														>
																																<svg
																																						class="h-8 w-8 text-purple-300"
																																						fill="none"
																																						viewBox="0 0 24 24"
																																						stroke="currentColor"
																																		>
																																						<path
																																										stroke-linecap="round"
																																										stroke-linejoin="round"
																																										stroke-width="2"
																																										d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
																																										/>
																																		</svg>
																														</div>
																														<Heading tag="h4">IELTS Reading Test</Heading>
																														<P class="text-center">Free assessment in minutes</P>
																										</div>
																										<List tag="ul" class="mb-6 space-y-3">
																														<Li icon>
																																		<Star class="mx-3 h-4 w-4 text-purple-300 fill-purple-600" />
																																		Complete 1 Reading Test section
																														</Li>
																														<Li icon>
																																		<Star class="mx-3 h-4 w-4 text-purple-300 fill-purple-600" />
																																		Get your score instantly
																														</Li>
																														<Li icon>
																																		<Star class="mx-3 h-4 w-4 text-purple-300 fill-purple-600" />
																																		Receive personalised feedback
																														</Li>
																										</List>
																										<Button href="/reading/quicktest" onclick={handleStartTest} color="purple" class="w-full font-semibold">
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
			<div class="bg-primary-800/10 border-2 border-purple-600/50 border-t-12 border-t-purple-600/50 rounded-lg p-8 shadow-lg">
				<h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
					Format
				</h2>
				<p class="text-left mb-4 text-xl">You have 60 minutes to read three passages and answer 40 questions. There is no extra time to transfer your answers, so you must write them directly on the answer sheet as you work through the test.
				</p>
				<div class="grid md:grid-cols-3 gap-6 text-center">
					<div>
						<div class="text-3xl font-bold text-primary-600 dark:text-primary-400">60 min</div>
						<div class="text-sm text-gray-600 dark:text-gray-300">Total Duration</div>
					</div>
					<div>
						<div class="text-3xl font-bold text-primary-600 dark:text-primary-400">3</div>
						<div class="text-sm text-gray-600 dark:text-gray-300">Passages</div>
					</div>
					<div>
						<div class="text-3xl font-bold text-primary-600 dark:text-primary-400">40</div>
						<div class="text-sm text-gray-600 dark:text-gray-300">Questions</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Test Sections -->
		<div class="mb-12">
			<div class="bg-primary-800/10 border-2 border-purple-600/50 border-t-12 border-t-purple-600/50 rounded-lg p-8 shadow-lg">
				<h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
					Test Structure
				</h2>
				<p class="text-left mb-4 text-xl">The Reading Test has <b>3 passages</b> of increasing difficulty. Each passage is followed by <b>13 - 14 questions</b> testing different reading skills.
				</p>
				<div class="grid md:grid-cols-3 gap-6">
					{#each testSections as section}
						<div class="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
							<h3 class="font-semibold text-gray-900 dark:text-white mb-3">{section.section}</h3>
							<p class="text-m text-gray-600 dark:text-gray-300 mb-3">{section.description}</p>
							<div class="text-s text-gray-500 dark:text-gray-400">
								<div>{section.questions}</div>
								<div class="font-medium text-primary-600 dark:text-primary-400 mt-3">{section.difficulty}</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<!-- Assessment Criteria -->
		<div class="mb-12">
			<div class="bg-primary-800/10 border-2 border-purple-600/50 border-t-12 border-t-purple-600/50 rounded-lg p-8 shadow-lg">
				<h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
					Assessment Criteria
				</h2>
				<p class="text-left mb-4 text-xl">The <b>Reading Test</b> is scored using a system that may slightly vary with 
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
							<li>• Reading for main ideas and supporting details</li>
							<li>• Understanding logical argument and cause & effect</li>
							<li>• Recognising writers' views, attitudes and purpose</li>
							<li>• Following development of ideas, opinions and events</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<!-- Question Types -->
		<div class="mb-12">
			<div class="bg-primary-800/10 border-2 border-purple-600/50 border-t-12 border-t-purple-600/50 rounded-lg p-8 shadow-lg">
				<h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
					Question Types
				</h2>
				<p class="text-left mb-4 text-xl">There are <b>14</b> types of reading questions. All questions are worth <b>1 mark</b> and there will usually be three to four different question types within each section:</p>
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
				<p class="mt-6 mb-2 text-xl">It's very important that you carefully read the instructions for each question type and follow the word limits exactly. Always check how many words you can use in your answer.</p>
			</div>
		</div>

		<!-- Call to Action -->
		<div class="text-center">
			<div class="bg-gray-900 border-2 border-purple-600 border-t-12 border-t-purple-600 rounded-lg p-8 shadow-lg">
				<h2 class="text-2xl font-semibold text-white mb-6 text-center">
					Ready to Test Your Reading Skills?
				</h2>
				<p class="text-gray-300 mb-6 text-xl">
					Take our free 12-minute Reading assessment and get instant feedback on your performance.
				</p>
				<a 
					href="/reading/quicktest"
					class="inline-block bg-purple-500 hover:bg-purple-600 text-white font-medium px-8 py-3 rounded-lg transition-colors"
				>
					Take Free Reading Test Now
				</a>
			</div>
		</div>
</old_str>
	</div>
</div>