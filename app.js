const cartBtn = document.querySelector('.cart-btn');
const closeCartBtn = document.querySelector('.close-cart');
const clearCartBtn = document.querySelector('.clear-cart');
const cartDom = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-over-lay');
const cartItems = document.querySelector('.cart-items');
const cartItem = document.querySelector('.cart-item');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productDom = document.querySelector('.products-center');

//cart items
let cart = [];
//class that get the product from local data
class Products{
   async getProducts(){
     try {
        let results = await fetch("products.json");
        return results;
     } catch (error) {
         console.log(error);
     }
    }
}


//ui class 
class UI{

}

//local storage
class Storage{

}



document.addEventListener("DOMContentLoaded", () =>{
    const ui = new UI();
    const products = new Products();

  //get all products
  products.getProducts().then(data => console.log(data))  

})

