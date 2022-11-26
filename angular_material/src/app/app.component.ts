import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'angular_material';
  token : string | null = ""
  role: string | null = "";
  // name  : any;


  constructor(private router:Router) { }

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


}

    

