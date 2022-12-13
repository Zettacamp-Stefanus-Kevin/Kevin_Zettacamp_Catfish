import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { debounceTime } from 'rxjs';
import { SubSink } from 'subsink';
import { MenuDetailComponent } from '../../menu-detail/menu-detail.component';
import { MenuInfoComponent } from '../../menu-info/menu-info.component';



@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css'],
})
export class MenuCardComponent implements OnInit {
  @Input() recipe: any;

  constructor(private dialog: MatDialog) { }

  token: string | null = '';

  ngOnInit(): void {
    if (localStorage.getItem('getToken') !== null) {
      this.token = localStorage.getItem('getToken');
    }
  }

  info(parameter: any) {
    const dialogRef = this.dialog.open(MenuInfoComponent, {
      width: '80%',
      height: '80%',
      data: parameter || null,
      // data : parameter
    });
    dialogRef.afterClosed().subscribe((result) => { });
  }

  addCart(parameter: any) {
    parameter.amount;
    parameter.note;

    const dialogRef = this.dialog.open(MenuDetailComponent, {
      width: '50%',
      height: '40%',
      data: parameter || null,
    });

    dialogRef.afterClosed().subscribe((result) => { });
  }

  

}
