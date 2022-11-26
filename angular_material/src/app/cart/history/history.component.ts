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

  displayedColumns: string[] = ['role', 'name', 'order_date', 'recipe_name', 'price', 'status'];
  dataSource = new MatTableDataSource([])

  constructor(private cartService: CartService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.init(this.paginator)
    this.filterStatus()
  }

  init(paginationObj:any) {

    const pagination : any = {
      page: paginationObj?.page ?? 1,
      limit: paginationObj?.limit ?? 5,
    }

    this.subs.sink = this.cartService.getTransaction(pagination, this.statusFil).subscribe(resp => {

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
  statusFil:any

  value = ''

  filterStatus() {
    this.statusFilter.valueChanges.pipe(debounceTime(300)).subscribe((val) => {
      this.statusFil = val
      console.log(val);
      
      this.init(true)
    });
  }

}
