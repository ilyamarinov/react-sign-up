import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    width: 347,
    fontWeight: 'bold',
    color: '#ffffff',
    borderRadius: 3,
    backgroundColor: '#46b688',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: '#399f81'
    },
    '&:active': {
      backgroundColor: '#288077',
      boxShadow: 'none'
    }
  },
  progress: {
    margin: theme.spacing(1),
    color: '#ffffff'
  }
}));

const ButtonComponent = ({ children, onClick, loading }) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      className={classes.button}
      onClick={onClick}
    >
      {
        loading
          ? <CircularProgress className={classes.progress} size={20} />
          : children
      }
    </Button>
  )
}

ButtonComponent.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default ButtonComponent;
