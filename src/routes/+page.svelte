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
                Award, 
                Star,
                ChevronLeft,
                ChevronRight
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
                                'Our analysis process is regularly checked and calibrated by certified IELTS examiners. While no system is 100% perfect (even real examiners!), our assessments are within 0.5 bands of examiner scores in over 90% of cases.'
                },
                {
                        id: 2,
                        title: 'Is my data private and secure?',
                        content:
                                "Absolutely. Your uploads are processed securely and are never shared with third parties. We don't require personal information to use our free-tests, and all data is handled according to strict privacy standards."
                },
                {
                        id: 3,
                        title: 'What if I need more help?',
                        content:
                                'The InsideIELTS free-tests are designed to give you a good idea of your starting point for improvement. For personalised guidance on your IELTS journey you can sign up to the <a href="/IETPP/signup" class="text-teal-400 hover:text-teal-300">InsideIELTS Test Preparation Program<a/>.<br><br>No other personalised IELTS preparation service offers this much value - <strong>guaranteed</strong>.'
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
                        quote: 'InsideIELTS helped me understand exactly what examiners look for. The personalised feedback after every speaking test made it clear where I needed to improve. I scored Band 7.5!',
                        author: 'Arisa M',
                        location: 'Thailand',
                        image: '/testimonials/Arisa_(Thailand).png'
                },
                {
                        quote: 'I used many IELTS apps before, but InsideIELTS is different. It feels like practicing with a real examiner. My writing finally improved beyond Band 6. Thanks to clear guidance.',
                        author: 'Bekzod R',
                        location: 'Uzbekistan',
                        image: '/testimonials/Bekzod_(Uzbekistan).png'
                },
                {
                        quote: 'The speaking test simulation was so realistic that the real exam felt easy! I liked the instant transcript analysis—it showed my weak vocabulary and pronunciation patterns clearly.',
                        author: 'Dita S',
                        location: 'Indonesia',
                        image: '/testimonials/Dita_(Indonesia).png'
                },
                {
                        quote: 'InsideIELTS gave me detailed grammar analysis and structured practice. I didn\'t have to waste time guessing my mistakes. My band score jumped from 6.0 to 7.5 in six weeks.',
                        author: 'Imran P',
                        location: 'Pakistan',
                        image: '/testimonials/Imran_(Pakistan).png'
                },
                {
                        quote: 'I liked how InsideIELTS focused on efficiency. The exercises were short but targeted exactly what I needed. My confidence grew, and I achieved my goal for postgraduate study.',
                        author: 'Wei Li',
                        location: 'China',
                        image: '/testimonials/Wei_(China).png'
                },
                {
                        quote: 'The examiner feedback was incredibly accurate. It told me exactly what I was doing wrong and how to fix it. I recommended InsideIELTS to my ex-colleagues.',
                        author: 'Amina M',
                        location: 'Egypt',
                        image: '/testimonials/Amina_(Egypt).png'
                },
                {
                        quote: 'Clear structure, accurate feedback, and motivating tone. InsideIELTS makes IELTS prep feel easy. Step by step I went from Band 6 to 7.5 in less than two months. Definitely worth it!',
                        author: 'Rafi J',
                        location: 'Bangladesh',
                        image: '/testimonials/Rafi_(Bangladesh).png'
                },
                {
                        quote: 'InsideIELTS showed me how small details matter—like word stress, linking, and intonation. The step-by-step exercises helped me build natural fluency. My speaking band increased to 8.0.',
                        author: 'Maria K',
                        location: 'Ukraine',
                        image: '/testimonials/Katya_(Ukraine).png'
                },
                {
                        quote: 'The best IELTS preparation course I\'ve tried. InsideIELTS explained exactly how examiners think. I improved both writing and speaking scores in just three weeks. Highly recommended!',
                        author: 'Arjun V',
                        location: 'India',
                        image: '/testimonials/Arjun_(India).png'
                },
                {
                        quote: 'I\'d been stuck at Band 6 for months, but InsideIELTS finally showed me what the examiner really wants. The feedback was honest and clear. I reached Band 7.5 on my next test.',
                        author: 'Tunde H',
                        location: 'Nigeria',
                        image: '/testimonials/Tunde_(Nigeria).png'
                }
        ];

        // Carousel state
        let currentSlide = $state(0);
        let autoPlayInterval: ReturnType<typeof setInterval> | null = null;

        function nextSlide() {
                currentSlide = (currentSlide + 1) % testimonials.length;
        }

        function prevSlide() {
                currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
        }

        function goToSlide(index: number) {
                currentSlide = index;
        }

        function startAutoPlay() {
                if (autoPlayInterval) clearInterval(autoPlayInterval);
                autoPlayInterval = setInterval(nextSlide, 5000);
        }

        function stopAutoPlay() {
                if (autoPlayInterval) {
                        clearInterval(autoPlayInterval);
                        autoPlayInterval = null;
                }
        }

        $effect(() => {
                startAutoPlay();
                return () => stopAutoPlay();
        });
</script>

<div class="container mx-auto px-6 py-12 border-b-2 border-gray-600">
        <h1 class="mb-8 text-center text-5xl font-bold text-teal-600 dark:text-teal-400">
                InsideIELTS
        </h1>

        <p class="mb-10 text-center text-xl">
                Comprehensive personalised training for all IELTS skills
        </p>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <!-- Speaking -->
                <a
                        href="/speaking"
                        class="bg-gray-800 rounded-lg border border-gray-700 p-6 shadow-md transition-all transform hover:scale-103 hover:border-blue-600/80"
                >
                        <h2 class="mb-2 text-2xl text-center font-bold text-teal-600 dark:text-teal-400">Speaking</h2>
                        <p class="text-gray-600 dark:text-gray-300">
                                Complete Speaking Test preparation materials plus <b>free Speaking evaluation</b> with feedback and band score.
                        </p>
                            </a>

                <!-- Writing -->
                <a
                        href="/writing"
                        class="bg-gray-800 rounded-lg border border-gray-700 p-6 shadow-md transition-all transform hover:scale-103 hover:border-green-600/80"
                                >
                        <h2 class="mb-2 text-2xl text-center font-bold text-teal-600 dark:text-teal-400">Writing</h2>
                        <p class="text-gray-600 dark:text-gray-300">
                                Complete Writing Test preparation materials plus <b>free Writing evaluation exercise</b> with feedback and band score.
                        </p>
                                </a>

                <!-- Reading -->
                <a
                        href="/reading"
                        class="bg-gray-800 rounded-lg border border-gray-700 p-6 shadow-md transition-all transform hover:scale-103 hover:border-purple-600/80"
                                >
                        <h2 class="mb-2 text-2xl text-center font-bold text-teal-600 dark:text-teal-400">Reading</h2>
                        <p class="text-gray-600 dark:text-gray-300">
                                Complete Reading Test preparation materials plus <b>free Reading skills evaluation</b> with feedback and score.
                        </p>
                            </a>

                <!-- Listening -->
                <a
                        href="/listening"
                        class="bg-gray-800 rounded-lg border border-gray-700 p-6 shadow-md transition-all transform hover:scale-103 hover:border-orange-600/80"
                                >
                        <h2 class="mb-2 text-2xl text-center font-bold text-teal-600 dark:text-teal-400">Listening</h2>
                        <p class="text-gray-600 dark:text-gray-300">
                                Complete Listening Test preparation materials plus <b>free Listening skills evaluation</b> with feedback and score.
                        </p>
                                   </a>
        </div>
</div>

<!-- Hero Section -->
<section
        class="relative bg-gradient-to-br from-teal-100 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-b-2 border-gray-600"
>
        <div class="absolute inset-0 bg-gradient-to-tr from-teal-200/20 to-transparent"></div>
        <div class="relative container mx-auto px-6 md:px-10 py-16 md:py-24">
                <div class="flex flex-col items-center gap-8 md:flex-row md:gap-12 lg:gap-16">
                        <div class="mb-10 w-full text-center md:mb-0 md:w-3/5 md:text-left">
                                <Heading tag="h1">
                                        Know your IELTS Band Score in <span class="text-teal-400"
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
                                                                <Star class="mt-0.5 mr-2 h-4 w-4 text-teal-300 fill-teal-400"/>
                                                                Answer 3 speaking questions
                                                        </Li>
                                                        <Li icon>
                                                                <Star class="mt-0.5 mr-2 h-4 w-4 text-teal-300 fill-teal-400"/>
                                                                Get your band score instantly
                                                        </Li>
                                                        <Li icon>
                                                                <Star class="mt-0.5 mr-2 h-4 w-4 text-teal-300 fill-teal-400"/>
                                                                Receive personalised feedback
                                                        </Li>
                                                </List>

                                                <Button href="/record" onclick={handleStartTest} color="teal" class="bg-teal-500 hover:bg-teal-400 text-white font-bold">
                                                        Start Free Test
                                                </Button>
                                        </Card>
                                </div>
                        </div>
                </div>
        </div>
</section>

<!-- Value Props -->
<section class="relative pt-16 pb-12 border-b-2 border-gray-600">
        <div
                class="absolute inset-0 bg-gradient-to-tr from-teal-50/20 via-transparent to-blue-50/20 dark:from-teal-900/10 dark:via-transparent dark:to-blue-900/10"
        ></div>
        <div class="relative container mx-auto px-6">
                <div class="mb-10 text-center">
                        <P class="mb-2 text-center text-sm font-semibold text-teal-600 dark:text-teal-400"
                                >WHY WE'RE DIFFERENT</P
                        >
                        <Heading tag="h2">Why Choose InsideIELTS?</Heading>
                        <div class="mx-auto mt-4 h-1 w-24 rounded-full bg-teal-500/40"></div>
                        <P class="mt-6 text-center text-lg">Expert analysis to help you succeed</P>
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
					 <P class="mt-12 text-center text-lg italic max-w-4xl mx-auto">"Helping test takers achieve their goals since 2011, we're not just another free test-prep site: we're a team of IELTS examiners and educators with over three decades of IELTS-prep experience." </P>
        </div>
</section>

<!-- Social Proof - Testimonial Carousel -->
<section class="section-divider relative overflow-hidden py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-b-2 border-gray-600">
        <div class="container">
                <div class="mx-auto max-w-5xl">
                        <div class="mb-12 text-center">
                                <P class="mb-2 text-center text-sm font-semibold text-teal-600 dark:text-teal-400"
                                        >TRUSTED BY IELTS TEST-TAKERS</P
                                >
                                <Heading tag="h2" class="mt-2">Real Results from Real Students</Heading>
                                <div class="mx-auto mt-4 h-1 w-24 rounded-full bg-teal-500/40"></div>
                        </div>

                        <!-- Carousel Container -->
                        <div 
                                class="relative"
                                onmouseenter={stopAutoPlay}
                                onmouseleave={startAutoPlay}
                        >
                                <!-- Testimonial Card -->
                                <div class="relative overflow-hidden">
                                        <div 
                                                class="flex transition-transform duration-1400 ease-in-out"
                                                style="transform: translateX(-{currentSlide * 100}%)"
                                        >
                                                {#each testimonials as testimonial, index}
                                                        <div class="w-full flex-shrink-0 px-4">
                                                                <Card class="mx-auto max-w-3xl">
                                                                        <div class="flex flex-col items-center gap-6 md:flex-row md:gap-8">
                                                                                <!-- Image -->
                                                                                <div class="flex-shrink-0">
                                                                                        <div class="relative">
                                                                                                <div class="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 blur-lg opacity-30"></div>
                                                                                                <img
                                                                                                        src={testimonial.image}
                                                                                                        alt="{testimonial.author} from {testimonial.location}"
                                                                                                        class="relative h-32 w-32 rounded-full border-4 border-teal-500/30 object-cover shadow-lg"
                                                                                                />
                                                                                        </div>
                                                                                </div>
                                                                                <!-- Content -->
                                                                                <div class="flex-1 text-center md:text-left">
                                                                                        <Quote class="mb-4 h-10 w-10 text-teal-600 dark:text-teal-400 mx-auto md:mx-0" />
                                                                                        <P class="mb-6 text-lg italic leading-relaxed">"{testimonial.quote}"</P>
                                                                                        <div class="flex items-center justify-center md:justify-start gap-2">
                                                                                                <div class="h-1 w-12 rounded-full bg-teal-500"></div>
                                                                                                <P class="text-base font-semibold text-gray-900 dark:text-white">
                                                                                                        {testimonial.author}
                                                                                                </P>
                                                                                        </div>
                                                                                        <P class="mt-1 text-sm text-teal-600 dark:text-teal-400">
                                                                                                {testimonial.location}
                                                                                        </P>
                                                                                </div>
                                                                        </div>
                                                                </Card>
                                                        </div>
                                                {/each}
                                        </div>
                                </div>

                                <!-- Navigation Buttons -->
                                <button
                                        onclick={prevSlide}
                                        class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 rounded-full bg-white dark:bg-gray-800 p-3 shadow-lg border-2 border-teal-500/30 hover:bg-teal-50 dark:hover:bg-gray-700 transition-all hover:scale-110"
                                        aria-label="Previous testimonial"
                                >
                                        <ChevronLeft class="h-6 w-6 text-teal-600 dark:text-teal-400" />
                                </button>
                                <button
                                        onclick={nextSlide}
                                        class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 rounded-full bg-white dark:bg-gray-800 p-3 shadow-lg border-2 border-teal-500/30 hover:bg-teal-50 dark:hover:bg-gray-700 transition-all hover:scale-110"
                                        aria-label="Next testimonial"
                                >
                                        <ChevronRight class="h-6 w-6 text-teal-600 dark:text-teal-400" />
                                </button>

                                <!-- Dot Indicators -->
                                <div class="mt-8 flex justify-center gap-2">
                                        {#each testimonials as _, index}
                                                <button
                                                        onclick={() => goToSlide(index)}
                                                        class="h-2.5 rounded-full transition-all duration-300 {index === currentSlide
                                                                ? 'w-8 bg-teal-600 dark:bg-teal-400'
                                                                : 'w-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-teal-400 dark:hover:bg-teal-500'}"
                                                        aria-label="Go to testimonial {index + 1}"
                                                ></button>
                                        {/each}
                                </div>
                        </div>
                </div>
        </div>
</section>

<!-- Expert Section -->

<section class="relative flex items-center justify-center py-14 border-b-2 border-gray-600">
				<div
								class="absolute inset-0 bg-gradient-to-b bg-gradient-to-tr from-gray-50 from-teal-100/20 via-blue-50/10 to-gray-100 to-transparent dark:from-gray-800 dark:from-teal-900/10 dark:via-transparent dark:to-gray-900 dark:to-transparent"
				></div>
				<Card class="relative max-w-4xl">
								<div class="space-y-6 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 md:items-center lg:gap-16">
												<div class="space-y-4 md:space-y-4">
																<center><Heading tag="h4">Meet Your IELTS Experts</Heading></center>
																<P>
																				At <b>InsideIELTS</b> we focus on what really matters: identifying your weaknesses, building your strengths, and giving you clear, actionable strategies for test-day success.
																</P>
												</div>																		<div class="md:row-span-2">
																	<div class="grid grid-cols-3 gap-4 mt-6 mb-4">
																		<!-- Alex -->
																		<figure class="flex flex-col items-center">
																			<picture>
																				<source srcset="/img/Alex.webp" type="image/webp" />
																				<img
																					src="/img/Alex.png"
																					alt="Alex - IELTS Expert"
																					class="h-32 w-32 rounded-full border-4 border-teal-600/90 object-cover shadow-lg hover:scale-105 transition-transform duration-300"
																					loading="lazy"
																					width="128"
																					height="128"
																				/>
																			</picture>
																			<figcaption class="mt-3 text-center text-sm font-semibold text-gray-400">Alex</figcaption>
																		</figure>

																		<!-- Paul -->
																		<figure class="flex flex-col items-center">
																			<picture>
																				<source srcset="/img/Paul.webp" type="image/webp" />
																				<img
																					src="/img/Paul.png"
																					alt="Paul - IELTS Expert"
																					class="h-32 w-32 rounded-full border-4 border-teal-600/90 object-cover shadow-lg hover:scale-105 transition-transform duration-300"
																					loading="lazy"
																					width="128"
																					height="128"
																				/>
																			</picture>
																			<figcaption class="mt-3 text-center text-sm font-semibold text-gray-400">Paul</figcaption>
																		</figure>

																		<!-- Jane -->
																		<figure class="flex flex-col items-center">
																			<picture>
																				<source srcset="/img/Jane.webp" type="image/webp" />
																				<img
																					src="/img/Jane.png"
																					alt="Jane - IELTS Expert"
																					class="h-32 w-32 rounded-full border-4 border-teal-600/90 object-cover shadow-lg hover:scale-105 transition-transform duration-300"
																					loading="lazy"
																					width="128"
																					height="128"
																				/>
																			</picture>
																			<figcaption class="mt-3 text-center text-sm font-semibold text-gray-400">Jane</figcaption>
																		</figure>
																	</div>
																</div>

												<div class="md:col-start-1 mb-4">
																<blockquote class="border-l-4 border-teal-500 pl-4 italic text-gray-300">							"Our mission is simple: no guesswork, no wasted time - just clear, personalised strategies that produce real progress, fast."						</blockquote>											</div>
								</div>
				</Card>
</section>

<!-- How It Works -->
<!--  <section id="how-it-works" class="section-divider relative overflow-hidden py-16">
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
</section> -->

<!-- FAQ Section for Objection Handling -->
<section
        class="section-divider relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 py-14 dark:from-gray-800 dark:to-gray-900"
>
        <div class="container">
                <div class="mb-10 text-center">
                        <Heading tag="h2">Frequently Asked Questions</Heading>
                        <P size="xl" class="mt-3 text-center">Everything you need to know about our free tests</P>
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