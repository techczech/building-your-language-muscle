---
name: "Building Your Language Muscle"
description: "Transforms a language-learning guide into deliberate-practice activities and an AI-enhanced companion."
categories: [content-distribution, web-app, built-by-ai, powered-by-ai]
updated: 2026-07-16
deployments:
  Appsite:
    "Building Your Language Muscle": https://buildingyourlanguagemuscle.edutools.fyi/
---
# Building Your Language Muscle

An interactive, AI-enhanced companion web application for the "Building Your Language Muscle" guide. This application transforms static content into a dynamic learning tool based on Deliberate Practice principles.

## 🌟 Features

*   **Interactive Reader**: A seamless reading experience with progress tracking, deep linking, and a responsive table of contents.
*   **AI Coach (Dominik)**: An integrated chat interface powered by **Google Gemini 2.5 Flash** that acts as a deliberate practice coach, answering questions based on the book's context.
*   **Smart Planning Tools**:
    *   **Resource Audit**: An interactive form that assesses your learning environment and generates a personalized AI report.
    *   **Sprint Builder**: Creates custom 6-week learning plans based on your CEFR level and time commitment.
    *   **Goal Tuner**: Analyzes vague learning goals and maps them to concrete CEFR levels using AI.
*   **Active Reading**:
    *   **Highlighting**: Select and save text.
    *   **Deep Linking**: Share links that scroll directly to specific sentences.
    *   **Notebook**: Export highlights as Markdown.
*   **Social Sharing**: Generate beautiful, downloadable quote cards with QR codes that link directly to the specific section of the text.
*   **Offline Support**: Client-side generation of the full book as an EPUB file.

## 🏗 Architecture

The application is built as a lightweight, client-side Single Page Application (SPA).

### Tech Stack

*   **Frontend Library**: React 19 (via ES Modules).
*   **Language**: TypeScript.
*   **Routing**: React Router DOM.
*   **Styling**: Tailwind CSS (via CDN).
*   **AI Integration**: Google GenAI SDK (`@google/genai`).
*   **Utilities**: `jszip` (EPUB generation), `qrcode` (Deep linking), `lucide-react` (Icons).

### Core Components

*   **`App.tsx`**: The main entry point handling the application shell, layout, routing, and global contexts (`ReadProgressContext`, `HighlightsContext`).
*   **`services/geminiService.ts`**: The bridge to the Gemini API. It handles client initialization and encapsulates prompt engineering for the Coach, Audit, and Planning tools.
*   **`bookContent.ts`**: Acts as the static CMS, containing the structured JSON representation of the book's HTML content.
*   **`SectionViewer.tsx`**: A complex component that renders HTML content, handles text selection/highlighting, and manages deep link scrolling logic using TreeWalkers.
*   **`ShareModal.tsx`**: Features a sophisticated HTML5 Canvas implementation to dynamically draw social media images with gradients, text wrapping, and QR codes client-side.

### Data Flow

1.  **Static Content**: Loaded instantly from `bookContent.ts` without external CMS calls.
2.  **Persistence**: User progress and highlights are stored in the browser's `localStorage`.
3.  **AI Services**: The app makes stateless API calls to Google Gemini for dynamic content generation. The `AICoach` maintains a temporary chat session history in memory.

## 🚀 Deployment

### Prerequisites

1.  **Google Cloud Project**: You must have a project with the Gemini API enabled.
2.  **API Key**: An API key is required to power the AI features.

### Environment Configuration

The application relies on the `process.env.API_KEY` variable. 

*   **In this environment**: The key is injected automatically.
*   **Standard Deployment**: If deploying to a hosting provider (Vercel, Netlify), ensure the build process replaces `process.env.API_KEY` with your actual key or utilizes a strictly scoped environment variable approach secure for client-side usage (or proxies requests through a backend).

### Build & Run

This project uses an **ES Module** architecture with `importmap` in `index.html`. 

*   **Development**: Can be served by any static file server or development environment that handles `.tsx` transpilation on the fly (e.g., Vite, standard AI Studio environment).
*   **Production**: For optimal performance on standard web hosting, a build step (using Vite, Webpack, or Parcel) is recommended to bundle the TypeScript files into static JavaScript assets.

## 📂 File Structure

*   `index.html`: Entry point, import maps, and Tailwind CDN.
*   `App.tsx`: Main router and layout logic.
*   `bookContent.ts`: The complete text of the guide.
*   `services/`:
    *   `geminiService.ts`: AI logic.
    *   `epubService.ts`: EPUB generation logic.
*   `components/`:
    *   `AICoach.tsx`: Chat interface.
    *   `ShareModal.tsx`: Canvas-based image generator.
    *   `AuditTool.tsx`, `SprintBuilder.tsx`, `GoalTuner.tsx`: Interactive AI tools.
