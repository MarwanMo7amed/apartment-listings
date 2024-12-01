import NodeCache from "node-cache";
import { IApartmentListing } from "../../interface/appartment-listing.interface";
import BasePaginationResponse from "./base-pagination-response";
import PaginationInfo from "./pagination-info";

const cache = new NodeCache({ stdTTL: 300, checkperiod: 320 });

export default class ApartmentListingResponse extends BasePaginationResponse {
  apartments: IApartmentListing[];
  constructor(
    apartments: IApartmentListing[],
    paginationInfo: PaginationInfo,
    responseCode: number
  ) {
    super(paginationInfo, responseCode);
    this.apartments = apartments;
  }

  static cacheResponse(key: string, response: ApartmentListingResponse): void {
    cache.set(key, response);
  }
  static getCachedResponse(key: string): ApartmentListingResponse | null {
    return cache.get(key) || null;
  }
  static invalidateCacheByPrefix(prefix: string): void {
    const keys = cache.keys(); 
    keys.forEach((key:any) => {
      if (key.startsWith(prefix)) {
        cache.del(key);
      }
    });
  }
}
