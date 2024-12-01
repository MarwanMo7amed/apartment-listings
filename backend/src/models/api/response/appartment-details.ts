import { IApartment } from "../../interface/appartment.interface";
import BaseResponse from "./base-response";

export default class ApartmentDetailsResponse extends BaseResponse {
  apartmentDetails: IApartment;

  constructor(apartmentDetails: IApartment, responseCode: number) {
    super(responseCode);
    this.apartmentDetails = apartmentDetails;
  }
}
