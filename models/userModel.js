import db from '../config/db.js';

// get all users
export const getAllUsers = async (req, res) => {
    try {
        const res = await db.query('SELECT * FROM users');
        return res.rows;
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

