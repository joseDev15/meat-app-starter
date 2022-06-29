import { CartItem } from "./../restaurant-detail/shopping-cart/cart-item.model";
import { OrderService } from "./order.service";
import { RadioOption } from "./../shared/radio/radio-option.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "mt-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.css"],
})
export class OrderComponent implements OnInit {
  paymentsOption: RadioOption[] = [
    { label: "Dinheiro", value: "MON" },
    { label: "Cartão de Débito", value: "DEB" },
    { label: "Cartão Refeição", value: "REF" },
  ];
  constructor(private OrderService: OrderService) {}

  ngOnInit() {}
  cartItems(): CartItem[] {
    return this.OrderService.cartItems();
  }
  increaseQty(item: CartItem) {
    return this.OrderService.increaseQty(item);
  }
  decreaseQty(item: CartItem) {
    return this.OrderService.decreaseQty(item);
  }
  remove(item: CartItem) {
    return this.OrderService.remove(item);
  }

}
