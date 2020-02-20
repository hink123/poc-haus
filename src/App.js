import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
// Remove Below
import ProfilePage from './components/ProfilePage';

function App() {
	return (
		<div className="App">
			<NavBar navItems={['home', 'about', 'signin']} />
			<Switch>
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/about" render={() => {
					return (
						<div>
							<h1>About</h1>
						</div>
					)
				}} />
				<Route exact path="/signin" component={SignIn} />
        		<Route exact path="/signup" component={SignUp} />
				{/* Remove */}
        		<Route exact path="/business" component={ProfilePage} />
			</Switch>
		</div>
	);
}

export default App;