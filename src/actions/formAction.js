export const formResetAction = () => {
  return {
    type: 'FORM_RESET'
  }
}

export const checkBoxAction = (value) => {
  return {
    type: 'CHECKBOX_STATE',
    checkbox: value
  }
}

export const nameInputAction = (component) => {
  return {
    type: 'NAME_INPUT_STATE',
    component
  }
}

export const emailInputAction = (component) => {
  return {
    type: 'EMAIL_INPUT_STATE',
    component
  }
}

export const passInputAction = (component) => {
  return {
    type: 'PASS_INPUT_STATE',
    component
  }
}

export const passConfInputAction = (component) => {
  return {
    type: 'PASS_CONF_INPUT_STATE',
    component
  }
}

export const countrySelectAction = (component) => {
  return {
    type: 'COUNTRY_SELECT_STATE',
    component
  }
}

export const codeSelectAction = (component) => {
  return {
    type: 'CODE_SELECT_STATE',
    component
  }
}

export const phoneInputAction = (component) => {
  return {
    type: 'PHONE_INPUT_STATE',
    component
  }
}
