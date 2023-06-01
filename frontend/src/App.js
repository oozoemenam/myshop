import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// import history from './history';
import jwtDecode from 'jwt-decode';
import { connect } from 'react-redux';
import PageNotFound from './Components/PageNotFound';
import PrivateRoute from './Components/PrivateRoute';
import LoginView from './account/LoginView';
import RegisterView from './account/RegisterView';
import { getUser, logout } from './account/actions';
import Shop from './shop';

const App = ({ user, getUser, account, logout }) => {
	React.useEffect(() => {
		const checkToken = async () => {
			const token = localStorage.token;
			console.log('token', token);
			if (!token) return logout();

			console.log('account', account);
			const decoded = jwtDecode(token);
			const now = Date.now() / 1000;
			if (decoded.exp < now) return logout();
			if (!user) getUser(decoded.sub);
		};

		checkToken();
	}, []);

	return (
		user !== undefined && (
			// <Router history={history}>
			<Router>
				<Switch>
					<PrivateRoute
						exact
						path={['/products', '/']}
					>
						<Shop />
					</PrivateRoute>
					<Route
						exact
						path='/register'
					>
						<RegisterView />
					</Route>
					<Route
						exact
						path='/login'
					>
						<LoginView />
					</Route>
					<Route path='*'>
						<PageNotFound />
					</Route>
				</Switch>
			</Router>
		)
	);
};

const mapStateToProps = (state) => ({
	account: state.account,
	user: state.account.user,
});

export default connect(mapStateToProps, { logout, getUser })(App);
