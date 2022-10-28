import { Addressess } from "./userAddress"

export interface User{
    id: string;
    name: string;
    age:number;
    gender:string;
    email :string;
    position:string;
    maritalStatus:string;
    address : Addressess;
    }

