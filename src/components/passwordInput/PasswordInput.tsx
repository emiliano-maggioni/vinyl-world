import TextField from '@mui/material/TextField';
import { PasswordInputProps } from 'utilities/types';

const PasswordInput = ({errorMessage = "Insert a correct password", id, label, required = true, size = "medium", register, errors}: PasswordInputProps) => {

      const style = {
        "& *, & label": {
          fontFamily: "var(--font2)"
        },
        "&.MuiTextField-root": {
            background: 'var(--yellowLight)',
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--black)",
            borderWidth: '1px'
          },
          "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--greenLight)",
            borderWidth: '1px'
          }
        },
        "& label.Mui-focused": {
          color: "var(--greenLight)"
        },
    };

    return (
      <TextField
        id={id}
        hiddenLabel={!label}
        label={label}
        size={size}
        sx={style}
        {...register(id, { required: required})}
        helperText={!!errors[id] ? errorMessage : null}
        error={!!errors[id]}
        type="password"
      />
    );
}

export default PasswordInput;