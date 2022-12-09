import { Component, OnInit } from '@angular/core';
import { SubSink } from 'subsink';
import { ProfilService } from './profil.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class ProfilComponent implements OnInit {
  hide = true;
  private subs = new SubSink();
  data: any;
  email: any;
  role = '';

  constructor(private profilService: ProfilService) {}

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.email = localStorage.getItem('email');

    this.subs.sink = this.profilService
      .getUser(this.email)
      .valueChanges.subscribe((resp: any) => {
        this.data = resp?.data?.GetOneUser;
        this.role = resp?.data?.GetOneUser.role;
      });
  }

  Edit() {}
}
