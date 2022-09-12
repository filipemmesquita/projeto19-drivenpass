import { CreateUserData } from "../types/types";
import * as userRepository from '../repositories/userRepository';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function insertUser(body:CreateUserData) {
    const userAlreadyExists=await userRepository.getByEmail(body.email);
    if(userAlreadyExists){
        throw {type:409 ,message:"Email is already in use."}
    }
    const hashedPassword=bcrypt.hashSync(body.password,10);
    const userData:CreateUserData={
        email:body.email,
        password:hashedPassword
    };
    await userRepository.insert(userData)
}

export async function signIn(body:CreateUserData) {
    const user=await userRepository.getByEmail(body.email);
    if(!user)
        throw{type:401};
    
    const comparePassword = bcrypt.compareSync(body.password,user.password)
    if(!comparePassword)
        throw{type:401};
    const payload = {userId:user.id,email:user.email}
    const SECRET=process.env.JWT_SECRET??"";
    const token=jwt.sign(payload,SECRET)
    return token    
}