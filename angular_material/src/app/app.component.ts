import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_material';
  menuType: any = []
  root: boolean = false;


  ngOnInit() {


    if (localStorage.getItem('adminToken') !== null){
      this.root = true;
      let userData: any = localStorage.getItem('userData');
      userData = JSON.parse(userData);
      this.menuType = userData.filter((val: any) => val.view === true);
    }else {
      this.root = false
    }

  }

}

    

