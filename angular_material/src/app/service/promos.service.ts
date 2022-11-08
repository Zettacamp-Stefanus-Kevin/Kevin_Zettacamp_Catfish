import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PromosService {

  constructor(private appolo: Apollo) { }

  promoCard(): Observable<any> {
    return this.appolo.query({
      query: gql`
      query{
        GetAllPromos(pagination:{page:0,limit:10}){
          image_url
          title
          sub_title
          ref
          description
        }
      }
      `
    })
  }

}
