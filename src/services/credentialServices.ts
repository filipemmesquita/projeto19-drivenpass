import { CreateCredentialData } from "../types/types";
import * as credentialRepository from '../repositories/credentialRepository';
import Cryptr from "cryptr";

const cryptr= new Cryptr(process.env.CRYPTR_KEY??"")

export async function insertCredential(data:CreateCredentialData){
    const credentialAlreadyExists=await credentialRepository.getByUserAndTitle(data.userId,data.title);
    if(credentialAlreadyExists)
        throw{type:409,message:"A Credential with this title already exists."};
    console.log(credentialAlreadyExists)
    const encryptedPassword=cryptr.encrypt(data.password);
    const credentialData:CreateCredentialData={
        title:data.title,
        url:data.url,
        userName:data.userName,
        password:encryptedPassword,
        userId:data.userId
    }
    await credentialRepository.insert(credentialData);
}