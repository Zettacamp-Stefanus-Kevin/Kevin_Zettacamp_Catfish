import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  data: BehaviorSubject<Form[]> = new BehaviorSubject<Form[]>([]);
  data$ = this.data.asObservable();

  constructor(private httpClient: HttpClient) {
    this.fetchData().subscribe(data => {
      this.data.next(data)
      console.log(data);
    })
  }

  fetchData(): Observable<any> {
    return this.httpClient.get('/assets/form.json');
  }

  getdatas(){
    return this.data$
  }
  
  setData(data: Form[] ) {
    this.data.next(data);
  }

  getData():Form[] {
    return this.data.getValue();
  }

  addData(data: Form) {
    const addUsers = this.getData();
    addUsers.push(data);
    this.setData(addUsers);
  }

}
