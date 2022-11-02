import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor( private dataservice : DataService) { }

list : Post[] = []

  ngOnInit(): void {
    this.dataservice.getPosts().subscribe((data)=>{
      this.list = data;
      console.log(this.list)
    })
  }

}
