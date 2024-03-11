export interface ItemProps{
    id: any;
    title: string;
    band: string;
    price: number;
    year: number;
    imgName: string;
}

export interface Item extends ItemProps{
    desc: string;
}

export interface ButtonBaseProps{
    icon?: any;
    text: string;
}