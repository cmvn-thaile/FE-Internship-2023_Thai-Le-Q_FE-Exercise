import { updateCartQty } from "./addCart.js";
import { arrivedProductsArr as arrivedProduct, productsDataArr as productsData, } from "./productEntity.js";
import { displayProducts } from "./renderProduct.js";
updateCartQty();
displayProducts(productsData, "category-product");
displayProducts(arrivedProduct, "new-arrived-product");
//# sourceMappingURL=index.js.map