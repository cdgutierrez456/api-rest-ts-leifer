import { Request, Response } from "express"
import { loginUser, registerNewUser } from '../services/auth';

export const registerCtrl = async (req: Request, res: Response) => {
  const { body } = req
  const responseUser = await registerNewUser(body)
  res.send(responseUser)
}

export const loginCtrl = async (req: Request, res: Response) => {

}