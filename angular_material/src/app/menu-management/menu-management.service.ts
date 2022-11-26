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
            status
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
        page : pagination.page, limit : pagination.limit
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


  updateRecipe(data: any) {
    let updateRecipesId = data.id
    let recipe_name = data.recipe_name
    let input = data.ingredients
    let price = data.price
    console.log(updateRecipesId)
    return this.apolo.mutate({
      mutation: gql
        `
        mutation Mutation($input: [ingredient_id_input], $recipe_name: String, $price: Int, $updateRecipesId: ID) {
          UpdateRecipes(input: $input, recipe_name: $recipe_name, price: $price, id: $updateRecipesId) {
            id
            image
            recipe_name
            price
            description
            ingredients {
              ids {
                id
                name
                stock
                __typename
              }
              stock_used
              __typename
            }
            __typename
          }
        }
      `,
      variables: { updateRecipesId, recipe_name, input, price}
    })
  }

  updatepublish(data : any){
    let updateRecipesId = data.id
    let status = data.status
    return this.apolo.mutate({
      mutation: gql
      `
      mutation update($updateRecipesId: ID, $status: String) {
        UpdateRecipes(id: $updateRecipesId, status: $status) {
          status
          id
        }
      }
      
      `,
      variables: { updateRecipesId, status}
    })
  }



}
