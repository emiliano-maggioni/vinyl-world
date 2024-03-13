import { Button } from "@mui/material";
import classes from "./ButtonBase.module.css";
import { ButtonBaseProps } from "utilities/types";

const ButtonBase = ({ text="Confirm", icon, handleClick}: ButtonBaseProps) => {
    const style = {
        "&": {
            backgroundColor: "var(--green)",
            padding: "0.4rem 1.4rem",
            fontFamily: "var(--font1)",
            fontSize: "1.25rem",
            letterSpacing: "0.1rem",
            "&.MuiButton-root:hover": {
                backgroundColor: "var(--greenLight)",
            },
        },
    };
    return ( <Button sx={style} className={classes.button}  variant="contained" onClick={() => handleClick()}>{text}{icon}</Button>);
}

export default ButtonBase;