import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { login } from './login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private apolo: Apollo) { }

  getToken(data: login): Observable<any> {
    let email = data.email
    let password = data.password
    console.log(data)

    return this.apolo.mutate({
      mutation: gql`
      mutation
      {
        Login(   email: "${email}", password:"${password}" ) 
        {
        token
        id
        email
        role
        first_name
        user_type
          {
          name
          view
          }
        }
      }
      `,
    })
    // .subscribe((data)=>{
    //   console.log(data)
    // })
  }

  updateToken(){
    return this.apolo.mutate({
      mutation: gql`
      mutation Mutation($email: String) {
        UpdateUser(email: $email) {
          email
        }
      }
      `
    })
  }

}
