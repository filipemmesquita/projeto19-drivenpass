import { Request, Response } from "express";
import * as cardServices from '../services/cardServices'

export async function createCard(req:Request,res:Response){
    const cardData={
        title:req.body.title,
        number:req.body.number,
        holderName:req.body.holderName,
        cvc:req.body.cvc,
        expiryDate:req.body.expiryDate,
        password:req.body.password,
        isVirtual:req.body.password ? true : false,
        type:req.body.type,
        userId:Number(res.locals.userData.userId)
    }
    await cardServices.insertCard(cardData);
    return res.sendStatus(201);
}