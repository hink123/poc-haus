import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ExampleComponent from './components/ExampleComponent';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
	return (
		<div className="App">
			<NavBar navItems={['home', 'about', 'signin', 'signup']} />
			<Switch>
				<Route exact path="/" component={ExampleComponent} />
				<Route exact path="/about" render={() => {
					return (
						<div>
							<h1>About</h1>
						</div>
					)
				}} />
				<Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
			</Switch>
		</div>
	);
}

export default App;