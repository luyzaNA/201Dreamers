import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "./components/footer/footer.component";
import {CardComponent} from "./components/card/card.component";

@Component({
  selector: "app-root",
  standalone: true,
    imports: [RouterOutlet, FooterComponent, CardComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "201Dreammers";
}
