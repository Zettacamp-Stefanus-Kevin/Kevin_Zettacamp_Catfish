import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-konten',
  templateUrl: './konten.component.html',
  styleUrls: ['./konten.component.css']
})
export class KontenComponent implements OnInit {

  @Input() items: any
  title: any

  click: boolean = false;

  OnClick() {
    this.click = !this.click
    if (!this.title) {
        this.items.title = "Valorant"
    }else{
      this.title= ""
      this.items.title = "Let Plays"
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
