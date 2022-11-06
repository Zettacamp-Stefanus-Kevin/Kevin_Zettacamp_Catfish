import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.css']
})
export class ActorCardComponent implements OnInit {

  @Input() card:any

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onClick(){
    this.router.navigate(['actors','detail',this.card.id])
  }

}
