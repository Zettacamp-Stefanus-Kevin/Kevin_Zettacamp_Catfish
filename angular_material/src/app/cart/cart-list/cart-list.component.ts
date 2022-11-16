import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  list = [{
    judul: "daging sapi",
    text: "10"
  },{
    judul: "kecap",
    text: "10"
  },{
    judul: "MSG",
    text: "10"
  },{
    judul: "daging ayam",
    text: "10"
  },{
    judul: "sayuran",
    text: "10"
  },{
    judul: "kentang",
    text: "10"
  }, ]

  
  constructor() { }

  ngOnInit(): void {
  }

}
