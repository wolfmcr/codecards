import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import studyReducer from './studyReducer';

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  study: studyReducer
});
