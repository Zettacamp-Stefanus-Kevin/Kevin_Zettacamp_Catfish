import { ingredient } from "../menu-management/ingredients";

export interface menu {
  id: string;
  price: string;
  image: string;
  recipe_name: string;
  status: string;
  remain_order: string;
  description: string;
  ingredients : ingredient;
  
}
