import React from 'react';
import './App.css';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App h-100">
      <div className="container h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-5">
            <Login />  
          </div>
        </div>
      </div>  

      
    </div>
  );
}

export default App;
