import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuManagementUpdateComponent } from './menu-management-update.component';

describe('MenuManagementUpdateComponent', () => {
  let component: MenuManagementUpdateComponent;
  let fixture: ComponentFixture<MenuManagementUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuManagementUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuManagementUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
