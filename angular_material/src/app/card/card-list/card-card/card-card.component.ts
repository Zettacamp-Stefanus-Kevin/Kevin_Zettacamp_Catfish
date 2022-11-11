import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-card-card',
  templateUrl: './card-card.component.html',
  styleUrls: ['./card-card.component.css']
})
export class CardCardComponent implements OnInit {

  selectedLang = 'en';
  
  isLike :boolean = false;

  @Input() card :any

  constructor(private router:Router, private translate:TranslateService) { }

  ngOnInit(): void {
  }

  onClick(){
   this.isLike = !this.isLike
  }
  
  setLanguage(lang: string) {
    this.translate.use(lang);
  }
}



