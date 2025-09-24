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
                
                // Cleanup function
                return () => {
                        document.removeEventListener('keydown', handleKeydown);
                };
        });
</script>

<svelte:head>
        <title>IETPP - Lesson 03: Introduction to the Writing Test | InsideIELTS</title>
        <meta
                name="description"
                content="Learn IELTS Writing test format, assessment criteria, and study example model answers. Master Task 1 and Task 2 writing skills."
        />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
         <!-- Lesson Header -->
        <div class="max-w-5xl container mx-auto px-3 md:px-6 py-8">
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg px-6 py-2 mb-8">
                        <div class="text-center">
                                <div class="text-xs text-left text-teal-600 dark:text-teal-400">
                                        IE2401_03
                                </div>
                                <h1 class="text-3xl font-bold text-white my-7">
                                        Introduction to the Writing Test
                                </h1>
                        </div>
        <!-- Header Nav -->
                        <div class="mt-6 mb-8 text-lg">
                                <ul class="list-disc list-inside space-y-2 text-white">
                                        <li>Writing Test make-up</li>
                                        <li>Writing Test assessment</li>
                                        <li>Writing Test example model answers</li>
                                </ul>
                        </div>

                        <div class="flex justify-between items-center">
                                <a
                                        href="/IETPP/lesson-02"
                                        class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
                                        data-sveltekit-reload
                                >
                                        ← Prev
                                </a>

                                <a
                                        href="/IETPP#lesson-03"
                                        class="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold"
                                        data-sveltekit-reload
                                >
                                        Contents
                                </a>

                                <a
                                        href="/IETPP/lesson-03/lesson03-i"
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
                                IELTS Writing Test Format
                        </h2>

                        <div class="space-y-6">
                                <div class="border-l-4 border-blue-500 pl-6">
                                        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Test Duration</h3>
                                        <p class="text-gray-700 dark:text-gray-300">60 minutes total for both tasks</p>
                                </div>

                                <div class="border-l-4 border-green-500 pl-6">
                                        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Test Structure</h3>
                                        <p class="text-gray-700 dark:text-gray-300 mb-6">
                                                The Writing Test is the third paper you will take on test day. It is split into two parts: <strong>Task 1</strong> and <strong>Task 2</strong>.
                                        </p>

                                        <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-8 ml-4">
                                                <li><strong>Task 1</strong> takes the form of an analytical report (Ac), or a letter (GT) of at least <strong>150 words</strong> in length.</li>
                                                <li><strong>Task 2</strong> is a discursive essay of at least <strong>250 words</strong> in length.</li>
                                        </ul>
                                </div>

                                <div class="border-l-4 border-purple-500 pl-6">
                                        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Time Management</h3>
                                        <p class="text-gray-700 dark:text-gray-300">Task 1 is worth a third of the total marks for writing, and Task 2 is worth two thirds, so you should try to split your time accordingly: approximately <strong>20 minutes</strong> to complete <strong>Task 1</strong> and <strong>40 minutes</strong> to finish <strong>Task 2</strong>.</p>
                                </div>
                        </div>
                </div>
        </section>

<!-- Page Content -->     
                <!-- Section 1: Writing Test Make-up -->
                <section class="bg-cyan-600/25 rounded-lg p-4 md:p-8 shadow-sm border border-teal-600 mb-8">
                        <h2 class="text-2xl font-bold text-center text-white mb-8">
                                Writing Test make-up</h2>
                        <div class="max-w-4xl mx-auto">  

                         <div class="bg-gray-800 rounded-lg p-6 text-lg border border-gray-700 mb-8">
                                        <p class="text-white mb-6">
                                                The Writing Test is the third paper you will take on test day. It
                                                is split into two parts: <strong>Task 1</strong> and <strong>Task 2</strong>. You have
                                                <strong>60 minutes</strong> to complete both tasks.
                                        </p>

                                        <div class="flex justify-center mb-8">
                                                <a
                                                        href="https://insideielts.oppyo.com/video/embed/2l7o2v7ip6"
                                                        target="_blank"
                                                        title="InsideIELTS virtual examiner writing test preparation video"
                                                        class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
                                                >
                                                        Virtual Examiner Video
                                                </a>
                                        </div>

                                        <p class="text-white mb-8">
                                                <strong>Task 1</strong> takes the form of an analytical report (Ac), or a
                                                letter (GT) of at least <strong>150 words</strong> in length.
                                        </p>

                                        <!-- Task 1 Examples -->
                                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                                                <div class="text-center">
                                                        <h4 class="text-lg font-semibold text-white mb-3">Task 1 (Ac) example</h4>
                                                        <img
                                                                src="/LESSONS/les03/T1_Ac(2).png"
                                                                alt="Writing Task 1 Academic example"
                                                                class="w-full rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity"
                                                                onclick={() => openLightbox('/LESSONS/les03/T1_Ac(2).png')}
                                                        />
                                                </div>

                                                <div class="text-center">
                                                        <h4 class="text-lg font-semibold text-white mb-3">Task 1 Writing answer sheet</h4>
                                                        <img
                                                                src="/LESSONS/les03/W_answersheet-T1.png"
                                                                alt="Task 1 Writing answer sheet"
                                                                class="w-full rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity"
                                                                onclick={() => openLightbox('/LESSONS/les03/W_answersheet-T1.png')}
                                                        />
                                                </div>

                                                <div class="text-center">
                                                        <h4 class="text-lg font-semibold text-white mb-3">Task 1 (GT) example</h4>
                                                        <img
                                                                src="/LESSONS/les03/T1_GT.png"
                                                                alt="Writing Task 1 General Training example"
                                                                class="w-full rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity"
                                                                onclick={() => openLightbox('/LESSONS/les03/T1_GT.png')}
                                                        />
                                                </div>
                                        </div>

                                        <p class="text-white mb-8">
                                                <strong>Task 2</strong> is a discursive essay of at least
                                                <strong>250 words</strong> in length.
                                        </p>

                                        <!-- Task 2 Examples -->
                                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                                <div class="text-center">
                                                        <h4 class="text-lg font-semibold text-white mb-3">Task 2 essay question example</h4>
                                                        <img
                                                                src="/LESSONS/les03/T2.png"
                                                                alt="Task 2 essay question example"
                                                                class="w-full rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity"
                                                                onclick={() => openLightbox('/LESSONS/les03/T2.png')}
                                                        />
                                                </div>

                                                <div class="text-center">
                                                        <h4 class="text-lg font-semibold text-white mb-3">Task 2 Writing answer sheet</h4>
                                                        <img
                                                                src="/LESSONS/les03/W_answersheet-T2.png"
                                                                alt="Task 2 Writing answer sheet"
                                                                class="w-full rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity"
                                                                onclick={() => openLightbox('/LESSONS/les03/W_answersheet-T2.png')}
                                                        />
                                                </div>
                                        </div>

                                        <p class="text-white">
                                                Task 1 is worth a third of the total marks for writing, and Task 2
                                                is worth two thirds, so you should try to split your time
                                                accordingly: approximately <strong>20 minutes</strong> to complete
                                                <strong>Task 1</strong> and <strong>40 minutes</strong> to finish <strong>Task 2</strong>.
                                        </p>
                                </div>
                        </div>
                </section>

                <!-- Section 2: Writing Test Assessment -->
                <section class="bg-teal-600/25 rounded-lg p-4 md:p-8 shadow-sm border border-teal-600 mb-8">
                        <h2 class="text-2xl font-bold text-center text-white mb-8">Writing Test assessment</h2>

                        <div class="max-w-4xl mx-auto">
                                <div class="bg-gray-800 rounded-lg p-6 text-lg border border-gray-700 mb-8">
                                        <p class="text-white mb-6">
                                                The writing test is assessed by Cambridge qualified writing test assessors using a rubric
                                                very similar to the one shown below.
                                        </p>

                                        <div class="flex justify-center mb-8">
                                                <a
                                                        href="https://insideielts.oppyo.com/video/embed/2tt97h585d"
                                                        target="_blank"
                                                        title="InsideIELTS virtual examiner writing test assessment intro video"
                                                        class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
                                                >
                                                        Virtual Examiner Video
                                                </a>
                                        </div>

                                        <div class="text-center mb-8">
                                                <h3 class="text-xl font-bold text-white mb-6">IELTS Writing Test Assessment Rubric (public version)</h3>
                                                <div class="flex justify-center">
                                                        <img
                                                                src="/rubrics/Writing_T1_rubric.png"
                                                                alt="Official IELTS Writing Test assessment rubric (public version)"
                                                                class="max-w-full rounded border border-gray-600 cursor-pointer hover:opacity-80 transition-opacity"
                                                                onclick={() => openLightbox('/rubrics/Writing_T1_rubric.png')}
                                                        />
                                                </div>
                                        </div>

                                        <p class="text-white mb-6">
                                                Although the full rubric might look very complex, as a test taker you only need to have a clear understanding
                                                of the four assessment criteria and the two or three descriptors used for each.
                                        </p>

                                        <p class="text-white mb-4 font-bold">
                                                The four assessment criteria are:
                                        </p>

                                        <ul class="list-disc list-inside space-y-3 text-white mb-8 ml-4">
                                                <li>TASK ACHIEVEMENT <strong>(TA)</strong>* - how well you address the requirements of the task.</li>
                                                <li>COHERENCE & COHESION <strong>(CC)</strong> - how well you present your ideas and structure your response.</li>
                                                <li>LEXICAL RESOURCE <strong>(LR)</strong> - use of vocabulary.</li>
                                                <li>GRAMMATICAL RANGE & ACCURACY <strong>(GRA)</strong> - grammar.</li>
                                        </ul>

                                        <p class="text-white mb-6">
                                                (*The Task 1 and Task 2 rubrics differ only in regard to the
                                                first assessment component: <strong>Task Achievement (TA)</strong> in
                                                <strong>Task 1</strong> and <strong>Task Response (TR)</strong> in <strong>Task 2</strong>.)
                                        </p>

                                        <p class="text-white mb-6">
                                                Under the headings in each column you will see a list of
                                                bullet-pointed descriptors which describe the writing features
                                                which must be demonstrated by the candidate in order to achieve
                                                the corresponding band score rating.
                                        </p>

                                        <p class="text-white mb-6">
                                                The <strong>IELTS</strong> writing test assessor has all of these criteria in
                                                mind and, as he/she reads through your written response, is
                                                looking for examples of each in order to accurately assess and grade the
                                                level of your writing ability.
                                        </p>

                                        <p class="text-white">
                                                To be awarded a certain band level rating you must be able to
                                                demonstrate <u><strong>all</strong></u> of the descriptors specified at the corresponding
                                                band level. We'll cover each of the four assessment criteria, their descriptors, and how they relate to each of 
                                                the <strong>IELTS</strong> writing test tasks, in Lessons 3(i) to 3(iv).
                                        </p>
                                </div>
                        </div>
                </section>

                <!-- Section 3: Writing Test Example Model Answers -->
                <section class="bg-cyan-800/25 rounded-lg p-4 md:p-8 shadow-sm border border-teal-500 mb-8">
                        <h2 class="text-2xl font-bold text-center text-white mb-8">Writing Test example model answers</h2>

                        <div class="max-w-6xl mx-auto">
                                <p class="text-white text-lg mb-8">
                                        Read these example (high-level) model answers and answer the comprehension questions for each.
                                </p>

                                <div class="space-y-12 mb-8">
                                        <!-- Task 1 GT Example -->
                                        <div class="bg-gray-800 rounded-lg p-6 border border-gray-600">
                                                <h4 class="text-lg font-semibold text-white mb-6 text-center">
                                                        Task 1 (GT)
                                                </h4>
                                                
                                                <div class="flex flex-col gap-8">
                                                        <!-- Image -->
                                                        <div class="w-full">
                                                                <img
                                                                        src="/LESSONS/les03/W_T1(GT)example.png"
                                                                        alt="Writing Task 1 GT example"
                                                                        class="w-full rounded border border-gray-500 cursor-pointer"
                                                                        onclick={() => openLightbox('/LESSONS/les03/W_T1(GT)example.png')}
                                                                />
                                                        </div>
                                                        
                                                        <!-- Questions below -->
                                                        <div class="w-full">
                                                                <div class="bg-gray-700 rounded-lg p-4">
                                                                        <h5 class="text-white font-bold mb-4">Comprehension Questions:</h5>
                                                                        <ul class="space-y-3 text-white">
                                                                                <li>• What is the writer's situation?</li>
                                                                                <li>• What reason does the writer give for not starting on time?</li>
                                                                                <li>• When does he want to start work?</li>
                                                                        </ul>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>

                                        <!-- Task 1 AC Example -->
                                        <div class="bg-gray-800 rounded-lg p-6 border border-gray-600">
                                                <h4 class="text-lg font-semibold text-white mb-6 text-center">
                                                        Task 1 (Ac)
                                                </h4>
                                                
                                                <div class="flex flex-col gap-8">
                                                        <!-- Image -->
                                                        <div class="w-full">
                                                                <img
                                                                        src="/LESSONS/les03/W_T1(Ac)example.png"
                                                                        alt="Writing Task 1 AC example"
                                                                        class="w-full rounded border border-gray-500 cursor-pointer"
                                                                        onclick={() => openLightbox('/LESSONS/les03/W_T1(Ac)example.png')}
                                                                />
                                                        </div>
                                                        
                                                        <!-- Questions below -->
                                                        <div class="w-full">
                                                                <div class="bg-gray-700 rounded-lg p-4">
                                                                        <h5 class="text-white font-bold mb-4">Comprehension Questions:</h5>
                                                                        <ul class="space-y-3 text-white">
                                                                                <li>• What do the two graphs show?</li>
                                                                                <li>• What are the units used?</li>
                                                                                <li>• When are the most people there?</li>
                                                                        </ul>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>

                                        <!-- Task 2 Example -->
                                        <div class="bg-gray-800 rounded-lg p-6 border border-gray-600">
                                                <h4 class="text-lg font-semibold text-white mb-6 text-center">
                                                        Task 2
                                                </h4>
                                                
                                                <div class="flex flex-col gap-8">
                                                        <!-- Image -->
                                                        <div class="w-full">
                                                                <img
                                                                        src="/LESSONS/les03/W_T2example.png"
                                                                        alt="Writing Task 2 example"
                                                                        class="w-full rounded border border-gray-500 cursor-pointer"
                                                                        onclick={() => openLightbox('/LESSONS/les03/W_T2example.png')}
                                                                />
                                                        </div>
                                                        
                                                        <!-- Questions below -->
                                                        <div class="w-full">
                                                                <div class="bg-gray-700 rounded-lg p-4">
                                                                        <h5 class="text-white font-bold mb-4">Comprehension Questions:</h5>
                                                                        <ul class="space-y-3 text-white">
                                                                                <li>• What are the writer's 2 reasons for disagreeing with the statement?</li>
                                                                        </ul>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>

                                <div class="text-center">
                                        <p class="text-white text-lg font-bold">
                                                End of Lesson 03
                                        </p>
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
                        <div class="max-w-4xl max-h-full">
                                <img src={lightboxImage} alt="Enlarged view" class="max-w-full max-h-full object-contain rounded-lg" />
                        </div>
                </div>
        {/if}
</div>