export class CartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    get totalPrice() {
        return this.product.price * this.quantity;
    }
}
export class Cart {
    constructor() {
        this.items = [];
    }
    addItem(product) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity++;
        }
        else {
            this.items.push(new CartItem(product, 1));
        }
    }
    removeItem(productId) {
        const index = this.items.findIndex(item => item.product.id === productId);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
    updateItemQuantity(productId, quantity) {
        const item = this.items.find(item => item.product.id === productId);
        if (item) {
            item.quantity = quantity;
        }
    }
    getItems() {
        return this.items;
    }
    getTotalQuantity() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }
    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.totalPrice, 0);
    }
    clear() {
        this.items = [];
    }
}
//# sourceMappingURL=cart.js.map