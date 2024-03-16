import classes from "./Menu.module.css";
import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import UserInfo from "components/userInfo/UserInfo";
import { useContext, useState } from "react";
import { AppContext } from "context/AppContext";

const Menu = () => {
    const [isMenuOpen,setIsMenuOpen] = useState<boolean>(false);
    const appContext = useContext(AppContext);
    const closeMenu = () => setIsMenuOpen(false);
    console.log("userLogged=",appContext.userLogged);
    return (
        <nav className={classes.container}>
            <input className={classes.menuToggle} id="menuToggle" type="checkbox" checked={isMenuOpen} />
            <label className={classes.menuBtn} onClick={() => setIsMenuOpen(!isMenuOpen)}><span></span></label>
            <ul className={classes.menuBox} >
                <li onClick={closeMenu}><Link className={classes.menuItem} to="/">Home</Link></li>
                {/* <li><Link className={classes.menuItem} to="/register">Register</Link></li> */}
                <li onClick={closeMenu}><Link className={classes.menuItem} to="/cart">Cart</Link></li>
                {appContext.userLogged ? (<>
                    <li onClick={closeMenu}><Link className={classes.menuItem} to="/">Logout <LogoutIcon className={classes.logoutBt} /></Link></li>
                    <li className={classes.userInfo}><UserInfo email="andrea.derobertis@tiscali.it" /></li>
                </>)
                : <li onClick={closeMenu}><Link className={classes.menuItem} to="/login">Login</Link></li>}
            </ul>
        </nav>
    );
}

export default Menu;