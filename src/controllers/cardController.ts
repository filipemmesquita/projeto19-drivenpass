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
        isVirtual:req.body.isVirtual ? true : false,
        type:req.body.type,
        userId:Number(res.locals.userData.userId)
    }
    await cardServices.insertCard(cardData);
    return res.sendStatus(201);
}
export async function displayAllCards(req:Request,res:Response){
    const userId:number=Number(res.locals.userData.userId)
    const cards=await cardServices.getAllCards(userId);
    return res.status(200).send(cards);
}

//const cardId:number=Number(req.params.noteId);