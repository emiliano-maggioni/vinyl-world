import classes from "./CartItem.module.css";
import { CartItemProps } from "utilities/types";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const CartItem = ({id, title, band, price, imgName, quantity = 1, handleClick}: CartItemProps) => {
    return (
        <article className={classes.container} key={id} >
                <figure className={classes.cover}>
                     <img src={`/images/vinyls/${imgName}.jpg`} alt="Logo - Vinyl World" />
                </figure>
                <div  className={classes.infoBox}>
                    <h3 className={classes.title}>{title}</h3>
                    <p className={classes.band}>{band}</p>
                    <span className={classes.price}>{price} €</span>
                    <span className={classes.qty}><strong>Quantity:</strong> {quantity} </span>
                </div>
                <CloseRoundedIcon className={classes.removeIcon} onClick={()=> alert('remove')} />
        </article>
    );
}

export default CartItem;