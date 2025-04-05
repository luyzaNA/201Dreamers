import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "./components/footer/footer.component";
import {CardComponent} from "./components/card/card.component";
import {TranslateService} from "@ngx-translate/core";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";

@Component({
  selector: "app-root",
  standalone: true,
    imports: [RouterOutlet, FooterComponent, CardComponent, NavBarComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "201Dreammers";
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }
}
