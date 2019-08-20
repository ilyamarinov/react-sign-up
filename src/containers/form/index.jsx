import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchData } from '@src/actions/dataAction';
import { signUp } from '@src/actions/authAction';
import { REQUEST_TYPE } from '@src/core/constants';
import {
  nameInputAction,
  emailInputAction,
  passInputAction,
  passConfInputAction,
  checkBoxAction,
  countrySelectAction,
  codeSelectAction,
  phoneInputAction,
  formResetAction
} from '@src/actions/formAction';

import InputComponent from '@src/components/input';
import SelectComponent from '@src/components/select';
import SelectCodeComponent from '@src/components/selectCode';
import CheckBoxComponent from '@src/components/checkbox';
import ButtonComponent from '@src/components/button';

import './index.scss';

const Form = (props) => {
  const {
    formReducer,
    dataReducer,
    authReducer
  } = props.state;

  useEffect(() => {
    props.handleFetchData();
  }, []);

  const signUpHandler = () => {
    const data = {
      name: formReducer.nameInput.value,
      email: formReducer.emailInput.value,
      country: formReducer.countrySelect.value,
      password: formReducer.passInput.value,
      passwordConfirmation: formReducer.passConfInput.value
    }

    props.onButtonClick(data);
  }

  return (
    <form className="app__form">
      <h1 className="app__form-title_h1">Sign up</h1>

      <InputComponent
        modelControl={formReducer.nameInput}
        onChange={props.onNameChange}
      />

      <InputComponent
        modelControl={formReducer.emailInput}
        onChange={props.onEmailChange}
      />

      <SelectComponent
        modelControl={formReducer.countrySelect}
        onChange={props.onCountryChange}
        countries={dataReducer.countries}
      />

      <InputComponent
        modelControl={formReducer.passInput}
        onChange={props.onPassChange}
        compareValue={formReducer.passConfInput.value}
        checkTouched={formReducer.passConfInput.touched}
      />

      <InputComponent
        modelControl={formReducer.passConfInput}
        onChange={props.onPassConfChange}
        compareValue={formReducer.passInput.value}
      />

      <CheckBoxComponent
        checked={formReducer.checkbox}
        onChange={props.onCheckBoxChange}
      />

      <ButtonComponent
        onClick={signUpHandler}
        loading={dataReducer.loading}
      >
        Create An Account
      </ButtonComponent>

      <h2 className="app__form-description_h2">
        Already have a 24Slides account?&nbsp;
        <span
          className="app__form-description_link"
        >
          Click here
        </span>
        &nbsp;to log in to your existing account and join a company team
      </h2>
    </form>
  )
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFetchData: () => {
      dispatch(fetchData(REQUEST_TYPE.DATA.COUNTRIES));
    },
    onNameChange: (component) => {
      dispatch(nameInputAction(component));
    },
    onEmailChange: (component) => {
      dispatch(emailInputAction(component));
    },
    onPassChange: (component) => {
      dispatch(passInputAction(component));
    },
    onPassConfChange: (component) => {
      dispatch(passConfInputAction(component));
    },
    onCheckBoxChange: (component) => {
      dispatch(checkBoxAction(component));
    },
    onCountryChange: (component) => {
      dispatch(countrySelectAction(component));
    },
    onButtonClick: (data) => {
      dispatch(signUp(REQUEST_TYPE.AUTH.REGISTER, data));
      dispatch(formResetAction());
    }
  }
}

Form.propTypes = {
  handleFetchData: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onPassChange: PropTypes.func.isRequired,
  onPassConfChange: PropTypes.func.isRequired,
  onCheckBoxChange: PropTypes.func.isRequired,
  onCountryChange: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
