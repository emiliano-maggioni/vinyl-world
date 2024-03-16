import React, {useState, createContext} from 'react';
import { UserLogged } from 'utilities/types';


export type AppContextModel = {
    userLogged: UserLogged;
    cart: number[];
    addItemToCart: Function;
    removeItemToCart: Function;
};

export const AppContext = createContext<AppContextModel>({
    userLogged: "andrea.derobertis@tiscali.it",
    cart: [],
    addItemToCart: () => {},
    removeItemToCart: () => {}
});


const AppContextProvider = (props: any) => {
    const [userLogged,setUserLogged] = useState<UserLogged>("andrea.derobertis@tiscali.it");
    const [cart,setCart] = useState<number[]>([]);
    const handleAddItemToCart = (id:number) => {
        let actualCart = [...cart];
        actualCart.push(id);
        setCart(actualCart);
    }
    const handleRemoveItemToCart = (id:number) => {
        let actualCart = [...cart];
        actualCart = actualCart.filter((el) => el != id);
        setCart(actualCart);
    }
    console.log("---> CART:",cart);
    return(
        <AppContext.Provider value={{userLogged: userLogged, cart: cart, addItemToCart: handleAddItemToCart, removeItemToCart: handleRemoveItemToCart}} >
            {props.children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;

