import { Component, OnInit } from '@angular/core';
import { BookManagementService } from 'src/app/book-management.service';
import { list } from 'src/app/list';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {

  List: list[]= []

  constructor(private bookManagementService: BookManagementService) { }

  ngOnInit(){
    this.bookManagementService.list.subscribe(data=>{
      this.List = data
      console.log(this.List)
  })
}



}
