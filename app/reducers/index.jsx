import { combineReducers } from 'redux';
import students from './students';
import campus from './campus';

const rootReducer = combineReducers({ students, campus });

export default rootReducer;
