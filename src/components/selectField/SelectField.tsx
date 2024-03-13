import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { SelectProps } from "utilities/types"

const SelectField = ({placeholder = "Select", defaultOption = "Select", name, options, handleOrderChange}:SelectProps) => {
    const style = {
        "& *, & .MuiSelect-outlined, & label": {
          fontFamily: "var(--font2)"
        },
        "& .MuiOutlinedInput-root": {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--black)",
            borderWidth: '1px'
          },
          "&.Mui-focused fieldset": {
            borderColor: "var(--purple2)",
            borderWidth: '1px'
          }
        },
        "& label.Mui-focused": {
          color: "var(--purple2)"
        },
        "& .MuiPopover-paper": {
          backgroundColor: "var(--purple2) !important"
        },
    };

    const [fieldValue, setFieldValue] = useState<string>("");

    const handleChange = (event: SelectChangeEvent<typeof fieldValue>) => {
      const { target: { value } } = event;
      setFieldValue(value);
      if(handleOrderChange)
        handleOrderChange(value);
    };

    return (
      <FormControl
        fullWidth
        sx={style}
      >
        <InputLabel id="demo-simple-select-label">{placeholder}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label={placeholder}
          name={name}
          value={fieldValue}
          onChange={(e:any) => handleChange(e)}
        > <MenuItem selected value="">{defaultOption}</MenuItem>
        {options.map((opt) => <MenuItem key={opt.value} value={opt.value} >{opt.label}</MenuItem> )}
        </Select>
      </FormControl>
    );
}

export default SelectField;