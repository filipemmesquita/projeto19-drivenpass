import { title } from "process";
import { prisma } from "../config/database";
import { CreateCredentialData, CredentialData } from "../types/types";

export async function insert(credentialData:CreateCredentialData) {
    await prisma.webCredentials.create({
        data:credentialData,
    });
}
export async function getByUserAndTitle(userId:string|number,newTitle:string):Promise<CredentialData|null> {
    const credential:CredentialData|null = await prisma.webCredentials.findFirst({
        where:{
            title:newTitle,
            userId:Number(userId),
        }
    })
    return credential;
}
export async function getAllByUser(userId:number):Promise<CredentialData[]> {
    const credentials:CredentialData[] = await prisma.webCredentials.findMany({
        where:{
            userId:userId,
        }
    })

    return credentials;
}
export async function getById(id:number,userId:number):Promise<CredentialData|null> {
    const credential:CredentialData|null= await prisma.webCredentials.findFirst({
        where:{
            userId:userId,
            id:id,
        }
    })

    return credential;
    
}
