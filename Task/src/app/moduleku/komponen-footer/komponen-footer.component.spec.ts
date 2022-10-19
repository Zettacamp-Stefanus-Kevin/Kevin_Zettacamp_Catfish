import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomponenFooterComponent } from './komponen-footer.component';

describe('KomponenFooterComponent', () => {
  let component: KomponenFooterComponent;
  let fixture: ComponentFixture<KomponenFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KomponenFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KomponenFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
