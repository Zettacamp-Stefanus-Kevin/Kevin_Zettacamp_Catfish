import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { UserFormService } from 'src/app/user-form.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})


export class UserFormComponent implements OnInit {

  isEdit: boolean = false;

  selectedLang = 'en';

  constructor(
    private userFormService: UserFormService,
    private route: ActivatedRoute,
    private Router: Router,
    public translateService: TranslateService,
    private fb: FormBuilder) { }

  userForm: any = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null),
    age: new FormControl(null),
    gender: new FormControl(null),
    email: new FormControl(null),
    position: new FormControl(null),
    maritalstatus: new FormControl(null),
    addressess: this.fb.array([]),
  });

  userAddress(): FormGroup {
    return this.fb.group({
      address: '',
      zipcode: '',
      city: '',
      country: '',
    })
  }

  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get('userid');
    this.isEdit = id != null;

    if (this.isEdit) {
      this.userFormService.list
        .pipe(first((user) => user.length !== 0))
        .subscribe((user) => {
          const update: any = user.find((user) => user.id === id);
          for (let i = 0; i < update.addressess.length; i++) {
            this.onAddAddress();
          }
          this.setFormValues(update);
          console.log(update)
        });
    } else {
      this.onAddAddress();
    }

  }

  get addressess(): FormArray {
    return this.userForm.get("addressess") as FormArray
  }

  onAddAddress() {
    this.addressess.push(this.userAddress())
    console.log(this.userForm)
  }

  onRemove(i: number) {
    this.addressess.removeAt(i);
  }

  setLanguage(lang: string) {
    this.translateService.use(lang);
  }

  setFormValues(user: any) {
    this.userForm.setValue(user);
  }

  onSubmit() {
    if (this.isEdit) {
      this.userFormService.updateUser(this.userForm.value)
     
    } else {
      this.userFormService.addUserToList(this.userForm.value)
 
    }
  }

}
