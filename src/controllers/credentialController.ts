import { Request, Response } from "express";
import * as credentialServices from '../services/credentialServices'
import { CreateCredentialData } from "../types/types";

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