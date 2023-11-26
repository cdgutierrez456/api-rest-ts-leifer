// Encargado de la logica del negocio
// Conexion a bd
import { Car } from "../interfaces/car.interface"
import ItemModel from "../models/item"

export const insertCar = async (item: Car) => {
  const responseInsert = await ItemModel.create(item)
  return responseInsert
}

export const getCars = async () => {
  const responseItems = await ItemModel.find({})
  return responseItems
}

export const getCar = async (id: string) => {
  const responseItem = await ItemModel.findOne({ _id: id })
  return responseItem
}

export const updateCar = async (id: string, data: Car) => {
  const responseItem = await ItemModel.findByIdAndUpdate(
    { _id: id }, 
    data,
    { new: true }
  )
  return responseItem
}

export const deleteCar = async (id: string) => {
  const responseItem = await ItemModel.deleteOne({ _id: id })
  return responseItem
}
