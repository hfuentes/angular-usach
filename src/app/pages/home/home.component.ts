import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WindowRef } from '../../services/window.service';
import Swipe from 'swipejs';
import { ContentService } from 'src/app/services/content.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  @ViewChild('videoPlayer') videoplayer: ElementRef;

  video: SafeResourceUrl;
  homeData: {
    slide1: string,
    slide2: string,
    slide3: string,
    slide4: string,
    video: string,
    email: string,
    admision: string,
    conocenos: string,
    plan: string,
    acreditacion: string,
    noticia1: any,
    noticia2: any,
    noticia3: any
  } = {
      slide1: '',
      slide2: '',
      slide3: '',
      slide4: '',
      video: '',
      email: '',
      admision: '',
      conocenos: '',
      plan: '',
      acreditacion: '',
      noticia1: undefined,
      noticia2: undefined,
      noticia3: undefined
    };

  constructor(
    private winRef: WindowRef,
    private content: ContentService,
    private sanitizer: DomSanitizer,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.winRef.mySwipe = new Swipe(document.getElementById('slider'), {
      startSlide: 0,
      speed: 400,
      auto: 5000,
      continuous: true,
      disableScroll: false,
      stopPropagation: false,
    });
    this.spinner.show();
    this.content.getHomeData().then(data => {
      this.homeData = data;
      this.video = this.sanitizer.bypassSecurityTrustResourceUrl(this.homeData.video);
    }).catch(err => console.error(err)).finally(() => this.spinner.hide());
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
