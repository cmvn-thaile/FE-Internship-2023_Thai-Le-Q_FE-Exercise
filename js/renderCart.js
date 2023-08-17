// retrieve cart items from local storage

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
      <tr>
      <td>${cartItem.id}</td>
      <td>${cartItem.name}</td>
      <td>${cartItem.price}</td>
      <td><img src="${cartItem.image}" alt="${cartItem.name}"></td>
      <td ><button name=${cartItem.id} id="minus-btn-${
        cartItem.id
      }" class="minus-btn">-</button>
      <p id="quantity-${cartItem.id}">${cartItem.quantity}</p>
      <button name=${cartItem.id}  id="plus-btn-${
        cartItem.id
      }"  class="plus-btn">+</button></td>
      <td id="sub-total-${cartItem.id}" class="sub-total">${(
        cartItem.price * cartItem.quantity
      ).toFixed(2)}</td>
    </tr>
      `;
    });
  }


  return cartTable;
};

export const displayCart = () => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  createCart(cartItems);
  calculateTotal();
  const plusBtn = document.getElementsByClassName("plus-btn");
  const minusBtn = document.getElementsByClassName("minus-btn");
  console.log(plusBtn);
  for (let minus of minusBtn) {
    minus.addEventListener("click", (e) => {
      e.preventDefault();
      const cartItem = cartItems.find(
        (item) => item.id === parseInt(minus.name)
      );

      console.log(cartItem);
      if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        let quantityCell = document.getElementById(`quantity-${cartItem.id}`);
        quantityCell.textContent = cartItem.quantity;
        const subTotalCell = document.getElementById(
          `sub-total-${cartItem.id}`
        );
        subTotalCell.textContent = (cartItem.price * cartItem.quantity).toFixed(
          2
        );
      }
      calculateTotal();
    });

  }

  for (let plus of plusBtn) {
    plus.addEventListener("click", (e) => {
      e.preventDefault();
      const cartItem = cartItems.find(
        (item) => item.id === parseInt(plus.name)
      );
      console.log(cartItem);
      cartItem.quantity += 1;
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      let quantityCell = document.getElementById(`quantity-${cartItem.id}`);
      quantityCell.textContent = cartItem.quantity;
      const subTotalCell = document.getElementById(`sub-total-${cartItem.id}`);
      subTotalCell.textContent = (cartItem.price * cartItem.quantity).toFixed(
        2
      );
      calculateTotal();
    });
  }

};
const calculateTotal = () => {
  const totalTextElement = document.getElementById("total-text");
  const subTotalValue = document.getElementsByClassName("sub-total");
  const subTotalArray = Array.from(subTotalValue);
  const total = subTotalArray.reduce((acc, element) => {
    return acc + parseFloat(element.textContent);
  }, 0);
  totalTextElement.innerHTML = total.toFixed(2);
  console.log(total);
};
displayCart();
