import Api from "./api.js";
import Shop from "./shop.js";
import Cart from "./cart.js";


const api = new Api();
const shop = new Shop();
const cartShow = new Cart();


api.getAll().then(res => shop.showAllProducts(res));

cartShow.cartClick();







