class Cart {
    cartClick() {
        this.link = document.querySelector("#cart-items-link")
        this.link.addEventListener("click", this.modal)
    }
    modal(cartItems) {
        this.cartModal = document.createElement("div");
        this.cartModal.className = "cart-modal";
        this.cartModal.innerHTML = "<p>" + "test test test test" + "</p>";
        this.closeButton = document.createElement("button");
        this.closeButton.innerText = "ⓧ";
        this.closeButton.className = "close-button";
        this.closeButton.addEventListener("click", () => {
            this.cartModal.remove()
        });
        this.cartModal.appendChild(this.closeButton);
        console.log(this.modalTable)
        document.documentElement.appendChild(this.cartModal);
    }
    modalTable() {
        this.table = document.createElement("table")
        return this.table
    }
}

export default Cart;