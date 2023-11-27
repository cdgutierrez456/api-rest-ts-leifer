// Encargado de la logica del negocio
// Conexion a bd
import OrderModel from "../models/order"

export const getOrders = async () => {
  const responseItems = await OrderModel.find({})
  return responseItems
}

