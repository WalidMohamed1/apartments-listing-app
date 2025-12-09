import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initDatabase } from './database';
import apartmentsRouter from './routes/apartments';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

/**
 * Middleware Configuration
 */

// Enable CORS for all routes to allow frontend access
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

/**
 * API Routes
 */

// Mount apartment routes at /api/apartments
app.use('/api/apartments', apartmentsRouter);

/**
 * Health Check Endpoint
 * Used to verify that the backend server is running
 */
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Backend is running!' });
});

/**
 * Start Server
 * Initialize database and start Express server
 */
const startServer = async () => {
  try {
    // Initialize database tables
    await initDatabase();
    
    // Start listening on specified port
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

// Start the application
startServer();