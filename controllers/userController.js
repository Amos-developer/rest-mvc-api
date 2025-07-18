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

export const createUser = async (req, res) => {
  const userData = req.body;
  try {
    const newUser = await User.createUser(userData);

    // Console the newly created user for debugging
    console.log("New user created: " + newUser);
    res.status(201).json(newUser);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create user", error: error.message });
  }
};

export const updateUser = async (req, res) => {
    console.log(req.body);
    const userId = req.params.id;
    const userData = req.body;
    try {
        const updatedUser = await User.updateUserById(userId, userData);

        // Console the updated user for debugging
        console.log("User updated: " +updatedUser);
        res.json(updatedUser);

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to update user', error: error.message });
    }
};

