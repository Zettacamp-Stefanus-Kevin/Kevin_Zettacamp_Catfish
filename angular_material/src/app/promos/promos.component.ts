import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubSink } from 'subsink';
import { PromosService } from '../service/promos.service';
import { promo } from '../service/promos';
import { MatDialog } from '@angular/material/dialog';
import { InputComponent } from './input/input.component';


@Component({
  selector: 'app-promos',
  templateUrl: './promos.component.html',
  styleUrls: ['./promos.component.css']
})
export class PromosComponent implements OnInit {

  private subs = new SubSink();
  promo: promo[] = []

  spin:boolean = true;

  constructor(
    private promosService: PromosService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.subs.sink = this.promosService.promoCard().valueChanges.subscribe((resp:any) => {
      this.promo = resp.data.GetAllPromos;
      this.spin = false
      console.log(this.promo);
      console.log(resp);
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(InputComponent, {
      width: '100%', height: '100%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    }

    );
  }

}
