/**
 * create a home page
 * for the url: /about => About
 */
 
import React from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';

export default function About() {
	const location = useLocation();
	const match = useRouteMatch();
	
	// params => {message: '...', slug: '...'}
	return (
		<h1>
			Hello im in the about page {location.search} {match.params.message} {match.params.slug}
		</h1>
	)
}