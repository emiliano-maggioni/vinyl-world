import classes from "./Menu.module.css";
import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import UserInfo from "components/userInfo/UserInfo";

const Menu = () => {
    return (
        <nav className={classes.container}>
            <input className={classes.menuToggle} id="menuToggle" type="checkbox" />
            <label className={classes.menuBtn} htmlFor="menuToggle"><span></span></label>
            <ul className={classes.menuBox} >
                <li><Link className={classes.menuItem} to="/">Home</Link></li>
                {/* <li><Link className={classes.menuItem} to="/register">Register</Link></li> */}
                <li><Link className={classes.menuItem} to="/cart">Cart</Link></li>
                <li><Link className={classes.menuItem} to="/login">Login</Link></li>
                <li><Link className={classes.menuItem} to="/">Logout <LogoutIcon className={classes.logoutBt} /></Link></li>
                <li><UserInfo email="andrea.derobertis@tiscali.it" /></li>
            </ul>
        </nav>
    );
}

export default Menu;