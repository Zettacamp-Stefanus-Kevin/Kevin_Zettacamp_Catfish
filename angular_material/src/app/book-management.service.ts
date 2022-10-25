import { Injectable } from '@angular/core';
import {BehaviourSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookManagementService {

  list : BehaviourSubject <list[]> =new BehaviourSubject<list[]>([]);
  list$ = this.list.asObservable();


  constructor(private httpClient: HttpClient) { 
    this.dummyInitlist();
  }

  dummyinitlist(){
    this.fetchlistJson().subscribe(resp => {
      let usersData = resp.users;
      this.setAlllistLists(usersData);
    })
  }
}

