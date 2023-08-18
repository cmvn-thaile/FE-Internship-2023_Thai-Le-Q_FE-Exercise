import { StorageKey } from "../../services/localStorageServices.js";
import { getFromLocalStorage, saveToLocalStorage, } from "../../services/localStorageServices.js";
import { calCartQuantity } from "../../utils/calculation.js";
export const addToCart = (product) => {
    console.log(product);
    const productToCart = {
        id: product === null || product === void 0 ? void 0 : product.id,
        name: product === null || product === void 0 ? void 0 : product.name,
        price: product === null || product === void 0 ? void 0 : product.price,
        image: product === null || product === void 0 ? void 0 : product.image,
        discount: (product === null || product === void 0 ? void 0 : product.discount) || null,
        quantity: 1,
    };
    const cartItemsJson = getFromLocalStorage(StorageKey.CartItems);
    const cartItems = cartItemsJson;
    if (cartItems !== null) {
        const productExists = cartItems.find((item) => item.id === productToCart.id);
        if (!productExists) {
            cartItems.push(productToCart);
            saveToLocalStorage(StorageKey.CartItems, cartItems);
            return;
        }
        else {
            const cartItemToUpdate = cartItems.find(function (item) {
                return item.id === productToCart.id;
            });
            if (cartItemToUpdate) {
                cartItemToUpdate.quantity += 1;
            }
            saveToLocalStorage(StorageKey.CartItems, cartItems);
        }
    }
    else {
        saveToLocalStorage(StorageKey.CartItems, [productToCart]);
    }
    updateCartQty();
};
export const updateCartQty = () => {
    const cartQuantity = document.getElementById("cart-quantity");
    const cartItemsJson = getFromLocalStorage(StorageKey.CartItems);
    const cartItems = cartItemsJson;
    const cartQuantityNum = calCartQuantity(cartItems);
    if (cartQuantity !== null) {
        if (cartQuantityNum > 0) {
            cartQuantity.style.display = "block";
        }
        cartQuantity.textContent = cartQuantityNum.toString();
    }
    else {
        console.error("Element with ID 'cart-quantity' not found in the DOM.");
    }
};
//# sourceMappingURL=cart.function.js.map