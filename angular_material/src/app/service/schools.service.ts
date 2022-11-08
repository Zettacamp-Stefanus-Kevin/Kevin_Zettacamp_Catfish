import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SchoolsService {

  constructor(private appolo: Apollo) { }

  schoolTable(): Observable<any> {
    return this.appolo.query({
      query: gql`
      query{
        GetAllSchools(pagination:{page:0,limit:20}){
          short_name
          long_name
          status
        }
      }
      `
    })
  }

}
