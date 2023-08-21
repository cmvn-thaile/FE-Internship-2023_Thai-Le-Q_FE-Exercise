// retrieve cart items from local storage
import { Cart, cartItemsArr as cartItems } from "./cart.entity.js";
import { CartItemProps, CartProps } from "./cart.interface.js";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "../../services/localStorageServices.js";
import { StorageKey } from "../../services/localStorageServices.js";
import { calSubTotal } from "../../utils/calculation.js";

export const createCart = (cartItems: CartItemProps[]) => {
  if (cartItems.length === 0) return null;

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
      const cart = new Cart(cartItem);
      cartTable.innerHTML += `
        <tr class="cart-product-row" id="row-product-${cartItem.id}">
        <td >${cartItem.name}</td>
        <td>${cartItem.price}</td>
        <td><img class="cart-table-img" src="${cartItem.image}" alt="${
        cartItem.name
      }"></td>
        <td class="cart-table-quantity-group" ><button name=${
          cartItem.id
        } id="minus-btn-${
        cartItem.id
      }" class="quantity-btn minus-btn">-</button>
        <p id="quantity-${cartItem.id}">${cartItem.quantity}</p>
        <button name=${cartItem.id}  id="plus-btn-${
        cartItem.id
      }"  class="quantity-btn plus-btn">+</button></td>
      ${
        cartItem.discount
          ? `<td id="sub-total-${cartItem.id}" class="sub-total">${
              // cartItem.price -
              // parseFloat(
              //   ((cartItem.price * cartItem.discount) / 100).toFixed(2)
              // ) *
              //   cartItem.quantity'
              calSubTotal(cartItem.price, cartItem.discount, cartItem.quantity)
            }</td>`
          : `<td id="sub-total-${cartItem.id}" class="sub-total">${calSubTotal(
              cartItem.price,
              cartItem.quantity
            )}</td>`
      }


        <td >
        <button name="${cartItem.id}"id="delete-btn-${
        cartItem.id
      }" class="delete-btn">Delete</button>
        </td>
      </tr>
        `;
    });
  }

  return cartTable;
};

export const displayCart = (cartItems: CartItemProps[]) => {
  // const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  console.log(cartItems);

  if (cartItems && cartItems.length > 0) {
    createCart(cartItems);
    calculateTotal();
  } else {
    cartEmpty();
  }

  renderQuantityBtn(cartItems);
  renderDeleteBtn(cartItems);
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

const renderQuantityBtn = (cartItems: CartItemProps[]) => {
  const quantityBtn: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll(".quantity-btn");

  const quantityBtnArray = Array.from(quantityBtn);

  for (let btn of quantityBtnArray) {
    btn.addEventListener("click", (e: any) => {
      e.preventDefault();
      const cartItem: CartItemProps = cartItems.filter(
        (item) => item.id === parseInt(btn.name)
      )[0];

      if (cartItem) {
        if (btn.classList.contains("plus-btn")) {
          cartItem.quantity += 1;
        } else if (cartItem.quantity > 1) {
          cartItem.quantity -= 1;
        }
        saveToLocalStorage(StorageKey.CartItems, cartItems);

        let quantityCell = document.getElementById(`quantity-${cartItem.id}`);
        if (quantityCell !== null) {
          quantityCell.textContent = cartItem.quantity.toString();
        }

        const subTotalCell = document.getElementById(
          `sub-total-${cartItem.id}`
        );
        if (subTotalCell !== null) {
          if (cartItem.discount) {
            subTotalCell.textContent = calSubTotal(
              cartItem.price,
              cartItem.quantity,
              cartItem.discount
            );
          } else {
            subTotalCell.textContent = calSubTotal(
              cartItem.price,
              cartItem.quantity
            );
          }
        }
      }
      calculateTotal();
    });
  }
};

const renderDeleteBtn = (cartItems: CartItemProps[]) => {
  const deleteBtn: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll(".delete-btn");
  const deleteBtnArray = Array.from(deleteBtn);
  for (let dte of deleteBtnArray) {
    dte.addEventListener("click", (e: any) => {
      e.preventDefault();
      const cartItem = cartItems.find((item) => item.id === parseInt(dte.name));
      if (cartItem) {
        const cart = new Cart({
          id: cartItem.id,
          name: cartItem.name,
          image: cartItem.image,
          price: cartItem.price,
          discount: cartItem.discount,
          quantity: cartItem.quantity,
        });
        cart.delete(cartItem.id);
        // const index = cartItems.indexOf(cartItem);
        // cartItems.splice(index, 1);
        // saveToLocalStorage(StorageKey.CartItems, cartItems);
        // localStorage.setItem("cartItems", JSON.stringify(cartItems));
      }
    });
  }
};

export const resetCart = (id:number) => {
  const rowCartItem = document.getElementById(`row-product-${id}`);
  if (rowCartItem !== null) {
    rowCartItem.remove();
  }
  calculateTotal();
  const cartData = getFromLocalStorage(StorageKey.CartItems);
  const cartTable = document.querySelector(".cart-table");
  const cartTotalGroup = document.getElementById("total");
  if (cartTable && !cartData) {
    cartTable.remove();
    cartTotalGroup?.remove();
    cartEmpty();
  }
};

displayCart(cartItems);
