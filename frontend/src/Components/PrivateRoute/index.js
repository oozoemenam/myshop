import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ children, isAuthenticated, userLoading, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({location: from}) => {                
                
                if (!userLoading && !isAuthenticated) {
                    return <Redirect to={{ pathname: '/login', state: { from } }} />;
                }                 
                return children;            
            }}
        />
    );
}

const mapStateToProps = state => ({
    isAuthenticated: Boolean(state.account.user),
    userLoading: state.account.userLoading,
});

export default connect(mapStateToProps)(PrivateRoute);