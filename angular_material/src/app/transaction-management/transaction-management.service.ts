import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionManagementService {
  constructor(private apolo: Apollo) {}

  getHistoryTransactions(pagination: any,
    status: any,
    name: any,
    date: any,
    menu: any
  ): Observable<any> {
    let statusFilter: any = '';
    if (status) {
      statusFilter = status;
    }

    let nameFilter: any = '';
    if (name) {
      nameFilter = name;
    }

    let dateFilter: any = '';
    if (date) {
      dateFilter = date;
    }

    let menuFilter: any = '';
    if (menu) {
      menuFilter = menu;
    }

    return this.apolo.query({
      query: gql`
        query History(
          $orderStatus: String
          $lastNameUser: String
          $recipeName: String
          $orderDate: String
          $limit: Int
          $page: Int
        ) {
          GetAllTransactions(
            order_status: $orderStatus
            last_name_user: $lastNameUser
            recipe_name: $recipeName
            order_date: $orderDate
            limit: $limit
            page: $page
          ) {
            count
            maxPage
            page
            data {
              id
              order_date
              order_status
              status
              total_price
              menu {
                id
                amount
                note
                recipe_id {
                  id
                  recipe_name
                  price
                  remain_order
                  status
                }
              }
              user_id {
                email
                id
                role
                status
                first_name
                last_name
              }
            }
          }
        }
      `,
      variables: {
        ...pagination,
        orderStatus: statusFilter,
        lastNameUser: nameFilter,
        recipeName: menuFilter,
        orderDate: dateFilter,
      },
      fetchPolicy: 'network-only',
    });
  }
}
