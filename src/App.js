import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ProfilePage from './components/ProfilePage';

function App() {
	return (
		<div className="App">
			<NavBar navItems={['home', 'browse', 'deals', 'businesses', 'favorites', 'about', 'account']} />
			<Switch>
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/browse" component={LandingPage} />
				<Route exact path="/deals" component={LandingPage} />
				<Route exact path="/businesses" component={LandingPage} />
				<Route exact path="/favorites" component={LandingPage} />
				<Route exact path="/about" render={() => {
					return (
						<div>
							<h1>About</h1>
						</div>
					)
				}} />
				<Route exact path="/account" component={LandingPage} />
				<Route exact path="/signin" component={SignIn} />
        		<Route exact path="/signup" component={SignUp} />
        		<Route exact path="/business" component={ProfilePage} />
			</Switch>
		</div>
	);
}

export default App;