import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private apolo: Apollo) { }

  getCart() {
    return this.apolo.query({
      query: gql(`
      query GetOrder {
        GetOrder {
          
            id
            order_date
            total_price
            menu {
             amount
              id
              note
              recipe_id {
               id
               recipe_name
               image
               price
              }
            }
          
        }
      }
      `),
      fetchPolicy: 'network-only'
    })
  }

//   query GetAllCart {
//     getAllCart {
//     user_id
//     total_price
//     cart {
//       amount
//       note
//       total_price
//       id
//         recipe_id {
//         id
//         recipe_name
//         price
//         imgUrl
//       }
//     }
//   }
// }

deleteCart(parameter: any): Observable < any > {
  const id = parameter
    return this.apolo.mutate({
    mutation: gql
      `
      mutation DeleteCart($deleteCartId: ID) {
        deleteCart(id: $deleteCartId) {
          id
        }
      }
      `,
    variables: { id }
  })
}

orderMenu(parameter: any): Observable < any > {
  const id = parameter
    return this.apolo.mutate({
    mutation: gql
      `
        mutation Mutation($orderNowId: ID) {
          OrderNow(id: $orderNowId) {
            id
            order_status
            order_date
          }
        }
      `,
    variables: { id }
  })
}

}
