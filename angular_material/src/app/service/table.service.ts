import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mentor } from './mentor';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  table: BehaviorSubject<Mentor[]> = new BehaviorSubject<Mentor[]>([]);
  table$ = this.table.asObservable()

  constructor(private httpClient:HttpClient) {
    this.fetchData().subscribe(data =>{
      this.table.next(data)
    })
   }

  fetchData():Observable<any>{
    return this.httpClient.get('/assets/mentor.json')
  }

  getData():Observable<any>{
    return this.table$
  }
}
