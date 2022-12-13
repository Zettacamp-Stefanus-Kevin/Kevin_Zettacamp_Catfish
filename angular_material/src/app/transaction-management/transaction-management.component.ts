import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { debounceTime } from 'rxjs';
import { SubSink } from 'subsink';
import { TransactionManagementService } from './transaction-management.service';

export interface status {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-transaction-management',
  templateUrl: './transaction-management.component.html',
  styleUrls: ['./transaction-management.component.css'],
})
export class TransactionManagementComponent implements OnInit {
  // dataSource = new MatTableDataSource();
  // displayedColumns: string[] = [
  //   'role',
  //   'user_name',
  //   'order_menu',
  //   'total_price',
  //   'date',
  // ];
  // order_date = '';

  // sortUserName: boolean = false;
  // sortTotalPrice: boolean = false;

  constructor(private transactionService: TransactionManagementService) {}

  // ngOnInit(): void {
  //   this.init();
  //   this.filterDate()
  // }

  // init() {
  //   const data = {
  //     sortUserName: this.sortUserName,
  //     sortTotalPrice: this.sortTotalPrice,
  //     order_date: this.order_date,
  //   };
  //   this.transactionService
  //     .getHistoryTransactions(data)
  //     .subscribe((data: any) => {
  //       this.dataSource = new MatTableDataSource(
  //         data?.data?.GetAllTransactions?.data
  //       );
  //     });
  // }

  private subs = new SubSink();
  history : any

  displayedColumns: string[] =   ['name', 'recipe_name', 'order_date', 'price', 'status'];
  // [
  //   'role',
  //   'user_name',
  //   'order_menu',
  //   'total_price',
  //   'date',
  // ];

  dataSource = new MatTableDataSource([]);

  ngOnInit(): void {
    this.init(this.paginator);
    this.filterStatus();
    this.filterName();
    this.filterDate();
    this.filterMenu();
  }

  init(paginationObj: any) {
    const pagination: any = {
      page: paginationObj?.page ?? 1,
      limit: paginationObj?.limit ?? 5,
    };

    this.subs.sink = this.transactionService
      .getHistoryTransactions(
        pagination,this.searchSatus, this.searchName,  this.searchDate, this.searchMenu  )
      .subscribe((resp:any) => {
        this.paginator.length = resp?.data?.GetAllTransactions?.count

        console.log(resp);

        // this.paginator.pageSize = this.pageSizeOptions[0];

        // this.history.push(resp.data.GetAllTransactions.data);
        this.dataSource.data = resp?.data?.GetAllTransactions?.data;
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

  //filter status===================
  status: status[] = [
    { value: '', viewValue: 'All' },
    { value: 'pending', viewValue: 'Pending' },
    { value: 'success', viewValue: 'Success' },
    { value: 'failed', viewValue: 'Failed' },
  ];

  statusFilter = new FormControl();
  searchSatus: any;
  value = '';

  filterStatus() {
    this.statusFilter.valueChanges.pipe(debounceTime(300)).subscribe((val) => {
      this.searchSatus = val;

      this.init(true);
    });
  }

  //filter nama===================
  nameFilter = new FormControl();
  searchName: any;

  filterName() {
    this.nameFilter.valueChanges.pipe(debounceTime(300)).subscribe((val) => {
      this.searchName = val;
      this.init(true);
    });
  }

  //filter date===================
  dateFilter = new FormControl();
  searchDate: any;

  filterDate() {
    this.dateFilter.valueChanges.pipe(debounceTime(300)).subscribe((val) => {
      this.searchDate = val;
      this.init(true);
    });
  }

  //filter menu===================
  menuFilter = new FormControl();
  searchMenu: any;

  filterMenu() {
    this.menuFilter.valueChanges.pipe(debounceTime(300)).subscribe((val) => {
      this.searchMenu = val;
      this.init(true);
    });
  }
}
