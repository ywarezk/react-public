import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SendData from './components/SendData/SendData';
import RecieveData from './components/RecieveData/RecieveData';
import HelloContext from './hello.context';

function App() {
  const [message, setMessage] = useState('this is the message of the context');

  return (
    <div className="App">
      <HelloContext.Provider value={{ setMessage: setMessage, message: message }}>
        <SendData />
        <RecieveData />
      </HelloContext.Provider>
    </div>
  );
}

export default App;
