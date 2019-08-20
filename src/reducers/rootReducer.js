import { combineReducers } from 'redux';

import authReducer from './authReducer';
import dataReducer from './dataReducer';
import formReducer from './formReducer';

export default combineReducers({
  authReducer,
  dataReducer,
  formReducer
});
