import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './list';

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

  addUserToList(data: User) {
    let tempUsers = this.getValueUserList();
    tempUsers.push(data);
    this.setAllUserList(tempUsers);
  }

  getValueUserList(): User[] {
    return this.list.getValue();
  }

  
}
