import { Component, Input, OnInit } from '@angular/core';
import { SubSink } from 'subsink';
import { MenuService } from '../../menu.service';
import { menu } from '../../menu';



@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent implements OnInit {

  @Input() recipe: any;

  constructor() { }

  ngOnInit(): void {
  }

  addCart() {

  }
}
