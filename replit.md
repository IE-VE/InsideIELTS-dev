# Overview

InsideIELTS is an AI-powered IELTS preparation platform offering free speaking tests and practice materials. It leverages advanced AI to analyze student responses against IELTS criteria (Fluency & Coherence, Lexical Resource, Grammatical Range & Accuracy, Pronunciation), providing instant feedback and personalized exercises. The platform aims to be a lead generation tool and a valuable educational resource, helping users improve their IELTS speaking scores.

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