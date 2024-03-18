import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import ClearIcon from "@mui/icons-material/Clear";

const SearchField = ({handleChange}:any) => {
    const [searchValue, setSearchValue] = useState<any>("");
    const [showClearIcon, setShowClearIcon] = useState<string>("none");
    const handleClick = () => {
      setSearchValue('');
      setShowClearIcon("none");
    };

    const style = {
        "& *, & label": {
          fontFamily: "var(--font2)"
        },
        "& .MuiOutlinedInput-root": {
          background: 'var(--yellowLight)',
          "&.Mui-focused fieldset": {
            borderColor: "var(--greenLight)",
            borderWidth: '1px'
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--black)",
            borderWidth: '1px'
          }
        },
        "& label.Mui-focused": {
          color: "var(--greenLight)"
        },
    };

    useEffect(()=>{
      let dataInputChanged:number = new Date().getTime();
      const timer = setTimeout(()=>{
        let actualTime:number = new Date().getTime();
        let diffTime = actualTime - dataInputChanged;
        if(diffTime >= 850){
          handleChange(searchValue?.toLowerCase());
        }

      },850);

      return()=> clearTimeout(timer);

    },[searchValue]);

    return (
        <TextField
            id="outlined-controlled"
            label="Search vinyl"
            placeholder='Search by Vinyl name'
            value={searchValue}
            onFocus={(e)=> e.target.select()}
            sx={style}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSearchValue(event.target.value);
              setShowClearIcon(event.target.value === "" ? "none" : "flex");
            }}
            InputProps={{
                startAdornment: (
                    <IconButton sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                  </IconButton>
                ),
                endAdornment: (
                  <InputAdornment
                    position="end"
                    style={{ display: showClearIcon, cursor: 'pointer' }}
                    onClick={handleClick}
                  >
                    <ClearIcon />
                  </InputAdornment>
                )
              }}
        />
    );
}

export default SearchField;