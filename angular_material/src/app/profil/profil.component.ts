import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { SubSink } from 'subsink';
import Swal from 'sweetalert2';
import { AppComponent } from '../app.component';
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
  isEdit = false;

  userForm: any = this.fb.group({
    first_name: this.fb.control('', Validators.required),
    last_name: this.fb.control('', Validators.required),
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', Validators.required),
  });

  constructor(
    private profilService: ProfilService,
    private fb: FormBuilder,
    private appComponent: AppComponent,
    private translate : TranslateService
  ) { }

  ngOnInit(): void {
    this.init();
    this.userForm.disable();
  }

  init(): any {
    this.email = localStorage.getItem('email');
    this.subs.sink = this.profilService.getUser(this.email).valueChanges.subscribe((resp: any) => {
        this.data = resp?.data?.GetOneUser;
        this.userForm.patchValue(this.data);
      });
  }

  onSubmit() {
    if (
      this.userForm.value.first_name != this.data.first_name &&
      this.userForm.value.last_name != this.data.last_name &&
      this.userForm.value.email != this.data.email &&
      this.userForm.value.password != this.data.password
    ) {
      this.profilService
        .updateUser(
          this.userForm.value.first_name,
          this.userForm.value.last_name,
          this.userForm.value.email,
          this.userForm.value.password
        )
        
        .subscribe(() => {
          Swal.fire
            ({
              icon: 'success',
              title: this.translate.instant('Profile changed'),
              text: this.translate.instant('Your profile data has been changed!')}
           
          ).then(
            () => {
              this.appComponent.name = this.userForm.value.first_name;
              localStorage.setItem('name', this.userForm.value.first_name);

              this.isEdit = false;
              this.userForm.disable();
            },
            (err) => {
              Swal.fire({
              icon: 'error',
              title: this.translate.instant('Profile not changed'),
              text: err});
            }
          );
        });
    } else if (
      this.userForm.value.email != this.data.email &&
      this.userForm.value.last_name != this.data.last_name &&
      this.userForm.value.password != this.data.password
    ) {
      this.profilService
        .updateUser(
          undefined,
          this.userForm.value.last_name,
          this.userForm.value.email,
          this.userForm.value.password
        )
        .subscribe(() => {
          Swal.fire({
            icon: 'success',
            title: this.translate.instant('Profile changed'),
            text: this.translate.instant('Your profile data has been changed!')
          }).then(
            () => {
              this.isEdit = false;
              this.userForm.disable();
            },
            (err) => {
              Swal.fire({
                icon: 'error',
                title: this.translate.instant('Profile not changed'),
                text: err});
            }
          );
        });
    } else if (
      this.userForm.value.first_name != this.data.first_name &&
      this.userForm.value.email != this.data.email &&
      this.userForm.value.password != this.data.password
    ) {
      this.profilService
        .updateUser(
          this.userForm.value.first_name,
          undefined,
          this.userForm.value.email,
          this.userForm.value.password
        )
        .subscribe(() => {
          Swal.fire({
            icon: 'success',
            title: this.translate.instant('Profile changed'),
            text: this.translate.instant('Your profile data has been changed!')
          }).then(
            () => {
              this.appComponent.name = this.userForm.value.first_name;
              localStorage.setItem('name', this.userForm.value.first_name);

              this.isEdit = false;
              this.userForm.disable();
            },
            (err) => {
              Swal.fire({
                icon: 'error',
                title: this.translate.instant('Profile not changed'),
                text: err});
            }
          );
        });
    } else if (
      this.userForm.value.first_name != this.data.first_name &&
      this.userForm.value.last_name != this.data.last_name &&
      this.userForm.value.password != this.data.password
    ) {
      this.profilService
        .updateUser(
          this.userForm.value.first_name,
          this.userForm.value.last_name,
          undefined,
          this.userForm.value.password
        )
        .subscribe(() => {
          Swal.fire({
            icon: 'success',
            title: this.translate.instant('Profile changed'),
            text: this.translate.instant('Your profile data has been changed!')
          }).then(
            () => {
              this.appComponent.name = this.userForm.value.first_name;
              localStorage.setItem('name', this.userForm.value.first_name);

              this.isEdit = false;
              this.userForm.disable();
            },
            (err) => {
              Swal.fire({
                icon: 'error',
                title: this.translate.instant('Profile not changed'),
                text: err});
            }
          );
        });
    } else if (
      this.userForm.value.first_name != this.data.first_name &&
      this.userForm.value.last_name != this.data.last_name &&
      this.userForm.value.email != this.data.email
    ) {
      this.profilService
        .updateUser(
          this.userForm.value.first_name,
          this.userForm.value.last_name,
          this.userForm.value.email,
          undefined
        )
        .subscribe(() => {
          Swal.fire({
            icon: 'success',
            title: this.translate.instant('Profile changed'),
            text: this.translate.instant('Your profile data has been changed!')
          }).then(
            () => {
              this.appComponent.name = this.userForm.value.first_name;
              localStorage.setItem('name', this.userForm.value.first_name);

              this.isEdit = false;
              this.userForm.disable();
            },
            (err) => {
              Swal.fire({
                icon: 'error',
                title: this.translate.instant('Profile not changed'),
                text: err});
            }
          );
        });
    } else if (
      this.userForm.value.last_name != this.data.last_name &&
      this.userForm.value.password != this.data.password
    ) {
      this.profilService
        .updateUser(
          undefined,
          this.userForm.value.last_name,
          undefined,
          this.userForm.value.password
        )
        .subscribe(() => {
          Swal.fire({
            icon: 'success',
            title: this.translate.instant('Profile changed'),
            text: this.translate.instant('Your profile data has been changed!')
          }).then(
            () => {
              this.isEdit = false;
              this.userForm.disable();
            },
            (err) => {
              Swal.fire({
                icon: 'error',
                title: this.translate.instant('Profile not changed'),
                text: err});
            }
          );
        });
    } else if (
      this.userForm.value.first_name != this.data.first_name &&
      this.userForm.value.password != this.data.password
    ) {
      this.profilService
        .updateUser(
          this.userForm.value.first_name,
          undefined,
          undefined,
          this.userForm.value.password
        )
        .subscribe(() => {
          Swal.fire({
            icon: 'success',
            title: this.translate.instant('Profile changed'),
            text: this.translate.instant('Your profile data has been changed!')
          }).then(
            () => {
              this.appComponent.name = this.userForm.value.first_name;
              localStorage.setItem('name', this.userForm.value.first_name);

              this.isEdit = false;
              this.userForm.disable();
            },
            (err) => {
              Swal.fire({
                icon: 'error',
                title: this.translate.instant('Profile not changed'),
                text: err});
            }
          );
        });
    } else if (
      this.userForm.value.first_name != this.data.first_name &&
      this.userForm.value.last_name != this.data.last_name
    ) {
      this.profilService
        .updateUser(
          this.userForm.value.first_name,
          this.userForm.value.last_name,
          undefined,
          undefined
        )
        .subscribe(() => {
          Swal.fire({
            icon: 'success',
            title: this.translate.instant('Profile changed'),
            text: this.translate.instant('Your profile data has been changed!')
          }).then(
            () => {
              this.appComponent.name = this.userForm.value.first_name;
              localStorage.setItem('name', this.userForm.value.first_name);

              this.isEdit = false;
              this.userForm.disable();
            },
            (err) => {
              Swal.fire({
                icon: 'error',
                title: this.translate.instant('Profile not changed'),
                text: err});
            }
          );
        });
    } else if (
      this.userForm.value.email != this.data.email &&
      this.userForm.value.password != this.data.password
    ) {
      this.profilService
        .updateUser(
          undefined,
          undefined,
          this.userForm.value.email,
          this.userForm.value.password
        )
        .subscribe(() => {
          Swal.fire({
            icon: 'success',
            title: this.translate.instant('Profile changed'),
            text: this.translate.instant('Your profile data has been changed!')
          }).then(
            () => {
              this.isEdit = false;
              this.userForm.disable();
            },
            (err) => {
              Swal.fire({
                icon: 'error',
                title: this.translate.instant('Profile not changed'),
                text: err});
            }
          );
        });
    } else if (
      this.userForm.value.email != this.data.email &&
      this.userForm.value.last_name != this.data.last_name
    ) {
      this.profilService
        .updateUser(
          undefined,
          this.userForm.value.last_name,
          this.userForm.value.email,
          undefined
        )
        .subscribe(() => {
          Swal.fire({
            icon: 'success',
            title: this.translate.instant('Profile changed'),
            text: this.translate.instant('Your profile data has been changed!')
          }).then(
            () => {
              this.isEdit = false;
              this.userForm.disable();
            },
            (err) => {
              Swal.fire({
                icon: 'error',
                title: this.translate.instant('Profile not changed'),
                text: err});
            }
          );
        });
    } else if (
      this.userForm.value.email != this.data.email &&
      this.userForm.value.first_name != this.data.first_name
    ) {
      this.profilService
        .updateUser(
          this.userForm.value.first_name,
          undefined,
          this.userForm.value.email,
          undefined
        )
        .subscribe(() => {
          Swal.fire({
            icon: 'success',
            title: this.translate.instant('Profile changed'),
            text: this.translate.instant('Your profile data has been changed!')
          }).then(
            () => {
              this.appComponent.name = this.userForm.value.first_name;
              localStorage.setItem('name', this.userForm.value.first_name);

              this.isEdit = false;
              this.userForm.disable();
            },
            (err) => {
              Swal.fire({
                icon: 'error',
                title: this.translate.instant('Profile not changed'),
                text: err});
            }
          );
        });
    } else if (this.userForm.value.first_name != this.data.first_name) {
      this.profilService
        .updateUser(
          this.userForm.value.first_name,
          undefined,
          undefined,
          undefined
        )
        .subscribe(() => {
          Swal.fire({
            icon: 'success',
            title: this.translate.instant('Profile changed'),
            text: this.translate.instant('Your profile data has been changed!')
          }).then(
            () => {
              this.appComponent.name = this.userForm.value.first_name;
              localStorage.setItem('name', this.userForm.value.first_name);
              this.isEdit = false;
              this.userForm.disable();
            },
            (err) => {
              Swal.fire({
                icon: 'error',
                title: this.translate.instant('Profile not changed'),
                text: err});
            }
          );
        });
    } else if (this.userForm.value.last_name != this.data.last_name) {
      this.profilService
        .updateUser(
          undefined,
          this.userForm.value.last_name,
          undefined,
          undefined
        )
        .subscribe(() => {
          Swal.fire({
            icon: 'success',
            title: this.translate.instant('Profile changed'),
            text: this.translate.instant('Your profile data has been changed!')
          }).then(
            () => {
              this.isEdit = false;
              this.userForm.disable();
            },
            (err) => {
              Swal.fire({
                icon: 'error',
                title: this.translate.instant('Profile not changed'),
                text: err});
            }
          );
        });
    } else if (this.userForm.value.password != this.data.password) {
      this.profilService
        .updateUser(
          undefined,
          undefined,
          undefined,
          this.userForm.value.password
        )
        .subscribe(() => {
          Swal.fire({
            icon: 'success',
            title: this.translate.instant('Profile changed'),
            text: this.translate.instant('Your profile data has been changed!')
          }).then(
            () => {
              this.isEdit = false;
              this.userForm.disable();
            },
            (err) => {
              Swal.fire({
                icon: 'error',
                title: this.translate.instant('Profile not changed'),
                text: err});
            }
          );
        });
    } else if (this.userForm.value.email != this.data.email) {
      this.profilService
        .updateUser(undefined, undefined, this.userForm.value.email, undefined)
        .subscribe(() => {
          Swal.fire({
            icon: 'success',
            title: this.translate.instant('Profile changed'),
            text: this.translate.instant('Your profile data has been changed!')
          }).then(
            () => {
              this.isEdit = false;
              this.userForm.disable();
            },
            (err) => {
              Swal.fire({
                icon: 'error',
                title: this.translate.instant('Profile not changed'),
                text: err});
            }
          );
        });
    } else {
      Swal.fire({
        icon: 'success',
        title: this.translate.instant('Profile changed'),
        text: this.translate.instant('Your profile data has been changed!')
      }).then(() => {
        this.isEdit = false;
        this.userForm.disable();
      });
    }
  }

  onEdit() {
    this.userForm.enable();
    this.isEdit = true;
  }
}
