import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async () =>{
  try {

    const connectInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`Connected Succesfully !! ${connectInstance.connection.host}`);
    
    
  } catch (error) {
    console.log("ERROR: ",error)
    process.exit(1)
  }
}

export default connectDB