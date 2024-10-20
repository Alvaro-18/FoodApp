import { OrderStatus } from "../enums/OrderStatus";
import { Address } from "./Address";

interface item {
  id: string,
  name: string,
  price: number,
  quantity: number
}

export interface Order {
  id: string,
  storeId: string,
  status: OrderStatus,
  itens: item[],
  total: number,
  address: Address,
  paymentMethod: string,
  deliveryMethod: string,
  date: Date,

}

