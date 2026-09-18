import * as User from '../models/userModel.js';
import bcrypt from 'bcryptjs';

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.getAllUsers();

    return res.json(users);
  } catch (error) {
    next(error);
  }
};


export const getUser = async (req, res, next) => {
  const userId = req.params.id;

  try {
    const user = await User.getUserById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.json(user);
  } catch (error) {
    next(error);
  }
};


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


export const updateUser = async (req, res, next) => {
  const userId = req.params.id;

  try {
    const userData = {
      ...req.body,
    };

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
    next(error);
  }
};


export const deleteUser = async (req, res, next) => {
  const userId = req.params.id;

  try {
    const deletedUser = await User.deleteUserById(userId);

    if (!deletedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.json({
      message: "User deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
