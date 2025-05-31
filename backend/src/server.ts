import mongoose from 'mongoose';
import app from './app';
import { config } from './config/config';

// Connect to MongoDB
mongoose.connect(config.database.uri)
  .then(() => {
    console.log('Connected to MongoDB');
    
    // Start the server
    app.listen(config.server.port, () => {
      console.log(`Server is running on port ${config.server.port}`);
      console.log(`Environment: ${config.server.nodeEnv}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  });

// Handle unhandled promise rejections
process.on('unhandledRejection', (err: Error) => {
  console.error('Unhandled Promise Rejection:', err);
  // Close server & exit process
  process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err: Error) => {
  console.error('Uncaught Exception:', err);
  // Close server & exit process
  process.exit(1);
}); 