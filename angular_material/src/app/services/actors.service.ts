import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Actor } from './actors';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  actor: BehaviorSubject<Actor[]> = new BehaviorSubject<Actor[]>([]);
  actor$ = this.actor.asObservable();

  selectActor : BehaviorSubject<any> = new BehaviorSubject<any>(null);
  selectActor$ = this.selectActor.asObservable();

  constructor(private httpClient : HttpClient) {
    this.fetchData().subscribe((data) => {
      this.actor.next(data);
      console.log(data);
    });
   }

   fetchData() {
    return this.httpClient.get<Actor[]>('../assets/data/actors.json');
  }

  getActors(): Actor[] {
    return this.actor.getValue();
  }

  getActorsById(id: number): Actor {
    return this.getActors().filter((item) => item.id == id)[0];
  }

  updateSelectActors(data: any) {
    this.selectActor.next(data);
  }

}
