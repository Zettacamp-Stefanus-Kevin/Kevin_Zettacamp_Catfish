import { Component, OnInit } from '@angular/core';
import { BookManagementService } from 'src/app/book-management.service';
import { list } from 'src/app/list';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor(private bookManagementService : BookManagementService) { }

  selectedlist : list | null = null

  ngOnInit(){
    this.bookManagementService.selectedlist$.subscribe(data =>{
      this.selectedlist = data
      console.log(this.selectedlist)
  })
  }

}
