import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  noticia = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private content: ContentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.content.getNoticia(params.id)
          .then(data => this.noticia = data)
          .catch(err => {
            console.error(err);
            this.router.navigate(['/']);
          });
      }
    });
  }

}
