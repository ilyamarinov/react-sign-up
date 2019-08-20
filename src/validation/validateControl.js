export const validateControl = (value, validation, compareValue) => {
  if (!validation) {
    return true;
  }

  let isValid = {
    value: true,
    type: null,
  };

  if (validation.required) {
    isValid.value = value.trim() !== '';

    if (!isValid.value) {
      isValid.type = 'REQUIRED';
      return isValid;
    }
  }

  if (validation.email) {
    isValid.value = validateEmail(value);

    if (!isValid.value) {
      isValid.type = 'EMAIL';
      return isValid;
    }
  }

  if (validation.minLength) {
    isValid.value = value.length >= validation.minLength;

    if (!isValid.value) {
      isValid.type = 'MIN_LENGTH';
      return isValid;
    }
  }

  if (validation.maxLength) {
    isValid.value = value.length <= validation.maxLength;

    if (!isValid.value) {
      isValid.type = 'MAX_LENGTH';
      return isValid;
    }
  }

  if (validation.validValues) {
    isValid.value = ['UK', 'US'].includes(value);

    if (!isValid.value) {
      isValid.type = 'VALID_VALUES';
      return isValid;
    }
  }

  if (validation.equalPasswords) {
    if (compareValue) {
      isValid.value = compareValue === value;
    }

    if (!isValid.value) {
      isValid.type = 'EQUAL_PASSWORDS';
      return isValid;
    }
  }
  return isValid
}

const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
