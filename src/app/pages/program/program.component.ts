import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WindowRef } from '../../services/window.service';
import { ContentService } from '../../services/content.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {
  activeSection = null;
  activeContent = null;
  activeFile = null;
  program = null;
  winWidth = null;
  contact = null;
  programaData: {
    jornada: string,
    jornadaGlosa: string,
    correo: string,
    modalidad: string,
    caracter: string,
    dedicacion: string,
    modalidadGlosa: string,
    caracterGlosa: string,
    dedicacionGlosa: string,
    ahno: string,
    postulaciones: string,
    clases: string,
    valor: string,
    subvalor: string,
    pago: string,
    telefono: string,
    url: string
  } = null;

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
    this.content.getProgramaData().then(data => {
      this.programaData = data;
      this.transformAmenities();
      this.activeContent = this.programaData[this.activeSection];
    }).catch(err => console.error(err)).finally(() => this.spinner.hide());
    this.winWidth = this.winRef.nativeWindow.innerWidth;
    this.activeFile = this.content.getProgramFile(this.activeSection);
  }

  transformAmenities(): void {
    if (this.programaData) {
      switch (this.programaData.jornada) {
        case 'vespertino': this.programaData.jornadaGlosa = 'Vespertino'; break;
        case 'diurno': this.programaData.jornadaGlosa = 'Diurno'; break;
      }
      switch (this.programaData.modalidad) {
        case 'presencial': this.programaData.modalidadGlosa = 'Presencial'; break;
        case 'online': this.programaData.modalidadGlosa = 'Online'; break;
        case 'semipresencial': this.programaData.modalidadGlosa = 'Semipresencial'; break;
      }
      switch (this.programaData.caracter) {
        case 'programa_academico': this.programaData.caracterGlosa = 'Académico'; break;
        case 'programa_profesional': this.programaData.caracterGlosa = 'Profesional'; break;
      }
      switch (this.programaData.dedicacion) {
        case 'completa': this.programaData.dedicacionGlosa = 'Completa'; break;
        case 'parcial': this.programaData.dedicacionGlosa = 'Parcial'; break;
      }
    }
  }

  goToNav = (target) => {
    this.router.navigate(['/programa', target]);
    if (this.winWidth > 991) {
      this.activeSection = target;
    } else {
      this.activeSection = this.activeSection !== target ? target : null;
    }
    this.activeContent = this.programaData[this.activeSection];
    this.activeFile = this.content.getProgramFile(this.activeSection);
  }
}
