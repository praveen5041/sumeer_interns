import express from "express"
const router=express.Router()
router.get("/rooms",(req,res)=>{
    res.send("number of rooms")
})
export default router