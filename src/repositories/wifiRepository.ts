import { prisma } from "../config/database";
import { CreateWifiData, WifiData, WifiDataArray } from "../types/types";

export async function insert(newWifi:CreateWifiData) {
    await prisma.wifis.create({
        data:newWifi
    })
}
export async function getByUserAndTitle(userId:number,newTitle:string){
    const wifi:WifiData|null=await prisma.wifis.findFirst({
        where:{
            title:newTitle,
            userId:userId
        }
    })
    return wifi
}
export async function getAllByUser(userId:number):Promise<WifiDataArray[]> {
    const wifis:WifiDataArray[]=await prisma.wifis.findMany({
        where:{
            userId:userId,
        },
        select:{
            id:true,
            title:true,
            wifiName:true,
            userId:true,
        }
    })
    return wifis;    
}
export async function getById(id:number,userId:number):Promise<WifiData|null> {
    const wifi:WifiData|null= await prisma.wifis.findFirst({
        where:{
            userId:userId,
            id:id,
        }
    })
    return wifi    
}