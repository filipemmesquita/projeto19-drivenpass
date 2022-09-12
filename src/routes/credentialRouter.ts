import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { validateToken } from "../middlewares/validateToken";
import { createCredential, getAllCredentials, getSingleCredential } from "../controllers/credentialController";
import { newCredentialSchema } from "../schemas/credentialSchemas";

const credentialRouter = Router();
credentialRouter.post('/credentials/new',validateToken,validateSchemaMiddleware(newCredentialSchema),createCredential);
credentialRouter.get('/credentials/all',validateToken,getAllCredentials)
credentialRouter.get('/credentials/:credentialId',validateToken,getSingleCredential)

export default credentialRouter;