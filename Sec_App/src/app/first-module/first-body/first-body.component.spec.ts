import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstBodyComponent } from './first-body.component';

describe('FirstBodyComponent', () => {
  let component: FirstBodyComponent;
  let fixture: ComponentFixture<FirstBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
