import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class TransactionManagementService {
  constructor(private apollo: Apollo) {}

  getHistoryTransactions(data: any) {
    return this.apollo.query({
      query: gql`
        query GetAllRecipesNotLogin(
          $sortUserName: Boolean
          $orderDate: String
          $sortTotalPrice: Boolean
        ) {
          GetAllTransactions(
            sortUserName: $sortUserName
            order_date: $orderDate
            sortTotalPrice: $sortTotalPrice
          ) {
            data {
              total_price
              id
              user_id {
                first_name
              }
              order_date
              menu {
                recipe_id {
                  recipe_name
                }
              }
            }
          }
        }
      `,
      fetchPolicy: 'network-only',
    });
  }
}
