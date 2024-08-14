import express from 'express'
// import { signup, userController } from '../controller/userController';
import { userController } from '../controller/userController';
import { userrepostiry } from '../../infrastructure/repository/userRepository';
import { userUsecase } from '../../application/usecase/userUsecase';
const router=express.Router()

const repostiry=new userrepostiry()
const usecase=new userUsecase(repostiry)
const controller=new userController(usecase)

router.post('/register',controller.userRegister.bind(controller))


export default router;