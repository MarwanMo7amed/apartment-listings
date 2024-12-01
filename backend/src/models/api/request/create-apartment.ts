// src/models/CreateApartmentRequest.ts
import { IsString, IsInt, IsArray, IsOptional, IsEnum, IsMongoId } from 'class-validator';
import { Type } from 'class-transformer';
import "reflect-metadata";


enum PropertyType {
  APARTMENT = 'apartment',
  VILLA = 'villa',
  STUDIO = 'studio',
}

enum SaleType {
  SALE = 'sale',
  RENT = 'rent',
}

export class CreateApartmentRequest {
  @IsString()
  title: string;

  @IsInt()
  bedrooms: number;

  @IsInt()
  bathrooms: number;

  @IsString()
  price: string;

  @IsString()
  currency: string;

  @IsString()
  @IsOptional()
  compound: string;

  @IsString()
  size: string;

  @IsEnum(PropertyType)
  propertyType: PropertyType;

  @IsEnum(SaleType)
  saleType: SaleType;

  @IsString()
  description: string;

  @IsString()
  finishingType: string;

  @IsInt()
  @IsOptional()
  unitNumber: number;

  @IsMongoId()
  @IsOptional()
  developerId: string;

  @IsString()
  refNumber: string;

  @IsArray()
  @Type(() => Object)
  images: Array<{ url: string; altText?: string; isCover?: boolean }>;
}
