import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserFormService } from 'src/app/user-form.service';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})



export class UserFormComponent implements OnInit {
  userForm!: FormGroup;

  isEdit: boolean = false;

  selectedLang = 'en';

  constructor(private userFormService: UserFormService, private route: ActivatedRoute, public translateService: TranslateService) { }

  update: any;

  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get('userid');
    this.isEdit = id != null;


    this.userForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null),
      age: new FormControl(null),
      gender: new FormControl(null),
      email: new FormControl(null),
      position: new FormControl(null),
      maritalstatus: new FormControl(null),
      addressess: new FormGroup({
        address: new FormControl(null),
        zipcode: new FormControl(null),
        city: new FormControl(null),
        country: new FormControl(null),
      })
    });

    if (this.isEdit) {
      this.userFormService.list
        .pipe(first((user) => user.length !== 0))
        .subscribe((user) => {
          this.update = user.find((user) => user.id === id);
          this.setFormValues(this.update)
          console.log(user)
        });
    }



  }

  setLanguage(lang: string) {
    this.translateService.use(lang);
  }


  setFormValues(user: any) {
    this.userForm.patchValue(user);
  }



  onSubmit() {

    if (this.isEdit) {
      this.userFormService.updateUser(this.userForm.value)
    } else {
      this.userFormService.addUserToList(this.userForm.value)
    }
  }

}
