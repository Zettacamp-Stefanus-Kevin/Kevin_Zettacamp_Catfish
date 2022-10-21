import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontenMainComponent } from './konten-main.component';

describe('KontenMainComponent', () => {
  let component: KontenMainComponent;
  let fixture: ComponentFixture<KontenMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KontenMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KontenMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
