import { MenuItem } from "./../menu-item/menu-item.model";
export class CartItem {
  constructor(public menuItem: MenuItem, public quantity: number = 1) {}

  value(): number {
    console.log("🚀 ~ file: cart-item.model.ts ~ line 7 ~ cartItem ~ value ~ this.menuItem.price", this.menuItem.price)
    return this.menuItem.price * this.quantity;

  }
}
