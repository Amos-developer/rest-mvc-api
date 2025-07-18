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

// get user by ID
export const getUserById = async (id) =>{
    try{
        const res = await db.query('SELECT * FROM users WHERE id = $1', [id]);
        return res.rows[0];
    }catch (error) {
        console.error('Error fetching user by ID:', error);
        throw new Error('Internal Server Error');
    }
}

// Create a new user
export const createUser = async (userData) => {
    try {
        const { firstname, lastname, email, phone, password } = userData;
        const res = await db.query(
            'INSERT INTO users (firstname, lastname, email, phone, password) VALUES ($1, $2, $3, $4, $5) RETURNING *',
             [firstname, lastname, email, phone, password]
            );
        return res.rows[0];
    } catch (error) {
        console.error('Error creating user:', error);
        throw new Error('Internal Server Error');
    }
};

// Update a user by ID
export const updateUserById = async (id, userData) => {
    try {
        const { firstname, lastname, email, phone, password } = userData;
        const res = await db.query(
            'UPDATE users SET firstname = $1, lastname = $2, email = $3, phone = $4, password = $5 WHERE id = $6 RETURNING *',
            [firstname, lastname, email, phone, password, id]
        );
        return res.rows[0];
    } catch (error) {
        console.error('Error updating user:', error);
        throw new Error('Internal Server Error');
    }
};