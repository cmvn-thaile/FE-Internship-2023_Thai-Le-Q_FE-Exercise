import { cartItemsArr as cartItems } from "./cartEntity.js";
export const createCart = (cartItems) => {
    const cartTable = document.createElement("table");
    cartTable.className = "cart-table ";
    document.body.appendChild(cartTable);
    cartTable.innerHTML = `
  <thead >
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Price</th>
      <th>Image</th>
      <th>Quantity</th>
      <th>Total</th>
    </tr>
  </thead>`;
    if (cartItems.length > 0) {
        cartItems.forEach((cartItem) => {
            cartTable.innerHTML += `
      <tr id="row-product-${cartItem.id}">
      <td>${cartItem.id}</td>
      <td>${cartItem.name}</td>
      <td>${cartItem.price}</td>
      <td><img src="${cartItem.image}" alt="${cartItem.name}"></td>
      <td ><button name=${cartItem.id} id="minus-btn-${cartItem.id}" class="minus-btn">-</button>
      <p id="quantity-${cartItem.id}">${cartItem.quantity}</p>
      <button name=${cartItem.id}  id="plus-btn-${cartItem.id}"  class="plus-btn">+</button></td>
      <td id="sub-total-${cartItem.id}" class="sub-total">${(cartItem.price * cartItem.quantity).toFixed(2)}</td>
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
    createCart(cartItems);
    calculateTotal();
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
                localStorage.setItem("cartItems", JSON.stringify(cartItems));
                let quantityCell = document.getElementById(`quantity-${cartItem.id}`);
                if (quantityCell !== null) {
                    quantityCell.textContent = cartItem.quantity.toString();
                }
                const subTotalCell = document.getElementById(`sub-total-${cartItem.id}`);
                if (subTotalCell !== null) {
                    subTotalCell.textContent = (cartItem.price * cartItem.quantity).toFixed(2);
                }
            }
            calculateTotal();
        });
    }
    for (let plus of plusBtnArray) {
        plus.addEventListener("click", (e) => {
            e.preventDefault();
            const cartItem = cartItems.filter((item) => item.id === parseInt(plus.name))[0];
            console.log(cartItem);
            if (cartItem && cartItem.quantity > 1) {
                cartItem.quantity += 1;
                localStorage.setItem("cartItems", JSON.stringify(cartItems));
                let quantityCell = document.getElementById(`quantity-${cartItem.id}`);
                if (quantityCell !== null) {
                    quantityCell.textContent = cartItem.quantity.toString();
                }
                const subTotalCell = document.getElementById(`sub-total-${cartItem.id}`);
                if (subTotalCell !== null) {
                    subTotalCell.textContent = (cartItem.price * cartItem.quantity).toFixed(2);
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
                localStorage.setItem("cartItems", JSON.stringify(cartItems));
                const rowCartItem = document.getElementById(`row-product-${cartItem.id}`);
                if (rowCartItem !== null) {
                    rowCartItem.remove();
                }
                calculateTotal();
            }
        });
    }
};
const calculateTotal = () => {
    const totalTextElement = document.getElementById("total-text");
    const subTotalValue = document.getElementsByClassName("sub-total");
    const subTotalArray = Array.from(subTotalValue);
    const total = subTotalArray.reduce((acc, element) => {
        const textContent = element.textContent;
        if (textContent) {
            return acc + parseFloat(textContent);
        }
        return acc;
    }, 0);
    if (totalTextElement !== null) {
        totalTextElement.innerHTML = total.toFixed(2);
    }
    console.log(total);
};
displayCart(cartItems);
//# sourceMappingURL=renderCart.js.map