import { ActivatedRoute } from "@angular/router";
import { MenuItem } from "./../menu-item/menu-item.model";
import { Observable } from "rxjs/Observable";
import { Component, OnInit } from "@angular/core";
import { RestaurantsService } from "app/restaurants/restaurants.service";

@Component({
  selector: "mt-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"],
})
export class MenuComponent implements OnInit {
  menu: Observable<MenuItem[]>;
  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.menu = this.restaurantsService.menuOfRestaurant(
      this.route.parent.snapshot.params["id"]
    );
  }
  addMenuItem(item: MenuItem) {
    console.log(
      "🚀 ~ file: menu.component.ts ~ line 25 ~ MenuComponent ~ addMenuItem ~ item",
      item
    );
  }
}
  