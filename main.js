let navbar = document.getElementById('navbar');
let cartItem = document.getElementById('cart-items-container');
// let searchForm = document.getElementById('search-form');
// let searchBtn = document.querySelector('label.fas.fa-search');

function opMenu() {
  navbar.classList.toggle("active");
  cartItem.classList.remove("active");
}

function cart() {
  cartItem.classList.toggle("active");
  navbar.classList.remove("active");
}

window.onscroll = () => {
  navbar.classList.remove("active");
  cartItem.classList.remove("active");

}