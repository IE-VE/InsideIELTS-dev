<script lang="ts">
        import { tracking } from '$lib/utils/analytics';
        import { Card as FlowbiteCard, Button, List, Li } from 'flowbite-svelte';
        import { Check, ArrowRight, Headphones, BookOpen, Mic, PenTool } from 'lucide-svelte';

        function handleStartProgram() {
                tracking.startTest();
        }
</script>

<svelte:head>
        <title>IETPP - InsideIELTS Test Preparation Program</title>
        <meta
                name="description"
                content="Sign up free to access over 40 Virtual Examiner tutorial videos. Practice and improve your skills with the unique InsideIELTS Virtual Examiner Speaking Test Preparation Program."
        />
</svelte:head>

<div class="min-h-screen bg-white dark:bg-gray-900">
        <!-- Hero Section -->
        <section
                class="relative max-w-5xl mx-auto border border-gray-400 rounded-lg mt-12 bg-gradient-to-br from-teal-100 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16 md:pt-20"
        >
                <div class="absolute inset-0 bg-gradient-to-tr from-cyan-200/20 to-transparent rounded-lg"></div>
                <div class="relative container mx-auto px-6 md:px-10">
                        <div class="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
                                <!-- Left Column: Content -->
                                <div class="w-full text-center lg:w-1/2 lg:text-left">
                                        <div class="mx-auto max-w-2xl">
                                                <h1 class="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                                                        Master <span class="text-teal-600 dark:text-teal-400">All 4 IELTS Skills</span> with
                                                        Expert Guidance
                                                </h1>

                                                <p class="mb-8 text-lg text-gray-700 dark:text-gray-300 md:text-xl">
                                                        Complete 28-lesson program covering <strong>Listening, Reading, Writing & Speaking</strong
                                                        >. Get personalized feedback and achieve your target band score faster.
                                                </p>

                                                <List tag="ul" class="mb-8 space-y-3">
                                                        <Li icon class="text-left">
                                                                <Check class="mr-2 h-5 w-5 text-teal-600 dark:text-teal-400" />
                                                                28 comprehensive lessons with skill-focused materials
                                                        </Li>
                                                        <Li icon class="text-left">
                                                                <Check class="mr-2 h-5 w-5 text-teal-600 dark:text-teal-400" />
                                                                Personal feedback on all Skill Check exercises
                                                        </Li>
                                                        <Li icon class="text-left">
                                                                <Check class="mr-2 h-5 w-5 text-teal-600 dark:text-teal-400" />
                                                                Member's page community access
                                                        </Li>
                                                        <Li icon class="text-left">
                                                                <Check class="mr-2 h-5 w-5 text-teal-600 dark:text-teal-400" />
                                                                40+ Virtual Examiner tutorial videos
                                                        </Li>
                                                        <Li icon class="text-left">
                                                                <Check class="mr-2 h-5 w-5 text-teal-600 dark:text-teal-400" />
                                                                Full IELTS format assessment test
                                                        </Li>
                                                        <Li icon class="text-left">
                                                                <Check class="mr-2 h-5 w-5 text-teal-600 dark:text-teal-400" />
                                                                <u class="underline underline-offset-2">REAL </u> &nbsp support from &nbsp  <u class="underline underline-offset-2"> REAL </u>&nbsp examiners
                                                        </Li>
                                                </List>

                                                <div class="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                                                        <Button
                                                                href="#"
                                                                onclick={handleStartProgram}
                                                                color="primary"
                                                                class="bg-teal-600 hover:bg-teal-700 text-white text-lg font-bold shadow-lg shadow-teal-500/30 border-2 border-teal-400 my-4"
                                                                size="lg"
                                                        >
                                                                <big>$24.95 </big>&nbsp - START NOW
                                                                <ArrowRight class="ml-2 h-5 w-5" />
                                                        </Button>
                                                </div>

                                                <p class="ml-2 mt-4"><a href="/IETPP"                                                                   class="text-gray-300 hover:text-teal-500 font-semibold">see course overview</a>
                             /                             
                                          <a href="#"                                                                   class="text-gray-300 hover:text-teal-500 font-semibold">see member's page</a>

                                                </p>
                                        </div>
                                </div>

                                <!-- Right Column: 4 Skills Visual Grid -->
                                <div class="w-full lg:w-1/2 flex justify-center">
                                        <div class="w-full max-w-md lg:max-w-2xl">
                                                <div class="relative">
                                                        <!-- Rotated background effect -->
                                                        <div
                                                                class="absolute inset-x-4 sm:inset-x-6 lg:inset-x-8 inset-y-0 rotate-2 transform rounded-2xl bg-gradient-to-br from-cyan-600 to-teal-600 shadow-2xl shadow-cyan-500/40"
                                                        ></div>

                                                        <!-- Card container -->
                                                        <FlowbiteCard class="relative shadow-2xl">
                                                                <p class="mb-6 text-center font-bold text-teal-300">
                                                                        InsideIELTS Test Preparation Program
                                                                </p>


                                                                <!-- 2x2 Grid of Skills -->
                                                                <div class="grid grid-cols-2 gap-4">
                                                                        <!-- Listening -->
                                                                        <div
                                                                                class="flex flex-col items-center rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 border-2 border-orange-600/80 hover:shadow-lg transition-shadow"
                                                                        >

                                                                                <img
                                                                                        src="/IETPP/pics/IETPP_picL.png"
                                                                                        alt="IELTS Listening"
                                                                                        class="mb-2 h-auto w-auto object-contain"
                                                                                />
                                                                                <p class="text-sm font-bold text-gray-700 dark:text-gray-300 mt-2">LISTENING</p>
                                                                        </div>

                                                                        <!-- Reading -->
                                                                        <div
                                                                                class="flex flex-col items-center rounded-lg bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-4 border-2 border-purple-200 dark:border-purple-700 hover:shadow-lg transition-shadow"
                                                                        >
                                                                                                                                                              <img
                                                                                        src="/IETPP/pics/IETPP_picR.png"
                                                                                        alt="IELTS Reading"
                                                                                        class="mb-2  object-contain"
                                                                                />
                                                                                <p class="text-sm font-bold text-gray-700 dark:text-gray-300 mt-2">READING</p>
                                                                        </div>

                                                                        <!-- Speaking -->
                                                                        <div
                                                                                class="flex flex-col items-center rounded-lg bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 p-4 border-2 border-blue-600/80 hover:shadow-lg transition-shadow"
                                                                        >
                                                                                <img
                                                                                        src="/IETPP/pics/IETPP_picS.png"
                                                                                        alt="IELTS Speaking"
                                                                                        class="mb-2 object-contain"
                                                                                />
                                                                                <p class="text-sm font-bold text-gray-700 dark:text-gray-300 mt-2">SPEAKING</p>
                                                                        </div>

                                                                        <!-- Writing -->
                                                                        <div
                                                                                class="flex flex-col items-center rounded-lg bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-4 border-2 border-green-600/80 hover:shadow-lg transition-shadow"
                                                                        >
                                                                                <img
                                                                                        src="/IETPP/pics/IETPP_picW2.png"
                                                                                        alt="IELTS Writing"
                                                                                        class="mb-2 object-contain"
                                                                                />
                                                                                <p class="text-sm font-bold text-gray-700 dark:text-gray-300 mt-2">WRITING</p>
                                                                        </div>
                                                                </div>

                                                                <!-- Bottom text -->
                                                                <div class="mt-6 rounded-lg bg-teal-50 dark:bg-teal-900/20 p-4 text-center">
                                                                        <p class="font-semibold text-white">
                                                                                Complete IELTS Test Coverage
                                                                        </p>
                                                                </div>
                                                        </FlowbiteCard>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
      
        <!-- IETPP Section -->
        <div class=" max-w-5xl container mx-auto">
                <div class="mt-20">

                        <div class="bg-gray-50 dark:bg-gray-800 rounded-lg pb-12">                              
                              <!-- Testimonial-style Quote Card -->
                              <div class="max-w-3xl mx-auto px-4 mb-8">
                                <div class="relative rounded-lg border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white to-white dark:from-gray-800 dark:to-gray-800 p-6 pt-8 shadow-lg dark:shadow-xl">
                                  <!-- Top accent bar -->
                                  <div class="absolute top-0 left-0 h-4 w-full rounded-t-xl bg-gradient-to-r from-gray-200 to-slate-300 dark:from-gray-600 dark:to-slate-700"></div>
                                  
                                  <p class="text-lg font-semibold italic text-gray-800 dark:text-gray-200">
                                    "Each test day we see candidates of <u>ALL levels</u> who <u>underperform</u> in all parts of the IELTS assessment due to lack of preparation and understanding of the test requirements."
                                  </p>
                                </div>
                              </div>

                                <div class="text-white px-7 md:px-20 mt-12 mb-6">
                                        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center pt-8 pb-4">
                                                InsideIELTS Test Preparation Program
                                        </h1>
                                       
                                        <p class="mb-8 text-lg">
                                                The <b>IETPP</b> course is a <b>28 lesson</b> introductory program designed to give test candidates a full insight into the make-up, skill requirements and assessment procedures of the <b>IELTS</b> test.
                                        </p>

                                        <p class="mb-6">
                                                The course is divided into 5 sections covering <b>Listening, Reading, Writing & Speaking</b> with a final <b>full IELTS format assessment test</b> to finish. Each section begins with an introductory lesson/s covering the test requirements and assessment procedures for each skill with demonstration and practice exercises. Section lessons provide in-depth skill focused materials with <b>Skill Check</b> exercises to test understanding of key concepts and give real practice of specific assessed elements of the <b>IELTS</b> test.
                                        </p>


                                        <p>The course is supervised by qualified IELTS instructors with personal feedback given on all <b>Skill Check</b> exercises through the <a href="#" class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-bold">IE Member's Feedback</a> page. For additional in-depth explanation of materials click on the <b>Virtual Examiner Video</b> buttons in each section.
                                        </p>
                                     
                                        <div class="text-center mt-10">
                                                <Button
                                                        href="#"
                                                        color="primary"
                                                        class="bg-teal-600 hover:bg-teal-700 text-white text-lg font-bold shadow-lg shadow-teal-500/30 border-2 border-teal-400 my-4"
                                                        size="lg"
                                                >
                                                   START NOW
                                                </Button>
                                        </div>
                                </div>
                            </div>
                        </div>
                </div>
                  </section>
</div>