import { Schema } from "mongoose";

export const imageModel= new Schema({
    url: { type: String, required: true },
    altText: { type: String, required: true },
    isCover: { type: Boolean, required: true }
  });