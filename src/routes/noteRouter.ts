import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { validateToken } from "../middlewares/validateToken";
import { newNoteSchema } from "../schemas/noteSchemas";
import { createNote } from "../controllers/noteController";

const noteRouter=Router();
noteRouter.post('/notes/new',validateToken,validateSchemaMiddleware(newNoteSchema),createNote);

export default noteRouter