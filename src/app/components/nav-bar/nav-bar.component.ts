import {Component} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatBadgeModule} from "@angular/material/badge";
import {FormsModule} from "@angular/forms";
import {TranslatePipe, TranslateService} from "@ngx-translate/core";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatBadgeModule,
    FormsModule,
    HttpClientModule,
    TranslatePipe
  ],
  providers: [TranslateService],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('ro');
    this.translate.use('ro');
  }
  switchCulture(language: string) {
    if (language === 'en') {
      this.translate.use('en');
    } else if (language === 'ro') {
      this.translate.use('ro');
    }
  }
}
