# Notion Clone Project TODO

## Phase 0: Deep Dive & Core Architecture
- [x] Create TODO.md for tracking progress
- [x] Create PRD flowchart
- [x] Study Notion's UI/UX patterns
- [x] Design core backend architecture
  - [x] Define MongoDB schemas (User, Workspace, Page, Block)
  - [x] Plan API endpoints structure
- [x] Setup development environment
  - [x] Initialize git repository
  - [x] Setup Node.js with TypeScript
  - [x] Configure MongoDB
  - [x] Setup basic Express.js server
- [x] Setup frontend environment
  - [x] Create React project with Vite
  - [x] Configure TypeScript
  - [x] Setup Tailwind CSS
  - [x] Install necessary dependencies

## Phase 1: MVP - Basic Page Editing & Hierarchy
### Authentication
- [x] Implement JWT-based authentication
- [x] Setup password hashing (bcrypt)
- [x] Create login/register endpoints
- [x] Implement session management
- [ ] Create frontend authentication components
  - [ ] Login form
  - [ ] Registration form
  - [ ] Protected route wrapper
  - [ ] Authentication context/store

### Core Page Features
- [ ] Implement basic CRUD for pages
- [ ] Setup sidebar hierarchy (without drag/drop)
- [ ] Implement essential block types:
  - [ ] Text blocks
  - [ ] Headings (H1-H3)
  - [ ] Lists (Bulleted, Numbered)
  - [ ] Code blocks
- [ ] Setup basic content editor (Tiptap/Slate)

## Phase 2: Expanding Core Features
### Enhanced Block Types
- [ ] Implement Images blocks
- [ ] Add Callout blocks
- [ ] Add Divider blocks
- [ ] Implement Toggle blocks

### Interactive Features
- [ ] Add drag & drop for pages
- [ ] Implement block reordering
- [ ] Setup basic inline database (Table view)
- [ ] Implement basic sharing (view-only links)

## Phase 3: AI Integration - Auto Tag Generator
- [ ] Setup OpenAI API integration
- [ ] Implement content analysis system
- [ ] Create tag suggestion algorithm
- [ ] Design and implement tag UI
- [ ] Add tag management system

## Phase 4: AI Integration - Workspace Q&A 
- [ ] Setup embedding pipeline
- [ ] Implement content chunking system
- [ ] Create vector search functionality
- [ ] Setup RAG system
- [ ] Design and implement Q&A interface

## Phase 5: AI Integration - Auto-Linker
- [ ] Implement real-time content analysis
- [ ] Create semantic similarity search
- [ ] Design suggestion UI
- [ ] Add auto-linking functionality
- [ ] Implement link management system

## Phase 6: AI Integration - Knowledge
- [ ] Design graph visualization system
- [ ] Implement node relationship logic
- [ ] Create interactive graph UI
- [ ] Add filtering and search capabilities
- [ ] Implement graph navigation features

## Future Phases
- [ ] Full database functionality
  - [ ] All view types
  - [ ] Advanced properties
  - [ ] Relations and rollups
- [ ] Real-time collaboration
- [ ] Advanced sharing & permissions
- [ ] Comments system
- [ ] Version history
- [ ] Notifications
- [ ] Performance optimization at scale 