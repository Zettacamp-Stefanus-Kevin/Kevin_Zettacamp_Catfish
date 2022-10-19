import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomponenHeaderComponent } from './komponen-header.component';

describe('KomponenHeaderComponent', () => {
  let component: KomponenHeaderComponent;
  let fixture: ComponentFixture<KomponenHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KomponenHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KomponenHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
