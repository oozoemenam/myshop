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


const App = ({ user, getUser, register, logout }) => {

  React.useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.token;
      if (!token) return logout();
      
      const decoded = jwtDecode(token);
      
      const now = Date.now() / 1000;
      if (decoded.exp < now) return logout();
             
      if (!user) getUser(token);
    }

    checkToken();
  }, []);

  return (
    user !== undefined &&
    // <Router history={history}>
    <Router>
      <Switch>
        <Route path='/products'>
          <Shop />
        </Route>
        <Route path='/'>
          <LoginView />
        </Route>
        {/* <Route path='*'>
          <PageNotFound />
        </Route> */}
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => ({
  user: state.account.user
})

export default connect(
  mapStateToProps,
  { logout, register, getUser }
)(App);