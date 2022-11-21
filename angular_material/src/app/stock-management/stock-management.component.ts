import { Component, OnInit, ViewChild } from '@angular/core';
import { SubSink } from 'subsink';
import { StockManagementService } from './stock-management.service';
import { MatTableDataSource } from '@angular/material/table';
import { stock } from './stock';
import { MatDialog } from '@angular/material/dialog';
import { StockManagementInputComponent } from './stock-management-input/stock-management-input.component';
import { StockManagementUpdateComponent } from './stock-management-update/stock-management-update.component';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import Swal from 'sweetalert2';


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
    this.init(this.paginator)
  }

  init(paginationObj: any) {

    const pagination: any = {
      page: paginationObj?.page ?? 1,
      limit: paginationObj?.limit ?? 5,
    }

    this.subs.sink = this.stockService.getStock(pagination).subscribe(resp => {

      this.paginator.length = resp.data.GetAllIngredients.count;
      // this.paginator.pageSize = this.pageSizeOptions[0];

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
      this.stockService.addStock(result)
      console.log('berhasil');
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Your work has been saved',
      });
      this.init(this.paginator)
      console.log('The dialog was closed');
    }

    );
  }

  onClick(parameter: any) {
    this.stockService.deleteStock(parameter).subscribe((resp) => {
      this.init(this.paginator)
    })
    console.log(typeof parameter);
  }

  onEdit(parameter: any) {
    const dialogRef = this.dialog.open(StockManagementUpdateComponent, {
      width: '100%', height: '100%',
      data: parameter
    });

    dialogRef.afterClosed().subscribe(result => {
      this.stockService.updateStock(result)
      console.log('berhasil');
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Your work has been saved',
      });
      this.init(this.paginator)
      console.log('The dialog was closed');
    }

    );
  }

  @ViewChild('paginator') paginator!: MatPaginator

  pageSizeOptions: number[] = [5];

  onPagination(event: any) {
    console.log(event);

    const pagination = {
      limit: event?.pageSize,
      page: event?.pageIndex + 1
    }
    this.init(pagination)
  }

}
