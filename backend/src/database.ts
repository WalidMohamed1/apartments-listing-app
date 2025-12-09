import { Pool } from 'pg';
import dotenv from 'dotenv';
import { seedDatabase } from './seed';
// Load environment variables
dotenv.config();
 
/**
 * PostgreSQL Connection Pool
 * Creates a pool of database connections for efficient query execution
 */
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
 
/**
 * Execute a SQL query with optional parameters
 * @param text - SQL query string
 * @param params - Array of query parameters
 * @returns Query result
 */
export const query = (text: string, params?: any[]) => {
  return pool.query(text, params);
};
 
/**
 * Initialize Database Schema
 * Creates the apartments table if it doesn't exist
 * This function is called on server startup
 */
export const initDatabase = async () => {
  try {
    // Create apartments table with all required columns
    await query(`
      CREATE TABLE IF NOT EXISTS apartments (
        id SERIAL PRIMARY KEY,
        unit_name VARCHAR(255) NOT NULL,
        unit_number VARCHAR(50) NOT NULL,
        project VARCHAR(255) NOT NULL,
        bedrooms INTEGER NOT NULL,
        bathrooms INTEGER NOT NULL,
        area DECIMAL(10, 2) NOT NULL,
        price DECIMAL(12, 2) NOT NULL,
        description TEXT,
        image_url VARCHAR(500),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
 
    // Check if table is empty
    const res = await query('SELECT COUNT(*) FROM apartments');
    const count = parseInt(res.rows[0].count);
   
    // If empty call seed
    if (count === 0) {
      console.log('🌱 Table is empty. Calling seed script...');
      await seedDatabase(query);
    } else {
      console.log('ℹ️ Database already has data. Skipping seed.');
    }
    console.log('✅ Database initialized successfully');
  } catch (error) {
    console.error('❌ Error initializing database:', error);
    throw error;
  }
};
 
export default pool;