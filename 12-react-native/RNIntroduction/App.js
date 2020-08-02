/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, Text } from 'react-native';
import HelloWorld from './components/HelloWorld/HelloWorld';
import { NativeRouter, Switch, Route, Link } from 'react-router-native';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return (
    <View style={ {
		justifyContent: 'center',
		height: '100%', 
		width: '100%', 
		backgroundColor: 'red'} }>
		<NativeRouter>
			<Link to="/"><Text>Home</Text></Link>
			  <Link to="/about"><Text>About</Text></Link>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/about">
					  <About />
				</Route>
			</Switch>
		</NativeRouter>
    </View>
  );
};


export default App;
