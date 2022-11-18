import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private apolo : Apollo) { }

  getCart(): Observable<any>{
    return this.apolo.query({
      query: gql`
      query Query {
        GetAllTransactions (limit : 10, page : 1){
          data {
            menu {
              amount
              note
              recipe_id {
                price
                image
                recipe_name
              }
            }
            total_price
            order_date
          }
        }
      }
      `
    })
  }

}
