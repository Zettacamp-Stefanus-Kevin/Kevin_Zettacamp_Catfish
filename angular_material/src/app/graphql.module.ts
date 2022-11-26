import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const uri = environment?.apiUrl; // <-- add the URL of the GraphQL server here
const token: any = localStorage?.getItem('getToken');
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const http = httpLink.create({ uri: uri });
  const authLink = new ApolloLink((operation, forward) => {
    // Get the authentication token from local storage if it exists
    const token = localStorage?.getItem(environment?.tokenKey);

    // Call the next link in the middleware chain.
    return forward(operation);
  });

  return {
    link: httpLink.create({ uri, headers: new HttpHeaders().set('Authorization', token) }),
    cache: new InMemoryCache(),


  };
}



@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule { }
