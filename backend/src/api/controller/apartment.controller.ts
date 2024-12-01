import {NextFunction, Request, Response} from "express";
import apartmentService from "../service/apartment.service";
import { CreateApartmentRequest } from "../../models/api/request/create-apartment";
import { object } from "joi";
import { json } from "body-parser";

class ApartmentController {
  getAllApartments = async (req: Request, res: Response,next:NextFunction) : Promise<void> => {
    const limit = parseInt(req.query.limit as string) || 6; 
    const offset = parseInt(req.query.offset as string) || 0; 
    try {
      const { apartments,responseCode,paginationInfo } =
        await apartmentService.getAllApartments(limit, offset);
      res.status(responseCode).json({
        apartments,paginationInfo
      });
    } catch (error) {
      next(error)
    }
  };
  getApartmentDetails = async (req: Request, res: Response,next:NextFunction) : Promise<void> => {
    const {id}=req.params;
    try {
      const {apartmentDetails,responseCode}= await apartmentService.getApartmentDetails(id);
      res.status(responseCode).json(
        apartmentDetails
      );
    } catch (error) {
      next(error)

    }
  };
  async createApartment(req: Request, res: Response, next: NextFunction) {
    try {
      const apartment = new CreateApartmentRequest();
      Object.assign(apartment, req.body);
      res.status(201).json({
        status: 'success',
        data: await apartmentService.createApartment(req.body),
      });
    } catch (error) {
      next(error); 
    }
  }
}

export default new ApartmentController();