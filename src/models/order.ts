import { Schema, Types, model, Model } from 'mongoose';
import { Order } from '../interfaces/order.interface';

const OrderSchema = new Schema<Order>(
  {
    name: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    date: {
      type: String
    },
    price: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const UserModel = model('orders', OrderSchema)
export default UserModel;