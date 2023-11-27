import { Auth } from "../interfaces/auth.interface"
import { User } from "../interfaces/user.interface"
import UserModel from "../models/user"
import { generateToken } from "../utils/jwt.handle"
import { encrypt, verified } from "../utils/password.handle"

export const registerNewUser = async (authUser: User) => {
  const { email, password, name, description } = authUser
  const checkIs = await UserModel.findOne({ email })
  if (checkIs) return "Already user";
  const passHash = await encrypt(password)
  const registerNewUser = await UserModel.create({ name, description, email, password: passHash });

  return registerNewUser;
}

export const loginUser = async ({email, password}: Auth) => {
  const checkIs = await UserModel.findOne({ email })
  if (!checkIs) return "INVALID_DATA";
  const passwordHash = checkIs.password
  const isCorrect = await verified(password, passwordHash)
  if (!isCorrect) return "ERROR_IN_LOGGIN";

  const token = await generateToken(checkIs.email)
  const data = {
    token,
    user: checkIs
  }
  return data;
}
