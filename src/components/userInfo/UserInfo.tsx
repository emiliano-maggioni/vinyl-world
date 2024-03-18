import classes from "./UserInfo.module.css";
import { UserInfoProps } from "utilities/types";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const UserInfo = ({email}: UserInfoProps) => {
    return (
        <div className={classes.container}>
            <div className={classes.info}>
                <strong>Hello</strong>
                <span className={classes.user}>{email}</span>
            </div>
            <AccountCircleIcon />
        </div>
    );
}

export default UserInfo;