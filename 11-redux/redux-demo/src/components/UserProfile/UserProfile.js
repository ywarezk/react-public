/**
 * this component will display the logged in user data
 */
 
import React from 'react';
import { useSelector } from 'react-redux';

export default function UserProfile() {
	const user = useSelector(function(state) {
		return state.user
	})
	
	return (
		<h1>{user.firstName}, {user.lastName}</h1>
	)
}