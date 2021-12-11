import { Component, OnInit } from '@angular/core';
import { WindowRef } from '../../services/window.service';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  winWidth = null;
  news = null;

  constructor(
    private winRef: WindowRef,
    private content: ContentService
  ) { }

  ngOnInit(): void {
    this.winWidth = this.winRef.nativeWindow.innerWidth;
    this.news = this.content.getNewsContent().then(data => {
      this.news = data;
    }).catch(err => {
      console.error(err);
    });
  }

}
