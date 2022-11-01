import { Component, OnInit } from '@angular/core';
import { User } from  'src/app/list';
import { UserFormService } from 'src/app/user-form.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor( private userFormService : UserFormService ) { }
  filterBy: string = ''

  List : User[]=[]

  ngOnInit(): void {
    this.userFormService.list$.subscribe(data =>{
      this.List = data;
      console.log(this.List)
    })
  }


}
