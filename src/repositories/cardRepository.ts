import { prisma } from "../config/database";
import { CreateCardData, CardData } from "../types/types";

export async function insert(newCard:CreateCardData){
    await prisma.cards.create({
        data:newCard,
    })
}
export async function getByUserAndTitle(userId:number,newTitle:string) {
    const card:CardData|null= await prisma.cards.findFirst({
        where:{
            title:newTitle,
            userId:userId
        }
    })
    return card;
}