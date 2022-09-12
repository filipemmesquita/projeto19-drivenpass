import { CreateCardData, CardData, CardDataArray } from "../types/types";
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

export async function getAllCards(userId:number) {
    const cards:CardDataArray[]=await cardRepository.getAllByUser(userId)
    if(cards.length===0)
        throw{type:404,message:"No Card was found."}
    return cards;
}
export async function getSingleCard(userId:number,cardId:number) {
    const card:CardData|null=await cardRepository.getById(cardId,userId);
    if(!card)
        throw{type:404,message:"No Card was found."}
    card.cvc=cryptr.decrypt(card.cvc)
    card.password=cryptr.decrypt(card.password);
    return card;
}