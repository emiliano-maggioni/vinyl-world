import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import classes from "./Toaster.module.css";
import { ToasterProps } from 'utilities/types';

const Toaster = ({handleClose, openToaster,message, severity, duration = 4500}:ToasterProps) => {

  return (
    <Snackbar className={classes.container} open={openToaster} autoHideDuration={duration} onClose={handleClose} anchorOrigin={{  vertical: 'top', horizontal: 'center' }} >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{ width: '100%', backgroundColor: 'var(--black)' }}
        >
          {message}
        </Alert>
    </Snackbar>
  );
}

export default Toaster;
