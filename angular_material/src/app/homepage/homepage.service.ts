import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class HomepageService {
  constructor(private apolo: Apollo) {}

  getMenu() {
    return this.apolo.watchQuery({
      query: gql`
        query Query($isHightlighted: Boolean) {
          GetAllRecipesNotLogin(is_hightlighted: $isHightlighted) {
            data_recipes {
              id
              description
              image
              price
              recipe_name
              status
              is_hightlighted
              is_special_offers {
                status
                discount
              }
            }
          }
        }
      `,
      variables: { isHightlighted: false },
    });
  }

  getDiskon() {
    return this.apolo.watchQuery({
      query: gql`
        query Query($isHightlighted: Boolean) {
          GetAllRecipesNotLogin(is_hightlighted: $isHightlighted) {
            data_recipes {
              id
              description
              image
              price
              recipe_name
              status
              is_hightlighted
              is_special_offers {
                status
                discount
                price_discount
              }
            }
          }
        }
      `,
      variables: { isSpecialOffers: false },
    });
  }
}
