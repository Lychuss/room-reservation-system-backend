import express from 'express';
import { duplicateAccount, registration } from '../middlewares/auth.middleware.js';
import { signup, login } from '../controllers/auth.controller.js';

const authRouter = express.Router();

authRouter.post('/signup', duplicateAccount, signup);
authRouter.post('/login', registration, login);

export default authRouter;