import { Component, OnInit, Input } from '@angular/core';
import { BookManagementService } from 'src/app/book-management.service';
import { list } from 'src/app/list';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor(private bookManagementService: BookManagementService, private route: ActivatedRoute) { }

  @Input() book: any;

  selectedlist: list | null | undefined;


  ngOnInit() {

    console.log("test")
    // this.book = {
    //   id: this.route.snapshot.params["id"]
      

    // };
    // console.log(this.book)
    // console.log(this.book);
    // this.bookManagementService.list$.subscribe(data => {
    //   this.selectedlist = data.find(data =>{
    //   let a =  data.id === this.book.id
    //   console.log(a)
    //   }
    // )
    //   console.log(this.selectedlist)
    // })

    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    console.log(id)

    this.bookManagementService.list.subscribe(data => {
      this.selectedlist = this.bookManagementService.getBookById(id);
    })



  }

}
