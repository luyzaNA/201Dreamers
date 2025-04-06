import { Component } from '@angular/core';
import {CardsService} from "../../services/cards.service";
import {Product} from "../../interfaces/product";
import {CardComponent} from "../card/card.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [
    CardComponent,
    NgForOf
  ],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.css'
})
export class CardsListComponent {

  cards: Product[] = [];

  constructor(private cardService: CardsService) {}

  ngOnInit(): void {
    this.cardService.getCards().subscribe(data => {
      this.cards = data;
    });
  }
}
