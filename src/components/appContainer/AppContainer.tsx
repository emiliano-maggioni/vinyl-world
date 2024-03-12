import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import classes from "./AppContainer.module.css";
import HomePage from "pages/homepage/HomePage";
import Detailspage from "pages/detailspage/DetailsPage";

const AppContainer = () => {
    return (
        <>
            <Header />
            <main className={classes.container} >
                {/* <HomePage /> */}
                <Detailspage />
            </main>
            <Footer />
        </>
    );

}

export default AppContainer;