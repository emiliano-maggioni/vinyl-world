
import classes from "./Header.module.css";
import Menu from "components/menu/Menu";

const Header = () => {
    return (
        <header className={classes.container}>
           <div className={classes.content}>
                <figure className={classes.logoContainer}>
                     <img src="/images/logo.png" alt="Logo - Vinyl World" />
                </figure>
                <h1 className={classes.title}>Vinyl World</h1>
           </div>
          <Menu />
        </header>
    );
}

export default Header;