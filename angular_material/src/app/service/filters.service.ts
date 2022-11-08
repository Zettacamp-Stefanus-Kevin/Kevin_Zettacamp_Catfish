import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  constructor(private appolo: Apollo) { }

  filterUser(name: string): Observable<any> {
    return this.appolo.query({
      query: gql`
      query($name : String){
        GetAllUsers ( pagination:{page:0,limit:20}, last_name : $name ){
          _id
          civility
          first_name
          last_name
        }
      }
      `, variables: {
        name
      }
    })
  }

}
