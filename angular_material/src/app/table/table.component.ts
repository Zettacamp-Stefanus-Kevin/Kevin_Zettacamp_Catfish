import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Mentor } from '../service/mentor';
import { TableService } from '../service/table.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['nama', 'user_type', 'email', 'status'];
  mentor : Mentor[]=[];
  dataSource = new MatTableDataSource(this.mentor);

  constructor(private tableService:TableService) { }

  ngOnInit(): void {
    this.tableService.getData().subscribe(
      dat => {
        this.dataSource.data = dat
        console.log(this.dataSource.data)
      }
    )
  }

}
