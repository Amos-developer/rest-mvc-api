import express from 'express';
import * as userController from '../controllers/userController.js';

const router = express.Router();

// Define routes
router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);

export default router;