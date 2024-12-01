import mongoose, { Document } from 'mongoose';
export interface IApartment extends Document {
  title: string;
  _id:string;
  bedrooms: number;
  bathrooms: number;
  price: string; // Price is stored as string for consistency
  currency: string;
  compound: string;
  size: string; // Size includes units like "sqm"
  propertyType: string; // E.g., "apartment"
  saleType: string; // E.g., "sale"
  description: string;
  finishingType: string; // E.g., "finished"
  unitNumber: number;
  developerId: mongoose.Types.ObjectId;
  refNumber: string;
  images: [{ url: String, altText: String, isCover: Boolean }] ;
  address:string;
  location:string;
  project:string;
  sellerContact:string;
}
