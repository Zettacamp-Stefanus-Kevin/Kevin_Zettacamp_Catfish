import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private apolo: Apollo) {}

  setRegister(data: any) {
    const first_name = data.first_name;
    const last_name = data.last_name;
    const email = data.email;
    const password = data.password;
    const question_answer = data.question_answer;

    return this.apolo.mutate({
      mutation: gql`
        mutation Mutation(
          $email: String
          $password: String
          $first_name: String
          $last_name: String
          $question_answer: String
        ) {
          CreateUser(
            email: $email
            password: $password
            first_name: $first_name
            last_name: $last_name
            question_answer: $question_answer
          ) {
            email
            first_name
            last_name
            password
            question_answer
          }
        }
      `,
      variables: {
        first_name,
        last_name,
        email,
        password,
        question_answer,
      },
    });
  }
}
