import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css']
})
export class MenuDetailComponent implements OnInit {

  detailForm! : FormGroup

  constructor() { }

  ngOnInit(): void {
    this.detailForm = new FormGroup({
      'amount': new FormControl(null, [Validators.required]),
      'note': new FormControl(null),
    })
}

  onSubmit(){

  }
  
  onClick(){

  }
}
