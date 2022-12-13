import { Component, Inject, OnInit } from '@angular/core';
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
  selector: 'app-menu-management-update',
  templateUrl: './menu-management-update.component.html',
  styleUrls: ['./menu-management-update.component.css'],
})
export class MenuManagementUpdateComponent implements OnInit {
  recipeForm: any;

  ingredients: any = [];

  constructor(
    private menuService: MenuManagementService,
    private stockService: StockManagementService,
    public dialog: MatDialogRef<MenuManagementUpdateComponent>,
    private translate: TranslateService,
    @Inject(MAT_DIALOG_DATA) public menu: any
  ) {}

  ngOnInit(): void {
    this.recipeForm = new FormGroup({
      id: new FormControl(null),
      recipe_name: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      discount : new FormControl(null, [Validators.required]),
      ingredients: new FormArray([]),
    });

    this.menuService.getIngredient().subscribe((val: any) => {
      this.ingredients = val.data.GetAllIngredients.data;
    });

    let tempIngeridient = {
      id: this.menu.id,
      recipe_name: this.menu.recipe_name,
      price: this.menu.price,
      discount: this.menu.discount
    };

    let ingredients: any = [];

    if (this.menu?.ingredients) {
      for (let ingredient of this.menu?.ingredients) {
        ingredients.push({
          ingredient_id: ingredient.ingredient_id,
          stock_used: ingredient.stock_used,
        });
        this.addIngredient();
      }
      const temp = {
        ...tempIngeridient,
        ingredients: ingredients,
      };

      this.recipeForm.patchValue(temp);
    }
  }

  addIngredient() {
    let item = new FormGroup({
      ingredient_id: new FormControl(null),
      stock_used: new FormControl(null),
    });
    (<FormArray>this.recipeForm.get('ingredients')).push(item);
  }

  onClick(): void {
    this.dialog.close();
  }

  onSubmit() {
    const a = {
      id: this.menu.id,
      ...this.recipeForm.value,
    };

    if (this.recipeForm.valid) {
      this.menuService.updateRecipe(a).subscribe((resp) => {
        this.ingredients = resp;
      });
      // .then(()=>{
      //   this.dialog.close(true)
      // })

      this.dialog.close(true);
    } else {
      Swal.fire({
        icon: 'error',
        title: this.translate.instant('Failed'),
        text: this.translate.instant('Try again'),
        confirmButtonAriaLabel: 'OK',
      });

      this.recipeForm.markAllAsTouched();
    }
  }

  onRemove(data: any) {}
}
