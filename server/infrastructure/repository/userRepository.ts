import User from '../models/userModel'

export class userrepostiry {

    async register(firstname:string,lastname:string,email:string,password:string){

    const user=new User({
        firstname,
        lastname,
        email,
        password
    })

   await  user.save()

   return user

    }
}