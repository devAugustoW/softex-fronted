import { Product } from './product.js';

export class CartItem {
  constructor(
    public product: Product,
    public quantity: number
  ) {}

  get totalPrice(): number {
    return this.product.price * this.quantity;
  }
}

export class Cart {
  private items: CartItem[] = [];

  addItem(product: Product): void {
    const existingItem = this.items.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push(new CartItem(product, 1));
    }
  }

  removeItem(productId: string): void {
    const index = this.items.findIndex(item => item.product.id === productId);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  updateItemQuantity(productId: string, quantity: number): void {
    const item = this.items.find(item => item.product.id === productId);
    if (item) {
      item.quantity = quantity;
    }
  }

  getItems(): CartItem[] {
    return this.items;
  }

  getTotalQuantity(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.totalPrice, 0);
  }

  clear(): void {
    this.items = [];
  }
}