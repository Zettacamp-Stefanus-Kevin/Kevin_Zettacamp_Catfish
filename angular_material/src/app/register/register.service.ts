import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private apolo: Apollo) { }

  setRegister(data: any): Observable<any> {
    let firstname = data.firstname
    let lastname = data. lastname
    let email = data.email
    let password = data.password
    console.log(data)

    return this.apolo.mutate({
      mutation: gql
      `
      mutation Mutation($email: String, $password: String, $firstName: String, $lastName: String) {
        CreateUser(email: $email, password: $password, first_name: $firstName, last_name: $lastName) {
          email
          first_name
          last_name
          password
        }
      }
      `,
      variables: { first_name : firstname, last_name : lastname, email : email, password : password }
    })
  }


}
