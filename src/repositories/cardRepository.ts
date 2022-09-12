import { prisma } from "../config/database";
import { CreateCardData, CardData, CardDataArray } from "../types/types";

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
export async function getAllByUser(userId:number):Promise<CardDataArray[]> {
    const cards:CardDataArray[]=await prisma.cards.findMany({
        where:{
            userId:userId,
        },
        select:{
            id:true,
            title:true,
            number:true,
            holderName:true,
            expiryDate:true,
            isVirtual:true,
            type:true,
            userId:true,
        },
    })
    return cards;
}
export async function getById(id:number,userId:number):Promise<CardData|null>{
    const card:CardData|null=await prisma.cards.findFirst({
        where:{
            userId,
            id,
        }
    })
    return card;
}