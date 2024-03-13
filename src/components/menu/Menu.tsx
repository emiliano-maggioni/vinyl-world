import classes from "./Menu.module.css";

const Menu = () => {
    return (
        <menu className={classes.container}>
            <input className={classes.menuToggle} id="menuToggle" type="checkbox" />
            <label className={classes.menuBtn} htmlFor="menuToggle"><span></span></label>
            <ul className={classes.menuBox} >
                <li><a className={classes.menuItem} href="#">Home</a></li>
                <li><a className={classes.menuItem} href="#">Register</a></li>
                <li><a className={classes.menuItem} href="#">Cart</a></li>
                <li><a className={classes.menuItem} href="#">Login</a></li>
            </ul>
        </menu>
    );
}

export default Menu;