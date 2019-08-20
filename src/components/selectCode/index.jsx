import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    width: 100,
    marginBottom: 30,
    textAlign: 'left',
  },
  focused: {
    '&$focused': {
      color: '#9b9b9b'
    }
  },
  underline: {
    '&:after': {
      borderBottom: '1px solid #454545'
    }
  },
  menuItem: {
    '&:hover':{
      backgroundColor: '#f9fafc'
    }
  }
}));

const SelectCodeComponent = (props) => {
  const {
    id,
    type,
    name,
    codeValue,
    phoneValue,
    onCodeChange,
    onPhoneChange,
    codes
  } = props;

  const classes = useStyles();

  const handleCodeChange = (event) => {
    onCodeChange(event.target.value);
  }

  const handlePhoneChange = (event) => {
    onPhoneChange(event.target.value);
  }

  return (
    <React.Fragment>
    <FormControl
      classes={{
        root: classes.root
      }}
    >
      <InputLabel
        htmlFor={id}
        classes={{
          focused: classes.focused
        }}
      >
        {name}
      </InputLabel>
      <Select
        value={codeValue}
        onChange={handleCodeChange}
        inputProps={{
          name: name,
          id: id,
        }}
        className={
          classes.underline
        }
      >
        <MenuItem
          key="0"
          value=""
        />
        {codes.map((item) => {
          return (
            <MenuItem
              key={item.id}
              value={item.dial_code}
              className={
                classes.menuItem
              }
            >
              {`+${item.dial_code} ${item.name}`}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
    <Input
      id={name}
      type={type}
      value={phoneValue}
      onChange={handlePhoneChange}
    />
    </React.Fragment>
  )
}

export default SelectCodeComponent;
