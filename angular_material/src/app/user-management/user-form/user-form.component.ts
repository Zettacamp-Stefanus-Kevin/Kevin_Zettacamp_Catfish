import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserFormService } from 'src/app/user-form.service';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';


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

  isEdit: boolean = false;

  constructor(private userFormService:UserFormService, private route:ActivatedRoute ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get('userid');
    this.isEdit = id != null;

  if (this.isEdit) {
    this.userFormService.list
      .pipe(first((user) => user.length !== 0))
      .subscribe((user) => {
        const update = user.find((user) => user.id === id);
        this.setFormValues(update);
        console.log(user)
      });
  }
}

setFormValues(user: any) {
  this.userForm.setValue(user);
}


  onSubmit(){
    
    if(this.isEdit){
      this.userFormService.updateUser(this.userForm.value)
    }else{
      this.userFormService.addUserToList(this.userForm.value)
    }
  }

}
