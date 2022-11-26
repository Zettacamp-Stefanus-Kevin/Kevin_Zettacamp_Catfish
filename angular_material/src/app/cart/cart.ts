import { menutrans } from "./menutrans";

export interface cart{
    id : string;
    order_date : string;
    total_price : number;
    status: string;
    menu : menutrans;
}