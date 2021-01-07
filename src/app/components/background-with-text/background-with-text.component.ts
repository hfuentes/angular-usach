import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-background-with-text',
  templateUrl: './background-with-text.component.html',
  styleUrls: ['./background-with-text.component.scss']
})
export class BackgroundWithTextComponent implements OnInit {
  @Input() mainText;
  @Input() secondaryText;
  @Input() url;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick = () => {
    console.log(this.url);
    this.router.navigate([this.url]);
  }

}
