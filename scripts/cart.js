class Cart {
    constructor() {
        this.createModal();
    }
    cartClick() {
        this.link = document.querySelector("#cart-items-link")
        this.link.addEventListener("click", this.showModal.bind(this))
    }
    createModal(cartItems) {
        this.cartModal = document.createElement("div");
        this.cartModal.className = "cart-modal";
        this.cartModal.innerHTML = "<p>" + "test test test test" + "</p>";
        this.closeButton = document.createElement("button");
        this.closeButton.innerText = "ⓧ";
        this.closeButton.className = "close-button";
        this.closeButton.addEventListener("click", this.hideModal.bind(this));
        this.cartModal.appendChild(this.closeButton);
        // Jaki sens ma ta metoda modalTable() skoro powyżej wykonujesz podobne czynności w ciele funkcji.
        this.cartModal.appendChild(this.modalTable());
        document.documentElement.appendChild(this.cartModal);
    }
    showModal() {
        this.cartModal().classList.append('show');
    }
    hideModal() {
        this.cartModal().classList.remove('show');
    }
    modalTable() {
        this.table = document.createElement("table")
        return this.table
    }
}

export default Cart;
