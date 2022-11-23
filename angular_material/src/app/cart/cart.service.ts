import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private apolo: Apollo) { }

  getCart() {
    return this.apolo.watchQuery({
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
               remain_order
               image
               price
              }
            }
            user_id {
              first_name
              last_name
            }
        }
      }
      `),
      fetchPolicy: 'network-only'
    })
  }

  // getTransaction(){}

  deleteCart(parameter: any): Observable<any> {
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
      variables: { deleteCartId: parameter.id }
    })
  }

  orderMenu(parameter: any): Observable<any> {
    const id = parameter
    return this.apolo.mutate({
      mutation: gql
        `
        mutation Mutation($id: ID) {
          OrderNow(id: $id) {
            id
            order_status
            order_date
          }
        }
      `,
      variables: { id }
    })
  }

  decrAmount(parameter: any): Observable < any > {
    const id = parameter
    return this.apolo.mutate({
      mutation: gql`
      mutation update($id: ID) {
        DecrAmount(id: $id) {
          status
        }
      }
      `,
      variables: { id }
    })
  }

  incrAmount(parameter: any): Observable < any > {
    const id = parameter
    return this.apolo.mutate({
      mutation: gql`
      mutation update($id: ID) {
        IncrAmount(id: $id) {
          status
        }
      }
      `,
      variables: { id }
    })
  }

  updateNote(parameter: any) {
    let {editNoteId, newNote} = parameter
    
    return this.apolo.mutate({
      mutation: gql`
      mutation update($editNoteId: ID, $newNote: String) {
        EditNote(id: $editNoteId, newNote: $newNote) {
          status
        }
      }
      `,
      variables: { editNoteId, newNote }
    })
  }

}
