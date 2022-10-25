import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { list } from './list';


@Injectable({
  providedIn: 'root'
})
export class BookManagementService {

  list : BehaviorSubject <list[]> =new BehaviorSubject<list[]>([]);
  list$ = this.list.asObservable();

  selectedlist: BehaviorSubject<list | null> = new BehaviorSubject<any>(null);
  selectedlist$ = this.selectedlist.asObservable();

  constructor(private httpClient: HttpClient) {
    this.fetchData().subscribe(data => {
      this.list.next(data)
      console.log(data);
    })
  }

  fetchData(): Observable<any> {
    return this.httpClient.get('../../assets/data.json')
  }
  
  update(data:any) {
    this.selectedlist.next(data)
  }

}

