const initialState = {
  countries: []
};

const getDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_DATA':
      return {
        ...state,
        loading: true
      };
    case 'RECEIVE_DATA':
      return {
        ...state,
        loading: false
      };
    case 'GET_COUNTRIES':
      return {
        ...state,
        countries: action.countries
      };
    default:
      return state;
  }
};

export default getDataReducer;
