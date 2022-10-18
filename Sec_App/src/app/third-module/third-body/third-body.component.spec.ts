import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdBodyComponent } from './third-body.component';

describe('ThirdBodyComponent', () => {
  let component: ThirdBodyComponent;
  let fixture: ComponentFixture<ThirdBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
