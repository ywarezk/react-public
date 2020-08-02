import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link, HashRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Error404 from './pages/Error404/Error404';

function App() {
  return (
    <div className="App">
		{/* <HashRouter>		 */}
		<BrowserRouter>
		
			<nav>
				<ul>
					<li>
						{/* <a href="/" >home</a> */}
						<Link to="/">Home</Link>
					</li>
					<li>
						{/* <a href="/about" >about</a> */}
						<Link to="/about/hello/world?hello=world">About</Link>
					</li>
				</ul>
			</nav>
	  	
		  	<Switch>
				<Route exact path="/">
					<Home />
				</Route>				
				<Route path="/about/:message/:slug">
					<About />
				</Route>
				{/* /about/foo/bar */}
				<Route path="/about/:message">
					  <About />
				</Route>
				<Route>
					<Error404 />
				</Route>
			</Switch>
			
		{/* </HashRouter>   */}
		</BrowserRouter>
    </div>
  );
}

export default App;
