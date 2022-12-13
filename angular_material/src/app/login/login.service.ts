import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { login } from './login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private apolo: Apollo) {}

  getToken(data: login): Observable<any> {
    let email = data.email;
    let password = data.password;

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
        balance
        first_name
        user_type
          {
          name
          view
          }
        }
      }
      `,
    });
  }

  updateToken() {
    return this.apolo.mutate({
      mutation: gql`
        mutation Mutation($email: String, $password: String) {
          UpdateUser(email: $email, password: $password) {
            email
            password
          }
        }
      `,
    });
  }

  getUser(data: any) {
    return this.apolo.query({
      query: gql`
        query Query($email: String) {
          GetOneUser(email: $email) {
            id
            first_name
            last_name
            email
            password
            balance
            question_answer
          }
        }
      `,
      variables: {
        email: data,
      },
      fetchPolicy: 'network-only',
    });
  }

  forgetPassword(data: any) {
    const email = data.email;
    const password = data.password;
    const answer = data.answer;
    return this.apolo.mutate({
      mutation: gql`
        mutation ForgetPassword(
          $email: String
          $answer: String
          $password: String
        ) {
          ForgetPassword(
            email: $email
            answer: $answer
            newPassword: $password
          ) {
            result
          }
        }
      `,
      variables: { email, password, answer },
    });
  }
}
