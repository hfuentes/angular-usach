import { Component, OnInit } from '@angular/core';
import { WindowRef } from '../../services/window.service';
import { ContentService } from '../../services/content.service';
import { NgxSpinnerService } from 'ngx-spinner';

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
    private content: ContentService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.winWidth = this.winRef.nativeWindow.innerWidth;
    this.spinner.show();
    this.news = this.content.getNewsContent()
      .then(data => this.news = data)
      .catch(err => console.error(err))
      .finally(() => this.spinner.hide());;
  }

}
