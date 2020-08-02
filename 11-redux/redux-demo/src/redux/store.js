/**
 * Store holds our state == data
 * 1 store for the entire application
 */
 
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';

const store = createStore((state) => state, {
	user: {
		firstName: 'Yariv',
		lastName: 'Katz'
	}
}, devToolsEnhancer());

export default store;