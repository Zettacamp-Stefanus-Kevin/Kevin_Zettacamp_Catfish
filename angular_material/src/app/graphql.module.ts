import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { HttpHeaders } from '@angular/common/http';

// const uri = environment?.apiUrl; // <-- add the URL of the GraphQL server here
// const token: any = localStorage?.getItem('token');
// const uri = 'https://9577-103-236-192-220.ap.ngrok.io/graphql'
const uri = 'https://lazy-blue-moose-yoke.cyclic.app/'// <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const http = httpLink.create({ uri });
  const authLink = new ApolloLink((operation, forward) => {
    // Get the authentication token from local storage if it exists
    // const token = localStorage?.getItem(environment?.tokenKey);
    const token: any = localStorage.getItem('getToken');
    
    operation.setContext({
      headers: new HttpHeaders().set('Authorization', `${token||null}`)
    })

    // Call the next link in the middleware chain.
    return forward(operation);
  });

  return {
    link: authLink.concat(http),
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
