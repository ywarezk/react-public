/**
 * will get the current state, and a user related action
 * The reducer needs to decide the next state 
 */
 
import { SET_FIRST_NAME } from '../actions/user.actions';
 
const initialUserState = {
	firstName: 'Piglet',
	lastName: 'Katz'
} 

/**
 * 
 * @param { user: {firstName, lastName} } state - current state user section
 * @param {*} action - user action
 * @returns {nextState}
 */
export default function userReducer(userState = initialUserState, action) {
	switch(action.type) {
		case SET_FIRST_NAME:
			return {
				...userState,
				firstName: action.payload
			}
		default:
			return userState;
	}
}