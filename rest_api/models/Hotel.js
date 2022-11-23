import mongoose from 'mongoose';

const hotel_schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    distance:{
        type:Number,
        required:true
    },
    images:{
        type:[String],
    },
    desc:{
        type:String,
        required:true
    },
    hotel_r:{
        type:Number,
        min:0,
        max:5
    },
    rooms:{
        type:[String],
    
    },
    low_cost:{
        type:Number,
        required:true
    },
    featured:{
        type:String,
        
    },
    
})
export default mongoose.model("Hotel",hotel_schema)