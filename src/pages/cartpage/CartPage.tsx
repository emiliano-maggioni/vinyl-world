import CartItem from "components/cartItem/CartItem";
import React, { useContext, useEffect, useState } from "react";
import classes from "./CartPage.module.css";
import vinylData from "utilities/vinyls.json"
import { ItemProps } from "utilities/types";
import ButtonBase from "components/ButtonBase/ButtonBase";
import { AppContext } from "context/AppContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
    const [dataList, setDataList] = useState<ItemProps[] | []>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const appContext = useContext(AppContext);
    let navigate = useNavigate();
    useEffect(()=>{
        let results: ItemProps[] = [];
        let amount: number = 0;
            vinylData.forEach((el)=> {
                if(appContext.cart.includes(el.id)){
                    results.push(el);
                    amount+= el.price;
                }
            });
            setTotalPrice(amount);
            setDataList(results);
    },[appContext.cart]);
    const removeItemToCart = (id:number) => {
        appContext.removeItemToCart(id);
    };
    const checkoutProducts = () => {
        if(appContext.userLogged)
            window.open("https://www.paypal.com/",'','');
        else
            navigate("/login");
    };

    return (<div className={classes.container}>
                <div className={classes.itemsContainer}>
                    {(dataList.length > 0) ? (
                        dataList.map((el:ItemProps) => (
                                <CartItem
                                    key={el.id}
                                    id={el.id}
                                    title={el.title}
                                    band={el.band}
                                    year={el.year}
                                    price={el.price}
                                    imgName={el.imgName}
                                    handleClick={removeItemToCart}
                                />))
                        )
                        : (<p>Your cart is empty.</p>)}
                </div>
                <div className={classes.resumeContainer}>
                    <h3>Cart Resume</h3>
                    <div className={classes.delivery}><strong>Delivery</strong> <span>FREE</span></div>
                    <div className={classes.totalQty}><strong>Items total</strong> <span>{dataList.length}</span> </div>
                    <div className={classes.totalPrice}><strong>Total</strong> <strong>{totalPrice}€</strong></div>
                    <ButtonBase text="Checkout" handleClick={checkoutProducts} />
                </div>
            </div>);
    }

export default CartPage;