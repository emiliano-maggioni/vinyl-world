import TextField from '@mui/material/TextField';
import { TextInputProps } from 'utilities/types';

const TextInput = ({errorMessage = "Insert a correct value", id, label, required = true, size = "medium", register, errors, isEmail = false}: TextInputProps) => {

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

    const validationExp = isEmail ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i : /./;
    return (
      <TextField
        id={id}
        hiddenLabel={!label}
        label={label}
        size={size}
        sx={style}
        {...register(id, { required: required, pattern: validationExp})}
        helperText={!!errors[id] ? errorMessage : null}
        error={!!errors[id]}
      />
    );
}

export default TextInput;