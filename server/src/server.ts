import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import databaseConnection from "../config/database/connection";
import bodyParser from "body-parser"
import userController from '../presentation/routes/authRoute'

dotenv.config();

const port = process.env.PORT||5001


const app=express()
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
databaseConnection()

app.use("/api/user",userController)



app.listen(port,()=>{
    console.log(`Server started on ${port}`);
})