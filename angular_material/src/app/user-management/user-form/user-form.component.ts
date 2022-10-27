import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserFormService } from 'src/app/user-form.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit {
  userAddress = new FormGroup({
    address:new FormControl(null),
    zipcode:new FormControl(null),
    city:new FormControl(null),
    country:new FormControl(null),
  });

 userForm:any = new FormGroup({
    id:new FormControl(null),
    name:new FormControl(null),
    age:new FormControl(null),
    gender:new FormControl(null),
    email :new FormControl(null),
    position:new FormControl(null),
    maritalstatus:new FormControl(null),
    addressess : this.userAddress
  });

  constructor(private userFormService:UserFormService ) { }

  ngOnInit(): void {}
  
  onSubmit(){
    this.userFormService.addUserToList(this.userForm.value)
  }

}
