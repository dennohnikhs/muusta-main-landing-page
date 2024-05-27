import { Component, Input } from "@angular/core";

@Component({
  selector: "app-shop-inventory-card",
  standalone: true,
  imports: [],
  templateUrl: "./shop-inventory-card.component.html",
  styleUrl: "./shop-inventory-card.component.scss",
})
export class ShopInventoryCardComponent {
  @Input() icon = "";
  @Input() header = "";
  @Input() description = "";
}
