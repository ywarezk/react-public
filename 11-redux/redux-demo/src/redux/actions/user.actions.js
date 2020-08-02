/**
 * these actions describe change in the user section of our state
 */
 
export const SET_FIRST_NAME = '[user] Set FirstName'

// action creator
export function setFirstName(firstName) {
	return { type: SET_FIRST_NAME, payload: firstName }
}

export function setAllBook(books) {
	return { type: '[books] Set Books', payload: books }
}
 
