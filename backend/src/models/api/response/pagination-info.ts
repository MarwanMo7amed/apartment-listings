export default class PaginationInfo {
  limit: number;
  offset: number;
  total: number;
  constructor(limit:number,offset:number,total:number){
    this.limit=limit;
    this.offset=offset;
    this.total=total;
  }
}
