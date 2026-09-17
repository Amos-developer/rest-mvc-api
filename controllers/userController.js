import * as User from '../models/userModel.js';
import bcrypt from 'bcryptjs';

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
  const userId = req.params.id;

  try {
    const userData = { ...req.body };

    // If password is being changed, hash it first
    if (userData.password) {
      userData.password = await bcrypt.hash(userData.password, 12);
    }

    const updatedUser = await User.updateUserById(userId, userData);

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.json(updatedUser);
  } catch (error) {
    console.error("Update user error:", error);

    return res.status(500).json({
      message: "Failed to update user",
    });
  }
};

export const deleteUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const deletedUser = await User.deleteUserById(userId);

        // Console the deleted user for debugging
        console.log("User deleted: " +deletedUser);
        res.json(deletedUser);

        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete user', error: error.message });
    }
};
