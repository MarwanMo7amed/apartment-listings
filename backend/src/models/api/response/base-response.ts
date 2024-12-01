export default class BaseResponse {
    responseCode: number;
    constructor(responseCode:number)
    {
        this.responseCode=responseCode;
    }
}