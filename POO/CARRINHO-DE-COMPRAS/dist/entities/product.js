import { v4 as uuidv4 } from "uuid";
export class Product {
    constructor(id, _name, _category, _price, _imageUrl) {
        this._name = _name;
        this._category = _category;
        this._price = _price;
        this._imageUrl = _imageUrl;
        this._quantity = 0;
        this._id = id || uuidv4();
    }
    get id() { return this._id; }
    get name() { return this._name; }
    get category() { return this._category; }
    get price() { return this._price; }
    get imageUrl() { return this._imageUrl; }
    get quantity() { return this._quantity; }
    addToCart() {
        this._quantity = 1;
    }
    increaseQuantity() {
        this._quantity++;
    }
    decreaseQuantity() {
        if (this._quantity > 0) {
            this._quantity--;
        }
    }
}
//# sourceMappingURL=product.js.map