import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WindowRef } from '../../services/window.service';
import Swipe from 'swipejs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  @ViewChild('videoPlayer') videoplayer: ElementRef;

  constructor(private winRef: WindowRef) { }

  ngOnInit(): void {
    this.winRef.mySwipe = new Swipe(document.getElementById('slider'), {
      startSlide: 0,
      speed: 400,
      auto: 5000,
      continuous: true,
      disableScroll: false,
      stopPropagation: false,
    });
  }
  prevSlide = () => {
    this.winRef.mySwipe.prev();
  }

  nextSlide = () => {
    this.winRef.mySwipe.next();
  }

  toggleVideo = (event: any) => {
    this.videoplayer.nativeElement.play();
  }
}
