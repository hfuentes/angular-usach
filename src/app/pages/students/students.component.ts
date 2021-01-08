import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WindowRef } from '../../services/window.service';
import { ContentService } from '../../services/content.service';
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
    private content: ContentService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.activeSection = params.activeSection;
      console.log(this.route);
    });
    this.winWidth = this.winRef.nativeWindow.innerWidth;
    this.graduates = this.content.getGraduatesContent(20);
    this.thesis = this.content.getThesisContent(20);
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
