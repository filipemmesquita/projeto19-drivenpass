import { Router } from 'express';
import { createUser,logIn, testToken }from '../controllers/userController'
import { validateToken } from '../middlewares/validateToken';
import { newUserSchema,logInSchema } from '../schemas/userSchemas';
import { validateSchemaMiddleware } from './../middlewares/validateSchema';

const userRouter = Router();

userRouter.post('/users/new',validateSchemaMiddleware(newUserSchema),createUser);
userRouter.post('/users/login',validateSchemaMiddleware(logInSchema),logIn)
userRouter.get('/users/token',validateToken,testToken)



export default userRouter;
