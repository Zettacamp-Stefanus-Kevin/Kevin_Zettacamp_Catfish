import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { promo } from './promos';


@Injectable({
  providedIn: 'root'
})
export class PromosService {

  

  constructor(private appolo: Apollo) { }

  promoCard() {
    return this.appolo.watchQuery({
      query: gql`
      query{
        GetAllPromos(pagination:{page:0,limit:250}){
          image_url
          title
          sub_title
          ref
          description
        }
      }
      `
    })
  }

  addPromo(data: promo)  {
    let image_url = data.image_url
    let title = data.title
    let sub_title = data.sub_title
    let ref = data.ref
    let description = data.description
    console.log(data)

    return this.appolo.mutate({
      mutation: gql`
      mutation CreatePromo( $data : PromoInput )
      {
        CreatePromo(promo_input : $data) 
          {
            image_url
            title
            sub_title
            ref
            description
          }
      }
      `,
      variables : data
    })
    .subscribe((data)=>{
      console.log(data)
    } )
  }

}



// mutation {
//   CreatePromo(promo_input :{
//       image_url : ""
//       title : ""
//       sub_title :""
//       ref : ""
//       description : ""
//   }){
//     image_url
//     title
//     sub_title
//     ref
//     description
//   }
// }