import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import { validateControl } from '@src/validation/validateControl';
import { getErrorMessage } from '@src/validation/errorsList';

const useStyles = makeStyles(theme => ({
  root: {
    width: 347,
    marginBottom: 30
  },
  focused: {
    '&$focused': {
      color: '#9b9b9b'
    },
  },
  underline: {
    '&:after': {
      borderBottom: '1px solid #454545'
    }
  }
}));

const InputComponent = ({ modelControl, onChange, compareValue = null, checkTouched = null}) => {
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
      isControlValid = validateControl(
        control.value,
        control.validation,
        compareValue
      );

      if (checkTouched !== null && !checkTouched) {
        isControlValid.value = checkTouched;
      }

      if (!isControlValid.value) {
        control.errorMessage = getErrorMessage(isControlValid.type);
      }
      console.log(isControlValid);
      control.valid = isControlValid.value;
    }

    onChange(control);
  }

  return (
    <FormControl
      classes={{
        root: classes.root,
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
      <Input
        id={modelControl.label}
        type={modelControl.type}
        value={modelControl.value}
        onChange={handleChange}
        onBlur={handleBlur}
        classes={{
          underline: classes.underline
        }}
      />
      <FormHelperText id={modelControl.label}>
        {modelControl.errorMessage}
      </FormHelperText>
    </FormControl>
  )
}

InputComponent.propTypes = {
  compareValue: PropTypes.any,
  checkTouched: PropTypes.any,
  modelControl: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

InputComponent.defaultProps = {
  compareValue: null,
  checkTouched: null,
};

export default InputComponent;
