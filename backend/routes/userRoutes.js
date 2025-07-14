// routes/userRoutes.js
import express from 'express';
import { getUserProfile, searchUsers } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/profile/:userId', getUserProfile);
userRouter.get('/users', searchUsers); // ✅ add this

export default userRouter;