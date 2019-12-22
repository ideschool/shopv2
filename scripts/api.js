
class Api {
    constructor() {
        this.shopName = "nazwa_sklepu";
        this.url = "http://localhost:3000/db/" + this.shopName;
        this.headers = {
            "Accept": "application/json",
            "Content-Type": "application/json"
        };
    }


    /**
     * GET ONE PRODUCT
     */
    getOne(id) {
        const url = this.url + "/" + id;
        return fetch(url, {method: "GET"}).then(response => response.json());
    }

    /**
     * GET ALL PRODUCTS
     */
    getAll() {
        const url = this.url + "/";
        return fetch(url, {method: "GET"}).then(response => response.json());
    }

    /**
     * POST PRODUCT
     */
    post(id, data) {
        const url = this.url + "/" + id;
        return fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: this.headers
        }).then(response => response.json());
    };

    /**
     * PUT PRODUCT
     */
    put(id, data) {
        const url = this.url + "/" + id;
        return fetch(url, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: this.headers
        }).then(response => response.json());
    };

    /**
     * BUY PRODUCT
     */
    buy(id, data) {
        const url = this.url + "/" + id + "/buy";
        return fetch(url, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: this.headers
        }).then(response => response.json());
    };

    /**
     * DELETE PRODUCT
     */
    delete(id) {
        const url = this.url + "/" + id;
        return fetch(url, {method: "DELETE"}).then(response => response.json());
    };
}

export default Api;

