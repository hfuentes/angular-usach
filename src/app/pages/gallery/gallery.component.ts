import { Component, OnInit } from '@angular/core';
import { Gallery } from 'angular-gallery';
import { ContentService } from 'src/app/services/content.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  galeria: [{
    imagen: string,
    texto: string
  }];

  constructor(
    private gallery: Gallery,
    private content: ContentService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.content.getGaleria()
      .then(data => this.galeria = data)
      .catch(err => console.error(err))
      .finally(() => this.spinner.hide());
  }

  showGallery(index: number): void {
    this.gallery.load({
      images: this.galeria.map(x => ({ path: x.imagen })),
      index
    });
  }

}
