export interface CartItemProps {
  id: number;
  name: string;
  image: string;
  price: number;
  discount: number | null;
  quantity: number;
}

export interface CartProps {
  id: number;
  name: string;
  image: string;
  price: number;
  discount: number | null;
  quantity: number;
}
