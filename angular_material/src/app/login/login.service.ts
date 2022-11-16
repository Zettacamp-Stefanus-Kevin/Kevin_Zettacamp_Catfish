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
        Login(  
        email: "${email}"
        password:"${password}" 
        ) 
        {
        token
        user_type
          {
          name
          view
          }
        id
        email
        role
        }
      }
      `,
      variables: { email, password },
    })
    // .subscribe((data)=>{
    //   console.log(data)
    // })
  }

}
