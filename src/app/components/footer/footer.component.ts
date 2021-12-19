import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

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
  };

  constructor(
    private content: ContentService
  ) { }

  ngOnInit(): void {
    this.links = this.content.getFooterLinks();
    this.content.getFooterData()
      .then(data => this.footerData = data)
      .catch(err => console.error(err));
  }

  goExternal(key: string): void {
    document.location.href = this.footerData[key];
  }

}
