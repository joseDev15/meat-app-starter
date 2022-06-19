import { ShoppingCartService } from "./shopping-cart.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "mt-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.css"],
})
export class ShoppingCartComponent implements OnInit {
  constructor(private ShoppingCartService: ShoppingCartService) {
    console.log(
      "🚀 ~ file: shopping-cart.component.ts ~ line 11 ~ ShoppingCartComponent ~ ShoppingCartService",
      ShoppingCartService
    );
  }

  ngOnInit() {}
  items(): any[] {
    let itens = this.ShoppingCartService.items;
    console.log(
      "🚀 ~ file: shopping-cart.component.ts ~ line 17 ~ ShoppingCartComponent ~ items ~ itens",
      itens
    );
    return itens;
  }
  total(): number {
    let total = this.ShoppingCartService.total();
    console.log(
      "🚀 ~ file: shopping-cart.component.ts ~ line 23 ~ ShoppingCartComponent ~ total ~ total",
      total
    );

    return total;
  }
  clear() {
    this.ShoppingCartService.clear();
    console.log(
      "🚀 ~ file: shopping-cart.component.ts ~ line 32 ~ ShoppingCartComponent ~ clear ~ this.ShoppingCartService",
      this.ShoppingCartService
    );
  }
  removeItem(item: any) {
    console.log(
      "🚀 ~ file: shopping-cart.component.ts ~ line 43 ~ ShoppingCartComponent ~ removeItem ~ item",
      item
    );
    this.ShoppingCartService.removeItem(item);
  }
  addItem(item: any) {
    console.log(
      "🚀 ~ file: shopping-cart.component.ts ~ line 50 ~ ShoppingCartComponent ~ addItem ~ item",
      item
    );
    this.ShoppingCartService.addItem(item)
  }
}
