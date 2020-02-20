import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ExampleComponent from './components/ExampleComponent';
import Login from './components/Login';

function App() {
	return (
		<div className="App">
			<NavBar navItems={['home', 'about', 'signin']} />
			<Switch>
				<Route exact path="/" component={ExampleComponent} />
				<Route exact path="/about" render={() => {
					return (
						<div>
							<h1>About</h1>
						</div>
					)
				}} />
				<Route exact path="/sign" component={Login} />
			</Switch>
		</div>
	);
}

export default App;