import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import classes from "./AppContainer.module.css";
import Routing from "routes/Routing";

const AppContainer = () => {
    return (
        <>
            <Header />
            <main className={classes.container} >
                <Routing />
            </main>
            <Footer />
        </>
    );

}

export default AppContainer;