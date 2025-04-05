import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  isMusicStarted: boolean = false;

  playMusic(){
    this.isMusicStarted = !this.isMusicStarted;
  }

}
