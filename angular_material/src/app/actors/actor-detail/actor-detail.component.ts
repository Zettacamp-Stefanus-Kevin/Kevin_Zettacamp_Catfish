import { Component, OnInit, Input } from '@angular/core';
import { ActorsService } from 'src/app/services/actors.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {

  constructor(private actorsService:ActorsService,
    private route:ActivatedRoute) { }

  @Input() selectActor:any

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('id')!, 10);
      this.selectActor = this.actorsService.getActorsById(id);
    }); 
  }

}
