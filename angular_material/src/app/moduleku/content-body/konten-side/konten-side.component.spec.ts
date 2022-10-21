import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontenSideComponent } from './konten-side.component';

describe('KontenSideComponent', () => {
  let component: KontenSideComponent;
  let fixture: ComponentFixture<KontenSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KontenSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KontenSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
