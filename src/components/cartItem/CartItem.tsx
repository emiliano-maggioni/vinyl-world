import classes from "./CartItem.module.css";
import { CartItemProps } from "utilities/types";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const CartItem = ({id, title, band, price, imgName, quantity, handleClick}: CartItemProps) => {
    return (
        <article className={classes.container} key={id} >
                <figure className={classes.cover}>
                     <img src={`/images/vinyls/${imgName}.jpg`} alt={`${title} - Vinyl World`} />
                </figure>
                <div  className={classes.infoBox}>
                    <h3 className={classes.title}>{title}</h3>
                    <p className={classes.band}>{band}</p>
                    <span className={classes.price}>{price} €</span>
                    <span className={classes.qty}><strong>Quantity:</strong> {quantity} </span>
                </div>
                <CloseRoundedIcon className={classes.removeIcon} onClick={()=> handleClick(id)} />
        </article>
    );
}

export default CartItem;