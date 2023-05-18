import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import history from './history';
import LoginView from './account/LoginView';
import PrivateRoute from './Components/PrivateRoute';
import jwtDecode from 'jwt-decode';
import { connect } from 'react-redux';
import { getUser, register, logout, updateGeolocation } from './account/actions';
import PageNotFound from './Components/PageNotFound';
import Shop from './shop';


const App = ({ user, getUser, account, logout }) => {

  React.useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.token;
      if (!token) return logout();
      
      const decoded = jwtDecode(token);
      console.log('decoded', decoded);
      console.log('account', account);
      const now = Date.now() / 1000;
      if (decoded.exp < now) return logout();
      if (!user) getUser(decoded.sub);
    }

    checkToken();
  }, []);

  return (
    user !== undefined &&
    // <Router history={history}>
    <Router>
      <Switch>
        {/* <PrivateRoute exact path={['/products', '/']}> */}
        {/* <PrivateRoute exact path=''>
          <Shop />
        </PrivateRoute> */}
        <PrivateRoute exact path={['/products', '/']}>
          <Shop />
        </PrivateRoute>
        {/* <PrivateRoute exact path='/products'>
          <Shop />
        </PrivateRoute> */}
        <Route exact path='/login'>
          <LoginView />
        </Route>
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => ({
  account: state.account,
  user: state.account.user
})

export default connect(
  mapStateToProps,
  { logout, register, getUser }
)(App);