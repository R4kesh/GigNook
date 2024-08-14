import User from '../../infrastructure/models/userModel'
import bcryptjs from 'bcryptjs'
import { Request,Response,NextFunction } from 'express'

export const signup=async(req:Request,res:Response,next:NextFunction)=>{
    const {firstname,lastname,email,password}=req.body;
    const hashedPassword=bcryptjs.hashSync(password,10)
    const newUser=new User({firstname,lastname,email,password:hashedPassword})
    try{
        await newUser.save()
        res.status(201).json({message:"user created successfully"})
    }catch(error){
       next(error)
    }
}



export class userController{
    private userusecase:any;
    constructor(usecase:any){
        this.userusecase=usecase
    }

    async userRegister(req:Request,res:Response,next:NextFunction){
        const {firstname,lastname,email,password}=req.body;

        const user=await this.userusecase.userRegister(firstname,lastname,email,password)

        if(user){
            return res.status(201).json(user)
        }else{
            return res.status(400).json({error:"User not created"})
        }
    }



}
