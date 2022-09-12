import { Router } from 'express';
import { createUser,logIn }from '../controllers/userController';
import { newUserSchema,logInSchema } from '../schemas/userSchemas';
import { validateSchemaMiddleware } from './../middlewares/validateSchema';

const userRouter = Router();

userRouter.post('/users/new',validateSchemaMiddleware(newUserSchema),createUser);
userRouter.post('/users/login',validateSchemaMiddleware(logInSchema),logIn)



export default userRouter;
