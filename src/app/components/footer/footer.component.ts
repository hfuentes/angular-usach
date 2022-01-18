import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  links = [];
  footerData: {
    facebook: string,
    twitter: string,
    instagram: string,
    youtube: string,
    linkedin: string,
    cna: string
  };

  constructor(
    private content: ContentService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.links = this.content.getFooterLinks();
    this.spinner.show();
    this.content.getFooterData()
      .then(data => this.footerData = data)
      .catch(err => console.error(err))
      .finally(() => this.spinner.hide());;
  }

  goExternal(key: string): void {
    document.location.href = this.footerData[key];
  }

}
