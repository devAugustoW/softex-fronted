import { v4 as uuidv4 } from "uuid";

export class Product {
  private _id: string;
  private _quantity: number = 0;

  constructor(
    id: string | undefined,
    private _name: string,
    private _category: string,
    private _price: number,
    private _imageUrl: string
  ) {
    this._id = id || uuidv4();
  }

  get id(): string { return this._id; }
  get name(): string { return this._name; }
  get category(): string { return this._category; }
  get price(): number { return this._price; }
  get imageUrl(): string { return this._imageUrl; }
  get quantity(): number { return this._quantity; }

  addToCart(): void {
    this._quantity = 1;
  }

  increaseQuantity(): void {
    this._quantity++;
  }

  decreaseQuantity(): void {
    if (this._quantity > 0) {
      this._quantity--;
    }
  }
}