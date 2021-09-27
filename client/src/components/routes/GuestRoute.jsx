import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function ProtectedRoute({ path, children, render, isAuthenticated, ...rest }) {
  return (
    <Route
      path={path}
      render={(props) => {
        if (!isAuthenticated) {
          return children;
        } else {
          return <Redirect to="/decks" />;
        }
      }}
    />
  );
}

ProtectedRoute.propTypes = {
  isAuthenticated: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(ProtectedRoute);
