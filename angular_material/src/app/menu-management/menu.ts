import { ingredient } from "./ingredients";

export interface menu{
    id : string;
    recipe_name : string;
    ingredients : ingredient;
    description : string;
    price : number;
    status : string;
    image : string;

}