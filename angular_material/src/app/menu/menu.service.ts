import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private apolo : Apollo) { }

  getMenu(): Observable<any>{
    return this.apolo.query({
      query: gql`
      query Query {
        GetAllRecipes{
          data_recipes {
            price
            recipe_name
            status
            remain_order
            description
            image
          }
        }
      }
      `
    })
  }
}
