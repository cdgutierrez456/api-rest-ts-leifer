import 'dotenv/config';
import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

export const generateToken = async (id: string | any) => {
  const jwt = sign({id}, JWT_SECRET, { expiresIn: "2h" })
  return jwt;
}

export const verifyToken = (jwt: string) => {
  const isOk = verify(jwt, JWT_SECRET)
  return isOk;
}
