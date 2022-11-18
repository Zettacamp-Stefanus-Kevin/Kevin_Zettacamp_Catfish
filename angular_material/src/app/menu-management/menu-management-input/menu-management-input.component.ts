import { Component, OnInit } from '@angular/core';
import { MenuManagementService } from '../menu-management.service';
import { StockManagementService } from 'src/app/stock-management/stock-management.service';
import { menu } from '../menu';
import { FormGroup, FormControl,  Validators, FormArray } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-menu-management-input',
  templateUrl: './menu-management-input.component.html',
  styleUrls: ['./menu-management-input.component.css']
})
export class MenuManagementInputComponent implements OnInit {

  recipeForm: any

  ingredients : any


  constructor(private menuService: MenuManagementService,
    private stockService: StockManagementService,
    public dialog: MatDialogRef<MenuManagementInputComponent>) { }

  ngOnInit(): void {
    this.recipeForm = new FormGroup({
      'recipe_name': new FormControl(null, [Validators.required]),
      'image': new FormControl(null, [Validators.required]),
      'price': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required]),
      'ingredients': new FormArray([])
    })

    this.addIngredient()

    this.stockService.getStock().subscribe(( val: any )=> {
     
      this.ingredients = val.data.GetAllIngredients.data
      console.log(val)
      console.log(val.data.GetAllIngredients.data);
    })
    console.log(this.ingredients)

  }

  addIngredient() {
    let item = new FormGroup({
      ingredient_id: new FormControl(null, Validators.required),
      stock_used: new FormControl(null, Validators.required),
    });

    (<FormArray>this.recipeForm.get('ingredients')).push(item)


  }

  onClick(): void {
    this.dialog.close();
  }

  onSubmit() {
    if (this.recipeForm.valid) {
      this.menuService.addRecipe(this.recipeForm.value)
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
