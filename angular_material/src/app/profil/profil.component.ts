import { Component, OnInit } from '@angular/core';
import { SubSink } from 'subsink';
import { ProfilService } from './profil.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  hide = true
  private subs = new SubSink();
  data: any;
  email: any;

  constructor(private profilService: ProfilService) { }

  ngOnInit(): void {
    this.init()
  }

  init() {
    this.email = localStorage.getItem('email')
    console.log(this.email);
    this.subs.sink = this.profilService.getUser(this.email).valueChanges.subscribe((resp: any) => {
      console.log(resp);
      
      this.data = resp?.data?.GetOneUser
      console.log(this.data);
      
    })
  }

  Edit() {

  }

}
