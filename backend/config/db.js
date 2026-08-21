import mongoose from "mongoose";


const connectDb=async()=>{
    try {
        if(!process.env.MONGO_URI){
            console.log("env not accessible")
            process.exit(1)
        }
    await mongoose.connect(process.env.MONGO_URI)
    console.log("mongodb connected")
    } catch (error) {
        console.log(error.message)
    }
}

export default connectDb