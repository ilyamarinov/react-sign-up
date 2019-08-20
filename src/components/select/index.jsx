import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

import { validateControl } from '@src/validation/validateControl';
import { getErrorMessage } from '@src/validation/errorsList';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    width: 347,
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

const SelectComponent = ({ modelControl, onChange, countries }) => {
  const classes = useStyles();

  const handleChange = (event) => {
    const control = { ...modelControl };

    control.value = event.target.value;
    control.touched = true;
    control.errorMessage = null;

    onChange(control);
  }

  const handleBlur = () => {
    let isControlValid;
    const control = { ...modelControl };

    if (!control.value) {
      control.touched = false;
      control.valid = false;
    }

    if (control.touched) {
      isControlValid = validateControl(control.value, control.validation);

      if (!isControlValid.value) {
        control.errorMessage = getErrorMessage(isControlValid.type);
      }

      control.valid = isControlValid.value;
    }

    onChange(control);
  }

  return (
    <FormControl
      classes={{
        root: classes.root
      }}
      error={modelControl.touched && !modelControl.valid && modelControl.errorMessage !== null}
    >
      <InputLabel
        htmlFor={modelControl.label}
        classes={{
          focused: classes.focused
        }}
      >
        {modelControl.label}
      </InputLabel>
      <Select
        value={modelControl.value}
        onChange={handleChange}
        onBlur={handleBlur}
        inputProps={{
          name: modelControl.label,
          id: modelControl.label,
        }}
        className={
          classes.underline
        }
      >
        <MenuItem
          key="0"
          value=""
        />
        {countries.map((item) => {
          return (
            <MenuItem
              key={item.id}
              value={item.country_code}
              className={
                classes.menuItem
              }
            >
              {item.name}
            </MenuItem>
          )
        })}
      </Select>
      <FormHelperText id={modelControl.label}>
        {modelControl.errorMessage}
      </FormHelperText>
    </FormControl>
  )
}

SelectComponent.propTypes = {
  modelControl: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  countries: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SelectComponent;
