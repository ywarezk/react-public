/**
 * component with a button
 * when we press a button we change the first name
 */
 
import React from 'react';
import { useDispatch } from 'react-redux';
import { setFirstName } from '../../redux/actions/user.actions';

// store.dispatch(action)
export default function ChangeName() {
	const dispatch = useDispatch();
	
	const setName = () => {
		dispatch(setFirstName('Aviv ' + Math.random()));
	}
	
	return (
		<button onClick={setName}>
			Change the name
		</button>
	)
}