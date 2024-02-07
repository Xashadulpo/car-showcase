import { MouseEventHandler } from "react";

export  interface CustomBtnType{
    title:string;
    classStyle:string;  
    handleload?:MouseEventHandler<HTMLButtonElement>;
    textStyle?:string,
    rightIcon?:string,


}
export interface SearchBarProps{
    setmanufacuterer:(manufacturer:string)=>void;
    setmodel:(model:string)=>void;

}
export  interface searchmanufacturersProps{
    seLected:string;
    setseLected:(manufacturer:string)=>void;
}
export interface CarCardprops{
    city_mpg: number,
    class: string,
    combination_mpg: number
    cylinders: number,
    displacement: number,
    drive: string,
    fuel_type: string,
    highway_mpg: number,
    make: string,
    model: string,
    transmission: string,
    year: number,
}

export interface FilterProps{
    manufacturer:string,
    year:number,
    fuel:string,
    limit:number,
    model:string,
}
export interface Optionalprops{
    title:string,
    value:string,
}

export interface CustomfilterProps {
    setfilters: (value:string | number )=>void;
    title:string,
    options:Optionalprops[],
}
export interface ShowMoreProps {
    pageNumber:number,
    isNext:boolean,
    setlimit: (value : number ) => void ,
}
