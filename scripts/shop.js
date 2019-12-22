import Api from "./api.js";
const api = new Api()


class Shop{


    reloadElement(data){
        //this.reload = document.querySelector("#product-" + data._id);
        console.log("product-" + data._id);
        //return this.reload
    }

    /**
     * Product detail list
     * @param one product data
     */
    detailList(data){
        this.productDiv.appendChild(this.idDivBuilder(data));
        this.productDiv.appendChild(this.countDivBuilder(data));
        this.productDiv.appendChild(this.priceDivBuilder(data));
        this.productDiv.appendChild(this.addToCartDivBuilder(data));
    }

    /**
     * @param all products data
     * @returns <div> with product details
     */
    productDivBuilder(data){
        this.productDiv = '';
        this.productDiv = document.createElement("div");
        this.detailList(data)
        return this.productDiv
    };

    /**
     * @param one product data
     * @returns <div> with product ID
     */
    idDivBuilder(data){
        this.idDiv = "";
        this.idDiv = document.createElement("div");
        this.idDiv.innerText = "ID: " + data._id;
        this.idDiv.className = "product-id-div"
        return this.idDiv;
    }

    /**
     * @param one product data
     * @returns <div> with product count
     */
    countDivBuilder(data){
        this.countDiv = "";
        this.countDiv = document.createElement("div");
        this.countDiv.innerText = "Dostępna ilośc: " + data.data.count + " szt.";
        this.countDiv.className = "product-count-div"
        return this.countDiv;
    }

    /**
     * @param one product data
     * @returns <div> with product price
     */
    priceDivBuilder(data){
        this.priceDiv = "";
        this.priceDiv = document.createElement("div");
        this.priceDiv.innerText = "Cena: " + data.data.price + " zł";
        this.priceDiv.className = "product-price-div"
        return this.priceDiv;
    }

    /**
     * @returns add to cart <input>
     */
    addToCartInputBuilder(data){
        this.addToCartInput = document.createElement("input");
        this.addToCartInput.type = "number";
        this.addToCartInput.step = "1";
        this.addToCartInput.value = "1";
        this.addToCartInput.className = "add-to-cart-input";
        this.addToCartInput.id = "add-to-cart-input" + data._id
        return this.addToCartInput;
    }

    /**
     *
     * @returns add to cart <button>
     */
    addToCartButtonBuilder(data){

        this.addToCartButton = document.createElement("button");
        this.addToCartButton.innerText = "Dodaj do koszyka";
        this.addToCartButton.className = "add-to-cart-button";
        this.addToCartButton.addEventListener("click", function () {
            api.buy(data._id, {count: document.querySelector("#add-to-cart-input" + data._id).value})
                .then(this.reloadElement(data))
            console.log(data._id)})
        return this.addToCartButton
    }

    /**
     * @param one product data
     * @returns <div> with numbers of product to cart & add to cart button
     */
    addToCartDivBuilder(data){
        this.addToCartDiv = "";
        this.addToCartDiv = document.createElement("div");
        this.addToCartDiv.appendChild(this.addToCartInputBuilder(data));
        this.addToCartDiv.appendChild(this.addToCartButtonBuilder(data));
        this.addToCartDiv.className = "product-add-to-cart-div";
        return this.addToCartDiv;
    }

    /**
     * Show all products from database
     * @param all data from database
     */
    showAllProducts(data){
        this.allProductsDiv = "";
        this.allProductsDiv = document.querySelector("#all-products");
        for (let i=0; i<data.length; i++) {
            this.product = this.productDivBuilder(data[i]);
            this.product.id = "product-" + data[i]._id;
            this.product.className = "product-div";
            this.allProductsDiv.appendChild(this.product)
        }
}

}

export default Shop;