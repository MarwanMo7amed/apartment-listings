import {NextFunction, Request, Response} from "express";
import developerService from "../service/developer.service";

class DeveloperController {
  getDevelopers = async (req: Request, res: Response,next:NextFunction) : Promise<void> => {
    const limit = parseInt(req.query.limit as string) || 10; 
    const offset = parseInt(req.query.offset as string) || 0;
    try {
      const { developers,responseCode,paginationInfo } =
        await developerService.getDevelopers(limit, offset);
      res.status(responseCode).json({
        developers,paginationInfo
      });
    } catch (error) {
      next(error)
    }
  };

}

export default new DeveloperController();