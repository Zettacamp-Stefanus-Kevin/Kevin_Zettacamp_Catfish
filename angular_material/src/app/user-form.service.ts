import { Injectable } from '@angular/core';
import { User } from './list';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserFormService {
  list: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  list$ = this.list.asObservable();

  // selectedlist: BehaviorSubject<list | null> = new BehaviorSubject<any>(null);
  // selectedlist$ = this.selectedlist.asObservable();

  constructor(private httpClient: HttpClient) {
    this.fetchData().subscribe(data => {
      this.list.next(data)
      console.log(data);
    })
  }

  fetchData(): Observable<any> {
    return this.httpClient.get('../assets/data.json');
  }

  setAllUserList(data: User[] ) {
    this.list.next(data);
  }

  getValueUserList(): User[] {
    return this.list.getValue();
  }

  addUserToList(data: User) {
    const addUsers = this.getValueUserList();
    addUsers.push(data);
    this.setAllUserList(addUsers);
  }

  updateUser(user: any) {
    const upUser = this.list.getValue().map(u => {
          return (u.id === user.id) ? user : u;
    });

    this.list.next(upUser);
}
  
}
