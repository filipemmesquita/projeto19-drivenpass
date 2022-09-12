import { Router } from 'express';
import userRouter from './userRouter';
import credentialRouter from './credentialRouter';
import noteRouter from './noteRouter';
import cardRouter from './cardRouter';

const router = Router();
router.use(userRouter);
router.use(credentialRouter);
router.use(noteRouter);
router.use(cardRouter);

export default router;
