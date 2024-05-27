import { Component } from "@angular/core";
import { ShopInventoryCardComponent } from "../shop-inventory-card/shop-inventory-card.component";

@Component({
  selector: "app-sellers-section",

  standalone: true,
  imports: [ShopInventoryCardComponent],
  templateUrl: "./sellers-section.component.html",
  styleUrl: "./sellers-section.component.scss",
})
export class SellersSectionComponent {}
