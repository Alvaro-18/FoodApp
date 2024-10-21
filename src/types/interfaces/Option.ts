import { Address } from "./Address";

export interface Option {
  isSelected: boolean,
  title: string;
  subtitle1?: string;
  subtitle2?: string;
  data?: object 
}

export interface OptionAddress {
  isSelected: boolean,
  title: string;
  subtitle1?: string;
  subtitle2?: string;
  data:  Address
}