import { Component, OnInit } from '@angular/core';
import { MenuManagementService } from '../menu-management.service';
import { StockManagementService } from 'src/app/stock-management/stock-management.service';
import { menu } from '../menu';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-management-input',
  templateUrl: './menu-management-input.component.html',
  styleUrls: ['./menu-management-input.component.css'],
})
export class MenuManagementInputComponent implements OnInit {
  recipeForm: any;

  ingredients: any;

  constructor(
    private menuService: MenuManagementService,
    public dialog: MatDialogRef<MenuManagementInputComponent>,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.recipeForm = new FormGroup({
      recipe_name: new FormControl(null, [Validators.required]),
      image: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      ingredients: new FormArray([]),
    });

    this.menuService.getIngredient().subscribe((val: any) => {
      this.ingredients = val.data.GetAllIngredients.data;
    });
  }

  addIngredient() {
    let item = new FormGroup({
      ingredient_id: new FormControl(null, Validators.required),
      stock_used: new FormControl(null, Validators.required),
    });
    (<FormArray>this.recipeForm.get('ingredients')).push(item);
  }

  onClick(): void {
    this.dialog.close();
  }

  onRemove(i: number) {
    this.recipeForm.get('ingredients').removeAt(i);
  }

  onSubmit() {
    if (this.recipeForm.valid) {
      this.dialog.close(this.recipeForm.value);
    } else {
      Swal.fire({
        icon: 'error',
        title: this.translate.instant('Failed'),
        text: this.translate.instant('Try again'),
      });
      this.recipeForm.markAllAsTouched();
    }
  }
}
