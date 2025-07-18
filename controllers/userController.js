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