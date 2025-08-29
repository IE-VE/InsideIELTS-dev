# Overview

InsideIELTS is a comprehensive IELTS (International English Language Testing System) preparation platform built with SvelteKit and deployed on Cloudflare. The application provides AI-powered speaking tests and practice materials for IELTS candidates. The core feature is a free speaking test that uses advanced AI to analyze student responses across the four IELTS speaking criteria: Fluency & Coherence, Lexical Resource, Grammatical Range & Accuracy, and Pronunciation.

The platform serves as both a lead generation tool and a valuable educational resource, offering instant feedback on speaking performance and personalized improvement exercises. Users can complete a short speaking test, receive detailed AI analysis, and access targeted practice materials to improve their IELTS scores.

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