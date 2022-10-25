import { Component, OnInit, Input } from '@angular/core';
import { BookManagementService } from 'src/app/book-management.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  @Input() book:any;

  isSelected: boolean = false;
  

  constructor(private bookManagementService: BookManagementService ) { }

  ngOnInit(){
      this.bookManagementService.selectedlist$.subscribe(data=>{
      this.isSelected = (data != null) && (data.id == this.book.id)
      })
  }

  onClick() {
    if(this.isSelected){
      this.bookManagementService.update(null)

    }else{
    this.bookManagementService.update(this.book)
    }
  }
}


