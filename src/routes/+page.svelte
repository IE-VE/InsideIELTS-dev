<script lang="ts">
	import { tracking } from '$lib/utils/analytics';
	import {
		Button,
		Listgroup,
		ListgroupItem,
		Card,
		Accordion,
		AccordionItem,
		Heading,
		P,
		List,
		Li
	} from 'flowbite-svelte';
	import {
		ArrowRight,
		Check,
		Clock,
		Clipboard,
		Zap,
		MicVocal,
		BarChart,
		Sparkles,
		Quote,
		GraduationCap,
		Award
	} from 'lucide-svelte';

	function handleStartTest() {
		tracking.startTest();
	}

	// FAQ items for accordion
	const faqItems = [
		{
			id: 1,
			title: 'How accurate is the assessment?',
			content:
				'Our AI is trained on thousands of real IELTS responses and calibrated by certified IELTS examiners. While no automated system is perfect, our assessments have shown to be within 0.5 bands of human examiner scores in over 90% of cases.'
		},
		{
			id: 2,
			title: 'Is my data private and secure?',
			content:
				"Absolutely. Your recordings are processed securely and are never shared with third parties. We don't require personal information to use the free test, and all data is handled according to strict privacy standards."
		},
		{
			id: 3,
			title: 'What if I need more help?',
			content:
				'The InsideIELTS freetests are designed to give you a good idea of your starting point for improvement. For personalised guidance on your IELTS journey you can sign up to the <a href="/IETPP" class="text-teal-400 hover:text-teal-300">InsideIELTS Test Preparation Program<a/>.<br><br>No other personalised IELTS preparation service offers this much value - <strong>guaranteed</strong>.'
		}
	];

	// Value props data
	const valueProps = [
		{
			title: 'Professional Assessment',
			description: 'Get instant accurate feedback',
			icon: Clock
		},
		{
			title: 'Official IELTS Criteria',
			description: 'Feedback on all 4 assessment criteria - just like the real exam',
			icon: Clipboard
		},
		{
			title: 'Personalised Study',
			description: 'Get customised practice exercises',
			icon: GraduationCap
		}
	];

	// How it works steps
	const howItWorksSteps = [
		{
			emoji: '1️⃣',
			title: 'Record Your Answer',
			description: 'Speak for up to 45 seconds for each question',
			icon: MicVocal
		},
		{
			emoji: '2️⃣',
			title: 'Receive Your Feedback',
			description: 'Instant analysis of your speaking performance',
			icon: BarChart
		},
		{
			emoji: '3️⃣',
			title: 'Practise & Improve',
			description: 'Follow personalised tips to increase your score',
			icon: Award
		}
	];

	// Testimonial data
	const testimonials = [
		{
			quote:
				'The personalised feedback was great. It helped me identify my exact weak points in fluency and pronunciation. After following the focused exercises I improved from Band 6 to Band 7 in only two weeks.',
			author: 'Aliza from Pakistan'
		},
		{
			quote:
				'Once you really understand what the examiner\'s are looking for, preparation\'s not so hard after that, you can clearly focus on what you need to do. I got Band 8 in speaking, Band 7.5 overall, - seriously can\'t believe that!',
			author: 'Mahendra from Indonesia'
		}
	];
</script>

<div class="container mx-auto px-6 py-12">
	<h1 class="mb-8 text-center text-5xl font-bold text-teal-600 dark:text-teal-400">
		InsideIELTS
	</h1>

	<p class="mb-10 text-center text-xl">
		Comprehensive personalised training for all IELTS skills.
	</p>

	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
		<!-- Speaking -->
		<a
			href="/speaking"
			class="bg-gray-800 rounded-lg border border-gray-700 p-6 shadow-md transition-all transform hover:scale-103 hover:border-teal-600"
		>
			<h2 class="mb-2 text-2xl text-center font-bold text-teal-600 dark:text-teal-400">Speaking</h2>
			<p class="text-gray-600 dark:text-gray-300">
				Complete Speaking Test preparation materials plus <b>free Speaking evaluation</b> with feedback and band score.
			</p>
			<div class="mt-4 text-sm font-medium text-teal-600 dark:text-teal-400">SPEAKING FREETEST →</div>
		</a>

		<!-- Writing -->
		<a
			href="/writing/practice"
			class="bg-gray-800 rounded-lg border border-gray-700 p-6 shadow-md transition-all transform hover:scale-103 hover:border-teal-600"
				>
			<h2 class="mb-2 text-2xl text-center font-bold text-teal-600 dark:text-teal-400">Writing</h2>
			<p class="text-gray-600 dark:text-gray-300">
				Complete Writing Test preparation materials plus <b>free Writing evaluation exercise</b> with feedback and band score.
			</p>
			<div class="mt-4 text-sm font-medium text-teal-600 dark:text-teal-400">WRITING FREETEST →</div>
		</a>

		<!-- Reading -->
		<a
			href="/reading/practice"
			class="bg-gray-800 rounded-lg border border-gray-700 p-6 shadow-md transition-all transform hover:scale-103 hover:border-teal-600"
				>
			<h2 class="mb-2 text-2xl text-center font-bold text-teal-600 dark:text-teal-400">Reading</h2>
			<p class="text-gray-600 dark:text-gray-300">
				Complete Reading Test preparation materials plus <b>free Reading skills evaluation</b> with feedback and score.
			</p>
			<div class="mt-4 text-sm font-medium text-teal-600 dark:text-teal-400">READING FREETEST →</div>
		</a>

		<!-- Listening -->
		<a
			href="/listening/practice"
			class="bg-gray-800 rounded-lg border border-gray-700 p-6 shadow-md transition-all transform hover:scale-103 hover:border-teal-600"
				>
			<h2 class="mb-2 text-2xl text-center font-bold text-teal-600 dark:text-teal-400">Listening</h2>
			<p class="text-gray-600 dark:text-gray-300">
				Complete Listening Test preparation materials plus <b>free Listening skills evaluation</b> with feedback and score.
			</p>
			<div class="mt-4 text-sm font-medium text-teal-600 dark:text-teal-400">LISTENING FREETEST →</div>
		</a>
	</div>
</div>

<!-- Hero Section -->
<section
	class="relative bg-gradient-to-br from-teal-100 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
>
	<div class="absolute inset-0 bg-gradient-to-tr from-teal-200/20 to-transparent"></div>
	<div class="relative container mx-auto px-10 py-16 md:py-24">
		<div class="flex flex-col items-center gap-8 md:flex-row md:gap-12 lg:gap-16">
			<div class="mb-10 w-full text-center md:mb-0 md:w-3/5 md:text-left">
				<Heading tag="h1">
					Know your IELTS Band Score in <span class="text-teal-600 dark:text-teal-400"
						>under 3 minutes</span
					>
				</Heading>

				<P size="xl" class="mt-4">
					Get instant expert feedback on your speaking skills, based on official IELTS criteria.<br
					/>
					<strong>No registration required</strong>
				</P>

				<List tag="ul" class="mt-6">
					<Li icon>
						<Check class="mr-2 h-5 w-5 text-teal-600 dark:text-teal-400" />
						Identify your key areas of weakness
					</Li>
					<Li icon>
						<Check class="mr-2 h-5 w-5 text-teal-600 dark:text-teal-400" />
						Detailed band score breakdown across all 4 criteria
					</Li>				
					<Li icon>
						<Check class="mr-2 h-5 w-5 text-teal-600 dark:text-teal-400" />
						Personalised improvement tips from IELTS experts
					</Li>				
				</List>

				<div
					class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start"
				>
					<Button
						href="/record"
						onclick={handleStartTest}
						color="primary"
						class="shadow-lg"
						size="lg"
					>
						Get My Speaking Score Now
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
						class="absolute inset-0 rotate-3 transform rounded-lg bg-teal-600 dark:bg-teal-500"
					></div>
					<Card class="relative shadow-lg">
						<div class="mb-6 text-center">
							<div
								class="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-800"
							>
								<svg
									class="h-8 w-8 text-teal-600 dark:text-teal-300"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
									/>
								</svg>
							</div>
							<Heading tag="h4">IELTS Speaking Test</Heading>
							<P class="text-center">Free assessment in minutes</P>
						</div>

						<List tag="ul" class="mb-6 space-y-3">
							<Li icon>
								<Check class="mt-0.5 mr-2 h-5 w-5 text-teal-600 dark:text-teal-300" />
								Answer 3 speaking questions
							</Li>
							<Li icon>
								<Check class="mt-0.5 mr-2 h-5 w-5 text-teal-600 dark:text-teal-300" />
								Get your band score instantly
							</Li>
							<Li icon>
								<Check class="mt-0.5 mr-2 h-5 w-5 text-teal-600 dark:text-teal-300" />
								Receive personalised feedback
							</Li>
						</List>

						<Button href="/record" onclick={handleStartTest} color="primary">
							Start Free Test
						</Button>
					</Card>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Value Props -->
<section class="relative py-16">
	<div
		class="absolute inset-0 bg-gradient-to-tr from-teal-50/20 via-transparent to-blue-50/20 dark:from-teal-900/10 dark:via-transparent dark:to-blue-900/10"
	></div>
	<div class="relative container mx-auto px-6">
		<div class="mb-12 text-center">
			<P class="mb-2 text-center text-sm font-semibold text-teal-600 dark:text-teal-400"
				>WHY WE'RE DIFFERENT</P
			>
			<Heading tag="h2">Why Choose Our Free Tests</Heading>
			<div class="mx-auto mt-4 h-1 w-24 rounded-full bg-teal-500/40"></div>
			<P class="mt-6 text-center">Expert analysis to help you succeed</P>
		</div>
		<div class="grid place-items-center gap-8 md:grid-cols-3">
			{#each valueProps as prop}
				<Card>
					<div class="flex flex-col items-center">
						<div
							class="icon-container icon-pulse mb-6 rounded-full bg-teal-100 p-5 dark:bg-teal-900"
						>
							<svelte:component this={prop.icon} class="h-8 w-8 text-teal-600 dark:text-teal-400" />
						</div>
						<Heading tag="h4" class="mb-2 text-center">{prop.title}</Heading>
						<div class="mx-auto mb-4 h-1 w-12 rounded-full bg-teal-500/40"></div>
						<P class="text-center">{prop.description}</P>
					</div>
				</Card>
			{/each}
		</div>
	</div>
</section>

<!-- Expert Section -->

<!-- <section class="relative flex items-center justify-center py-14">
	<div
		class="absolute inset-0 bg-gradient-to-b bg-gradient-to-tr from-gray-50 from-teal-100/20 via-blue-50/10 to-gray-100 to-transparent dark:from-gray-800 dark:from-teal-900/10 dark:via-transparent dark:to-gray-900 dark:to-transparent"
	></div>
	<Card class="relative max-w-4xl">
		<div class="space-y-6 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 md:items-center lg:gap-16">
			<div class="space-y-4 md:space-y-4">
				<center><Heading tag="h4">Meet Your IELTS Experts</Heading></center>
				<P>
					At <b>InsideIELTS</b> our team of experts combine over two decades of IELTS teaching and examiner experience to help you achieve your goals.
					We focus on what really matters: identifying your weaknesses, building your strengths, and giving you clear, actionable strategies for test-day success.
				</P>
			</div>
			
				<div class="flex justify-center md:row-span-2">
				<figure>
				<picture>
					<source srcset="/IE_Team1.webp" type="image/webp" />
					<img
						src="/IE_Team1.png"
						alt="Alex, Paul & Jane - InsideIELTS Experts"
						class="h-48 w-72 rounded-md border-1 border-white mt-6 mb-2"
						loading="lazy"
						height="281"
						width="457"
						/>
				</picture>
<figcaption class="text-center text-sm text-gray-400 dark:text-gray-400 mb-4">Alex, Paul and Jane at IE HQ</figcaption>
					</figure>
			</div>
			
			<div class="md:col-start-1">
				<blockquote class="border-l-4 border-teal-500 pl-4 italic">
					"Our mission is simple: no guesswork, no wasted time - just clear, personalised strategies that produce real progress, fast."
				</blockquote>
			</div>
		</div>
	</Card>
</section> -->

<!-- Social Proof -->
<section class="section-divider relative overflow-hidden py-16">
	<div class="container">
		<div class="mx-auto max-w-4xl">
			<div class="mb-8 text-center">
				<P class="mb-2 text-center text-sm font-semibold text-teal-600 dark:text-teal-400"
					>TRUSTED BY IELTS TEST-TAKERS</P
				>
				<Heading tag="h2" class="mt-2">Real Results from Real Students</Heading>
			</div>
			<div class="grid place-items-center gap-6 md:grid-cols-2">
				{#each testimonials as testimonial}
					<Card class="max-w-md">
						<div class="flex items-start">
							<Quote class="mr-2 h-8 w-8 flex-shrink-0 text-teal-600" />
							<div>
								<P class="mb-4 text-m">"{testimonial.quote}"</P>
								<P class="text-sm font-medium text-teal-600 dark:text-teal-400">
									— {testimonial.author}
								</P>
							</div>
						</div>
					</Card>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- How It Works -->
<section id="how-it-works" class="section-divider relative overflow-hidden py-16">
	<div
		class="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
	></div>
	<div class="absolute inset-0 bg-[url('/grid.svg')] opacity-5 mix-blend-soft-light"></div>
	<div class="relative container text-center">
		<P class="mb-2 text-center text-sm font-semibold text-teal-600 dark:text-teal-400"
			>SIMPLE PROCESS</P
		>
		<Heading tag="h2">How It Works</Heading>
		<div class="mx-auto mt-4 h-1 w-24 rounded-full bg-teal-500/40"></div>
		<P class="mt-6 text-center">Three simple steps to improve your speaking</P>

		<div class="mt-12 grid place-items-center gap-6 md:grid-cols-3">
			{#each howItWorksSteps as step, i}
				<Card class=" w-full max-w-sm text-center">
					<div class="-mr-6 -mb-6 text-right text-8xl font-bold text-teal-50 dark:text-teal-900/30">
						{i + 1}
					</div>

					<div class="-mt-8 flex flex-col items-center">
						<div
							class="icon-container icon-pulse mb-6 rounded-full bg-teal-100 p-5 dark:bg-teal-900"
						>
							<svelte:component this={step.icon} class="h-8 w-8 text-teal-600 dark:text-teal-400" />
						</div>
						<Heading tag="h3" class="mb-3 text-xl">
							{step.title}
						</Heading>
						<div class="mx-auto mb-4 h-1 w-12 rounded-full bg-teal-500/40"></div>
						<P class="text-center">{step.description}</P>
					</div>
				</Card>
			{/each}
		</div>
	</div>
</section>

<!-- FAQ Section for Objection Handling -->
<section
	class="section-divider relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 py-14 dark:from-gray-800 dark:to-gray-900"
>
	<div class="container">
		<div class="mb-10 text-center">
			<Heading tag="h2">Frequently Asked Questions</Heading>
			<P size="xl" class="mt-3 text-center">Everything you need to know about our free test</P>
		</div>
		<div class="container max-w-5xl">
			<Accordion>
				{#each faqItems as item}
					<AccordionItem>
						<span slot="header" class="text-lg font-semibold">
							{item.title}
						</span>
						<div class="mt-2 text-gray-500 dark:text-gray-400">
							{@html item.content}
						</div>
					</AccordionItem>
				{/each}
			</Accordion>
		</div>
	</div>
</section>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

	.section-divider {
		position: relative;
	}

	.section-divider::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 10%;
		right: 10%;
		height: 1px;
		background: linear-gradient(to right, transparent, rgb(229, 231, 235), transparent);
	}

	:global(.dark) .section-divider::after {
		background: linear-gradient(to right, transparent, rgb(55, 65, 81), transparent);
	}

	/* Icon animations - keeping these for visual interest */
	.icon-container {
		position: relative;
		transition: transform 0.3s ease;
	}

	@keyframes pulse {
		0% {
			transform: scale(1);
			opacity: 1;
		}
		100% {
			transform: scale(1.6);
			opacity: 0;
		}
	}
</style>


