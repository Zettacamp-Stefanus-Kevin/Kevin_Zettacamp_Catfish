import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedLang = 'en';

  title = 'angular_material';
  token : string | null = ""
  role: string | null = "";
  // name  : any;


  constructor(private router:Router,
    private translate: TranslateService) { }

  ngOnInit() {

    if (localStorage.getItem('getToken') !== null){
      this.token = localStorage.getItem('getToken')
      this.role = localStorage.getItem('userData')
      // this.name = localStorage.getItem('name')
 
    }
  }

  onLogout(){
    localStorage.removeItem('getToken');
    localStorage.removeItem('userData');
    this.router.navigate(['']).then(()=>{
      window.location.reload()
    })
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
  }

}

    

