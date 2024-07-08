import { StoreStatus } from "../enums/StoreStatus";
import { Product } from "./Product";

export interface Store  {
  id: string,
  name: string,
  status: StoreStatus,
  logoURL: string,
  bannerURL: string,
  description:string,
  note: string,
  category: string,
  storeDistance?:  string,
  deliveryTime?: string,
  products: Product[],
}