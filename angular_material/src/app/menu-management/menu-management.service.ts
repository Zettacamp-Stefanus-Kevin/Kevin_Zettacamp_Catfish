import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { menu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class MenuManagementService {

  constructor(private apolo: Apollo) { }

  getRecipe(pagination: any): Observable<any> {
    return this.apolo.query({
      query: gql
        `
      query GetAllTransactions ($page: Int, $limit: Int) {
        GetAllRecipes (page: $page, limit: $limit) {
          count
          maxPage
          page
          data_recipes {
            recipe_name
            id
            remain_order
            status
            description
            price
            ingredients {
              ids {
                id
                name
                stock
              }
              stock_used
            }
          }
        }
      }
      `, variables: {
        ...pagination,
      },
      fetchPolicy: 'network-only'
    })
  }

  getIngredient( ):Observable<any> {

    
    return this.apolo.query({
      query: gql`
      query Data($limit: Int) {
        GetAllIngredients(limit: $limit) {
          data {
            name
            stock
            id
          }
        }
      }
      `,
      variables: { limit: 200 },
    })
  }


  deleteRecipe(parameter: any): Observable<any> {
    const id = parameter
    return this.apolo.mutate({
      mutation: gql
        `
        mutation DeleteRecipes($id: ID) {
          DeleteRecipes(id: $id) {
            id
          }
        }
      `,
      variables: { id }
    })
  }


  addRecipe(data: menu): Observable<any> {
    let recipe_name = data.recipe_name
    let price = data.price
    let description = data.description
    let image = data.image
    let input = data.ingredients
    console.log(data.ingredients)
    return this.apolo.mutate({
      mutation: gql
        `
        mutation Mutation($input: [ingredient_id_input], $recipe_name: String, $description: String, $price: Int, $image: String) {
          CreateRecipes(input: $input, recipe_name: $recipe_name, description: $description, price: $price, image: $image) {
            description
            image
            price
            recipe_name
            ingredients {
              stock_used
              ids {
                name
                stock
              }
            }
          }
        }
      `,
      variables: { recipe_name, price, description, image, input }
    })
  }


  updateRecipe(data: menu) {
    let id = data.id
    let recipe_name = data.recipe_name
    let input = data.ingredients
    console.log(id)
    return this.apolo.mutate({
      mutation: gql
        `
      mutation Mutation($input: [ingredient_id_input], $recipe_name: String) {
        CreateRecipes(input: $input, recipe_name: $recipe_name) {
          id
          image
          recipe_name
          price
          description
          ingredients {
            ids {
              name
              stock
            }
            stock_used
          }
        }
      }
      `,
      variables: { id, recipe_name, input }
    }).subscribe((subs) =>
      console.log(subs)
    )
  }



}
