<script lang="ts">
        // LESSON 00: IELTS Test Overview
        import { onMount } from 'svelte';
        
        let lightboxModal: HTMLDivElement;
        let lightboxImage: HTMLImageElement;
        let lightboxCaption: HTMLParagraphElement;

        onMount(() => {
                // Add click listeners to all images
                const images = document.querySelectorAll('.lightbox-image');
                images.forEach((img: HTMLImageElement) => {
                        img.addEventListener('click', () => openLightbox(img.src, img.alt));
                });
        });

        function openLightbox(src: string, caption: string) {
                if (lightboxModal && lightboxImage && lightboxCaption) {
                        lightboxImage.src = src;
                        lightboxCaption.textContent = caption;
                        lightboxModal.style.display = 'flex';
                        document.body.style.overflow = 'hidden';
                }
        }

        function closeLightbox() {
                if (lightboxModal) {
                        lightboxModal.style.display = 'none';
                        document.body.style.overflow = 'auto';
                }
        }

        function handleKeydown(event: KeyboardEvent) {
                if (event.key === 'Escape') {
                        closeLightbox();
                }
        }
</script>

<svelte:head>
        <title>LESSON 00: IELTS Test Overview - IETPP</title>
        <meta
                name="description"
                content="IELTS Test Overview - Learn about the test makeup and assessment procedures"
        />
</svelte:head>

<div class="min-h-screen bg-white dark:bg-gray-900">
        <!-- Lesson Header -->
        <div class="max-w-5xl container mx-auto px-6 py-8">
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
                        <div class="text-center">
                                <div class="text-xs text-left font-bold text-teal-600 dark:text-teal-400 mb-2">
                                        LESSON CODE: IE2401_00
                                </div>
                                <h1 class="text-3xl font-bold text-white mb-2">
                                        IELTS Test Overview
                                </h1>
                                <p class="text-white italic">(20 mins)</p>
                        </div>

                        <div class="mt-6">
                                <h2 class="text-xl font-semibold mb-4 text-white">Lesson Content:</h2>
                                <ul class="list-disc text-xl list-inside space-y-2 text-white">
                                        <li>IELTS Test make-up</li>
                                        <li>IELTS Test Assessment</li>
                                </ul>
                        </div>

                        <div class="text-center mt-6">
                                <a
                                        href="/IETPP"
                                        class="text-teal-600 dark:text-teal-400 hover:underline font-semibold"
                                >
                                        &lt; -- Back to Contents --&gt;
                                </a>
                        </div>
                </div>
        </div>

        <!-- Page Content -->
        <div style="max-width: 1200px;" class="mx-auto px-6 py-8">
                <!-- Section 1: IELTS Test Make-up -->
                <section class="mb-12">
                        <h2 class="text-2xl font-bold text-center text-white mb-8">
                                IELTS Test make-up
                        </h2>

                        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
                                <div class="text-wrap-container">
                                        <div class="floating-video-button">
                                                <a
                                                        href="https://insideielts.oppyo.com/video/embed/4ldnuex1ef"
                                                        target="_blank"
                                                        title="InsideIELTS virtual examiner test preparation video"
                                                        class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
                                                >
                                                        Virtual Examiner Video
                                                </a>
                                        </div>
                                        <p class="text-white text-xl mb-4">
                                                The <strong>IELTS</strong> examination is a language proficiency test designed to                                                                assess your Listening, Reading, Writing and Speaking skills in English.
                                        </p>
                                </div>
                        </div>

                        <p class="text-white mb-8">
                                The full <strong>IELTS</strong> test is made up of:
                        </p>

                        <!-- Listening Test -->
                        <div class="mb-8">
                                <h3 class="text-xl font-semibold text-white mb-4">
                                        • A 40 minute Listening Test consisting of 40 questions in four sections.
                                </h3>
                                <div class="grid md:grid-cols-2 gap-6 mb-6">
                                        <div class="text-center">
                                                <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                                                        <img src="/00_L.png" alt="Listening Test questions" class="mx-auto mb-4 max-h-32 rounded border lightbox-image cursor-pointer"/>
                                                        <p class="text-sm font-semibold">Listening Test questions</p>
                                                </div>
                                        </div>
                                        <div class="text-center">
                                                <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                                                        <img src="/ielts-listening-answer-sheet.jpg" alt="Listening Test answer sheet" class="mx-auto mb-4 max-h-32 rounded border lightbox-image cursor-pointer"/>
                                                        <p class="text-sm font-semibold">Listening Test answer sheet</p>
                                                </div>
                                        </div>
                                </div>
                                <div class="text-center mb-8">
                                        <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 inline-block">
                                                <div class="mb-4">
                                                        <audio controls class="w-full max-w-md">
                                                                <source src="/00_L.mp3" type="audio/mpeg">
                                                                Your browser does not support the audio element.
                                                        </audio>
                                                </div>
                                                <p class="text-sm font-semibold">Listening test audio</p>
                                        </div>
                                </div>
                        </div>

                        <!-- Reading Test -->
                        <div class="mb-8">
                                <h3 class="text-xl font-semibold text-white mb-4">
                                        • A 60 minute Reading Test with three passages and 40 questions.
                                </h3>
                                <div class="grid md:grid-cols-3 gap-6">
                                        <div class="text-center">
                                                <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                                                        <img src="/00_R1.png" alt="Reading Test passage" class="mx-auto mb-4 max-h-32 rounded border lightbox-image cursor-pointer"/>
                                                        <p class="text-sm font-semibold">Reading Test passage</p>
                                                </div>
                                        </div>
                                        <div class="text-center">
                                                <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                                                        <img src="/00_R2.png" alt="Reading Test questions" class="mx-auto mb-4 max-h-32 rounded border lightbox-image cursor-pointer"/>
                                                        <p class="text-sm font-semibold">Reading Test questions</p>
                                                </div>
                                        </div>
                                        <div class="text-center">
                                                <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                                                        <img src="/ielts-reading-answer-sheet.jpg" alt="Reading Test answer sheet" class="mx-auto mb-4 max-h-32 rounded border lightbox-image cursor-pointer"/>
                                                        <p class="text-sm font-semibold">Reading Test answer sheet</p>
                                                </div>
                                        </div>
                                </div>
                        </div>

                        <!-- Writing Test -->
                        <div class="mb-8">
                                <h3 class="text-xl font-semibold text-white mb-4">
                                        • A 60 minute Writing Test consisting of two tasks.
                                </h3>
                                <div class="grid md:grid-cols-3 gap-6">
                                        <div class="text-center">
                                                <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                                                        <img src="/00_W1.png" alt="Writing Task 1 Academic" class="mx-auto mb-4 max-h-32 rounded border lightbox-image cursor-pointer"/>
                                                        <p class="text-sm font-semibold">Writing Task 1 (Ac)</p>
                                                </div>
                                        </div>
                                        <div class="text-center">
                                                <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                                                        <img src="/00_W1b.png" alt="Writing Task 1 General Training" class="mx-auto mb-4 max-h-32 rounded border lightbox-image cursor-pointer"/>
                                                        <p class="text-sm font-semibold">Writing Task 1 (GT)</p>
                                                </div>
                                        </div>
                                        <div class="text-center">
                                                <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                                                        <img src="/00_W2.png" alt="Writing Task 2" class="mx-auto mb-4 max-h-32 rounded border lightbox-image cursor-pointer"/>
                                                        <p class="text-sm font-semibold">Writing Task 2</p>
                                                </div>
                                        </div>
                                </div>
                        </div>

                        <!-- Speaking Test -->
                        <div class="mb-8">
                                <h3 class="text-xl font-semibold text-white mb-4">
                                        • And a 14 minute Speaking Test interview made up of three parts.
                                </h3>
                                <div class="grid md:grid-cols-3 gap-6 mb-6">
                                        <div class="text-center">
                                                <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                                                        <img src="/00_S1.png" alt="Speaking Test Part 1" class="mx-auto mb-4 max-h-32 rounded border lightbox-image cursor-pointer"/>
                                                        <p class="text-sm font-semibold">Speaking Test Part 1</p>
                                                </div>
                                        </div>
                                        <div class="text-center">
                                                <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                                                        <img src="/00_S2.png" alt="Speaking Test Part 2" class="mx-auto mb-4 max-h-32 rounded border lightbox-image cursor-pointer"/>
                                                        <p class="text-sm font-semibold">Speaking Test Part 2</p>
                                                </div>
                                        </div>
                                        <div class="text-center">
                                                <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                                                        <img src="/00_S3.png" alt="Speaking Test Part 3" class="mx-auto mb-4 max-h-32 rounded border lightbox-image cursor-pointer"/>
                                                        <p class="text-sm font-semibold">Speaking Test Part 3</p>
                                                </div>
                                        </div>
                                </div>
                                <div class="text-center mb-8">
                                        <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 inline-block">
                                                <div class="mb-4">
                                                        <audio controls class="w-full max-w-md">
                                                                <source src="/00_S.mp3" type="audio/mpeg">
                                                                Your browser does not support the audio element.
                                                        </audio>
                                                </div>
                                                <p class="text-sm font-semibold">Speaking test sample Q</p>
                                        </div>
                                </div>
                        </div>

                        <div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
                                <p class="text-white text-l mb-4">
                                        The content covered in the Reading Test and Writing Test of the
                                        <strong>IELTS General Training (GT)</strong> and <strong>IELTS Academic (Ac)</strong> 
                                        test is different: the General Training test materials are focused 
                                        on topics of general interest, whereas the topics covered in the 
                                        Academic test are more oriented towards professional work and study.
                                </p>
                                <p class="text-white">
                                        The content of the Listening Test and Speaking Test is the same
                                        for both tests.
                                </p>
                        </div>
                </section>

                <!-- Section 2: IELTS Test Assessment -->
                <section class="mb-12">
                        <h2 class="text-2xl font-bold text-center text-white mb-8">
                                IELTS Test Assessment
                        </h2>

                        <div class="space-y-8">
                                <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                                        <div class="text-wrap-container">
                                                <div class="floating-video-button mt-4">
                                                        <a
                                                                href="https://insideielts.oppyo.com/video/embed/1xg9n4onzg"
                                                                target="_blank"
                                                                title="InsideIELTS virtual examiner test assessment video"
                                                                class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 text-sm transition-colors"
                                                        >
                                                                Virtual Examiner Video
                                                        </a>
                                                </div>
                                                <p class="text-white mb-6">
                                                        The <strong>Listening Test and Reading Test</strong> are marked by qualified
                                                        <strong>IELTS</strong> administrators who manually score your answer sheet out of
                                                        <strong>40</strong> (<strong>1 mark</strong> for each correct answer). Your score is then converted to a band
                                                        on the <strong>IELTS 9-band scale</strong>. You can be awarded a full or half-band score, just as 
                                                        in the speaking and writing tests.
                                                </p>
                                                <p class="text-white mb-6">
                                                        The scoring system varies to a small degree with each <strong>IELTS</strong> test, but
                                                        broadly speaking, you need to score at least <strong>23/40</strong> for a
                                                        <strong>Band 6</strong> in the <strong>Listening and Reading Test</strong>, and
                                                        at least <strong>30/40</strong> for a <strong>Band 7</strong> award.
                                                </p>
                                                <p class="text-white">
                                                        The <strong>Speaking and Writing</strong> elements of the <strong>IELTS</strong> test are
                                                        graded by qualified <strong>IELTS</strong> examiners using the official
                                                        <strong>IELTS Speaking and Writing Assessment Rubrics</strong>. The
                                                        assessment rubrics allow the examiner to numerically rate your
                                                        language competency according to a fixed, pre-specified list of 
                                                        descriptors.
                                                </p>
                                        </div>
                                </div>

                                <!-- Band Scale -->
                                <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                                        <p class="text-white mb-4 text-center">
                                                The descriptive statements summarising a candidate's language ability for <strong>IELTS</strong> Band scores 
                                                4 - 9 are shown in the table below.
                                        </p>
                                        <div class="text-center">
                                                <img src="/BANDS.png" alt="IELTS Band Scale" class="mx-auto mb-4 w-full max-w-[700px] rounded border lightbox-image cursor-pointer"/>
                                                <p class="text-sm text-white mb-4"><strong>Band score descriptive statements</strong></p>
                                                <p class="text-sm text-white">Click to view full size</p>
                                        </div>
                                </div>

                                <!-- Speaking Assessment -->
                                <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                                        <h3 class="text-xl font-semibold text-white mb-4 text-center">
                                                Speaking Test Assessment Criteria
                                        </h3>
                                        <div class="text-center">
                                                <img src="/Speaking_rubric.png" alt="Speaking Test Assessment Criteria" class="mx-auto mb-4 w-full max-w-[700px] rounded border lightbox-image cursor-pointer"/>
                                                <p class="text-sm text-white">Click to view full size</p>
                                        </div>
                                </div>

                                <!-- Writing Assessment -->
                                <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                                        <h3 class="text-xl font-semibold text-white mb-4 text-center">
                                                Writing Task 2 Assessment Criteria
                                        </h3>
                                        <div class="text-center">
                                                <img src="/Writing_T2_rubic.png" alt="Writing Task 2 Assessment Criteria" class="mx-auto mb-4 w-full max-w-[700px] rounded border lightbox-image cursor-pointer"/>
                                                <p class="text-sm text-white">Click to view full size</p>
                                        </div>
                                </div>

                                <!-- Course Introduction -->
                                <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                                        <p class="text-white text-xl mb-6">
                                                If you are going to achieve your target band score, it is
                                                essential that you are familiar with the specific descriptors which constitute the
                                                <strong>assessment criteria</strong> for each part of the <strong>IELTS</strong> test.
                                                You can then focus on and improve each skill until you are
                                                confident and ready to sit the test.
                                        </p>
                                        <p class="text-white text-xl">
                                                Over the course of the following <strong>28 lessons</strong> you will be introduced to the content 
                                                and assessment descriptors for the four parts of the <strong>IELTS</strong> test, and complete practice exercises
                                                to demonstrate and reinforce the skills you need on your journey
                                                to <strong>IELTS</strong> success.
                                        </p>
                                </div>
                        </div>
                </section>

                <!-- Navigation -->
                <div class="text-center mt-12">
                        <a
                                href="/IETPP"
                                class="inline-flex items-center text-teal-600 dark:text-teal-400 hover:underline font-semibold"
                        >
                                ← Back to Course Contents
                        </a>
                </div>
</div>
        
        <!-- Lightbox Modal -->
        <div bind:this={lightboxModal} class="lightbox-overlay" style="display: none;" on:click={closeLightbox} on:keydown={handleKeydown}>
                <div class="lightbox-content" on:click|stopPropagation>
                        <button class="lightbox-close" on:click={closeLightbox}>&times;</button>
                        <img bind:this={lightboxImage} alt="" class="lightbox-img" />
                        <p bind:this={lightboxCaption} class="lightbox-caption"></p>
                </div>
        </div>
</div>

<style>
        .lightbox-image {
                cursor: pointer;
                transition: transform 0.2s ease;
        }
        
        .lightbox-image:hover {
                transform: scale(1.05);
        }
        
        .lightbox-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                backdrop-filter: blur(5px);
                justify-content: center;
                align-items: center;
                z-index: 1000;
        }
        
        .lightbox-content {
                position: relative;
                max-width: 90%;
                max-height: 90%;
                text-align: center;
        }
        
        .lightbox-img {
                max-width: 100%;
                max-height: 80vh;
                object-fit: contain;
                border-radius: 8px;
        }
        
        .lightbox-close {
                position: absolute;
                top: -40px;
                right: 0;
                background: none;
                border: none;
                color: white;
                font-size: 2rem;
                cursor: pointer;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
        }
        
        .lightbox-caption {
                color: white;
                margin-top: 1rem;
                font-size: 1rem;
                font-weight: 500;
        }
        
        /* Custom CSS for persistent text wrapping */
        .text-wrap-container {
                position: relative;
        }
        
        .floating-video-button {
                float: right;
                margin-left: 1rem;
                margin-bottom: 1rem;
        }
        
        /* Responsive design: On mobile (<768px), position button below text */
        @media (max-width: 767px) {
                .floating-video-button {
                        float: none;
                        margin-left: 0;
                        margin-bottom: 1rem;
                        text-align: center;
                        clear: both;
                }
                
                .text-wrap-container {
                        display: flex;
                        flex-direction: column;
                }
                
                .floating-video-button {
                        order: 2;
                }
                
        }
</style>