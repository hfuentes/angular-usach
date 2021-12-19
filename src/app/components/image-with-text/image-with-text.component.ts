import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-with-text',
  templateUrl: './image-with-text.component.html',
  styleUrls: ['./image-with-text.component.scss']
})
export class ImageWithTextComponent implements OnInit {

  @Input() noticia: { id: string, titulo: string, imagen: string };

  constructor() { }

  ngOnInit(): void {
  }

}
