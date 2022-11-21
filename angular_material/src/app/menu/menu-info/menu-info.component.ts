import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { menu } from '../menu';

@Component({
  selector: 'app-menu-info',
  templateUrl: './menu-info.component.html',
  styleUrls: ['./menu-info.component.css']
})
export class MenuInfoComponent implements OnInit {

  cart: any
  constructor(
    public dialog: MatDialogRef<MenuInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public menu: menu
  ) { }

  ngOnInit(): void {
    this.init()
  }

  init() {
    if (this.menu) {
      this.cart = this.menu
    }
  }

  Close() {
    this.dialog.close();
  }

}
