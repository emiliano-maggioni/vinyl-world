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
    const handleMenuState = () => setIsMenuOpen(!isMenuOpen);
    const logoutUser = () => { appContext.logout();   };

    return (
        <nav className={classes.container}>
            <input className={classes.menuToggle} id="menuToggle" type="checkbox" checked={isMenuOpen}  onChange={() => {}} />
            <label className={classes.menuBtn} onClick={handleMenuState}><span></span></label>
            <ul className={classes.menuBox} >
                <li onClick={closeMenu}><Link className={classes.menuItem} to="/">Home</Link></li>
                <li onClick={closeMenu}><Link className={classes.menuItem} to="/cart">Cart</Link></li>
                {appContext.userLogged ? (<>
                        <li onClick={closeMenu}><a className={classes.menuItem} onClick={logoutUser}>Logout <LogoutIcon className={classes.logoutBt} /></a></li>
                        <li className={classes.userInfo}><UserInfo email={appContext.userLogged} /></li>
                    </>)
                    : <li onClick={closeMenu}><Link className={classes.menuItem} to="/login">Login</Link></li>}
            </ul>
        </nav>
    );
}

export default Menu;