import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { UserFormService } from 'src/app/user-form.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit {

  forbidenName = ['anjing', 'jancuk', 'bodat']

  isEdit: boolean = false;

  selectedLang = 'en';

  constructor(
    private userFormService: UserFormService,
    private route: ActivatedRoute,
    private Router: Router,
    public translateService: TranslateService,
    private fb: FormBuilder) { }

    // 

  userForm: any = new FormGroup({
    id: new FormControl(null, Validators.required),
    name: new FormControl(null, [Validators.required,this.forbiddenName.bind(this)]),
    age: new FormControl(null, [Validators.required, Validators.min(10)]),
    gender: new FormControl(null),
    email: new FormControl(null, [Validators.required, Validators.email]),
    position: new FormControl(null),
    maritalstatus: new FormControl(null),
    addressess: this.fb.array([]),
  });

  userAddress(): FormGroup {
    return this.fb.group({
      address: this.fb.control(null),
      zipcode: this.fb.control(null, [Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern('^[0-9]+$')]),
      city: this.fb.control(null),
      country: this.fb.control(null)
    })
  }

  forbiddenName(control: FormControl) {
    if (this.forbidenName.indexOf(control.value) !== -1){
      return {"forbiden" : true};
    }
    return null
  }


  getErrorMessage() {
    if (this.userForm.get('email').hasError('required')) {
      return 'You must input your email';
    }
    return this.userForm.get('email').hasError('email') ? 'Not a valid email' : '';
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

    this.userForm.get('name').valueChanges.subscribe((value:any) => {
      console.log(value)
      
      //case intensensitif//
      const special = /[^a-z|\s]/i;
      
      let isi  = value.replace(special,'');
      this.userForm.get('name').patchValue(isi, {emitEvent:false});

    });

  }

  onSubmit() {
    if (this.isEdit) {
      if (this.userForm.valid) {
        this.userFormService.updateUser(this.userForm.value)
        console.log('berhasil');
        Swal.fire(
          'success to edit ' + this.userForm.value.name,
          'Click to close',
          'success'
        )
        this.Router.navigate(['/list'])

      } else {
        console.log('gagal');
        Swal.fire(
          'Failed to edit ' + this.userForm.value.name,
          'Click to close',
          'error'
        )

      }


    } else {
      if (this.userForm.valid) {
        this.userFormService.addUserToList(this.userForm.value)
        console.log('berhasil');
        Swal.fire(
          'success to edit ' + this.userForm.value.name,
          'Click to close',
          'success'
        )
        this.Router.navigate(['/list'])
      } else {
        console.log('gagal');
        Swal.fire(
          'Failed to edit ' + this.userForm.value.name,
          'Click to close',
          'error'
        )
      }
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




}
