import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function ProtectedRoute(props) {
  return (
    <Route
      path={props.path}
      render={() => {
        if (props.auth.isAuthenticated) {
          return props.children;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(ProtectedRoute);
