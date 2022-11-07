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

  filterName: string = ""
  filterType: string = ""
  filterEmail: string = ""
  filterStatus: string = ""

  displayedColumns: string[] = ['nama', 'user_type', 'email', 'status'];
  mentor: Mentor[] = [];
  dataSource = new MatTableDataSource(this.mentor);

  constructor(private tableService: TableService) { }


  ngOnInit(): void {
    this.tableService.getData().subscribe(
      dat => {
        this.dataSource.data = dat
        this.mentor = dat
        console.log(this.dataSource.data)
      }
    )
  }

  // combineName(user: User): string {
  //   const { civility, first_name, last_name } = user;

  //   let combined = civility + first_name + last_name;
  //   combined = combined.toLowerCase();
  //   combined = this.Accent(combined);

  //   return combined;
  // }

  Accent(value: string): string {
    let accent:string[] = value.split('');
    accent = accent.map(data => {
      const splited = data.normalize('NFD').split('');
      return splited[0]
    })
    return accent.join('');
  }

  filterByName() {
    let fil = this.mentor
    fil = fil.filter(data => {
      let name = data.civility + data.first_name + data.last_name;
      name = name.toLowerCase();
      name = name.replace(/[.\s,]/g, '');
      name = this.Accent(name)
      return name.includes(this.Accent(this.filterName.toLowerCase().replace(/[.\s,]/g, '')))
    })
    this.dataSource.data = fil
  }

  filterByType() {
    let fil = this.mentor
    fil = fil.filter(data => {
      let typ = data.company.user_type;
      typ = typ.toLowerCase();
      return typ.includes(this.filterType)
    })
    this.dataSource.data = fil
  }

  filterByEmail() {
    let fil = this.mentor
    fil = fil.filter(data => {
      let mail = data.email;
      mail = mail.replace(/[.]/g, '')
      return mail.includes(this.filterEmail)
    })
    this.dataSource.data = fil
  }

  filterByStatus() {
    let fil = this.mentor
    fil = fil.filter(data => {
      return data.user_status == this.filterStatus
    })
    this.dataSource.data = fil
  }


}
