import mongoose from "mongoose";
 
export const databaseConnection = async (): Promise<void> => {
    try {
      await mongoose.connect("mongodb://127.0.0.1/GigNook");
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB", error);
      throw error
    }
  };



export default databaseConnection
