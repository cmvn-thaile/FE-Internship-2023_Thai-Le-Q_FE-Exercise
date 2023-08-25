import { Product } from "../components/product/product.entity";
import { ProductProps } from "../components/product/product.interface";

export const fetchProductData = async (
  url: string
): Promise<Array<ProductProps>> => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
