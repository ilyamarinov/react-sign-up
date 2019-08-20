import { API_URL } from '@src/core/constants';

export const requestData = () => {
  return {
    type: 'REQUEST_DATA',
    loading: true
  };
};

export const receivedData = () => {
  return {
    type: 'RECEIVE_DATA',
    loading: false,
  }
}

export const getCountries = (data) => {
  return {
    type: 'GET_COUNTRIES',
    countries: data
  };
};

export const fetchData = (request) => {
  return (dispatch) => {
    dispatch(requestData());
    fetch(`${API_URL}${request}`)
      .then(response => {
        dispatch(receivedData());
        return response.json()
      })
      .then(data => {
        dispatch(getCountries(data));
      });
  };
};
