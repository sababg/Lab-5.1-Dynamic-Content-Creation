const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const addProductButton = document.getElementById("add-product");
const cart = document.getElementById("cart");
const totalPriceSpan = document.getElementById("total-price");
let totalPrice = 0;
let productList = [];
// add
// Name  |    unit price |    Quantity * unit Price |      Quantity  |      removeButton
// add product
const addItem = () => {
  cart.textContent = "";
  for (let i = 0; i < productList.length; i++) {
    let productItem = productList[i];

    let listItem = document.createElement("li");
    listItem.dataset.price = `${productItem.price}`;
    listItem.dataset.name = `${productItem.name}`;
    listItem.dataset.id = `${productItem.id}`;
    listItem.classList.add("cart-item");
    // children of list-item
    let productNameSpan = document.createElement("span");
    productNameSpan.textContent = productItem.name;
    let productPriceSpan = document.createElement("span");
    productPriceSpan.textContent = "$" + productItem.price;
    let removeItemButton = document.createElement("button");
    removeItemButton.textContent = "remove";
    let editItemButton = document.createElement("button");
    editItemButton.textContent = "edit";
    listItem.appendChild(productNameSpan);
    listItem.appendChild(productPriceSpan);
    listItem.appendChild(editItemButton);
    listItem.appendChild(removeItemButton);
    cart.appendChild(listItem);
    removeItemButton.addEventListener("click", removeItem);
    editItemButton.addEventListener("click", (e) => editItem(e));
  }
};

addProductButton.addEventListener("click", function () {
  let productName = productNameInput.value;
  let productPrice = Number(productPriceInput.value);
  if (productName === "" || productPrice <= 0 || !productPrice) {
    alert("Invalid Input");
    return;
  }
  switch (addProductButton.textContent) {
    case "Add Product":
      {
        let product = {
          id: productList.length,
          name: productName,
          price: productPrice,
        };

        productList.push(product);
        updateTotalPrice(productPrice);
        addItem();
      }
      break;
    case "Edit product":
      {
        const index = +productNameInput.dataset.originalId;

        if (index >= 0) {
          const oldPrice = productList[index].price;
          productList[index] = {
            id: index,
            name: productName,
            price: productPrice,
          };
          updateTotalPrice(-oldPrice + productPrice);
        }

        addProductButton.textContent = "Add Product";
        addItem();
      }
      break;

    default:
      return;
  }

  console.log(productList);
  productNameInput.value = "";
  productPriceInput.value = "";
});
// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

// Function to remove an item
function removeItem(event) {
  const item = event.target.closest("li");
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}

// Function to edit an item
const editItem = (event, i) => {
  const item = event.target.closest("li");
  const name = item.dataset.name;
  const price = item.dataset.price;
  const id = item.dataset.id;

  productNameInput.dataset.originalId = id;

  productNameInput.value = name;
  productPriceInput.value = price;

  addProductButton.textContent = "Edit product";

  productNameInput.focus();
};
