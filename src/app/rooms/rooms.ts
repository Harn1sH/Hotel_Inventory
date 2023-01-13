export interface room{
    availablerooms:number;
    bookedrooms:number;
    totalrooms:number;
}

export interface deets{
    roomid:number;
    roomtype:string;
    ameneties:string;
    price:number;
    photos:string;
    checkintime:Date;
    checkouttime:Date;
}