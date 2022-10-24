import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { list } from './list';


@Injectable({
  providedIn: 'root'
})

export class HeroService {

  list: BehaviorSubject<list[]> = new BehaviorSubject<list[]>([]);
  list$ = this.list.asObservable();

  constructor(private httpClient: HttpClient) {
    this.fetchData().subscribe(data => {
      this.list.next(data)
      console.log(data);
    })
  }

  fetchData(): Observable<any> {
    return this.httpClient.get('../../assets/data.json')
  }

  updatelike(index: any, like: boolean) {
    const list = this.list.getValue();
    list[index].like = false;
    this.list.next(list)
  }
}

