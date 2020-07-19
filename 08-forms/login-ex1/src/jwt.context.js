import {createContext} from 'react';

const jwtContext = createContext({
    token: '',
    setToken: (newToken) => null
});

export default jwtContext;