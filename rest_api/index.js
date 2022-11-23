import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import Aauth_can from "./routes/authcan.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import userRoute from "./routes/users.js"
const app=express()
dotenv.config()
const conn=async()=>{
try {
    await mongoose.connect(process.env.mongo);
    console.log("connected to mongodb sucess")
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("connected",()=>{
    console.log("mngo connected")
})
mongoose.connection.on("disconnected",()=>{
    console.log("mango disconnected")
})


//middlewares
app.use(express.json())
app.use("/authentication",Aauth_can)
app.use("/hotels",hotelsRoute);
app.use("/rooms",roomsRoute);
app.use("/users",userRoute);
 
app.use((req,res,next)=>{
    console.log("hi i am middle ware")
})
app.listen(8800,()=>{
    conn();
    console.log("connected sucessfull");
});
