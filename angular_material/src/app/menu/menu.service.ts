import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { menu } from './menu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private apolo: Apollo) {}

  // getMenu(pagination: any): Observable<any> {

  //   return this.apolo.query({
  //     query: gql`
  //     query Query ($limit: Int, $page: Int, $recipeName: String){
  //       GetAllRecipes(limit: $limit, page: $page, recipe_name: $recipeName) {
  //         maxPage
  //         page
  //         count
  //         data_recipes {
  //           id
  //           price
  //           recipe_name
  //           status
  //           remain_order
  //           description
  //           image
  //           ingredients {
  //             ids {
  //               name
  //               stock
  //             }
  //           }
  //         }
  //       }
  //     }
  //     `,
  //     variables: {
  //       ...pagination, status : 'active'
  //     },
  //     fetchPolicy: "network-only"
  //   })
  // }

  getMenu(pagination: any, kategori:any): Observable<any> {
    let kategoriFilter: any = '';
    if (kategori) {
      kategoriFilter = kategori;
    }

    return this.apolo.query({
      query: gql`
        query Query($page: Int, $limit: Int, $recipeName: String, $category: String) {
          GetAllRecipesNotLogin(
            page: $page
            limit: $limit
            recipe_name: $recipeName,
            category: $category
          ) {
            count
            maxPage
            page
            data_recipes {
              id
              description
              image
              is_special_offers {
                discount
                price_discount
              }
              price
              recipe_name
              remain_order
              status
              sold
              ingredients {
                stock_used
                ids {
                  name
                  status
                  id
                  stock
                }
              }
            }
          }
        }
      `,
      variables: {
        ...pagination,
        status: 'active',  category  : kategoriFilter 
      },
      fetchPolicy: 'network-only',
    });
  }

  addCart(data: any): Observable<any> {
    let recipe_id = data.id;
    let amount = data.amount;
    let note = data.note;
    return this.apolo.mutate({
      mutation: gql`
        mutation AddCart($input: transactions_menu_input) {
          addCart(input: $input) {
            id
            order_date
            status
            total_price
            menu {
              recipe_id {
                id
              }
              amount
              note
            }
          }
        }
      `,
      variables: { input: { recipe_id, amount, note } },
    });
  }

  // getPage(): Observable<any> {
  //   return this.apolo.query({
  //     query: gql
  //     `
  //     query GetAllRecipes($page: Int, $limit: Int) {
  //       GetAllRecipes(page: $page, limit: $limit) {
  //         maxPage
  //         page
  //         count
  //       }
  //     }
  //     `
  //   })
  // }
}
