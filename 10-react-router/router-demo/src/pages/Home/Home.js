/**
 * create a home page
 * for the url: / => Home
 */
 
import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Home() {
	const history = useHistory()
	
	/**
	 * transfer the user to the about page
	 */
	const navigateToAbout = () => {
		history.push('/about/foo/bar');
	}
	
	return (
		<>
			<h1>
				Hello im in the homepage
			</h1>
			<button onClick={navigateToAbout}>
				Click to go to about page
			</button>
		</>
	)
}