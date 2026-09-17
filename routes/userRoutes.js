import express from "express";

import * as userController from "../controllers/userController.js";

import { authenticate, selfOrAdmin, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

// ADMIN ONLY
router.get("/", authenticate, authorizeRoles("admin"), userController.getUsers);

// Authenticated user
router.get("/:id", authenticate, selfOrAdmin, userController.getUser);

// Authenticated user
router.put("/:id", authenticate, selfOrAdmin, userController.updateUser);

// ADMIN ONLY
router.delete(
  "/:id",
  authenticate,
  authorizeRoles("admin"),
  userController.deleteUser,
);

export default router;

// import express from 'express';
// import * as userController from '../controllers/userController.js';
// import * as authController from '../controllers/authController.js';

// const router = express.Router();

// // Define routes
// router.get('/', userController.getUsers);
// router.get('/:id', userController.getUser);
// router.post('/', userController.createUser);
// router.put('/:id', userController.updateUser);
// router.delete('/:id', userController.deleteUser);

// // Auth
// router.post('/register', authController.registerUser);
// router.post('/login', authController.login);

// export default router;
