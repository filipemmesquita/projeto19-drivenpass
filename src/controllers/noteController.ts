import { Request, Response } from "express";
import * as noteServices from '../services/noteServices'

export async function createNote(req:Request,res:Response){
    const noteData={
        title:req.body.title,
        note:req.body.title,
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
