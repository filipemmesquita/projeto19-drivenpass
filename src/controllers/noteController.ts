import { Request, Response } from "express";
import * as noteServices from '../services/noteServices'

export async function createNote(req:Request,res:Response){
    const noteData={
        title:req.body.title,
        note:req.body.note,
        userId:Number(res.locals.userData.userId)
    }
    await noteServices.insertNote(noteData)
    return res.sendStatus(201);
}
export async function displayAllNotes(req:Request,res:Response){
    const userId:number=Number(res.locals.userData.userId);
    const notes=await noteServices.getAllNotes(userId);
    return res.status(200).send(notes);
}
export async function displaySingleNote(req:Request,res:Response) {
    const userId:number=Number(res.locals.userData.userId);
    const noteId:number=Number(req.params.noteId);
    const note=await noteServices.getSingleNote(userId,noteId);
    return res.status(200).send(note);    
}
export async function deleteNote(req:Request,res:Response){
    const userId:number=Number(res.locals.userData.userId);
    const noteId:number=Number(req.params.noteId);
    await noteServices.deleteNote(userId,noteId);
    return res.sendStatus(200)
}