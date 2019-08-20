import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  root: {
    width: 347,
    margin: 0,
    textAlign: 'left',
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    color: '#9398a2',
    fontFamily: 'Open Sans',
    letterSpacing: 'normal',
    lineHeight: 'normal',
    transform: 'translate(5px, 10px)'
  }
}));

const GreenCheckbox = withStyles({
  root: {
    color: '#46b688',
    padding: 0,
    '&$checked': {
      color: '#46b688',
    },
  },
})(props => <Checkbox color="default" {...props} />);

const CheckBoxComponent = ({ onChange, checked }) => {
  const classes = useStyles();
  const labelValue = 'Yes, I\'d like to recieve the very occasional email with information on new services and discounts';

  const handleChange = () => {
    onChange(props.checked);
  }

  return (
    <FormControlLabel
      control={
        <GreenCheckbox
          checked={checked}
          onChange={handleChange}
        />
      }
      label={labelValue}
      labelPlacement="end"
      classes={{
        root: classes.root,
        label: classes.label
      }}
    />
  )
}

CheckBoxComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool
};

CheckBoxComponent.defaultProps = {
  checked: false
};

export default CheckBoxComponent;
