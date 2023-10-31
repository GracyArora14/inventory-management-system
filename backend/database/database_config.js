import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();

// Access the MongoDB URL from the environment variables
const mongoUrl = process.env['MONGO_URL']

async function connect(){
   mongoose.set('strictQuery',true)
const db = await  mongoose.connect(mongoUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

console.log("Database Connected")
return db
}

export default connect ;
