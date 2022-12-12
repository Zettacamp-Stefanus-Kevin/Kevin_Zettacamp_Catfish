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
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { Sort } from '@angular/material/sort';

export interface status {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-stock-management',
  templateUrl: './stock-management.component.html',
  styleUrls: ['./stock-management.component.css'],
})
export class StockManagementComponent implements OnInit {
  private subs = new SubSink();
  stock: stock[] = [];

  displayedColumns: string[] = ['nama', 'stock', 'status', 'actions'];
  dataSource = new MatTableDataSource();

  constructor(
    private stockService: StockManagementService,
    private dialog: MatDialog,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.init(this.paginator);
    this.filterIngredient();
    this.filterStatus();
    // this.filterStock()
  }

  init(paginationObj: any) {
    const pagination: any = {
      page: paginationObj?.page ?? 1,
      limit: paginationObj?.limit ?? 5,
    };

    this.subs.sink = this.stockService
      .getStock(pagination, this.searchIngredient, this.searchStatus)
      .subscribe((resp) => {
        this.paginator.length = resp.data.GetAllIngredients.count;
        // this.paginator.pageSize = this.pageSizeOptions[0];

        // this.stock.push(resp.data.GetAllIngredients.data)
        this.dataSource = new MatTableDataSource(
          resp.data.GetAllIngredients.data
        );
      });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(StockManagementInputComponent, {
      width: '30%',
      height: '40%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.stockService.addStock(result);

      Swal.fire({
        icon: 'success',
        title: this.translate.instant('Success'),
        text: this.translate.instant('Your work has been saved'),
      });
      this.init(this.paginator);
    });
  }

  onClick(parameter: any) {
    this.stockService.deleteStock(parameter).subscribe((resp) => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success').then(
            () => {
              this.init(this.paginator);
            }
          );
        }
      });
    });
  }

  onEdit(parameter: any) {
    const dialogRef = this.dialog.open(StockManagementUpdateComponent, {
      width: '50%',
      height: '50%',
      data: parameter,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.stockService.updateStock(result).subscribe((data) => {
        console.log(data);
        Swal.fire({
          icon: 'success',
          title: this.translate.instant('Success'),
          text: this.translate.instant('Your work has been saved'),
        }).then(() => {
          this.init(this.paginator);
        });
      });
    });
  }

  //Ingredients FIlter===================================

  ingredientFilter = new FormControl();
  searchIngredient: any;

  filterIngredient() {
    this.ingredientFilter.valueChanges.subscribe((val) => {
      this.searchIngredient = val;
      this.init(true);
    });
  }

  //stock FIlter===================================

  stockFilter = new FormControl();
  searchStock!: number;

  filterStock() {
    this.stockFilter.valueChanges.subscribe((val) => {
      this.searchStock = val;
      this.init(true);
    });
  }

  //Status FIlter=======================================

  status: status[] = [
    { value: '', viewValue: 'All' },
    { value: 'deleted', viewValue: 'not Active' },
    { value: 'active', viewValue: 'Active' },
  ];

  statusFilter = new FormControl();
  searchStatus: any;
  value = '';

  filterStatus() {
    this.statusFilter.valueChanges.subscribe((val) => {
      this.searchStatus = val;
      this.init(true);
    });
  }

  @ViewChild('paginator') paginator!: MatPaginator;

  pageSizeOptions: number[] = [5];

  onPagination(event: any) {
    const pagination = {
      limit: event?.pageSize,
      page: event?.pageIndex + 1,
    };
    this.init(pagination);
  }
}
