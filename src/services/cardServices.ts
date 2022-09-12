import { CreateCardData, CardData } from "../types/types";
import * as cardRepository from '../repositories/cardRepository'
import Cryptr from "cryptr";

const cryptr= new Cryptr(process.env.CRYPTR_KEY??"")

export async function insertCard(data:CreateCardData){
    const cardAlreadyExists=await cardRepository.getByUserAndTitle(data.userId,data.title);
    if(cardAlreadyExists)
        throw{type:409,message:"A Card with this title already exists."}
    const encryptedPassword=cryptr.encrypt(data.password);
    const encryptedCvc=cryptr.encrypt(data.cvc);
    const newCard:CreateCardData=data;
    newCard.password=encryptedPassword;
    newCard.cvc=encryptedCvc;

    await cardRepository.insert(newCard);
}