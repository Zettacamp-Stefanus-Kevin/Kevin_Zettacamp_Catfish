import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/services/actors';
import { ActorsService } from 'src/app/services/actors.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {

  list:Actor[]=[]

  constructor(private actorsService:ActorsService) { }

  ngOnInit(): void {
    this.actorsService.fetchData().subscribe(data =>{
      this.list = data
      console.log(this.list)
    })
  }

}
