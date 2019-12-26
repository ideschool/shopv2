class Cart {
    cartClick(){
        this.link = document.querySelector("#cart-items-link")
        this.link.addEventListener("click", this.modal)
    }

    modal(cartItems){
        this.cartModal = document.createElement("div");
        this.cartModal.className = "cart-modal";
        this.cartModal.innerHTML = "<p>" + "test test test test" + "</p>";
        this.closeButton = document.createElement("button");
        this.closeButton.innerText = "Zamknij";
        this.closeButton.className = "close-button"
        this.cartModal.appendChild(this.closeButton);
        this.closeButton.addEventListener("click", function () {
            this.closeModal
        }.bind(this));
        document.documentElement.appendChild(this.cartModal);
    }

    closeModal(){
        console.log("remove modal")
        this.cartModal.remove();


    };
}

export default Cart;