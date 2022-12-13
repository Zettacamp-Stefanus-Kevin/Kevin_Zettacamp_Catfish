import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TransactionManagementService } from './transaction-management.service';

@Component({
  selector: 'app-transaction-management',
  templateUrl: './transaction-management.component.html',
  styleUrls: ['./transaction-management.component.css'],
})
export class TransactionManagementComponent implements OnInit {
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = [
    'user_name',
    'order_menu',
    'total_price',
    'date',
  ];
  order_date = '';

  sortUserName: boolean = false;
  sortTotalPrice: boolean = false;

  constructor(private transactionService: TransactionManagementService) {}

  ngOnInit(): void {
    this.getAllHistory();
  }

  getAllHistory() {
    const data = {
      sortUserName: this.sortUserName,
      sortTotalPrice: this.sortTotalPrice,
      order_date: this.order_date,
    };
    this.transactionService
      .getHistoryTransactions(data)
      .subscribe((data: any) => {
        this.dataSource = new MatTableDataSource(
          data?.data?.GetAllTransactions?.data
        );
      });
  }

  dateChange(event: any) {
    this.order_date = event.value;
  }
}
