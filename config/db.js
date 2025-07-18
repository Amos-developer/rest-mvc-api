import pkg from 'pg';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const { Pool } = pkg;

// Create a new pool instance with the database configuration
const pool = new Pool(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD ,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
    });

    
// Export the pool instance for use in other modules
export default pool;