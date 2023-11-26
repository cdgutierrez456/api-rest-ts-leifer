import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handler"
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item"

export const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const responseItem = await getCar(id)
    res.send(responseItem)
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEM')
  }
}

export const getItems = async (req: Request, res: Response) => {
  try {
    const responseItems = await getCars()
    res.send(responseItems)
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEMS')
  }
}

export const updateItems = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params
    const responseItem = await updateCar(id, body)
    res.send(responseItem)
  } catch (e) {
    handleHttp(res, 'ERROR_UPDATE_ITEM')
  }
}

export const postItem = async (req: Request, res: Response) => {
  try {
    const { body } = req
    const responseItem = await insertCar(body)
    res.send(responseItem)
  } catch (e) {
    handleHttp(res, 'ERROR_CREATE_ITEM')
  }
}

export const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params
    const responseItem = await deleteCar(id)
    res.send(responseItem)
  } catch (e) {
    handleHttp(res, 'ERROR_DELETE_ITEM')
  }
}
