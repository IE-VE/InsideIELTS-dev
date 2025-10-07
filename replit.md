# Overview

InsideIELTS is a comprehensive IELTS (International English Language Testing System) preparation platform built with SvelteKit and deployed on Cloudflare. The application provides AI-powered speaking tests and practice materials for IELTS candidates. The core feature is a free speaking test that uses advanced AI to analyze student responses across the four IELTS speaking criteria: Fluency & Coherence, Lexical Resource, Grammatical Range & Accuracy, and Pronunciation.

The platform serves as both a lead generation tool and a valuable educational resource, offering instant feedback on speaking performance and personalized improvement exercises. Users can complete a short speaking test, receive detailed AI analysis, and access targeted practice materials to improve their IELTS scores.

# Recent Changes

## October 07, 2025
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

## October 06, 2025
- **Lesson 04(i) Skill Check**: Created comprehensive skill check page for Speaking FLC
  - Content: Native speaker transcript with cohesive devices highlighted, task instructions, VE Quick Question
  - Features: 2 images with lightbox (transcript + question card), link to VE Quick Question recording
  - Navigation: Connected lesson04(i) → skill-check → lesson04(ii)
- **Lesson 04(i) - SPEAKING Fluency & Coherence**: Created comprehensive skills practice lesson page matching lesson-03(i) format exactly
  - Content: FLC criterion assessment, descriptors, rubric table, native speaker interview example
  - Features: VE video button, speaking rubric with lightbox, NS interview video (FLC - Entertainment), Skill Check link
  - Media: Integrated S_Table-FLC.png rubric, NS_INT1_P1cut.mp4 video from static/LESSONS/les04/04(i)
  - Sections: Fluency & Coherence (cyan background with speaking icons)
  - Navigation: Connected lesson04P3 → lesson04(i) → lesson04(ii) (next)
- **Lesson 04(iii) - Speaking Test Part 3: discussion**: Created comprehensive Part 3 lesson page matching lesson04P1 format exactly
  - Content: Part 3 structure & technique, example discussion responses, practice exercises
  - Features: 4-slide carousel with Part 3 discussion questions, 1 VE example response video, practice VE video
  - Media: Integrated 4 PNG images (P3 questions), 1 MP4 example video with thumbnail, practice video with thumbnail
  - Sections: Structure & technique (cyan), Example responses (teal), Practice (cyan)
  - Navigation: Connected lesson04P2 → lesson04P3 → lesson04(i) (next)
- **Lesson 04(ii) - Speaking Test Part 2: long-turn**: Created comprehensive Part 2 lesson page matching lesson04P1 format exactly
  - Content: Part 2 structure & technique, example long-turn response, practice exercises
  - Features: 4-slide carousel with Part 2 long-turn questions, 1 VE example response video, practice question with VE vid
  - Media: Integrated 4 PNG images (P2 questions), 1 MP4 example video with thumbnail, practice materials
  - Sections: Structure & technique (teal), Example response (cyan), Practice (teal)
  - Navigation: Connected lesson04P1 → lesson04P2 → lesson04P3 (next)
- **Lesson 04(i) - Speaking Test Part 1**: Created comprehensive Part 1 lesson page matching lesson-03T2 format exactly
  - Content: Part 1 structure & question types, example responses, practice exercises
  - Features: 12-slide carousel with Part 1 question frames, 2 VE example response videos, Quick-Question practice links
  - Media: Integrated 12 PNG images from static/LESSONS/les04/P1_Q/, 2 MP4 videos with thumbnails
  - Sections: Structure & question types (cyan), Example responses (teal), Practice (cyan-800)
  - Navigation: Connected lesson-04 → lesson04P1 → lesson04P2 (next)

## October 05, 2025
- **Lesson 04 - Introduction to the Speaking Test**: Created main intro page for Speaking Test lesson
  - Content: Speaking Test format & content (3 parts), assessment criteria (4 criteria), example interview
  - Features: 5 VE video links, Speaking rubric with lightbox, interview transcript PDF link
  - Media: Integrated images from static/speaking-images/ and static/LESSONS/les04/P1_Q/
  - Sections: Part 1 (4-5 mins intro questions), Part 2 (3-4 mins long turn), Part 3 (4-5 mins discussion)
  - Navigation: Connected from lesson-03-iv → lesson-04 → lesson04P1 (next)
- **Lesson 03(iv) Skill Check**: Created comprehensive skill check page for Writing GRA
  - Content: 4 comprehension questions covering structural range and grammar/punctuation
  - Features: 3 images with lightbox functionality, textareas for answers, upload button placeholder
  - Navigation: Connected skill-check pages lesson03-iii/skill-check ← lesson03-iv/skill-check → lesson-03

## October 01, 2025
- **Lesson 03(ii) - Writing Coherence & Cohesion**: Created new skills practice lesson page
  - Content: Coherence & Cohesion assessment criteria for writing tasks
  - Features: 2 video tutorials (intro and demo), rubric table, and skill check link
  - Media: Integrated 2 MP4 videos and 1 PNG rubric from static/LESSONS/les03/03(ii)
  - Navigation: Connected lesson flow from lesson03-i → lesson03-ii → lesson-03

## September 30, 2025
- **Lesson 03(i) - Writing Task Achievement/Task Response**: Created new skills practice lesson page
  - Content: Writing assessment criteria for Task 1 (Academic & General Training) and Task 2
  - Features: Video tutorials, rubric tables, model answer breakdowns, and skill check links
  - Media: Integrated 4 MP4 videos and 6 PNG images from static/LESSONS/les03/03(i)
  - Navigation: Connected lesson flow from lesson-03T2 → lesson03-i → lesson-03
- **Lesson 03(i) Skill Check Page**: Created comprehensive skill check page with 3 sections
  - Academic (SC3(i):Ac): 6 comprehension questions about Task Achievement
  - General Training (SC3(i):GT): 6 comprehension questions with letter scenario
  - Task 2 (SC3(i):T2): 5 comprehension questions about Task Response
  - All images integrated with lightbox functionality and upload placeholders
- **Image Responsiveness (Lesson 03 T2)**: Fixed all Section 2 and 3 images with `w-full` class for proper mobile/tablet resizing
- **Answer Sheet Width Constraint (Lesson 03 T1GT)**: Added 700px maximum width to answer sheets with centering (max-w-[700px] mx-auto)
- **Responsive Answer Sheet Positioning (Lesson 03 T1GT)**: Implemented adaptive layout for practice exercise answer sheets
  - Mobile (< 768px): Answer sheets display within the right column of the two-column grid layout
  - Desktop/Tablet (≥ 768px): Answer sheets display below the two-column layout for better space utilization
  - Used Tailwind's responsive classes (`md:hidden` and `hidden md:block`) with synchronized Svelte variable bindings
  - Both textarea instances bound to same variables (task1Answer, task2Answer) to preserve user input across breakpoints
- **Accessibility Improvements**: Removed `role="button"` attributes from non-interactive image elements to reduce accessibility warnings

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The application uses **SvelteKit 5** as the primary framework with a modern, component-based architecture. The frontend is built with:

- **Svelte 5** for reactive UI components
- **TypeScript** for type safety and better development experience
- **TailwindCSS v4** with OKLCH color space for advanced styling and theming
- **Flowbite Svelte** components for UI elements
- **Dark/light mode support** with CSS custom properties
- **Responsive design** optimized for mobile and desktop

The routing structure supports multiple IELTS skill areas:
- `/freetest` - Main speaking test application
- `/speaking/practice` - Speaking practice materials
- `/writing/practice` - Writing practice (placeholder)
- `/reading/practice` - Reading practice (placeholder)  
- `/listening/practice` - Listening practice (placeholder)
- `/admin` - Administrative interface with basic auth

## Backend Architecture

The backend leverages **Cloudflare Workers** and **Cloudflare's edge computing platform**:

- **SvelteKit adapters** for Cloudflare deployment
- **Server-side rendering (SSR)** with edge computing benefits
- **Hooks system** for request processing and authentication
- **API routes** for handling uploads, analysis, and TTS requests
- **Queue system** for background processing of AI analysis

## Data Storage Solutions

**Cloudflare D1 (SQLite)** serves as the primary database with a custom connector pattern:
- **Sessions table** - User session management and progress tracking
- **Recordings table** - Audio/video file metadata and transcriptions
- **Analysis table** - AI-generated feedback and scoring data

**Cloudflare R2 Object Storage** handles media files:
- Audio recordings (MP3 format)
- Video recordings (when enabled)
- Cached analysis results
- Training batch data for AI model improvement

**Cloudflare KV** provides session storage and caching capabilities.

## AI and Analysis Pipeline

The application implements a sophisticated AI analysis pipeline:

**OpenAI Integration:**
- **Whisper Large V3 Turbo** for audio transcription
- **GPT-4o Mini** for IELTS criteria analysis and scoring
- **GPT-4o Audio Preview** for text-to-speech functionality
- **Structured outputs** using Zod schemas for consistent analysis format

**Analysis Workflow:**
1. Audio transcription with context-aware prompting
2. Pronunciation analysis using GPT-4o Mini Audio
3. Comprehensive IELTS scoring across four criteria
4. Personalized exercise generation based on weaknesses
5. Background processing using Cloudflare Queues

**AI Gateway Integration** provides caching and optimization for API calls.

## Authentication and Authorization

- **Basic HTTP authentication** for admin areas using environment variables
- **Session-based user tracking** via HTTP-only cookies
- **No complex user management** - designed for anonymous usage with email collection

## Email and Communication

**Postmark** handles transactional emails:
- Test completion confirmations
- Detailed results delivery
- Follow-up sequences for lead nurturing

**Brevo** manages marketing automation and event tracking for user engagement.

## Analytics and Monitoring

**Google Tag Manager** provides comprehensive analytics:
- User journey tracking through the speaking test
- Conversion funnel analysis
- Session recording and user behavior insights

**Sentry** offers error monitoring and performance tracking across both client and server environments.

# External Dependencies

## AI and Language Processing Services

- **OpenAI API** - Core AI functionality including Whisper transcription, GPT-4o analysis, and audio generation
- **AssemblyAI** - Alternative transcription service for enhanced accuracy
- **Cloudflare AI Gateway** - API optimization and caching layer

## Cloud Infrastructure

- **Cloudflare Workers** - Serverless compute platform and edge deployment
- **Cloudflare D1** - Distributed SQLite database
- **Cloudflare R2** - Object storage for media files
- **Cloudflare KV** - Key-value storage for sessions and caching
- **Cloudflare Queues** - Background job processing

## Communication Services

- **Postmark** - Transactional email delivery with template management
- **Brevo** - Marketing automation and user engagement tracking

## Analytics and Monitoring

- **Google Tag Manager** - Event tracking and conversion analytics
- **Google Analytics 4** - User behavior analysis and funnel optimization
- **Sentry** - Error monitoring and performance tracking

## Development and Build Tools

- **Vite** - Build tool and development server
- **TypeScript** - Type checking and enhanced developer experience
- **ESLint + Prettier** - Code quality and formatting
- **Unplugin Icons** - Automatic icon imports and optimization

## UI and Styling Libraries

- **TailwindCSS** - Utility-first CSS framework with v4 features
- **Flowbite Svelte** - Pre-built component library
- **Lucide Svelte** - Icon library with tree-shaking support

## Content Processing

- **DOMPurify** - HTML sanitization for user-generated content
- **Marked** - Markdown processing for educational content
- **Zod** - Runtime type validation and schema definition