import { API_URL } from '@src/core/constants';

export const requestSignUp = () => {
  return {
    type: 'REQUEST_SIGN_UP',
    loading: true
  };
};

export const responseSignUp = () => {
  return {
    type: 'RESPONSE_SIGN_UP',
    loading: false,
  }
};

export const signUpAction = (response) => {
  return {
    type: 'SIGN_UP',
    status: response.status
  };
};

export const signUpErrorAction = (error) => {
  return {
    type: 'SIGN_UP_ERROR',
    error
  };
};

export const signUp = (request, data) => {
  let url = `${API_URL}${request}`;

  return (dispatch) => {
    dispatch(requestSignUp());
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        dispatch(responseSignUp());
        return response.json()
      })
      .then(data => {
        console.log(data);
        if (data.status === 'success') {
          dispatch(signUpAction(data));
        } else {
          dispatch(signUpErrorAction(data.errors));
        }
      })
      .catch(error => {
        dispatch(signUpErrorAction(error.message));
      })
  };
};
