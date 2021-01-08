import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WindowRef } from '../../services/window.service';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.scss']
})
export class AdmissionComponent implements OnInit {

  activeSection = null;
  activeContent = null;
  program = null;
  winWidth = null;

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
    this.activeContent = this.content.getAdmissionContent(this.activeSection);
  }

  goToNav = (target) => {
    this.router.navigate(['/admision', target]);
    if (this.winWidth > 991) {
      this.activeSection = target;
    } else {
      this.activeSection = this.activeSection !== target ? target : null;
    }
    this.activeContent = this.content.getAdmissionContent(this.activeSection);
  }

}
