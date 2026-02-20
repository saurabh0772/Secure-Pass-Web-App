import mongoose from "mongoose";

const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
    }catch(err){
        console.log("MongoDB connection Error : ", err);
    }
}

export default connectDb;