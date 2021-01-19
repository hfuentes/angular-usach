import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProgramComponent } from './pages/program/program.component';

import { WindowRef } from '../app/services/window.service';
import { ImageWithTextComponent } from './components/image-with-text/image-with-text.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { BackgroundWithTextComponent } from './components/background-with-text/background-with-text.component';
import { AdmissionComponent } from './pages/admission/admission.component';
import { ScholarshipComponent } from './pages/scholarship/scholarship.component';
import { AcademicComponent } from './pages/academic/academic.component';
import { StudentsComponent } from './pages/students/students.component';
import { ResearchComponent } from './pages/research/research.component';
import { NewsComponent } from './pages/news/news.component';
import { AcademicDetailsComponent } from './pages/academic-details/academic-details.component';
import { DownloadPdfComponent } from './components/download-pdf/download-pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProgramComponent,
    ImageWithTextComponent,
    ContactFormComponent,
    BackgroundWithTextComponent,
    AdmissionComponent,
    ScholarshipComponent,
    AcademicComponent,
    StudentsComponent,
    ResearchComponent,
    NewsComponent,
    AcademicDetailsComponent,
    DownloadPdfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [WindowRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
