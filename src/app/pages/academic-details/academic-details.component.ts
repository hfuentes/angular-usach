import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from 'src/app/services/content.service';
import { NgxSpinnerService } from 'ngx-spinner';

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
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.spinner.show();
        this.content.getAcademico(params.id).then(data => {
          this.academic = data;
        }).catch(err => {
          console.error(err);
          this.router.navigate(['/']);
        }).finally(() => this.spinner.hide());
      }
    });
  }
}
