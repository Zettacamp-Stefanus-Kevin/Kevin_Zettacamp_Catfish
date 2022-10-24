import { Component, OnInit, Input } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 

  @Input() ball: any;



  OnClick() {
        this.ball.like = !this.ball.like
        console.log(this.ball.like)
    }





  constructor( private heroService:HeroService) { }

  ngOnInit():void{
  }
}

