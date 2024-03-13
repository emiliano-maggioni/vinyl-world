import { Button } from "@mui/material";
import classes from "./Item.module.css";
import { ItemProps } from "utilities/types";
// import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ButtonBase from "components/ButtonBase/ButtonBase";

const Item = ({id, title, band, price, imgName, handleClick}: ItemProps) => {
    return (
        <article className={classes.container} key={id} >
                <figure className={classes.cover}>
                     <img src={`/images/vinyls/${imgName}.jpg`} alt="Logo - Vinyl World" />
                </figure>
                <h3 className={classes.title}>{title}</h3>
                <p className={classes.band}>{band}</p>
                <span className={classes.price}>{price} €</span>
                <div className={classes.btContainer}>
                    <ButtonBase text="Add to Cart" icon={<ShoppingCartOutlinedIcon />} handleClick={handleClick!} />
                    {/* <FavoriteIcon fontSize="large" /> */}
                </div>
        </article>
    );
}

export default Item;