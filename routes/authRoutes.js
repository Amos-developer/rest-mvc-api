import express from "express";

import { registerUser, login } from "../controllers/authController.js";

import { registerValidation } from "../validators/userValidators.js";

import { validateRequest } from "../middleware/validationMiddleware.js";

const router = express.Router();

router.post("/register", registerValidation, validateRequest, registerUser);

router.post("/login", login);

export default router;
