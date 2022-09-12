import { prisma } from "../config/database";
import { CreateWifiData, WifiData, WifiDataArray } from "../types/types";

export async function insert(newWifi:CreateWifiData) {
    await prisma.wifis.create({
        data:newWifi
    })
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
export async function deleteById(id:number){
    await prisma.wifis.delete({
        where:{
            id:id,
        }
    })
}