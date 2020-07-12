import React from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld/HelloWorld';
import HelloWorldClass from './components/HelloWorld/HelloWorldClass';


function App() {
  return (
    <div className="App">
      <h1>
        React Components
      </h1>

      <HelloWorld name={'Yariv'} age={35} />

      <HelloWorldClass name={'Yariv'} age={35} />
    </div>
  );
}

export default App;
