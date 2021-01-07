import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundWithTextComponent } from './background-with-text.component';

describe('BackgroundWithTextComponent', () => {
  let component: BackgroundWithTextComponent;
  let fixture: ComponentFixture<BackgroundWithTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundWithTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundWithTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
