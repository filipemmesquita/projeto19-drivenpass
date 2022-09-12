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
