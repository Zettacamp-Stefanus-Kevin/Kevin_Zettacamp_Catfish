import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { stock } from './stock';

@Injectable({
  providedIn: 'root',
})
export class StockManagementService {
  constructor(private apolo: Apollo) {}

  getStock(pagination?: any, ing?: any, sort?: any): Observable<any> {
    let ingredientFilter: any = '';
    if (ing) {
      ingredientFilter = ing;
    }

    // let stockFilter: any = '';
    // if (stock) {
    //   stockFilter = stock;
    // }

    return this.apolo.query({
      query: gql`
        query Query($name: String, $status: String, $limit: Int, $page: Int, $stock: Int, $sortName: Boolean) {
          GetAllIngredients(
            name: $name
            status: $status
            stock: $stock
            limit: $limit
            page: $page
            sortName: $sortName
          ) {
            maxPage
            page
            count
            data {
              id
              name
              status
              stock
            }
          }
        }
      `,
      variables: {
        ...pagination,
        name: ingredientFilter,
        sort
      },
      fetchPolicy: 'network-only',
    });
  }

  updateStock(data: stock) {
    let id = data.id;
    let name = data.name;
    let stock = data.stock;

    return this.apolo.mutate({
      mutation: gql`
        mutation Mutation($id: ID, $stock: Int, $name: String) {
          UpdateIngredients(id: $id, stock: $stock, name: $name) {
            id
            name
            status
            stock
          }
        }
      `,
      variables: { id, name, stock },
      fetchPolicy: 'network-only',
    });
  }

  addStock(data: stock) {
    let name = data.name;
    let stock = data.stock;

    return this.apolo
      .mutate({
        mutation: gql`
          mutation Mutation($name: String, $stock: Int) {
            CreateIngredients(name: $name, stock: $stock) {
              name
              stock
              id
              status
            }
          }
        `,
        variables: { name, stock },
      })
      .subscribe();
  }

  deleteStock(parameter: any) {
    const id = parameter;
    return this.apolo.mutate({
      mutation: gql`
        mutation ($id: ID) {
          DeleteIngredients(id: $id) {
            status
          }
        }
      `,
      variables: { id: parameter },
      fetchPolicy: 'network-only',
    });
  }
}
