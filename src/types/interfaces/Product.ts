 export interface Product {
  id: number,
  imageURL: string;
  name: string;
  description: string;
  price: number;
  store: string;
  prepTimeMin?: number,
  prepTimeMax?: number,
 }