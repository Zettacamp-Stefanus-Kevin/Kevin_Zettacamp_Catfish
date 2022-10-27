import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BookManagementService } from 'src/app/book-management.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  @Input() book: any;

  isSelected: boolean = false;

  constructor(private bookManagementService: BookManagementService, private router:Router) { }

  ngOnInit(): void {
    this.bookManagementService.selectedlist$.subscribe(data => {
      this.isSelected = (data != null) && (data.id == this.book.id)
    })
  }

  onClick(items:any){
    this.router.navigate([`detail/${this.book.id}`])
    
    }
}
