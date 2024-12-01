import BaseResponse from "./base-response";
import PaginationInfo from "./pagination-info";

export default class BasePaginationResponse extends BaseResponse {
    paginationInfo: PaginationInfo;
    constructor(paginationInfo:PaginationInfo,responseCode:number){
        super(responseCode)
        this.paginationInfo=paginationInfo;
    }
}