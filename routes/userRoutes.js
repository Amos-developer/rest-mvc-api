import express from 'express';
import * as userController from '../controllers/userController.js';

const router = express.Router();

// Define routes
router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);

export default router;