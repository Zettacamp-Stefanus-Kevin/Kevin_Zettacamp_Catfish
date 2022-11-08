import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubSink } from 'subsink';
import { PromosService } from '../service/promos.service';
import { promo } from '../service/promos';


@Component({
  selector: 'app-promos',
  templateUrl: './promos.component.html',
  styleUrls: ['./promos.component.css']
})
export class PromosComponent implements OnInit {

  private subs = new SubSink();
  promo:promo[]=[]

  

  constructor(
    private promosService : PromosService
  ) { }

  ngOnInit(): void {
      this.subs.sink = this.promosService.promoCard().subscribe(resp => {
        this.promo.push(resp.data.GetAllPromos[0])
        console.log(this.promo);
        console.log(resp);
      })  
  }
}
