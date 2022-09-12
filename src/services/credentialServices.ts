import { CreateCredentialData, CredentialData } from "../types/types";
import * as credentialRepository from '../repositories/credentialRepository';
import Cryptr from "cryptr";

const cryptr= new Cryptr(process.env.CRYPTR_KEY??"")

export async function insertCredential(data:CreateCredentialData){
    const credentialAlreadyExists=await credentialRepository.getByUserAndTitle(data.userId,data.title);
    if(credentialAlreadyExists)
        throw{type:409,message:"A Credential with this title already exists."};
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
export async function getAllCredentials(userId:number) {
    const credentials:CredentialData[]=await credentialRepository.getAllByUser(userId)    
    if(credentials.length===0)
        throw{type:404,message:"No Credential was found."}
    return credentials;
}
export async function getSingleCredential(userId:number,credentialId:number){
    const credential:CredentialData|null=await credentialRepository.getById(credentialId,userId);
    if(!credential)
        throw{type:404,message:"No Credential was found."}
    return credential;
}
export async function deleteCredential(userId:number,credentialId:number){
    const credential:CredentialData|null=await credentialRepository.getById(credentialId,userId);
    if(credential)
        await credentialRepository.deleteById(credentialId);
    else
        throw{type:404,message:"No Credential was found."}
}