import express from 'express';
import pool from './config/db.js'; // Ensure the database connection is established
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
dotenv.config();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/users/:id', userRoutes);


// Start server
const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})