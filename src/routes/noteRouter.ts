import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { validateToken } from "../middlewares/validateToken";
import { newNoteSchema } from "../schemas/noteSchemas";
import { createNote, displayAllNotes, displaySingleNote } from "../controllers/noteController";

const noteRouter=Router();
noteRouter.post('/notes/new',validateToken,validateSchemaMiddleware(newNoteSchema),createNote);
noteRouter.get('/notes/all',validateToken,displayAllNotes)
noteRouter.get('/notes/:noteId',validateToken,displaySingleNote)
export default noteRouter