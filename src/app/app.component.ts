import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { HeroMoreSectionComponent } from "./hero-more-section/hero-more-section.component";
import { SellersSectionComponent } from "./sellers-section/sellers-section.component";
import { ClientsSliderComponent } from "./clients/clients-slider.component";
import { QuestionsAskedComponent } from "./questions-asked/questions-asked.component";
import { SubFooterComponent } from "./sub-footer/sub-footer.component";
import { FooterMainComponent } from "./footer-main/footer-main.component";

@Component({
  selector: "app-root",

  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HeroSectionComponent,
    HeroMoreSectionComponent,
    SellersSectionComponent,
    ClientsSliderComponent,
    QuestionsAskedComponent,
    SubFooterComponent,
    FooterMainComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "ecommerce-app";
}
