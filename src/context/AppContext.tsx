import {useState, createContext} from 'react';
import { getLoggedUser, saveLoggedUser, deleteLoggedUser } from 'utilities/storage';
import { ToasterStateProps, UserLogged } from 'utilities/types';

export type AppContextModel = {
    userLogged: UserLogged;
    cart: number[];
    login: Function;
    logout: Function;
    addItemToCart: Function;
    removeItemToCart: Function;
    toasterInfo: ToasterStateProps;
    changeToasterState: Function;
};

export const AppContext = createContext<AppContextModel>({
    userLogged: null,
    cart: [],
    login: () => {},
    logout: () => {},
    addItemToCart: () => {},
    removeItemToCart: () => {},
    toasterInfo:{openToaster:false, message:"", severity:"info"},
    changeToasterState: () => {},
});


const AppContextProvider = (props: any) => {
    const [toasterInfo,setToasterInfo] = useState<ToasterStateProps>({openToaster:false, message:"", severity:"info"});
    const [userLogged,setUserLogged] = useState<UserLogged>(getLoggedUser());
    const [cart,setCart] = useState<number[]>([]);
    const handleAddItemToCart = (id:number) => {
        let actualCart = [...cart];
        actualCart.push(id);
        actualCart.sort();
        setCart(actualCart);
    }
    const handleRemoveItemToCart = (id:number) => {
        let actualCart = [...cart];
        actualCart = actualCart.filter((el) => el != id);
        setCart(actualCart);
    }
    const handleLogin = (email:string) => {
        saveLoggedUser(email);
        setUserLogged(email);
    }
    const handleLogout = () => {
        deleteLoggedUser();
        setUserLogged(null);
    }

    const changeToasterState = (toastInfo: ToasterStateProps)=>{
        if(toastInfo)
            setToasterInfo(toastInfo);
    }


    return(
        <AppContext.Provider value={{
            changeToasterState: changeToasterState,
            toasterInfo: toasterInfo,
            userLogged: userLogged,
            login: handleLogin,
            logout: handleLogout,
            cart: cart,
            addItemToCart: handleAddItemToCart,
            removeItemToCart: handleRemoveItemToCart
        }}>
            {props.children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;

