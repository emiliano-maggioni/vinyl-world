export interface ItemProps{
    id: any;
    title: string;
    band: string;
    price: number;
    year: number;
    imgName: string;
    handleClickDetails?: Function;
    handleClick?: () => any;
}

export interface Item extends ItemProps{
    desc: string;
}

export interface ButtonBaseProps{
    icon?: any;
    text: string;
    handleClick?: () => any;
    type?: "button" | "submit";
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

export interface CartItemProps{
    id: any;
    title: string;
    band: string;
    price: number;
    quantity?: number;
    year: number;
    imgName: string;
    handleClick: Function;
}

export interface UserInfoProps{
    email: string;
}


export interface PasswordInputProps{
    errorMessage?: string;
    label: string;
    id: string;
    required?: boolean;
    size?: "medium" | "small";
    register?: any;
    errors?: any;
}

export interface TextInputProps extends PasswordInputProps{
    isEmail?: boolean
}

export interface LoginForm{
    email: string;
    password: string;
}

export type UserLogged = string | null;