import { Component, OnInit } from '@angular/core';
import { WindowRef } from '../../services/window.service';
import { ContentService } from '../../services/content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.scss']
})
export class AcademicComponent implements OnInit {

  winWidth = null;
  academics = null;

  constructor(
    private winRef: WindowRef,
    private content: ContentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.winWidth = this.winRef.nativeWindow.innerWidth;
    // this.academics = this.content.getAcademicsContent(10);
    this.content.getAcademicos().then(data => {
      this.academics = data;
    }).catch(err => {
      console.error(err);
    });
  }

  goToAcademic(id: number): void {
    this.router.navigate(['/cuerpo-academico', id]);
  }

}
