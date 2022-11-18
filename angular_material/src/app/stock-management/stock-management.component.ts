import { Component, OnInit } from '@angular/core';
import { SubSink } from 'subsink';
import { StockManagementService } from './stock-management.service';
import { MatTableDataSource } from '@angular/material/table';
import { stock } from './stock';
import { MatDialog } from '@angular/material/dialog';
import { StockManagementInputComponent } from './stock-management-input/stock-management-input.component';
import { StockManagementUpdateComponent } from './stock-management-update/stock-management-update.component';


@Component({
  selector: 'app-stock-management',
  templateUrl: './stock-management.component.html',
  styleUrls: ['./stock-management.component.css']
})
export class StockManagementComponent implements OnInit {

  private subs = new SubSink();
  stock: stock[] = []

  displayedColumns: string[] = ['nama', 'stock', 'status', 'actions'];
  dataSource = new MatTableDataSource

  constructor(
    private stockService: StockManagementService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.subs.sink = this.stockService.getStock().subscribe(resp => {
      this.stock.push(resp.data.GetAllIngredients.data)
      this.dataSource = new MatTableDataSource(resp.data.GetAllIngredients.data)
      console.log(this.stock);
      console.log(resp);
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(StockManagementInputComponent, {
      width: '100%', height: '100%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    }

    );
  }

  onClick(parameter: any) {
    this.stockService.deleteStock(parameter)
    console.log(typeof parameter);
  }

  onEdit(parameter: any){
    const dialogRef = this.dialog.open(StockManagementUpdateComponent, {
      width: '100%', height: '100%',
      data : parameter
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    }

    );
  }

}
