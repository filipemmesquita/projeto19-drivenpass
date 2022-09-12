import { Request, Response } from "express";
import * as credentialServices from '../services/credentialServices'

export async function createCredential(req:Request,res:Response){
    const credentialData={
        title:req.body.title,
        url:req.body.url,
        userName:req.body.userName,
        password:req.body.password,
        userId:res.locals.userData.userId}
    await credentialServices.insertCredential(credentialData);
    return res.sendStatus(201);
}

export async function getAllCredentials(req:Request,res:Response) {
    const userId:number=Number(res.locals.userData.userId);
    const credentials=await credentialServices.getAllCredentials(userId);
    return res.status(200).send(credentials);    
}
export async function getSingleCredential(req:Request,res:Response){
    const userId:number=Number(res.locals.userData.userId);
    const credentialId:number=Number(req.params.credentialId);
    const credential=await credentialServices.getSingleCredential(userId,credentialId);
    return res.status(200).send(credential);
}