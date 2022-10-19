import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomponenMainComponent } from './komponen-main.component';

describe('KomponenMainComponent', () => {
  let component: KomponenMainComponent;
  let fixture: ComponentFixture<KomponenMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KomponenMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KomponenMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
