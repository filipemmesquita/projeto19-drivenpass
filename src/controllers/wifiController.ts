import { Request, Response } from "express";
import * as wifiServices from '../services/wifiServices';

export async function createWifi(req:Request,res:Response){
    const wifiData={
        wifiName:req.body.wifiName,
        title:req.body.title,
        password:req.body.password,
        userId:res.locals.userData.userId,
    }
    await wifiServices.insertWifi(wifiData);
    return res.sendStatus(201);
}
export async function displayAllWifis(req:Request,res:Response){
    const userId:number=Number(res.locals.userData.userId);
    const wifis=await wifiServices.getAllWifis(userId);
    return res.status(200).send(wifis);
}
export async function displaySingleWifi(req:Request,res:Response) {
    const userId:number=Number(res.locals.userData.userId);
    const wifiId:number=Number(req.params.wifiId);
    const wifi=await wifiServices.getSingleWifi(userId,wifiId);
    return res.status(200).send(wifi);    
}
export async function deleteSingleWifi(req:Request,res:Response) {
    const userId:number=Number(res.locals.userData.userId);
    const wifiId:number=Number(req.params.wifiId);
    const wifi=await wifiServices.deleteWifi(userId,wifiId);
    return res.sendStatus(200);    
}