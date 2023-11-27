import { User } from "../interfaces/user.interface"
import UserModel from "../models/user"

export const registerNewUser = async (authUser: User) => {
  const { email } = authUser
  const checkIs = await UserModel.findOne({ email: email })
  if (checkIs) return "Already user";
  const registerNewUser = await UserModel.create(authUser);
  return registerNewUser;
}

export const loginUser = async () => {

}
