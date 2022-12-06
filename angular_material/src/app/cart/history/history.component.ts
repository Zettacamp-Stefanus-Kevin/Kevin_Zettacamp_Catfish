import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { debounceTime } from 'rxjs';
import { SubSink } from 'subsink';
import { cart } from '../cart';
import { CartService } from '../cart.service';

export interface status{
  value : string
  viewValue : string;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  private subs = new SubSink();
  cart : cart[] = []

  displayedColumns: string[] = ['recipe_name', 'order_date', 'price', 'status'];
  dataSource = new MatTableDataSource([])

  constructor(private cartService: CartService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.init(this.paginator)
    this.filterStatus()
    this.filterName()
    this.filterDate()
    this.filterMenu()
    
  }

  init(paginationObj:any) {

    const pagination : any = {
      page: paginationObj?.page ?? 1,
      limit: paginationObj?.limit ?? 5,
    }

    this.subs.sink = this.cartService.getTransaction(pagination, this.searchSatus, this.searchName, this.searchDate, this.searchMenu ).subscribe(resp => {

      this.paginator.length = resp.data.GetAllTransactions.count;
      console.log(this.paginator.length);
      
      
      // this.paginator.pageSize = this.pageSizeOptions[0];

      this.cart.push(resp.data.GetAllTransactions.data)
      console.log(resp.data.GetAllTransactions.data)
      this.dataSource.data = resp.data.GetAllTransactions.data
      console.log(this.cart);
      console.log(resp);
    })
  }


  @ViewChild('paginator') paginator!: MatPaginator

  pageSizeOptions: number[] = [5];

  onPagination(event:any) {
    console.log(event);
    
    const pagination ={
      limit : event?.pageSize,
      page :  event?.pageIndex+1
    }
    this.init(pagination)
  }

//filter status===================
status: status[] = [
  {value: '', viewValue: 'All'},
  {value: 'pending', viewValue: 'Pending'},
  {value: 'success', viewValue: 'Success'},
  {value: 'failed', viewValue: 'Failed'},
];

  statusFilter = new FormControl();
  searchSatus:any
  value = '';

  filterStatus() {
    this.statusFilter.valueChanges.pipe(debounceTime(300)).subscribe((val) => {
      this.searchSatus = val
      console.log(val);
      
      this.init(true)
    });
  }

//filter nama===================
  nameFilter = new FormControl();
  searchName : any;

 filterName() {
    this.nameFilter.valueChanges.pipe(debounceTime(300)).subscribe((val) => {
      this.searchName = val
      this.init(true)
    });
  }

  //filter date===================
  dateFilter = new FormControl();
  searchDate : any;

  filterDate() {
    this.dateFilter.valueChanges.pipe(debounceTime(300)).subscribe((val) => {
      this.searchDate = val
      this.init(true)
    });
  }

  //filter menu===================
  menuFilter = new FormControl();
  searchMenu : any;

  filterMenu() {
    this.menuFilter.valueChanges.pipe(debounceTime(300)).subscribe((val) => {
      this.searchMenu = val
      this.init(true)
    });
  }

}
