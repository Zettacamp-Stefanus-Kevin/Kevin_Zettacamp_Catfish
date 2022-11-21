import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SubSink } from 'subsink';
import { MenuService } from '../../menu.service';
import { menu } from '../../menu';
import { MenuDetailComponent } from '../../menu-detail/menu-detail.component';
import { MenuInfoComponent } from '../../menu-info/menu-info.component';



@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent implements OnInit {

  @Input() recipe: any;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  info(parameter: any) {
    const dialogRef = this.dialog.open(MenuInfoComponent, {
      width: '100%', height: '100%',
      data: parameter || null
      // data : parameter
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

    }

  addCart(parameter : any) {
    parameter.amount;
    parameter.note;
    console.log(parameter.amount);
    
      const dialogRef = this.dialog.open(MenuDetailComponent, {
        width: '100%', height: '100%',
        data: parameter || null
        // data : parameter
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      } );

    }
}
