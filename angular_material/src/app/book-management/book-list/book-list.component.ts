import { Component, OnInit } from '@angular/core';
import { BookManagementService } from 'src/app/book-management.service';
import { list } from 'src/app/list';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private bookManagementService : BookManagementService) { }

  List : list[]=[]

  ngOnInit(): void {
    this.bookManagementService.list.subscribe(data =>{
      this.List = data;
      console.log.apply(this.List)
    })
  }

}
