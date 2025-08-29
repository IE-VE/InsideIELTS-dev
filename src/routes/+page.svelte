<script lang="ts">
        import { Button, Card, Heading, P } from 'flowbite-svelte';
        import { ArrowRight, Check } from 'lucide-svelte';

        function handleStartTest() {
                console.log('Starting test...');
        }
</script>

<div class="container mx-auto px-6 py-12">
        <h1 class="mb-8 text-center text-5xl font-bold text-teal-600 dark:text-teal-400">
                InsideIELTS
        </h1>

        <p class="mb-10 text-center text-lg">
                Comprehensive personalised training for all IELTS skills.
        </p>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <!-- Speaking -->
                <a
                        href="/record"
                        class="rounded-lg border border-gray-200 bg-white p-6 shadow-md transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
                >
                        <h2 class="mb-2 text-xl font-bold text-teal-600 dark:text-teal-400">Speaking Freetest</h2>
                        <p class="text-gray-600 dark:text-gray-300">
                                Understand your areas of weakness and how to improve.
                        </p>
                        <div class="mt-4 text-sm font-medium text-teal-600 dark:text-teal-400">START SPEAKING →</div>
                </a>

                <!-- Writing -->
                <a
                        href="/writing/practice"
                        class="rounded-lg border border-gray-200 bg-white p-6 shadow-md transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
                >
                        <h2 class="mb-2 text-xl font-bold text-teal-600 dark:text-teal-400">Writing Freetest</h2>
                        <p class="text-gray-600 dark:text-gray-300">
                                Sharpen your essay and report writing with targeted exercises and feedback.
                        </p>
                        <div class="mt-4 text-sm font-medium text-teal-600 dark:text-teal-400">START WRITING →</div>
                </a>

                <!-- Reading -->
                <a
                        href="/reading/practice"
                        class="rounded-lg border border-gray-200 bg-white p-6 shadow-md transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
                >
                        <h2 class="mb-2 text-xl font-bold text-teal-600 dark:text-teal-400">Reading Freetest</h2>
                        <p class="text-gray-600 dark:text-gray-300">
                                Boost your comprehension with authentic IELTS texts and questions.
                        </p>
                        <div class="mt-4 text-sm font-medium text-teal-600 dark:text-teal-400">START READING →</div>
                </a>

                <!-- Listening -->
                <a
                        href="/listening/practice"
                        class="rounded-lg border border-gray-200 bg-white p-6 shadow-md transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
                >
                        <h2 class="mb-2 text-xl font-bold text-teal-600 dark:text-teal-400">Listening Freetest</h2>
                        <p class="text-gray-600 dark:text-gray-300">
                                Improve your listening test technique with real IELTS materials.
                        </p>
                        <div class="mt-4 text-sm font-medium text-teal-600 dark:text-teal-400">START LISTENING →</div>
                </a>
        </div>
</div>

<!-- Hero Section -->
<section class="relative bg-gradient-to-br from-teal-100 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div class="absolute inset-0 bg-gradient-to-tr from-teal-200/20 to-transparent"></div>
        <div class="relative container mx-auto px-6 py-16 md:py-24">
                <div class="flex flex-col items-center gap-8 md:flex-row md:gap-12 lg:gap-16">
                        <div class="mb-10 w-full text-center md:mb-0 md:w-3/5 md:text-left">
                                <h1 class="text-4xl font-bold md:text-5xl">
                                        Know your IELTS Band Score in <span class="text-teal-600 dark:text-teal-400">under 3 minutes</span>
                                </h1>

                                <p class="mt-4 text-xl">
                                        Get instant expert feedback on your speaking skills, based on official IELTS criteria.<br />
                                        <strong>No registration required</strong>
                                </p>

                                <ul class="mt-6 space-y-2">
                                        <li class="flex items-center">
                                                <Check class="mr-2 h-5 w-5 text-teal-600 dark:text-teal-400" />
                                                Identify your key areas of weakness
                                        </li>
                                        <li class="flex items-center">
                                                <Check class="mr-2 h-5 w-5 text-teal-600 dark:text-teal-400" />
                                                Detailed band score breakdown across all 4 criteria
                                        </li>                           
                                        <li class="flex items-center">
                                                <Check class="mr-2 h-5 w-5 text-teal-600 dark:text-teal-400" />
                                                Personalised improvement tips from IELTS experts
                                        </li>                           
                                </ul>

                                <div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
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
                                                <p class="text-sm">100% private - no account needed</p>
                                        </div>
                                </div>
                        </div>

                        <div class="w-full md:w-2/5">
                                <div class="relative mx-auto max-w-sm">
                                        <div class="absolute inset-0 rotate-3 transform rounded-lg bg-teal-600 dark:bg-teal-500"></div>
                                        <Card class="relative shadow-lg">
                                                <div class="mb-6 text-center">
                                                        <div class="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-800">
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
                                                        <h4 class="text-xl font-bold">IELTS Speaking Test</h4>
                                                        <p class="text-center">Free assessment in minutes</p>
                                                </div>

                                                <ul class="mb-6 space-y-3">
                                                        <li class="flex items-center">
                                                                <Check class="mt-0.5 mr-2 h-5 w-5 text-teal-600 dark:text-teal-300" />
                                                                Answer 3 speaking questions
                                                        </li>
                                                        <li class="flex items-center">
                                                                <Check class="mt-0.5 mr-2 h-5 w-5 text-teal-600 dark:text-teal-300" />
                                                                Get your band score instantly
                                                        </li>
                                                        <li class="flex items-center">
                                                                <Check class="mt-0.5 mr-2 h-5 w-5 text-teal-600 dark:text-teal-300" />
                                                                Receive personalised feedback
                                                        </li>
                                                </ul>

                                                <Button href="/record" onclick={handleStartTest} color="primary">
                                                        Start Free Test
                                                </Button>
                                        </Card>
                                </div>
                        </div>
                </div>
        </div>
</section>