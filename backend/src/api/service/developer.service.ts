import PaginationInfo from "../../models/api/response/pagination-info";
import { AppErrorResponse } from "../utils/AppErrorResponse";
import DevelopersResponse from "../../models/api/response/developer-lisitng";
import DeveloperModel from "../../models/schema/developer.model";
class DeveloperService {
  async getDevelopers(limit: number,
    offset: number
  ): Promise<DevelopersResponse> {
    try {
      const developers = await DeveloperModel.find()
        .skip(offset)
        .limit(limit)
        .exec();
      console.log(
          JSON.stringify(developers)
      );
      if(!developers)
        throw new AppErrorResponse("no developers found",404);
      const totalCount = await DeveloperModel.countDocuments();

      return new DevelopersResponse(developers,new PaginationInfo(limit,offset,totalCount),200);
    } catch (error) {
      if(error instanceof AppErrorResponse)
        throw error;
      throw new AppErrorResponse("failed to get developers list",500);
    }
  }
}
export default new DeveloperService();
