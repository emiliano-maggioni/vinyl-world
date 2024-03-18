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

export interface CartItemType{
    id: any;
    title: string;
    band: string;
    price: number;
    quantity: number;
    year: number;
    imgName: string;
}

export interface CartItemProps extends CartItemType{
    handleClick: Function;
}

export interface CartResume{
    totalPrice: number;
    totalItems: number;
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

export type ToasterStateProps = {
    openToaster: boolean;
    message: string;
    severity: "error" | "warning" | "info" | "success";
    duration?: number;
}
export interface ToasterProps extends ToasterStateProps{
    handleClose:any;
}