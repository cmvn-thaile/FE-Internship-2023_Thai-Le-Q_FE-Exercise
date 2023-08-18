import { fetchProductData } from "../../api/apiCall.js";
import { endpoint } from "../../api/apiUrls.js";
import { ProductProps } from "./product.interface.js";
import { productStatus } from "./product.interface.js";
export class Product implements ProductProps {
  id: number;
  name: string;
  image: string;
  price: number;
  discount: number | null;
  status: productStatus;
  constructor({ id, name, image, price, discount, status }: ProductProps) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.discount = discount;
    this.status = status;
  }
}
