import { Component, Inject, OnInit } from '@angular/core';
import { MenuManagementService } from '../menu-management.service';
import { StockManagementService } from 'src/app/stock-management/stock-management.service';
import { menu } from '../menu';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-menu-management-update',
  templateUrl: './menu-management-update.component.html',
  styleUrls: ['./menu-management-update.component.css']
})
export class MenuManagementUpdateComponent implements OnInit {

  recipeForm: any

  ingredients: any = []


  constructor(private menuService: MenuManagementService,
    private stockService: StockManagementService,
    public dialog: MatDialogRef<MenuManagementUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public menu: menu,
  ) { }

  ngOnInit(): void {
    this.recipeForm = new FormGroup({
      'id': new FormControl(null),
      'recipe_name': new FormControl(null, [Validators.required]),
      'price': new FormControl(null, [Validators.required]),
      'ingredients': new FormArray([])
    })

    this.addIngredient()

    this.stockService.getStock().subscribe((val: any) => {
      // this.ingredients = val.data.GetAllIngredients.data

      const data = val.data.GetAllIngredients.data

      const item: any = []

      if (this.ingredients.length) {

        data?.ingredients.forEach((getItem: any) => {
          console.log(getItem);
          item.push({
            ingredients_id: getItem.ingredient_id,
            stock_used: getItem.stock_used
          });
        });
      }

      console.log(item)
      this.ingredients = item

      console.log(val)
      console.log(val.data.GetAllIngredients.data);
    })

    // for looping
    // if (this.menu?.ingredients) {
    //   let data = this.menu.ingredients.ingredient_id;
    //   data = value.map((item: any) => {
    //     this.addIngredient();

    //     return {
    //       ingredients_id : item.ingredient_id
    //       stock_used : item.stock_used
    //     } 
    //   })
    // }

    console.log(this.ingredients)
    this.recipeForm.patchValue(this.menu)
  }

  addIngredient() {
    let item = new FormGroup({
      ingredient_id: new FormControl(null,),
      stock_used: new FormControl(null,),
    });

    (<FormArray>this.recipeForm.get('ingredients')).push(item)
  }

  onClick(): void {
    this.dialog.close();
  }

  onSubmit() {
    if (this.recipeForm.valid) {
      this.menuService.updateRecipe(this.recipeForm.value)
      console.log('berhasil');
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Your work has been saved',
      });
      this.dialog.close();
    } else {
      console.log('gagal');
      Swal.fire({
        icon: 'error',
        title: 'Failed',
        text: 'Try again',
      });

      this.recipeForm.markAllAsTouched();
    }
  }

}
