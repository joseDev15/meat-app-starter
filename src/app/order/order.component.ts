import { CartItem } from "./../restaurant-detail/shopping-cart/cart-item.model";
import { OrderService } from "./order.service";
import { RadioOption } from "./../shared/radio/radio-option.model";
import { Component, OnInit } from "@angular/core";
import { Order, OrderItem } from "./order.model";
import { Router } from "@angular/router";

@Component({
  selector: "mt-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.css"],
})
export class OrderComponent implements OnInit {
  delivery: number = 8;
  paymentsOption: RadioOption[] = [
    { label: "Dinheiro", value: "MON" },
    { label: "Cartão de Débito", value: "DEB" },
    { label: "Cartão Refeição", value: "REF" },
  ];
  constructor(private OrderService: OrderService,private router:Router) {}

  ngOnInit() {}
  itemsValue(): number {
    return this.OrderService.itemValue();
  }
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
  checkOrder(order: Order) {
    order.orderItems = this.cartItems().map(
      (item: CartItem) => new OrderItem(item.quantity, item.menuItem.id)
    );
    this.OrderService.checkOrder(order).subscribe((orderId: string) => {
      this.router.navigate(['/order-summary'])

      this.OrderService.clear();
    });
    console.log(JSON.stringify(order));
  }
}
