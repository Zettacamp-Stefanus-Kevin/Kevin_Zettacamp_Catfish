import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class ProfilService {
  constructor(private apolo: Apollo) {}

  getUser(data: any) {
    return this.apolo.watchQuery({
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
}
