/**
 * Store holds our state == data
 * 1 store for the entire application
 */
 
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import motherReducer from './reducers';

const store = createStore(motherReducer, devToolsEnhancer());

export default store;