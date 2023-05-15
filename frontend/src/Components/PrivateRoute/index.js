import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ children, isAuthenticated, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({location: from}) => {                
                
                if (!isAuthenticated) {
                    return <Redirect to={{ pathname: '/', state: { from } }} />;
                }                 
                return children;            
            }}
        />
    );
}

const mapStateToProps = state => ({
    isAuthenticated: Boolean(state.account.user)
});

export default connect(mapStateToProps)(PrivateRoute);