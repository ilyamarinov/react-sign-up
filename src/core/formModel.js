export const formModel = {
  checkbox: false,
  nameInput: {
    value: '',
    type: 'text',
    label: 'Name',
    errorMessage: null,
    valid: false,
    touched: false,
    validation: {
      required: true,
      minLength: 3,
      maxLength: 30
    }
  },
  emailInput: {
    value: '',
    type: 'email',
    label: 'Email address',
    errorMessage: null,
    valid: false,
    touched: false,
    validation: {
      required: true,
      email: true
    }
  },
  passInput: {
    value: '',
    type: 'password',
    label: 'Password',
    errorMessage: null,
    valid: false,
    touched: false,
    validation: {
      required: true,
      equalPasswords: true,
      minLength: 5,
      maxLength: 128
    }
  },
  passConfInput: {
    value: '',
    type: 'password',
    label: 'Password confirmation',
    errorMessage: null,
    valid: false,
    touched: false,
    validation: {
      required: true,
      equalPasswords: true,
      minLength: 5,
      maxLength: 128
    }
  },
  countrySelect: {
    value: '',
    type: 'country',
    label: 'Select country',
    errorMessage: null,
    valid: false,
    touched: false,
    validation: {
      required: true,
      validValues: ['UK', 'US']
    }
  },
  codeSelect: '',
  phoneInput: ''
};
