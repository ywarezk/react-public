/**
 * Context with a string message of hello world
 */

import {createContext} from 'react';

const HelloContext = createContext('this is the default message');

export default HelloContext;