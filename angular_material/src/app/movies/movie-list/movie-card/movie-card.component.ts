import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() card :any

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onClick(){
    
    this.router.navigate(['movies','detail',this.card.id])
  }
}
