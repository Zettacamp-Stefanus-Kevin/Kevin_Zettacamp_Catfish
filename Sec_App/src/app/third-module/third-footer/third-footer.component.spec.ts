import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdFooterComponent } from './third-footer.component';

describe('ThirdFooterComponent', () => {
  let component: ThirdFooterComponent;
  let fixture: ComponentFixture<ThirdFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
