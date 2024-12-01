import { Schema } from "mongoose";
import { IApartment } from "../interface/appartment.interface";
import { imageModel } from "./image.model";
const mongoose = require('mongoose');

const apartmentSchema = new Schema<IApartment>({
  title: { type: String, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  price: { type: String, required: true }, 
  currency: { type: String, required: true },
  compound: { type: String, required: true },
  size: { type: String, required: true }, 
  propertyType: { type: String, required: true }, 
  saleType: { type: String, required: true }, 
  description: { type: String, required: true },
  finishingType: { type: String, required: true }, 
  unitNumber: { type: Number, required: true },
  refNumber: { type: String, required: true, unique: true },
  developerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Developer', required: true },
  images: [imageModel],
  address: { type: String, required: true },
  location: { type: String, required: true },
  sellerContact: { type: String, required: true },
  project: { type: String, required: false }
});
apartmentSchema.set('toJSON', {
  virtuals: true,
  versionKey:false,
  transform: function (doc, ret) {   delete ret._id  }
});
const ApartmentModel = mongoose.model('Apartment', apartmentSchema);
export default ApartmentModel;

