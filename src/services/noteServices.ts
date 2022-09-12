import { CreateNoteData,NoteData } from "../types/types";
import * as noteRepository from '../repositories/noteRepository'

export async function insertNote(data:CreateNoteData){
    const noteAlreadyExists=await noteRepository.getByUserAndTitle(data.userId,data.title);
    if(noteAlreadyExists)
        throw{type:409,message:"A Note with this title already exists."}
    await noteRepository.insert(data);
}
export async function getAllNotes(userId:number){
    const notes:NoteData[]=await noteRepository.getAllByUser(userId);
    if(notes.length===0)
        throw{type:404,message:"No Note Was found."}
    return notes;
}