import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
  user?: string | JwtPayload
}

export const getItems = (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: "Ruta valida solo para perfiles con token valido",
      user: req?.user
    })
  } catch (e) {
    handleHttp(res, "ERROR_GET_ORDERS")
  }
}
