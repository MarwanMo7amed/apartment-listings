import IDeveloper from "../../interface/developer.interface";
import BasePaginationResponse from "./base-pagination-response";
import PaginationInfo from "./pagination-info";

export default class DevelopersResponse extends BasePaginationResponse{
    developers:IDeveloper[];
    constructor(developers: IDeveloper[],paginationInfo:PaginationInfo,responseCode:number){
        super(paginationInfo,responseCode)
        this.developers=developers;
    }
}