import ApartmentModel from "../../models/schema/apartment.model";
import ApartmentDetailsResponse from "../../models/api/response/appartment-details";
import PaginationInfo from "../../models/api/response/pagination-info";
import ApartmentListingResponse from "../../models/api/response/appartment-listing";
import { AppErrorResponse } from "../utils/AppErrorResponse";
import mongoose from "mongoose";
import DeveloperModel from "../../models/schema/developer.model";
import { IApartment } from "../../models/interface/appartment.interface";
import HelperUtil from "../utils/helperMethods";
class ApartmentService {
  private helperUtil: HelperUtil;
  constructor() {
    this.helperUtil = new HelperUtil();
  }
  async getAllApartments(
    limit: number,
    offset: number
  ): Promise<ApartmentListingResponse> {
    try {
      const cacheKey = `apartmentListing:limit=${limit}:offset=${offset}`;
      const cachedResponse =
        ApartmentListingResponse.getCachedResponse(cacheKey);
      let apartments;
      if (cachedResponse) {
        apartments = cachedResponse;
      } else {
        apartments = await ApartmentModel.find(
          {},
          "title price bedrooms bathrooms currency compound size propertyType images project address"
        )
          .skip(offset)
          .limit(limit)
          .exec();
      }
      if (!apartments) throw new AppErrorResponse("no apaertmenrs found", 404);
      const totalCount = await ApartmentModel.countDocuments();
      const apartmentResponse = new ApartmentListingResponse(
        apartments,
        new PaginationInfo(limit, offset, totalCount),
        200
      );
      if(cachedResponse!=null)
        ApartmentListingResponse.cacheResponse(
          `apartmentListing:limit=${limit}:offset=${offset}`,
          apartmentResponse
        );
      return apartmentResponse;
    } catch (error) {
      if (error instanceof AppErrorResponse) throw error;
      throw new AppErrorResponse(
        `unexpected error getting appartments list:  ${error}`,
        500
      );
    }
  }
  async getApartmentDetails(id: string): Promise<ApartmentDetailsResponse> {
    try {
      if (!mongoose.isValidObjectId(id))
        throw new AppErrorResponse("Invalid apartment ID format", 400); // 400 Bad Request
      const apartmenrDetails = await ApartmentModel.findById(id)
        .populate("developerId")
        .exec();
      console.log(
        "--------------------------------------------\n" +
          JSON.stringify(apartmenrDetails)
      );
      if (!apartmenrDetails)
        throw new AppErrorResponse(
          "aparmtnets details currently not available",
          404
        );
      return new ApartmentDetailsResponse(apartmenrDetails, 200);
    } catch (error) {
      if (error instanceof AppErrorResponse) throw error;
      throw new AppErrorResponse(
        `unexpected error getting appartment details:  ${error}`,
        500
      );
    }
  }
  async createApartment(
    apartmentData: Partial<IApartment>
  ): Promise<IApartment> {
    if (!this.helperUtil.nullChecker(apartmentData.developerId)) {
      const developer = await DeveloperModel.findById(
        apartmentData.developerId
      );
      if (this.helperUtil.nullChecker(developer))
        throw new AppErrorResponse("Invalid developer", 400);
    }
    try {
      const newApartment = new ApartmentModel(apartmentData);
      ApartmentListingResponse.invalidateCacheByPrefix('apartmentListing:');
      return await newApartment.save(); // Save the document
    } catch (error) {
      if (error instanceof mongoose.Error)
        throw new AppErrorResponse(
          `Failed to create apartment: ${error.message}`,
          500
        );
      console.log(error);
      throw new AppErrorResponse(
        `unexpected error creating appartment:  ${error}`,
        500
      );
    }
  }
}
export default new ApartmentService();
