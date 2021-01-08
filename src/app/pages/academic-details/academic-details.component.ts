import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-academic-details',
  templateUrl: './academic-details.component.html',
  styleUrls: ['./academic-details.component.scss']
})
export class AcademicDetailsComponent implements OnInit {

  academic = null;
  showPapers = false;
  showProyects = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private content: ContentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        try {
          this.academic = this.content.getAcademicContent(parseInt(params.id, 10));
          if (!this.academic) {
            this.router.navigate(['/']);
          }
        } catch (err) {
          console.error(err);
          this.router.navigate(['/']);
        }
      }
    });
  }
}
