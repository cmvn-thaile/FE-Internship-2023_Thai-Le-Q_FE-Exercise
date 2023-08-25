import { fetchProductData } from "./api/apiCall.js";
import { endpoint } from "./api/apiUrls.js";
import { updateCartQty } from "./components/product/cart.function.js";

import { displayProducts } from "./components/product/renderProduct.js";
//get container

//get data
// const productsData = await fetchProductData(endpoint.categoryProducts); 
const renderIndex = async () => {
  const productsData = await fetchProductData(endpoint.categoryProducts);
  const arrivedProduct = await fetchProductData(endpoint.arrivedProducts);


  updateCartQty();
  displayProducts(productsData, "category-product");
  displayProducts(arrivedProduct, "new-arrived-product");
} 

renderIndex();

