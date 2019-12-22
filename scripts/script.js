import Api from "./api.js";
import Shop from "./shop.js";


const api = new Api();
const shop = new Shop();

api.getAll().then(res => shop.showAllProducts(res));







