import { Component, OnInit } from '@angular/core';
import { SubSink } from 'subsink';
import { SchoolsService } from '../service/schools.service';
import { school } from '../service/schools';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {

  private subs = new SubSink();
  school: school[] = []

  displayedColumns: string[] = ['nama', 'status'];
  dataSource = new MatTableDataSource();
  

  constructor(
    private schoolsService: SchoolsService
  ) { }

  ngOnInit(): void {
    this.subs.sink = this.schoolsService.schoolTable().subscribe(resp => {
      this.school.push(resp.data.GetAllSchools)
      this.dataSource = new MatTableDataSource(resp.data.GetAllSchools);
      console.log(this.school);
      console.log(resp);
    })
  }

}
