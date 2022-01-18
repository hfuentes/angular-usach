import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WindowRef } from '../../services/window.service';
import { ContentService } from '../../services/content.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.scss']
})
export class AdmissionComponent implements OnInit {

  activeSection = null;
  activeContent = null;
  activeFile = null;
  program = null;
  winWidth = null;
  data: any = {};

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
    this.spinner.show();
    this.content.getAdmissionContent().then(ad => {
      this.data = ad;
      this.activeContent = this.data[this.activeSection];
    }).catch(err => console.error(err)).finally(() => this.spinner.hide());
    this.winWidth = this.winRef.nativeWindow.innerWidth;
    this.activeFile = this.content.getAdmissionFile(this.activeSection);
  }

  goToNav = (target) => {
    this.router.navigate(['/admision', target]);
    if (this.winWidth > 991) {
      this.activeSection = target;
    } else {
      this.activeSection = this.activeSection !== target ? target : null;
    }
    this.activeContent = this.data[this.activeSection];
    this.activeFile = this.content.getAdmissionFile(this.activeSection);
  }

}
