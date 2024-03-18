import CartItem from "components/cartItem/CartItem";
import { useContext, useEffect, useState } from "react";
import classes from "./CartPage.module.css";
import vinylData from "utilities/vinyls.json"
import { ItemProps, CartItemType, CartResume } from "utilities/types";
import ButtonBase from "components/ButtonBase/ButtonBase";
import { AppContext } from "context/AppContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
    const [dataList, setDataList] = useState<CartItemType[] | []>([]);
    const [cartResume, setCartResume] = useState<CartResume>({totalPrice: 0, totalItems:0});
    const appContext = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(()=>{
        let results: CartItemType[] = [];
        let totalItems:number = 0;
        let amount: number = 0;
            vinylData.forEach((el:ItemProps)=> {
                if(appContext.cart.includes(el.id)){
                    const quantity = appContext.cart.filter((val)=> val == el.id).length;
                    const parameters = {...el, quantity};
                    results.push(parameters);
                    totalItems += quantity;
                    amount+= (el.price * quantity);
                }
            });
            setCartResume({totalPrice: amount, totalItems:totalItems});
            setDataList(results);
    },[appContext.cart]);

    const removeItemToCart = (id:number) => {
        appContext.removeItemToCart(id);
    };
    const checkoutProducts = () => {
        if(appContext.userLogged)
            appContext.changeToasterState({ openToaster: true, message: "Checkout completed.", severity: "success" });
        else
            navigate("/complete-checkout");
    };
    return (<section className={classes.container}>
                <div className={classes.itemsContainer}>
                    {(dataList.length > 0) ? (
                        dataList.map((el) => (
                                <CartItem
                                    key={el.id}
                                    id={el.id}
                                    title={el.title}
                                    band={el.band}
                                    year={el.year}
                                    price={el.price}
                                    imgName={el.imgName}
                                    quantity={el.quantity}
                                    handleClick={removeItemToCart}
                                />))
                        )
                        : (<p>Your cart is empty.</p>)}
                </div>
                {(dataList.length > 0) && (
                <aside className={classes.resumeContainer}>
                    <h3>Cart Resume</h3>
                    <div className={classes.shipping}><strong>Shipping</strong> <span>FREE</span></div>
                    <div className={classes.totalQty}><strong>Items total</strong> <span>{cartResume.totalItems}</span> </div>
                    <div className={classes.totalPrice}><strong>Total</strong> <strong>{cartResume.totalPrice}€</strong></div>
                    <ButtonBase text="Checkout" handleClick={checkoutProducts} />
                </aside>)}
            </section>);
    }

export default CartPage;