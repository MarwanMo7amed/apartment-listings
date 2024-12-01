import mongoose, { Document } from "mongoose";
export interface IApartmentListing extends Document {
  title: string;
  bedrooms: number;
  bathrooms: number;
  price: string;
  currency: string;
  compound: string;
  size: string;
  propertyType: string;
  project: string;
  address: string;
  images: [{ url: String; altText: String; isCover: Boolean }];
}
