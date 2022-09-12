import jwt from "jsonwebtoken";
import { Request, Response,NextFunction } from "express";
import { UserData } from "../types/types";

export async function validateToken(req:Request,res:Response,next:NextFunction){
    const authorization = req.headers.authorization;
    const token = authorization?.replace("Bearer ","");

    if(!token)
        throw{type:401,message:"No token."};
    
    try{
        const secretKey=process.env.JWT_SECRET??"";
        const userData=jwt.verify(token,secretKey)
        res.locals.userData=userData;
    }
    catch{
        throw{type:401,message:"Invalid Session."}
    }
    return next()
}