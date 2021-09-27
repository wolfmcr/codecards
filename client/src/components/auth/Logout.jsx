import React from 'react';
import { NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/authActions';

function Logout(props) {
  const handleLogout = () => {
    props.logout();
  };
  return (
    <div>
      <NavLink onClick={handleLogout}>Logout</NavLink>
    </div>
  );
}

const mapStateToProps = (state) => ({});

Logout.prototypes = {};

export default connect(mapStateToProps, { logout })(Logout);
