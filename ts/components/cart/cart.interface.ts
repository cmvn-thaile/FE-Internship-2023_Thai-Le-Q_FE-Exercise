export interface CartItemProps {
  id: number;
  name: string;
  image: string;
  price: number;
  discount: number | null;
  quantity: number;
}
