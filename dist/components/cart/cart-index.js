import { cartItemsArr as cartItems } from "./cart.entity.js";
import { saveToLocalStorage, } from "../../services/localStorageServices.js";
import { StorageKey } from "../../services/localStorageServices.js";
export const createCart = (cartItems) => {
    if (cartItems.length === 0)
        return null;
    const cartTable = document.createElement("table");
    cartTable.className = "cart-table ";
    const cartContainer = document.getElementById("cart-container");
    if (cartContainer !== null) {
        cartContainer.appendChild(cartTable);
    }
    cartTable.innerHTML = `
    <thead >
      <tr class="cart-table-header" >
        <th>Name</th>
        <th>Price</th>
        <th>Image</th>
        <th>Quantity</th>
        <th>Sub Total</th>
        <th></th>
      </tr>
    </thead>`;
    if (cartItems.length > 0) {
        cartItems.forEach((cartItem) => {
            cartTable.innerHTML += `
        <tr class="cart-product-row" id="row-product-${cartItem.id}">
        <td >${cartItem.name}</td>
        <td>${cartItem.price}</td>
        <td><img class="cart-table-img" src="${cartItem.image}" alt="${cartItem.name}"></td>
        <td class="cart-table-quantity-group" ><button name=${cartItem.id} id="minus-btn-${cartItem.id}" class="minus-btn">-</button>
        <p id="quantity-${cartItem.id}">${cartItem.quantity}</p>
        <button name=${cartItem.id}  id="plus-btn-${cartItem.id}"  class="plus-btn">+</button></td>
      ${cartItem.discount
                ? `<td id="sub-total-${cartItem.id}" class="sub-total">${cartItem.price -
                    parseFloat(((cartItem.price * cartItem.discount) / 100).toFixed(2)) *
                        cartItem.quantity}</td>`
                : `<td id="sub-total-${cartItem.id}" class="sub-total">${(cartItem.price * cartItem.quantity).toFixed(2)}</td>`}


        <td >
        <button name="${cartItem.id}"id="delete-btn-${cartItem.id}" class="delete-btn">Delete</button>
        </td>
      </tr>
        `;
        });
    }
    return cartTable;
};
export const displayCart = (cartItems) => {
    console.log(cartItems);
    if (cartItems && cartItems.length > 0) {
        createCart(cartItems);
        calculateTotal();
    }
    else {
        cartEmpty();
    }
    const plusBtn = document.querySelectorAll(".plus-btn");
    const minusBtn = document.querySelectorAll(".minus-btn");
    const deleteBtn = document.querySelectorAll(".delete-btn");
    const minusBtnArray = Array.from(minusBtn);
    const plusBtnArray = Array.from(plusBtn);
    const deleteBtnArray = Array.from(deleteBtn);
    for (let minus of minusBtnArray) {
        minus.addEventListener("click", (e) => {
            e.preventDefault();
            const cartItem = cartItems.filter((item) => item.id === parseInt(minus.name))[0];
            console.log(cartItem);
            if (cartItem && cartItem.quantity > 1) {
                cartItem.quantity -= 1;
                saveToLocalStorage(StorageKey.CartItems, cartItems);
                let quantityCell = document.getElementById(`quantity-${cartItem.id}`);
                if (quantityCell !== null) {
                    quantityCell.textContent = cartItem.quantity.toString();
                }
                const subTotalCell = document.getElementById(`sub-total-${cartItem.id}`);
                if (subTotalCell !== null) {
                    if (cartItem.discount) {
                        subTotalCell.textContent = ((cartItem.price -
                            parseFloat(((cartItem.price * cartItem.discount) / 100).toFixed(2))) *
                            cartItem.quantity).toFixed(2);
                    }
                    else {
                        subTotalCell.textContent = (cartItem.price * cartItem.quantity).toFixed(2);
                    }
                }
            }
            calculateTotal();
        });
    }
    for (let plus of plusBtnArray) {
        plus.addEventListener("click", (e) => {
            e.preventDefault();
            const cartItem = cartItems.filter((item) => item.id === parseInt(plus.name))[0];
            if (cartItem && cartItem.quantity >= 1) {
                cartItem.quantity += 1;
                saveToLocalStorage(StorageKey.CartItems, cartItems);
                let quantityCell = document.getElementById(`quantity-${cartItem.id}`);
                if (quantityCell !== null) {
                    quantityCell.textContent = cartItem.quantity.toString();
                }
                const subTotalCell = document.getElementById(`sub-total-${cartItem.id}`);
                if (subTotalCell !== null) {
                    if (cartItem.discount) {
                        subTotalCell.textContent = ((cartItem.price -
                            parseFloat(((cartItem.price * cartItem.discount) / 100).toFixed(2))) *
                            cartItem.quantity).toFixed(2);
                    }
                    else {
                        subTotalCell.textContent = (cartItem.price * cartItem.quantity).toFixed(2);
                    }
                }
            }
            calculateTotal();
        });
    }
    for (let dte of deleteBtnArray) {
        dte.addEventListener("click", (e) => {
            e.preventDefault();
            const cartItem = cartItems.find((item) => item.id === parseInt(dte.name));
            if (cartItem) {
                const index = cartItems.indexOf(cartItem);
                cartItems.splice(index, 1);
                saveToLocalStorage(StorageKey.CartItems, cartItems);
                const rowCartItem = document.getElementById(`row-product-${cartItem.id}`);
                if (rowCartItem !== null) {
                    rowCartItem.remove();
                }
                calculateTotal();
            }
            const cartTable = document.querySelector(".cart-table");
            const cartTotalGroup = document.getElementById("total");
            if (cartTable !== null && cartItems.length === 0) {
                cartTable.remove();
                cartTotalGroup === null || cartTotalGroup === void 0 ? void 0 : cartTotalGroup.remove();
                cartEmpty();
            }
        });
    }
};
const calculateTotal = () => {
    const cartTotalGroup = document.getElementById("total");
    const subTotalValue = document.getElementsByClassName("sub-total");
    const subTotalArray = Array.from(subTotalValue);
    const total = subTotalArray.reduce((acc, element) => {
        const textContent = element.textContent;
        if (textContent) {
            return acc + parseFloat(textContent);
        }
        return acc;
    }, 0);
    if (cartTotalGroup && total > 0) {
        cartTotalGroup.innerHTML = `
        <h3 class=" cart-total">
        Total:
        </h3>
        <p id="total-text">${total.toFixed(2)}</p>
      `;
    }
};
const cartEmpty = () => {
    const cartContainer = document.getElementById("cart-container");
    if (cartContainer !== null) {
        cartContainer.innerHTML = `<h2 class="cart-empty">Cart is empty</h2>`;
    }
};
displayCart(cartItems);
//# sourceMappingURL=cart-index.js.map