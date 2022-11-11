import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs'
import { Card } from './card';





@Injectable({
  providedIn: 'root'
})
export class CardService {

  card = new BehaviorSubject<Card[]>([])
  card$ = this.card.asObservable()

  private readonly URL = "http://localhost:3000/";

  constructor(private http: HttpClient) {
    this.getCards().subscribe(data => {
      this.card.next(data)
    })
  }

  getCards() {
    return this.http.get<Card[]>(this.URL + 'card/')
  }

  fetchData():Card[]{
    return this.card.getValue();
  }

  setData(data: Card[]){
    this.card.next(data);
  }

  addCard(data: any) {
    data.id = this.addId()+1
    const url = this.URL + 'card/';
    return this.http.post<Card[]>(url, data).subscribe((value:any)=>this.addCardToData(value))
  }

  addCardToData(data: Card){
    let allCard = this.card.getValue()
    allCard.push(data)
    this.setData(allCard)
  }

  addId(){
    let users = this.card.getValue();
    if (users.length == 0) return 0;
    const ids = users.map(value =>{
      return value.id;
    })

    return Math.max(...ids);
  }

}
