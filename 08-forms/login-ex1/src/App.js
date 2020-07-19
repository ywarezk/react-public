import React, {useState} from 'react';
import './App.css';
import Login from './components/Login/Login';
import TodoList from './components/TodoList/TodoList';
import JwtContext from './jwt.context';

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="App">
      <JwtContext.Provider value={ {token, setToken} }>
        <Login />

        <TodoList />
      </JwtContext.Provider>
    </div>
  );
}

export default App;
