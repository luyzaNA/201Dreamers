import {Component, ElementRef, ViewChild} from '@angular/core';
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
  @ViewChild('videoElement') videoElement: ElementRef | undefined;
  audio: HTMLAudioElement | undefined;

  constructor() {
    this.audio = new Audio('assets/audio/music.mp3');
  }

  toggleMusic() {

    if (this.isMusicStarted) {
      this.audio?.pause();
    } else {
      this.audio?.play();
    }
    this.isMusicStarted = !this.isMusicStarted;
  }

  onMouseEnter() {
    const video = this.videoElement?.nativeElement;
    if (video) {
      video.play();
    }
  }

  onMouseLeave() {
    const video = this.videoElement?.nativeElement;
    if (video) {
      video.pause();
    }
  }
}