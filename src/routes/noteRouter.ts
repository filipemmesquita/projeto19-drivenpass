import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { validateToken } from "../middlewares/validateToken";
import { newNoteSchema } from "../schemas/noteSchemas";
import { createNote, deleteNote, displayAllNotes, displaySingleNote } from "../controllers/noteController";

const noteRouter=Router();
noteRouter.post('/notes/new',validateToken,validateSchemaMiddleware(newNoteSchema),createNote);
noteRouter.get('/notes/all',validateToken,displayAllNotes)
noteRouter.get('/notes/:noteId',validateToken,displaySingleNote)
noteRouter.delete('/notes/:noteId',validateToken,deleteNote)
export default noteRouter