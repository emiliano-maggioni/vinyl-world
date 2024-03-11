import { Button } from "@mui/material";
import classes from "./ButtonBase.module.css";
import { ButtonBaseProps } from "utilities/types";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const ButtonBase = ({ text="Confirm", icon}: ButtonBaseProps) => {
    return ( <Button variant="contained">{text}{icon}</Button>);
}

export default ButtonBase;