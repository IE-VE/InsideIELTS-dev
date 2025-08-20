
<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Lightbox from '$lib/components/Lightbox.svelte';

	const speakingParts = [
		{
			title: 'Part 1 - Introduction and Short Answer Questions',
			duration: '4-5 minutes',
			description: 'General topic questions about your home, work, study, and two sets of four short answer questions',
			icon: '👋',
			image: '/speaking-images/ielts-part-1-speaking-intro.png'
		},
		{
			title: 'Part 2 - The Long Turn',
			duration: '3-4 minutes',
			description: '1 minute preparation time, then speak for 1-2 minutes on a given topic card',
			icon: '🎤',
			image: '/speaking-images/ielts-part-2-speaking.png'
		},
		{
			title: 'Part 3 - Discussion',
			duration: '4-5 minutes',
			description: 'Discussion of topics related to your Part 2 response with follow-up questions',
			icon: '💬',
			image: '/speaking-images/ielts-part-3-speaking.png'
		}
	];

	const assessmentCriteria = [
		{
			name: 'Fluency & Coherence (FLC)',
			description: 'Your ability to speak at length with natural flow and logical organisation',
			weight: '25%'
		},
		{
			name: 'Lexical Resource (LR)',
			description: 'Range and accuracy of vocabulary and ability to paraphrase',
			weight: '25%'
		},
		{
			name: 'Grammatical Range & Accuracy (GRA)',
			description: 'Variety and correctness of grammatical structures',
			weight: '25%'
		},
		{
			name: 'Pronunciation (PR)',
			description: 'Correct use of rhythm, stress, intonation and overall intelligibility',
			weight: '25%'
		}
	];

	const interviewFormat = [
		{
			step: 'Introduction',
			description: 'Examiner reads date, venue details, and verifies your ID'
		},
		{
			step: 'Part 1 Questions',
			description: 'Questions about home/work/study plus two topic sets (8 questions total)'
		},
		{
			step: 'Part 2 Preparation',
			description: 'Receive topic card, 1 minute to prepare notes'
		},
		{
			step: 'Part 2 Speaking',
			description: 'Speak for 1-2 minutes uninterrupted on your topic'
		},
		{
			step: 'Part 3 Discussion',
			description: 'Extended discussion with follow-up questions'
		},
		{
			step: 'Conclusion',
			description: 'Examiner thanks you and ends the interview'
		}
	];
</script>

<svelte:head>
	<title>IELTS Speaking Practice - InsideIELTS</title>
	<meta name="description" content="Master the IELTS Speaking test with our comprehensive guide. Learn about all three parts, assessment criteria, and practice with authentic materials." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 py-8 dark:from-gray-900 dark:to-gray-800">
	<div class="container mx-auto max-w-6xl px-6 py-8">
		<!-- Header Section -->
		<div class="text-center mb-12">
			<h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
				IELTS SPEAKING
			</h1>
			<div class="max-w-6xl mx-auto px-6">
				<p class="text-xl text-gray-600 dark:text-gray-300 text-center py-4 mb-8">
					The IELTS Speaking test takes the form of a face-to-face interview with a qualified IELTS speaking examiner. The interview follows a preset script and is split into three sections.
				</p>
			</div>
		</div>

		<!-- Test Overview -->
		<div class="mb-12">
			<Card variant="secondary">
				<h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
					Test Format
				</h2>
				<p class="text-left mb-4 text-xl">The speaking test is a face-to-face interview lasting <b>13-14 minutes</b> in total. After a short introduction, you will answer 8 short questions on two topics, followed by a 2-minute long turn, and finally a discussion on topics related to your long turn response.
				</p>
				<div class="grid md:grid-cols-3 gap-6 text-center">
					<div>
						<div class="text-3xl font-bold text-primary-600 dark:text-primary-400">14 min</div>
						<div class="text-sm text-gray-600 dark:text-gray-300">Total Duration</div>
					</div>
					<div>
						<div class="text-3xl font-bold text-primary-600 dark:text-primary-400">3</div>
						<div class="text-sm text-gray-600 dark:text-gray-300">Parts</div>
					</div>
					<div>
						<div class="text-3xl font-bold text-primary-600 dark:text-primary-400">1 : 1</div>
						<div class="text-sm text-gray-600 dark:text-gray-300">Interview Format</div>
					</div>
				</div>
			</Card>
		</div>

		<!-- Three Parts of the Speaking Test -->
		<div class="mb-12">
			<Card variant="secondary">
				<h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
					The 3 Parts of the Speaking Test
				</h2>
				<p class="text-left mb-6 text-xl">Let's look at the three sections of the interview in more detail:</p>
				<div class="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
					{#each speakingParts as part}
						<div class="text-center">
							<div class="text-2xl mb-3">{part.icon}</div>
							<h3 class="font-semibold text-gray-900 dark:text-white mb-2">{part.title}</h3>
							<p class="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2">({part.duration})</p>
							
							<div class="mt-4">
								<Lightbox 
									src={part.image} 
									alt="{part.title} example"
									className="w-full h-auto max-h-48 object-contain mx-auto rounded-lg border border-gray-200 dark:border-gray-700"
								/>
							</div>
							<p class="text-sm text-gray-600 dark:text-gray-300 mt-3">{part.description}</p>
						</div>
					{/each}
				</div>
			</Card>
		</div>

		<!-- Interview Flow -->
		<div class="mb-12">
			<Card variant="secondary">
				<h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
					Interview Flow
				</h2>
				<p class="text-left mb-4 text-xl">All IELTS interviews are recorded for the full duration. Here's exactly what happens during your speaking test:</p>
				<div class="space-y-4">
					{#each interviewFormat as item, index}
						<div class="flex items-start space-x-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
							<div class="flex-shrink-0 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
								{index + 1}
							</div>
							<div>
								<h3 class="font-medium text-gray-900 dark:text-white">{item.step}</h3>
								<p class="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
							</div>
						</div>
					{/each}
				</div>
			</Card>
		</div>

		<!-- Assessment Criteria -->
		<div class="mb-12">
			<Card variant="secondary">
				<h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
					Assessment Criteria
				</h2>
				<p class="text-left mb-4 text-xl">During the Speaking Test interview, the examiner uses the official <b>IELTS Speaking Test Assessment Rubric</b> to assess your performance across <b>4</b> speaking assessment criteria. You must demonstrate all descriptors at a particular band level to achieve that score.
				</p>
				<div class="grid md:grid-cols-2 gap-8">
					<div>
						<h3 class="font-semibold text-gray-900 dark:text-white mb-3">Four Assessment Criteria</h3>
						<div class="space-y-3">
							{#each assessmentCriteria as criterion}
								<div class="bg-gray-200 dark:bg-gray-800 p-3 rounded-lg">
									<div class="flex justify-between items-center mb-1">
										<span class="font-medium text-gray-900 dark:text-white text-sm">{criterion.name}</span>
										<span class="text-primary-600 dark:text-primary-400 font-medium text-sm">{criterion.weight}</span>
									</div>
									<p class="text-xs text-gray-600 dark:text-gray-300">{criterion.description}</p>
								</div>
							{/each}
						</div>
					</div>
					<div>
						<h3 class="font-semibold text-gray-900 dark:text-white mt-5 mb-3">Key Success Factors</h3>
						<ul class="text-l text-gray-600 dark:text-gray-300 space-y-3">
							<li>• Speak at length without long pauses <b>(FLC)</b></li>
							<li>• Organise ideas logically with connective features <b>(FLC)</b></li>	
							<li>• Use a wide range of vocabulary accurately <b>(LR)</b></li>
							<li>• Demonstrate varied grammatical structures <b>(GRA)</b></li>
							<li>• Maintain clear pronunciation and intonation <b>(PR)</b></li>
												
					</ul>
					</div>
				</div>
			</Card>
		</div>

		<!-- Important Notes -->
		<div class="mb-12">
			<Card variant="secondary">
				<h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
					Important Guidelines
				</h2>
				<div class="space-y-4 text-xl">
					<p class="text-left">Many candidates get very nervous before taking the <b>IELTS Speaking Test</b> interview. The key to performing well is to:</p>
					<ul class="text-left text-lg text-gray-600 dark:text-gray-300 space-y-2 ml-6">
						<li>• Be familiar with the interview format and content</li>
						<li>• Understand the <b>IELTS speaking assessment criteria</b> </li>
						<li>• Practice speaking at length on various topics (and don't worry too much about being 'truthful')</li>						
						<li>• Focus on clear communication rather than perfection</li>
						<li>• Relax!</li>
					</ul>
					<p class="text-left text-lg mt-4"><strong>Remember :</strong> 
						<br><b>Part 1</b> is not a discussion - the examiner will only use "Why/Why not?" prompts if you need to extend your answers.<br>In <b>Part 2</b> you must speak for at least 1:30 without 'drying up'.<br> In <b>Part 3</b>, the examiner will discuss questions more naturally with follow-up questions.</p>
				</div>
			</Card>
		</div>

		<!-- Call to Action -->
		<div class="text-center">
			<div class="bg-gray-900 border-2 border-teal-600 border-t-12 border-t-teal-300 rounded-lg p-8 shadow-lg">
				<h2 class="text-2xl font-semibold text-white mb-6 text-center">
					Ready to Test Your Speaking Skills?
				</h2>
				<p class="text-gray-300 mb-6 text-xl">
					Take our free 3-minute speaking assessment and get instant feedback on your performance.
				</p>
				<a 
					href="/record"
					class="inline-block bg-teal-500 hover:bg-teal-600 text-white font-medium px-8 py-3 rounded-lg transition-colors"
				>
					Start Free Speaking Test Now
				</a>
			</div>
		</div>
	</div>
</div>
