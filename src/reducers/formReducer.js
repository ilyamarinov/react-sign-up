import { formModel } from '@src/core/formModel';

const initialState = formModel;

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FORM_RESET':
      return {
        ...state,
        ...initialState
      }
    case 'CHECKBOX_STATE':
      return {
        ...state,
        checkbox: !action.checkbox
      };
    case 'NAME_INPUT_STATE':
      return {
        ...state,
        nameInput: {
          ...action.component
        }
      }
    case 'EMAIL_INPUT_STATE':
      return {
        ...state,
        emailInput: {
          ...action.component
        }
      }
    case 'PASS_INPUT_STATE':
      return {
        ...state,
        passInput: {
          ...action.component
        }
      }
    case 'PASS_CONF_INPUT_STATE':
      return {
        ...state,
        passConfInput: {
          ...action.component
        }
      }
    case 'COUNTRY_SELECT_STATE':
      return {
        ...state,
        countrySelect: {
          ...action.component
        }
      }
    case 'CODE_SELECT_STATE':
      return {
        ...state,
        codeSelect: action.codeSelect
      }
    case 'PHONE_INPUT_STATE':
      return {
        ...state,
        phoneInput: action.phoneInput
      }
    default:
      return state;
  }
};

export default formReducer;
