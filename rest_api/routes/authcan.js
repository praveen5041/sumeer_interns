import express from "express"
const router=express.Router()
router.get("/",(req,res)=>{
    res.send("this is authentication section")
})
router.get("/check",(req,res)=>{
    res.send("this is another request   ")
})
export default router