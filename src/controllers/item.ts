import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handler"

export const getItem = (req: Request, res: Response) => {
  try {
    res.send('Llegando a get item')
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEM')
  }
}

export const getItems = (req: Request, res: Response) => {
  try {
    
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEMS')
  }
}

export const updateItems = (req: Request, res: Response) => {
  try {
    
  } catch (e) {
    handleHttp(res, 'ERROR_UPDATE_ITEM')
  }
}

export const postItem = (req: Request, res: Response) => {
  try {
    const { body } = req
    res.send(body)
  } catch (e) {
    handleHttp(res, 'ERROR_CREATE_ITEM')
  }
}

export const deleteItem = (req: Request, res: Response) => {
  try {
    
  } catch (e) {
    handleHttp(res, 'ERROR_DELETE_ITEM')
  }
}
