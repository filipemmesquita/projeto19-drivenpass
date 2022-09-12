import { prisma } from "../config/database";
import { CreateCredentialData, CredentialData, CredentialDataArray } from "../types/types";

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
export async function getAllByUser(userId:number):Promise<CredentialDataArray[]> {
    const credentials:CredentialDataArray[] = await prisma.webCredentials.findMany({
        where:{
            userId:userId,
        },
        select:{
            id:true,
            title:true,
            url:true,
            userName:true,
            userId:true,
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
export async function deleteById(id:number) {
    await prisma.webCredentials.delete({
        where:{
            id:id,
        }
    })
    
}
