import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { stock } from './stock';

@Injectable({
  providedIn: 'root',
})
export class StockManagementService {
  constructor(private apolo: Apollo) {}

  getStock(pagination?: any, ing?: any, status?: any): Observable<any> {
    let ingredientFilter: any = '';
    if (ing) {
      ingredientFilter = ing;
    }

    let statusFilter: any = '';
    if (status) {
      statusFilter = status;
    }

    return this.apolo.query({
      query: gql`
        query Query($name: String, $status: String, $limit: Int, $page: Int) {
          GetAllIngredients(
            name: $name
            status: $status
            limit: $limit
            page: $page
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
        status: statusFilter,
      },
      fetchPolicy: 'network-only',
    });
  }

  updateStock(data: stock) {
    let id = data.id;
    let name = data.name;
    let stock = data.stock;

    return this.apolo
      .mutate({
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
      })
      .subscribe();
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

  deleteStock(parameter: any): Observable<any> {
    const id = parameter;
    return this.apolo.mutate({
      mutation: gql`
        mutation ($id: ID) {
          DeleteIngredients(id: $id) {
            id
            name
            stock
          }
        }
      `,
      variables: { id: parameter },
    });
  }
}
