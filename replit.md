# Overview

InsideIELTS is an AI-powered IELTS preparation platform offering free speaking tests and practice materials. It leverages advanced AI to analyze student responses against IELTS criteria (Fluency & Coherence, Lexical Resource, Grammatical Range & Accuracy, Pronunciation), providing instant feedback and personalized exercises. The platform aims to be a lead generation tool and a valuable educational resource, helping users improve their IELTS speaking scores.

# Recent Changes

## October 30, 2025
- **Homepage Testimonial Carousel**: Replaced 2 static testimonials with stylish auto-playing carousel in Social Proof section
  - Features: 10 testimonials with student photos from around the world (Thailand, Uzbekistan, Indonesia, Pakistan, China, Egypt, Bangladesh, Ukraine, India, Nigeria)
  - Design: Circular student photos with cyan/teal gradient glow, large quote icon, horizontal card layout (image left, text right)
  - Navigation: Left/Right chevron buttons, dot indicators at bottom, auto-play every 5 seconds, pause on hover
  - Content: Real student testimonials with names, locations, and band score achievements (Band 6→7.5, Band 8.0 speaking, etc.)
  - Animation: Smooth slide transitions (700ms duration), responsive design (stacks vertically on mobile)
  - Images: Copied from attached_assets/Testimonials to static/testimonials folder for proper serving
- **IETPP Signup Hero Section**: Created eye-catching Hero Section for /IETPP/signup page
  - Content: "Master All 4 IELTS Skills with Expert Guidance" headline with teal highlight, program benefits checklist
  - Features: 2x2 grid showcasing all 4 IELTS skills (Listening, Reading, Speaking, Writing) with icons and images
  - Design: Gradient background (teal-blue-indigo), rotated card effect with cyan/teal gradient shadow, skill-specific color themes
  - Components: FlowbiteCard, Check icons from Lucide, Headphones/BookOpen/Mic/PenTool skill icons
  - Images: IETPP practice screenshots for each skill from static/IETPP/pics folder
  - Layout: Fully responsive (left column: content/CTA, right column: 4-skill grid card)
- **Listening Quicktest Updates**: Completed listening quicktest page with correct answer key
  - Content: Space Traffic Management topic, 10 summary completion questions
  - Answers: technical, cheap, thousands, identification, tracking, military, location, prediction, database, trust
  - Features: Instructions screen, 10-minute timer (MM:SS format), audio player with controls

## October 17, 2025
- **Writing Page Hero Section**: Added Hero Section to /writing page between Header and Test Overview
  - Content: "Get your Writing Score in just 10 minutes" headline with teal highlight, writing icon, test card
  - Features: "Complete one writing task", "Get AI-powered band score", "Receive detailed feedback" with checkmarks
  - Design: Gradient background (teal-blue-indigo), rotated card effect, teal CTA button to /writing/practice
  - Components: FlowbiteCard, List, Li, Check icon from lucide-svelte, tracking analytics on test start
  - Structure: Matches speaking page pattern for consistent user experience across skill sections
- **Record Page Heading Styling**: Enhanced "IE SPEAKING Quick-Test" heading with cyan gradient background
  - Design: Gradient from cyan-600 to teal-600 to cyan-700, glowing shadow effect (shadow-cyan-500/30)
  - Style: Extra-large rounded corners, cyan border with 50% opacity, generous padding, larger text size
  - Result: Eye-catching gradient badge with glowing cyan aura matching the cyan/teal theme

## October 15, 2025
- **Speaking Test Instructions Screen**: Added comprehensive instructions screen to lesson05-iv matching Reading/Listening Test format
  - Features: Test instructions (11-14 minutes, 3 Part 1 questions, 45 seconds per response), video/audio recording options, analysis criteria
  - Sections: Question 1-3 breakdown with 45-second time limits for each Part 1 topic
  - Navigation: "Start Speaking Test" button initiates test, instructions screen controlled by showInstructions state
  - Structure: Instructions → VideoPreference → Test content flow, seamless user experience
- **Listening Test Instructions Screen**: Added comprehensive instructions screen to lesson05-i matching Reading Test (lesson05-ii) format
  - Features: Test instructions (35 minutes, 40 questions, 4 sections), section breakdown (Section 1: Form Completion, Section 2: Sentence & Plan, Section 3: Multiple Choice, Section 4: Note Completion)
  - Navigation: "Start Listening Test" button initiates test, instructions screen controlled by showInstructions state
  - Structure: Consistent with Reading Test pattern - instructions → test content → modals → footer navigation
- **Speaking Page Enhancement**: Added Hero Section from homepage to /speaking page between Header and Test Overview
  - Content: Compelling headline "Know your IELTS Band Score in under 3 minutes", key benefits with checkmarks, CTA buttons
  - Features: Left column with value proposition and list, right column with IELTS Speaking Test card, responsive layout
  - Components: Replaced Flowbite Heading/P components with standard HTML tags to avoid import issues
  - Design: Gradient background, teal color scheme, fully responsive (stacks on mobile, side-by-side on desktop)

## October 07, 2025
- **Lesson 04(iv) Skill Check**: Created comprehensive skill check page for Speaking PR
  - Content: Listen and repeat Native Speaker responses task, focus on rhythm/intonation/chunking
  - Features: Native Speaker Interview video (NS_INT2_L2cut.mp4), link to NS-INT Level 2 practice, NS_INT-pic.png image with lightbox, VE Rated Interview #2 link
  - Task: Practice reproducing native speaker pronunciation features then record full interview for rating
  - Navigation: Connected lesson04(iv) → skill-check → Contents (next)
- **Lesson 04(iv) - SPEAKING Pronunciation**: Created comprehensive skills practice lesson page matching lesson04(i) format exactly
  - Content: PR criterion assessment, four descriptors (phonological features, rhythm/stress/intonation, clarity/mispronunciation, ease of understanding), rubric table, IETPP Level 2 pronunciation focus
  - Features: VE video button (vyo934gzvg), speaking rubric with lightbox (B4-B8 progression), IETPP Level 2 screenshot showing phrase breakdown, Skill Check link
  - Media: Integrated S_Table-PR.png rubric, PR_NSint-pic.png showing Level 2 pronunciation interface from static/LESSONS/les04/04(iv)
  - Sections: Pronunciation (gray background with speaking icons)
  - Navigation: Connected lesson04(iii)/skill-check → lesson04(iv) → skill-check (next)
- **Lesson 04(iii) Skill Check**: Created comprehensive skill check page for Speaking GRA
  - Content: Task to rewrite four B5 example speaking test responses to produce grammatically correct complex sentences
  - Features: 4 images with lightbox (SC_GRA1-4.png showing B5 responses with errors), textareas for corrected answers, upload button
  - Each question shows original response with errors and space for student to rewrite correctly
  - Navigation: Connected lesson04(iii) → skill-check → lesson04(iv)
- **Lesson 04(iii) - SPEAKING Grammatical Range & Accuracy**: Created comprehensive skills practice lesson page matching lesson04(i) format exactly
  - Content: GRA criterion assessment, descriptors, rubric table, B5 level example with errors
  - Features: VE video button, speaking rubric with lightbox, example transcript showing grammatical errors (red) vs corrected version (green), Skill Check link
  - Media: Integrated S_Table-GRA.png rubric, GRA_example.png showing error analysis from static/LESSONS/les04/04(iii)
  - Sections: Grammatical Range & Accuracy (teal background with speaking icons)
  - Navigation: Connected lesson04(ii)/skill-check → lesson04(iii) → lesson04(iv) (next)
- **Lesson 04(ii) Skill Check**: Created comprehensive skill check page for Speaking LR
  - Content: Part 1 question on topic 'your country', task instructions, VE Quick Question
  - Features: 2 images with lightbox (Part 1 question + Quick Question card), link to VE Quick Question recording (qid=3)
  - Note about high-level vocabulary usage and practice recommendations
  - Navigation: Connected lesson04(ii) → skill-check → lesson04(iii)
- **Lesson 04(ii) - SPEAKING Lexical Resource**: Created comprehensive skills practice lesson page matching lesson04(i) format exactly
  - Content: LR criterion assessment, descriptors, rubric table, native speaker interview example
  - Features: VE video button, speaking rubric with lightbox, NS interview video (LR - Shoes), Skill Check link
  - Media: Integrated S_Table-LR.png rubric, NS_INT3_L4cut.mp4 video from static/LESSONS/les04/04(ii)
  - Sections: Lexical Resource (gray background with speaking icons)
  - Navigation: Connected lesson04(i)/skill-check → lesson04(ii) → lesson04(iii) (next)

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend

Built with SvelteKit 5, Svelte 5, TypeScript, and TailwindCSS v4 (OKLCH color space) for a modern, responsive, and component-based UI. Features include Flowbite Svelte components, dark/light mode, and responsiveness across devices. The routing supports various IELTS skill areas and an admin interface.

## Backend

Utilizes Cloudflare Workers for serverless functions, edge computing, and SSR. It employs a hooks system for request processing and authentication, with API routes handling uploads, analysis, and TTS. Cloudflare Queues manage background AI analysis.

## Data Storage

Cloudflare D1 (SQLite) stores user sessions, recordings metadata, and AI analysis data. Cloudflare R2 Object Storage holds media files (audio/video recordings) and cached analysis. Cloudflare KV provides session storage and caching.

## AI and Analysis Pipeline

Integrates OpenAI services (Whisper Large V3 Turbo for transcription, GPT-4o Mini for IELTS criteria analysis and scoring, GPT-4o Audio Preview for TTS) to provide a sophisticated AI analysis. The workflow includes audio transcription, pronunciation analysis, comprehensive IELTS scoring, and personalized exercise generation, with background processing via Cloudflare Queues and caching/optimization through Cloudflare AI Gateway.

## Authentication and Authorization

Basic HTTP authentication secures admin areas. Session-based tracking uses HTTP-only cookies, focusing on anonymous usage with email collection rather than complex user management.

## Email and Communication

Postmark handles transactional emails for test results and confirmations. Brevo manages marketing automation and user engagement tracking.

## Analytics and Monitoring

Google Tag Manager and Google Analytics 4 provide comprehensive user journey tracking, conversion analysis, and behavior insights. Sentry monitors errors and performance across client and server environments.

# External Dependencies

## AI and Language Processing Services

- **OpenAI API**: Transcription (Whisper), AI analysis (GPT-4o Mini), TTS (GPT-4o Audio Preview).
- **AssemblyAI**: Alternative transcription.
- **Cloudflare AI Gateway**: API optimization and caching.

## Cloud Infrastructure

- **Cloudflare Workers**: Serverless compute.
- **Cloudflare D1**: Distributed SQLite database.
- **Cloudflare R2**: Object storage.
- **Cloudflare KV**: Key-value storage.
- **Cloudflare Queues**: Background processing.

## Communication Services

- **Postmark**: Transactional email.
- **Brevo**: Marketing automation.

## Analytics and Monitoring

- **Google Tag Manager**: Event tracking.
- **Google Analytics 4**: User behavior analytics.
- **Sentry**: Error monitoring and performance.

## UI and Styling Libraries

- **TailwindCSS**: Utility-first CSS framework.
- **Flowbite Svelte**: UI component library.
- **Lucide Svelte**: Icon library.

## Content Processing

- **DOMPurify**: HTML sanitization.
- **Marked**: Markdown processing.
- **Zod**: Runtime type validation.