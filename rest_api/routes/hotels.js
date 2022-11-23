import express from "express"
import Hotel from "../models/Hotel.js"
const router=express.Router()
 
//CREATE
router.post("/", async(req,res)=>{
    const newHotel=new Hotel(req.body)
    try{
        const saveHotel=await newHotel.save()
        res.status(200).json(saveHotel)
    }catch(err){
        res.status(500).json(err)
    }
})
//UPDATE
router.put("/:id",async(req,res)=>{
    try{
        const update_hotel=await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(update_hotel)
    }catch(err){
        res.status(500).json(err)
    }
})

//DELETE
router.delete("/:id",async(req,res)=>{
    try{
    await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("deletehotel")
    }catch(err){
        res.status(500).json(err)
    }
})
//GET
router.get("/:id",async(req,res)=>{
   
    try{
        const get_hotel=Hotel.findById(req.params.id)
        res.status(200).json(get_hotel)
    }catch(err){
        res.status(500).json(err)
    }
})
//GET ALL
router.get("/",async(req,res,next)=>{
    console.log("middleware")
   next()
    try{
        const get_hotels=Hotel.find()
        res.status(200).json(get_hotels)
    }catch(err){
        res.status(500).json(err)
    }
})
export default router