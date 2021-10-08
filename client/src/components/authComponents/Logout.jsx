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
      <NavLink onClick={handleLogout} className="actionLink">
        Logout
      </NavLink>
    </div>
  );
}

const mapStateToProps = (state) => ({});

Logout.prototypes = {
  logout: PropTypes.func
};

export default connect(mapStateToProps, { logout })(Logout);
