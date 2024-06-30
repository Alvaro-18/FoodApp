import { StoreStatus } from "../enums/StoreStatus";

export interface Store  {
  name: string,
  status: StoreStatus,
  logoURL: string,
  bannerURL: string,
  description:string,
  note: string,
  category: string,
  storeDistance?:  string,
  deliveryTime?: string
}