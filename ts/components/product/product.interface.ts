export enum productStatus {
  available = "available",
  outOfStock = "outOfStock",
}

export interface ProductProps {
  id: number;
  name: string;
  image: string;
  price: number;
  discount: number | null;
  status: productStatus;
}
