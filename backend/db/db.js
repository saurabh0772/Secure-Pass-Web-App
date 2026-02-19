import mongoose from "mongoose";

const connectDb = async () => {
    try{
        await mongoose.connect(`mongodb+srv://saurabh:saurabh@cluster0.h92nwet.mongodb.net/?appName=Cluster0`);
        console.log("MongoDB connected successfully");
    }catch(err){
        console.log("MongoDB connection Error : ", err);
    }
}

export default connectDb;