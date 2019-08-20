const ERRORS_LIST = {
  REQUIRED: 'Field is required',
  EMAIL: 'Wrong email format',
  MIN_LENGTH: 'Value should be longer',
  MAX_LENGTH: 'Value should be shorter',
  VALID_VALUES: 'Chosen invalid value',
  EQUAL_PASSWORDS: 'Passwords don\'t match'
}

export const getErrorMessage = (type) => {
  if (type === null) {
    return null;
  }
  return ERRORS_LIST[type];
}
