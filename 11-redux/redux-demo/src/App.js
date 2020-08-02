import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserProfile from './components/UserProfile/UserProfile';	
import ChangeName from './components/ChangeName/ChangeName';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="App">
		<Provider store={store}>
			<UserProfile />
			
			<ChangeName />
		</Provider>		
    </div>
  );
}

export default App;
