import * as User from '../models/userModel.js';

export const getUsers = async (req, res) => {
    try {
        const users = await User.getAllUsers(req, res);

        // Console all users for debugging
        console.log("All users: " +users);

        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch users', error: error.message });
    }
}

export const getUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.getUserById(userId);
        
        // Console the user for debugging
        console.log("User fetched by ID: " +user);
        res.json(user);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch user', error: error.message });
    }
}