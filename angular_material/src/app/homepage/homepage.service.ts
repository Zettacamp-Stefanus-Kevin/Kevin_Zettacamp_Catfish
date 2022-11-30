import { Injectable } from '@angular/core';
import { Observable } from '@apollo/client';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor(private apolo : Apollo) { }


  getMenu() {
    return this.apolo.query({
      query: gql`
      query Query() {
        GetAllRecipesNotLogin() {
          data_recipes {
            id
            description
            image
            is_hightlighted
            is_special_offers{
              status
              discount
            }
            price
            recipe_name
            remain_order
            status
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
      },
    })
  }

}
