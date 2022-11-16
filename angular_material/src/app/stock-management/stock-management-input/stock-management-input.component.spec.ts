import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockManagementInputComponent } from './stock-management-input.component';

describe('StockManagementInputComponent', () => {
  let component: StockManagementInputComponent;
  let fixture: ComponentFixture<StockManagementInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockManagementInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockManagementInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
