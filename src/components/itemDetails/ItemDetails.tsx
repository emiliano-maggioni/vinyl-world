import { Button } from "@mui/material";
import classes from "./ItemDetails.module.css";
import { Item } from "utilities/types";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ButtonBase from "components/ButtonBase/ButtonBase";

const ItemDetails = ({id, title, band, price, year, imgName, desc}: Item) => {
    return (
        <article className={classes.container} key={id} >
                <figure className={classes.cover}>
                     <img src={`/images/vinyls/${imgName}.jpg`} alt="Logo - Vinyl World" />
                </figure>
                <div className={classes.infoColumn}>
                    <h3 className={classes.title}>{title}</h3>
                    <p className={classes.band}>{band}</p>
                    <div className={classes.year}>Released in <strong>{year}</strong></div>
                    <span className={classes.price}>{price} €</span>
                    <div className={classes.btContainer}><ButtonBase text="Add to Cart" icon={<ShoppingCartOutlinedIcon />} /> <FavoriteIcon fontSize="large" /></div>

                    <div className={classes.description}><span>Description:</span>{desc}</div>
                </div>
        </article>
    );
}

export default ItemDetails;