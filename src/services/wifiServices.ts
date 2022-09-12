import * as wifiRepository from '../repositories/wifiRepository'
import { CreateWifiData, WifiData, WifiDataArray } from '../types/types';

import Cryptr from "cryptr";

const cryptr= new Cryptr(process.env.CRYPTR_KEY??"")


export async function insertWifi(data:CreateWifiData){
    const newWifi:CreateWifiData=data;
    newWifi.password=cryptr.encrypt(data.password);
    await wifiRepository.insert(newWifi);
}
export async function getAllWifis(userId:number){
    const wifis:WifiDataArray[]=await wifiRepository.getAllByUser(userId);
    if(wifis.length===0)
        throw{type:404,message:"No Wifi Was found."}
    return wifis;
}
export async function getSingleWifi(userId:number,wifiId:number){
    const wifi:WifiData|null=await wifiRepository.getById(wifiId,userId);
    if(!wifi)
        throw{type:404,message:"No Wifi was found."}
    
    wifi.password=cryptr.decrypt(wifi.password)
    return wifi;
}