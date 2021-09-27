import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import { useState } from 'react';
import logo from '../img/whitelogo.svg';
import fullLogo from '../img/white.svg';
import CardModal from '../components/cardFormComponents/CardModal';
import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';
import { connect } from 'react-redux';

function AppNavbar(props) {
  //navbar toggle state
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  const authLinks = (
    <>
      <NavItem>
        {props.auth.user && <NavLink>Hi {props.auth.user.name} </NavLink>}
      </NavItem>
      <NavItem>
        <CardModal></CardModal>
      </NavItem>
      <NavItem>
        <Logout></Logout>
      </NavItem>
    </>
  );

  const guestLinks = (
    <>
      <NavItem>
        <RegisterModal></RegisterModal>
      </NavItem>
      <NavItem>
        <LoginModal></LoginModal>
      </NavItem>
    </>
  );

  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5 ">
        <Container className="d-flex ">
          <NavbarBrand>
            <img
              src={fullLogo}
              alt=""
              style={{ width: '40vw', maxWidth: '300px' }}
            />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className="">
            <Nav className="w-100 d-flex justify-content-end" navbar>
              {props.auth.isAuthenticated ? authLinks : guestLinks}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(AppNavbar);
