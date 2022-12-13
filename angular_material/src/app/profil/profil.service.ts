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
            role
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

  updateUser(
    newFirst?: string,
    newLast?: string,
    newEmail?: string,
    newPass?: string
  ) {
    const email = newEmail;
    const password = newPass;
    const firstName = newFirst;
    const lastName = newLast;
    return this.apolo.mutate({
      mutation: gql`
        mutation UpdateUser(
          $email: String
          $password: String
          $firstName: String
          $lastName: String
        ) {
          UpdateUser(
            email: $email
            password: $password
            first_name: $firstName
            last_name: $lastName
          ) {
            email
            first_name
            id
            last_name
            password
            role
            status
          }
        }
      `,
      variables: { lastName, firstName, email, password },
      fetchPolicy: 'network-only',
    });
  }
}
