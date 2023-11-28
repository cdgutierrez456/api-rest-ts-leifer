import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
  user?: string | JwtPayload
}

export const checkJWT = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || null;
    const jwt = jwtByUser?.split(' ').pop()
    const isUser = verifyToken(`${jwt}`)
    if (!isUser ) {
      res.status(401).send({ message: "YOY_DONT_HAVE_VALID_TOKEN" })
    } else {
      req.user = isUser
      next()
    }
  } catch (e) {
    res.status(400).send('NOT_VALID_SESSION')
  }
}
