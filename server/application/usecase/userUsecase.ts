
export class userUsecase {
    private userrepostiry:any;
    constructor(repository:any){
        this.userrepostiry=repository
    }

    async userRegister(firstname:string,lastname:string,email:string,password:string){
   const user=this.userrepostiry.register(firstname,lastname,email,password)
    }
}