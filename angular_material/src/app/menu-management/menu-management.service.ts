import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { menu } from './menu';

@Injectable({
  providedIn: 'root',
})
export class MenuManagementService {
  constructor(private apolo: Apollo) {}

  getRecipe(pagination: any, name: any, status: any): Observable<any> {
    let nameFilter: any = '';
    if (name) {
      nameFilter = name;
    }

    let statusFilter: any = '';
    if (status) {
      statusFilter = status;
    }
    
    return this.apolo.query({
      query: gql`
        query GetAllTransactions(
          $page: Int
          $limit: Int
          $status: String
          $recipeName: String
        ) {
          GetAllRecipes(
            status: $status
            recipe_name: $recipeName
            page: $page
            limit: $limit
          ) {
            count
            maxPage
            page
            data_recipes {
              recipe_name
              id
              remain_order
              status
              image
              category
              is_hightlighted
              is_special_offers {
                status
                discount
              }
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
      `,
      variables: {
        page: pagination.page,
        limit: pagination.limit,
        recipeName: nameFilter,
        status: statusFilter,
      },
      fetchPolicy: 'network-only',
    });
  }

  getIngredient(): Observable<any> {
    return this.apolo.query({
      query: gql`
        query Data($limit: Int, $status:String) {
          GetAllIngredients(limit: $limit, status: $status) {
            data {
              name
              stock
              id
            }
          }
        }
      `,
      variables: { limit: 200, status:"active" },
    });
  }

  deleteRecipe(parameter: any): Observable<any> {
    const id = parameter;
    return this.apolo.mutate({
      mutation: gql`
        mutation DeleteRecipes($id: ID) {
          DeleteRecipes(id: $id) {
            id
          }
        }
      `,
      variables: { id },
    });
  }

  addRecipe(data: any): Observable<any> {
    let recipe_name = data.recipe_name;
    let price = data.price;
    let description = data.description;
    let image = data.image;
    let input = data.ingredients;
    let category = data.category;
    let discount = data.discount;

    return this.apolo.mutate({
      mutation: gql`
        mutation Mutation(
          $input: [ingredient_id_input]
          $recipe_name: String
          $description: String
          $price: Int
          $image: String
          $category: String
          $discount: Int
        ) {
          CreateRecipes(
            input: $input
            recipe_name: $recipe_name
            description: $description
            price: $price
            image: $image
            discount: $discount
            category: $category
          ) {
            description
            image
            price
            recipe_name
            category
            is_special_offers {
              discount
            }
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
      variables: { recipe_name, price, description, image, input, category, discount },
    });
  }

  updateRecipe(data: any) {
    let updateRecipesId = data.id;
    let recipe_name = data.recipe_name;
    let input = data.ingredients;
    let price = data.price;
    let discount = data.discount;

    return this.apolo.mutate({
      mutation: gql`
        mutation Mutation(
          $input: [ingredient_id_input]
          $recipe_name: String
          $price: Int
          $updateRecipesId: ID
          $discount: Int
        ) {
          UpdateRecipes(
            input: $input
            recipe_name: $recipe_name
            price: $price
            id: $updateRecipesId
            discount: $discount
          ) {
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
      variables: { updateRecipesId, recipe_name, input, price, discount },
    });
  }

  updatepublish(data: any) {
    let updateRecipesId = data.id;
    let status = data.status;
    return this.apolo.mutate({
      mutation: gql`
        mutation update($updateRecipesId: ID, $status: String) {
          UpdateRecipes(id: $updateRecipesId, status: $status) {
            status
            id
          }
        }
      `,
      variables: { updateRecipesId, status },
    });
  }

  updateHighlight(data: any) {
    let updateRecipesId = data.id;
    let isHightlighted = data.is_hightlighted;
    return this.apolo.mutate({
      mutation: gql`
        mutation update($updateRecipesId: ID, $isHightlighted: Boolean) {
          UpdateRecipes(
            id: $updateRecipesId
            is_hightlighted: $isHightlighted
          ) {
            id
            is_hightlighted
          }
        }
      `,
      variables: { updateRecipesId, isHightlighted },
    });
  }

  updateSPrice(data: any) {
    let updateRecipesId = data.id;
    let statusSpecialOffers = data.is_special_offers;
    return this.apolo.mutate({
      mutation: gql`
      mutation update($updateRecipesId: ID, $statusSpecialOffers: Boolean)) {
        UpdateRecipes(id: $updateRecipesId, statusSpecialOffers: $statusSpecialOffers) {
          id
          is_special_offers
        }
      }
      `,
      variables: { updateRecipesId, statusSpecialOffers }
    });
  }
}
