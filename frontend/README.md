# Notion Clone Frontend

Frontend application for the Notion Clone project with AI features, built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Mantine for UI components
- React Router for routing
- TanStack Query for API data management
- Zustand for state management

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/    # Reusable UI components
├── hooks/         # Custom React hooks
├── pages/         # Page components
├── services/      # API services
├── store/         # Zustand store
├── types/         # TypeScript type definitions
├── utils/         # Utility functions
├── App.tsx        # Root component
└── main.tsx      # Entry point
```

## Features (To Be Implemented)

- [ ] Authentication
- [ ] Workspace Management
- [ ] Page Editor
- [ ] Block-based Content
- [ ] Real-time Collaboration
- [ ] AI Features Integration
  - [ ] Auto Tag Generator
  - [ ] Workspace Q&A
  - [ ] Auto-Linker
  - [ ] Knowledge Graph

## Development Guidelines

1. Follow the component structure:
   - Use TypeScript for all components
   - Implement proper prop types
   - Use functional components with hooks
   - Follow the established styling patterns

2. State Management:
   - Use Zustand for global state
   - Use React Query for API state
   - Use local state for component-specific state

3. Styling:
   - Use Tailwind CSS classes
   - Follow the established color scheme
   - Maintain consistency with Notion's design

4. Code Quality:
   - Write clean, maintainable code
   - Add proper comments where necessary
   - Follow established naming conventions
