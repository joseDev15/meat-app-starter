import { MenuItem } from "./../menu-item/menu-item.model";
import { CartItem } from "./cart-item.model";
export class ShoppingCartService {
  items: CartItem[] = [];
  clear() {
    this.items = [];
    console.log(
      "🚀 ~ file: shopping-cart.service.ts ~ line 7 ~ ShoppingCartService ~ clear ~ this.items",
      this.items
    );
  }
  addItem(item: MenuItem) {
    let founditem = this.items.find(
      (MenuItem) => MenuItem.menuItem.id === item.id
    );
    console.log(
      "🚀 ~ file: shopping-cart.service.ts ~ line 12 ~ ShoppingCartService ~ addItem ~ founditem",
      founditem
    );
    if (founditem) {
      this.increaseQty(founditem);
      console.log(
        "🚀 ~ file: shopping-cart.service.ts ~ line 15 ~ ShoppingCartService ~ addItem ~ founditem",
        founditem
      );
    } else {
      this.items.push(new CartItem(item));
      console.log(
        "🚀 ~ file: shopping-cart.service.ts ~ line 16 ~ ShoppingCartService ~ addItem ~ this.items",
        this.items
      );
    }
  }
  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
    console.log(
      "🚀 ~ file: shopping-cart.service.ts ~ line 20 ~ ShoppingCartService ~ removeItem ~ this.items",
      this.items
    );
  }
  total(): number {
    let total = this.items
      .map((item) => item.value())
      .reduce((prev, value) => prev + value, 0);
    console.log(
      "🚀 ~ file: shopping-cart.service.ts ~ line 45 ~ ShoppingCartService ~ total ~ total",
      total
    );
    return total;
  }
  increaseQty(item: CartItem) {
    item.quantity = item.quantity + 1;
  }
  decreaseQty(item: CartItem) {
    item.quantity = item.quantity - 1;
    if (item.quantity === 0) {
      this.removeItem(item);
    }
  }
}
