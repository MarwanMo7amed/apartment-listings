import mongoose from "mongoose";

export default interface IDeveloper extends Document{
    _id:mongoose.ObjectId,
    name:string
}