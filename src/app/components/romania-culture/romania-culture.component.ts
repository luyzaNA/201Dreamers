import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-romania-culture',
  standalone: true,
  imports: [],
  templateUrl: './romania-culture.component.html',
  styleUrl: './romania-culture.component.css'
})
export class RomaniaCultureComponent {
  private maxZoom: number = 3;
  highlightShown: boolean = false;


  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const image = document.querySelector('.zoom-image') as HTMLImageElement | null;
    const arrow = document.querySelector('.scroll-arrow') as HTMLElement | null;
    const text = document.querySelector('.material-info') as HTMLElement | null;

    if (image && arrow && text) {
      const scrollTop = window.scrollY;
      const scale = 1 + scrollTop / 1000;
      const clampedScale = Math.min(scale, this.maxZoom);

      image.style.transform = `scale(${clampedScale})`;

      const scrollOffset = scrollTop / 5;
      arrow.style.transform = `translateY(${scrollOffset}px)`;

      if (clampedScale >= this.maxZoom) {
        arrow.classList.add('fixed');
        text.classList.add('fixed');

      } else {
        arrow.classList.remove('fixed');
        text.classList.add('fixed');

      }
      if (scrollTop > 99 && clampedScale < this.maxZoom) {
        arrow.style.opacity = '1';
        text.style.opacity = '1';
      } else {
        arrow.style.opacity = '0';
        text.style.opacity = '0';
      }
    }
  }

}
