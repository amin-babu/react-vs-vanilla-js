// product 1
// catch dom element
const addToCartBtn = document.querySelector('#addToCart');
const price = document.querySelector('#price');
const totalPriceShow = document.querySelector('#totalPrice');

// state or data
let productPrice = 6500;
let totalPrice = 0;
price.innerHTML = `$ ${productPrice}`;
totalPriceShow.innerHTML = `Total: $ 0`;

addToCartBtn.addEventListener('click', () => {
  totalPrice += productPrice;
  totalPriceShow.innerHTML = `Total: $ ${totalPrice}`;
});






// product 2
// catch dom element
const addToCartBtn2 = document.querySelector('#addToCart2');
const price2 = document.querySelector('#price2');
const totalPriceShow2 = document.querySelector('#totalPrice2');

// state or data
let productPrice2 = 6500;
let totalPrice2 = 0;
price2.innerHTML = `$ ${productPrice2}`;
totalPriceShow2.innerHTML = `Total: $ 0`;

addToCartBtn2.addEventListener('click', () => {
  totalPrice2 += productPrice2;
  totalPriceShow2.innerHTML = `Total: $ ${totalPrice2}`;
});









// product 3
// catch dom element
const addToCartBtn3 = document.querySelector('#addToCart3');
const price3 = document.querySelector('#price3');
const totalPriceShow3 = document.querySelector('#totalPrice3');

// state or data
let productPrice3 = 6500;
let totalPrice3 = 0;
price3.innerHTML = `$ ${productPrice3}`;
totalPriceShow3.innerHTML = `Total: $ 0`;

addToCartBtn3.addEventListener('click', () => {
  totalPrice3 += productPrice3;
  totalPriceShow3.innerHTML = `Total: $ ${totalPrice3}`;
});












// product 4
// catch dom element
const addToCartBtn4 = document.querySelector('#addToCart4');
const price4 = document.querySelector('#price4');
const totalPriceShow4 = document.querySelector('#totalPrice4');

// state or data
let productPrice4 = 6500;
let totalPrice4 = 0;
price4.innerHTML = `$ ${productPrice4}`;
totalPriceShow4.innerHTML = `Total: $ 0`;

addToCartBtn4.addEventListener('click', () => {
  totalPrice4 += productPrice4;
  totalPriceShow4.innerHTML = `Total: $ ${totalPrice4}`;
});