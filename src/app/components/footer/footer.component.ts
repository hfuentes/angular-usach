import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  links = [];

  constructor(
    private content: ContentService
  ) { }

  ngOnInit(): void {
    this.links = this.content.getFooterLinks();
  }

}
