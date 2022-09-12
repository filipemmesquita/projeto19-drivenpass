import { prisma } from "../config/database";
import { CreateUserData, UserData } from "../types/types";

export async function insert(userData:CreateUserData) {
    await prisma.users.create({
        data:userData
    });
}
export async function getByEmail(email:any){
    const user:UserData|null=await prisma.users.findFirst({
        where:{
            email:email,
        },
        select:{
            id:true,
            email:true,
            password:true
        }
    })
    return user;
}