import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockManagementUpdateComponent } from './stock-management-update.component';

describe('StockManagementUpdateComponent', () => {
  let component: StockManagementUpdateComponent;
  let fixture: ComponentFixture<StockManagementUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockManagementUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockManagementUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
