import { Component, OnInit } from '@angular/core';
import { BookManagementService } from 'src/app/book-management.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  list: { name: string, author: string, publisher: string, publish-date: nunmber }[] = []

  constructor(private bookManagementService: BookManagementService) { }

  ngOnInit(): void {
    this.list = this.bookManagementService.list
    console.log(this.list)
  }


}
