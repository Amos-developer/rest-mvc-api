import express from 'express';
import * as userController from '../controllers/userController.js';

const router = express.Router();

// Define routes
router.get('/', userController.getUsers);

export default router;