export interface ProductProps {
  id: number;
  name: string;
  image: string;
  price: number;
  discount: number | null;
  status: "available" | "outOfStock";
}
