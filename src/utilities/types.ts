export interface ItemProps{
    id: any;
    title: string;
    band: string;
    price: number;
    year: number;
    imgName: string;
    handleClick?: Function;
}

export interface Item extends ItemProps{
    desc: string;
}

export interface ButtonBaseProps{
    icon?: any;
    text: string;
    handleClick: Function;
}

export type options = {
    value:any;
    label:string;
}

export interface SelectProps{
    defaultOption?:string;
    name:string;
    options:options[];
    placeholder?:string;
    handleOrderChange?:Function;
}