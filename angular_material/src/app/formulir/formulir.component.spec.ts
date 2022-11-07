import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulirComponent } from './formulir.component';

describe('FormulirComponent', () => {
  let component: FormulirComponent;
  let fixture: ComponentFixture<FormulirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
