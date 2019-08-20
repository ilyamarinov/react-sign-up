const initialState = {
  status: null,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_UP':
      return {
        ...state,
        status: action.status
      }
    case 'SIGN_UP_ERROR':
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
};

export default authReducer;
