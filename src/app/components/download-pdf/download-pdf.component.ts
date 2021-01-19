import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-download-pdf',
  templateUrl: './download-pdf.component.html',
  styleUrls: ['./download-pdf.component.scss']
})
export class DownloadPdfComponent implements OnInit {

  @Input()
  file: string;

  constructor() { }

  ngOnInit(): void {
  }

}
