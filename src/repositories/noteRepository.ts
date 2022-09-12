import { prisma } from "../config/database";
import { CreateNoteData, NoteData } from "../types/types";

export async function insert(newNote:CreateNoteData) {
    await prisma.safeNotes.create({
        data:newNote,
    })
}
export async function getByUserAndTitle(userId:number,newTitle:string){
    const note:NoteData|null=await prisma.safeNotes.findFirst({
        where:{
            title:newTitle,
            userId:userId
        }
    })
    return note
}