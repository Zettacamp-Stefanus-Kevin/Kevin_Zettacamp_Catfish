import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubSink } from 'subsink';
import { ProfilService } from './profil.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class ProfilComponent implements OnInit {
  data: any = {};
  hide = true;
  private subs = new SubSink();

  email: any;
  role = '';

  userForm = this.fb.group({
    first_name: this.fb.control('', Validators.required),
    last_name: this.fb.control('', Validators.required),
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', Validators.required),
  });

  constructor(private profilService: ProfilService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.init().then(() => {
      this.userForm.controls['first_name'].disable();
    });
  }

  init(): any {
    this.email = localStorage.getItem('email');
    this.subs.sink = this.profilService
      .getUser(this.email)
      .valueChanges.subscribe((resp: any) => {
        this.data = resp?.data?.GetOneUser;
        this.userForm.patchValue(this.data);
      });
  }

  onSubmit() {}

  onEdit() {
    this.userForm.enable();
  }
}
