import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";

export const getItems = (req: Request, res: Response) => {
  try {
    
  } catch (e) {
    handleHttp(res, "ERROR_GET_ORDERS")
  }
}
