import CartItem from "components/cartItem/CartItem";
import React, { useEffect, useState } from "react";
import classes from "./CartPage.module.css";
import vinylData from "utilities/vinyls.json"
import { ItemProps } from "utilities/types";
import ButtonBase from "components/ButtonBase/ButtonBase";

const CartPage = () => {
    const [dataList, setDataList] = useState<ItemProps[] | []>([]);
    const [searchFilter, setSearchFilter] = useState<string>('');
    const [orderType, setOrderType] = useState<string>('');
    useEffect(()=>{
        let results = [...vinylData];
            setDataList(results);
    },[searchFilter,orderType]);
    const totalQty = 8;
    const totalPrice = 85;
    const checkoutProducts = () => {
        window.open("https://www.paypal.com/",'','');
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
                                />))
                        )
                        : (<p>Your cart is empty.</p>)}
                </div>
                <div className={classes.resumeContainer}>
                    <h3>Cart Resume</h3>
                    <div className={classes.delivery}><strong>Delivery</strong> <span>FREE</span></div>
                    <div className={classes.totalQty}><strong>Items total</strong> <span>{totalQty}</span> </div>
                    <div className={classes.totalPrice}><strong>Total</strong> <strong>{totalPrice}€</strong></div>
                    <ButtonBase text="Checkout" handleClick={checkoutProducts} />
                </div>
            </div>);
    }

export default CartPage;