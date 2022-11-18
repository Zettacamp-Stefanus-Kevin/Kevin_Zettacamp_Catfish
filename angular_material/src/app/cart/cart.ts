import { menutrans } from "./menutrans";

export interface cart{
    order_date : string;
    total_price : number;
    menu : menutrans;
}