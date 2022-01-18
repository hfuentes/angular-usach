import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WindowRef } from '../../services/window.service';
import { ContentService } from '../../services/content.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  activeSection = null;
  program = null;
  winWidth = null;
  graduates = null;
  thesis = null;

  constructor(
    private winRef: WindowRef,
    private route: ActivatedRoute,
    private router: Router,
    private content: ContentService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.activeSection = params.activeSection;
    });
    this.winWidth = this.winRef.nativeWindow.innerWidth;
    this.spinner.show();
    this.content.getEstudiantes()
      .then(data => (this.graduates = data, this.content.getTesis()))
      .then(data => this.thesis = data)
      .catch(err => console.error(err))
      .finally(() => this.spinner.hide());
  }

  goToNav = (target) => {
    this.router.navigate(['/estudiantes', target]);
    if (this.winWidth > 991) {
      this.activeSection = target;
    } else {
      this.activeSection = this.activeSection !== target ? target : null;
    }
  }

}
