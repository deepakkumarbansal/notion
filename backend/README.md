# Notion Clone Backend

Backend service for the Notion Clone project with AI features, built with Node.js, Express, TypeScript, and MongoDB.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory and copy the contents from `.env.example`. Update the values as needed.

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Start production server:
```bash
npm start
```

## Project Structure

```
src/
├── config/         # Configuration files and environment variables
├── controllers/    # Route controllers
├── middleware/     # Custom middleware
├── models/         # Mongoose models
├── routes/         # API routes
├── services/       # Business logic
├── utils/          # Utility functions
├── app.ts          # Express app setup
└── server.ts       # Server entry point
```

## API Documentation

(To be added as endpoints are implemented)

## Available Scripts

- `npm run dev`: Start development server with hot-reload
- `npm run build`: Build for production
- `npm start`: Start production server
- `npm run lint`: Run ESLint
- `npm run lint:fix`: Fix ESLint errors

## Environment Variables

- `PORT`: Server port (default: 5000)
- `NODE_ENV`: Environment (development/production)
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret for JWT tokens
- `JWT_EXPIRES_IN`: JWT token expiration
- `OPENAI_API_KEY`: OpenAI API key (for AI features)
- `ALLOWED_ORIGINS`: CORS allowed origins
- `LOG_LEVEL`: Logging level 