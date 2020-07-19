import React, {useState} from 'react';
import './App.css';
import Login from './components/Login/Login';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="App">
      <Login cb={setToken} />

      <TodoList token={token} />
    </div>
  );
}

export default App;
