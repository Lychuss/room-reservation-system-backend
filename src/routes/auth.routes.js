import express from 'express';
import { duplicateAccount } from '../middlewares/auth.middleware.js';
import { signup } from '../controllers/auth.controller.js';

const authRouter = express.Router();

authRouter.post('/', duplicateAccount, signup);

export default authRouter;