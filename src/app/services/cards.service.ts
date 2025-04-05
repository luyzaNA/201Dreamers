import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Product} from "../interfaces/product";


@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor() { }

  getCards():Observable<Product[]>{
    return of([
      {
        id: 1,
        title: 'Woman T-shirt ',
        price: 150,
        currency: 'EURO',
        gifSrc: 'assets/videos/video6.gif',
        audioSrc: 'assets/audio/music1.mp3'
      },
      {
        id: 2,
        title: 'Button-down shirt',
        price: 140,
        currency: 'EURO',
        videoSrc: 'assets/videos/video1.mp4',
        audioSrc: 'assets/audio/music1.mp3'
      },
      {
        id: 3,
        title: 'Woman Sweater',
        price: 250,
        currency: 'EURO',
        gifSrc: 'assets/videos/video2' +
            '.gif',
        audioSrc: 'assets/audio/music1.mp3'
      },
      {
        id: 4,
        title: 'Woman T-sshirt ',
        price: 80,
        currency: 'EURO',
        gifSrc: 'assets/videos/video3.gif',
        audioSrc: 'assets/audio/music1.mp3'
      },
      {
        id: 5,
        title: 'Man Hoodie ',
        price: 100,
        currency: 'EURO',
        gifSrc: 'assets/videos/video4.gif',
        audioSrc: 'assets/audio/music1.mp3'
      },
      {
        id: 6,
        title: 'Man Hoodie',
        price: 139.99,
        currency: 'EURO',
        gifSrc: 'assets/videos/video5.gif',
        audioSrc: 'assets/audio/music1.mp3'
      },
      {
        id: 7,
        title: 'Man Hoodie ',
        price: 100,
        currency: 'EURO',
        gifSrc: 'assets/videos/video4.gif',
        audioSrc: 'assets/audio/music1.mp3'
      },
      {
        id: 8,
        title: 'Man Hoodie',
        price: 139.99,
        currency: 'EURO',
        gifSrc: 'assets/videos/video5.gif',
        audioSrc: 'assets/audio/music1.mp3'
      }
      ])
  }
}
