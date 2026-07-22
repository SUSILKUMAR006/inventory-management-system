import mongoose from 'mongoose';

const connectDB = async()=>{

    try{
    const connect  = await mongoose.connect("mongodb+srv://susil:2006@cluster0.dzpsocs.mongodb.net/?appName=Cluster0");
    console.log(`MongoDB Connected Successfully!!!`);

    }catch(err){
        console.log(err.message);
        process.exit(1);

    }
}


export default connectDB;
