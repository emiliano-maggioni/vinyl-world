import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import classes from "./AppContainer.module.css";
import Routing from "routes/Routing";
import Toaster from "components/toaster/Toaster";
import { AppContext } from "context/AppContext";
import { useContext } from "react";

const AppContainer = () => {
    const appContext = useContext(AppContext);
    const handleToastClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        // if (reason === 'clickaway') { return; }
        let toastInfo = {...appContext.toasterInfo};
        toastInfo.openToaster = false;
        appContext.changeToasterState(toastInfo);
      };

    return (
        <>
            <Header />
            <main className={classes.container} >
                <Routing />
            </main>
            <Footer />
            <Toaster
                openToaster={appContext.toasterInfo.openToaster}
                handleClose={handleToastClose}
                message={appContext.toasterInfo.message}
                severity={appContext.toasterInfo.severity}
                duration={appContext.toasterInfo?.duration || 4500}
            />
        </>
    );

}

export default AppContainer;