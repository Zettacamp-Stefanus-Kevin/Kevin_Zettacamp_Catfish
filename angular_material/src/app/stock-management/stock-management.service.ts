import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { stock } from './stock';

@Injectable({
  providedIn: 'root'
})
export class StockManagementService {

  constructor(private apolo: Apollo) { }

  getStock(): Observable<any> {
    return this.apolo.query({
      query: gql`
      query Query {
        GetAllIngredients (limit:30, page: 1){
          data {
            id
            name
            status
            stock
          }
        }
      }
      `
    })
  }

  getOneStock(): Observable<any> {
    return this.apolo.query({
      query: gql`
      query Data($getOneIngredientsId: ID) {
        GetOneIngredients(id:$getOneIngredientsId) {
          id
          name
          stock
        }
      }
      `
    })
  }

  updateStock(data:stock){
    let id = data.id
    let name = data.name
    let stock = data.stock
    console.log(id)
    return this.apolo.mutate({
      mutation:gql
      `
      mutation Mutation($id: ID, $stock: Int, $name: String) {
        UpdateIngredients(id: $id, stock: $stock, name: $name) {
          id
          name
          status
          stock
        }
      }
      `,
      variables: { id, name, stock }
    }).subscribe((subs) =>
      console.log(subs)
    )
  }

  addStock(data: stock) {
    let name = data.name
    let stock = data.stock
    console.log(data)
    return this.apolo.mutate({
      mutation: gql
        `
      mutation Mutation($name: String, $stock: Int) {
        CreateIngredients(name: $name, stock: $stock) {
          name
          stock
          id
          status
        }
      }
      `,
      variables: { name, stock }
    }).subscribe((subs) =>
      console.log(subs)
    )
  }


  deleteStock(parameter: any) {
    const id = parameter
    return this.apolo.mutate({
      mutation: gql
        `
      mutation($id: ID) {
        DeleteIngredients (id: $id) {
          id
          name
          stock
        }
      }
      `,
      variables: { id : parameter}
    }).subscribe((subs) =>
      console.log(subs)
    )
  }

}
