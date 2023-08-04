const products = [
  {
    name: 'Cherry',
    price: 3,
    quantity: 0,
    productId: 1,
    image: './images/cherry.jpg'
  },
  {
    name: 'Orange',
    price: 2,
    quantity: 0,
    productId: 2,
    image: './images/orange.jpg'
  },
  {
    name: 'Strawberry',
    price: 4,
    quantity: 0,
    productId: 3,
    image: './images/strawberry.jpg'
  }
];

let cart = [];


function addProductToCart(productId) {
 
  let product = products.find(product => product.productId === productId);
  
  
  let cartProduct = cart.find(cp => cp.productId === productId);
  if (cartProduct) {
    increaseQuantity(productId);
  } else {
    product.quantity++;
    cart.push(product);
  }
}


function increaseQuantity(productId) {
  const cartItem = cart.find((item) => item.productId === productId);

  if (cartItem) {
    cartItem.quantity++;
  }
}

function decreaseQuantity(productId) {
  const cartItem = cart.find((item) => item.productId === productId);

  if (cartItem) {
    cartItem.quantity--;

    if (cartItem.quantity === 0) {
      removeProductFromCart(productId);
    }
  }
}

function removeProductFromCart(productId) {
  const index = cart.findIndex((item) => item.productId === productId);

  if (index !== -1) {
   cart[index].quantity = 0
    cart.splice(index, 1);
  }
}

function cartTotal() {
  let total = 0;

  for (const item of cart) {
    const product = products.find((product) => product.productId === item.productId);

    if (product) {
      total += product.price * item.quantity;
    }
  }

  return total;
}

function emptyCart() {
  cart.length = 0;
}

let totalAmountPaid = 0;


function calculateCartTotal() {

  let cartTotal = 0;

  for (const item of cart) {
    cartTotal += item.price * item.quantity;
  }

  return cartTotal;
}

function pay(amount) {
  totalAmountPaid += amount;
  const cartTotalAmount = calculateCartTotal();
  const diff = totalAmountPaid - cartTotalAmount;

  if (diff >= 0) {
    totalAmountPaid = 0;
    emptyCart();
  }

  return diff;
}

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}