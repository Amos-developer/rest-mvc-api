import express from 'express';
import './config/db.js'; // Ensure the database connection is established
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.listen(()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})