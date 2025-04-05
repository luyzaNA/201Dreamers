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

  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('audioElement') audioElement!: ElementRef<HTMLAudioElement>;

  ngAfterViewInit() {
    if (this.videoElement?.nativeElement) {
      this.videoElement.nativeElement.muted = true;
    }
  }

  toggleMusic() {
    const audio = this.audioElement?.nativeElement;

    if (audio) {
      if (this.isMusicStarted) {
        audio.pause();
        audio.currentTime = 0;
      } else {
        audio.play();
      }
      this.isMusicStarted = !this.isMusicStarted;
    }
  }

  onMouseEnter() {
    this.videoElement?.nativeElement?.play();
  }

  onMouseLeave() {
    this.videoElement?.nativeElement?.pause();
  }
}