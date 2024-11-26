import express from 'express';
import cors from 'cors';
import 'dotenv/config'  
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
//npm run server


//app config 
const app =express();
const port =process.env.PORT ||4000
connectDB()
connectCloudinary()

//middlewar
app.use(express.json())
app.use(cors()) // allow frontend to connect with backend

//api endpoints

app.get('/',(req,res)=>{
    res.send('Api is working .')

})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
 
})