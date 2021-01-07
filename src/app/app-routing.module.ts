import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import { ProgramComponent } from '../app/pages/program/program.component';
import { AdmissionComponent } from '../app/pages/admission/admission.component';
import { ScholarshipComponent } from '../app/pages/scholarship/scholarship.component';
import { AcademicComponent } from '../app/pages/academic/academic.component';
import { StudentsComponent } from '../app/pages/students/students.component';
import { ResearchComponent } from '../app/pages/research/research.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'programa/:activeSection',
    component: ProgramComponent
  },
  {
    path: 'admision/:activeSection',
    component: AdmissionComponent
  },
  {
    path: 'becas',
    component: ScholarshipComponent
  },
  {
    path: 'cuerpo-academico',
    component: AcademicComponent
  },
  {
    path: 'estudiantes/:activeSection',
    component: StudentsComponent
  },
  {
    path: 'investigacion',
    component: ResearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
