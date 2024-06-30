import { OrderStatus } from "../enums/OrderStatus";

 export interface Product {
  id: string,
  imageURL: string;
  name: string;
  description: string;
  price: number;
  store: string;
  status?: OrderStatus
 }