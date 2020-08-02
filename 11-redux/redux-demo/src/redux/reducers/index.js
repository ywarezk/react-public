/**
 * We will tell redux how to divide the state:
 * which sections, which reducer is in charge of which section
 */
 
import { combineReducers } from 'redux';
import userReducer from './user.reducer';

const motherOFAllTheReducers = combineReducers({
	user: userReducer
});

export default motherOFAllTheReducers;