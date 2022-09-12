import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { validateToken } from "../middlewares/validateToken";
import { createCredential, getAllCredentials } from "../controllers/credentialController";
import { newCredentialSchema } from "../schemas/credentialSchemas";

const credentialRouter = Router();
credentialRouter.post('/credentials/new',validateToken,validateSchemaMiddleware(newCredentialSchema),createCredential);
credentialRouter.get('/credentials/all',validateToken,getAllCredentials)

export default credentialRouter;