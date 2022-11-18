import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuManagementInputComponent } from './menu-management-input.component';

describe('MenuManagementInputComponent', () => {
  let component: MenuManagementInputComponent;
  let fixture: ComponentFixture<MenuManagementInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuManagementInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuManagementInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
