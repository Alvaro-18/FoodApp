import { OrderStatus } from "../enums/OrderStatus";

interface item {
  id: string,
  name: string,
  price: number,
  quantity: number
}

export interface Order {
  id: string,
  storeName: string,
  storeImage: string,
  status: OrderStatus,
  itens: item[],
  total: number
}

