import React, { useEffect, useState } from 'react';
import {
  Alert,
  NavLink,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Input,
  Card,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

function LoginModal(props) {
  const [isOpen, setOpen] = useState(false);
  const [error, setError] = useState(null);
  const toggle = () => {
    setOpen(!isOpen);
    //Clear the errors
    if (error) {
      props.clearErrors();
      setError(null);
    }
  };

  useEffect(() => {
    if (props.error.id === 'LOGIN_FAIL') {
      setError(props.error.msg.msg);
    }
    if (isOpen) {
      if (props.isAuthenticated) {
        toggle();
      }
    }
  }, [props.error.msg, props.isAuthenticated]);

  const handleSubmit = async (values) => {
    props.login(values);
  };

  return (
    <div>
      <NavLink onClick={toggle}>Login</NavLink>
      <Modal toggle={toggle} isOpen={isOpen}>
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
          {error && <Alert color="danger">{error}</Alert>}
          <Form
            onSubmit={handleSubmit}
            render={({ handleSubmit, values }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="email"
                  placeholder="Email"
                  render={(props) => (
                    <Input
                      {...props.input}
                      {...props}
                      type="email"
                      autoComplete="false"
                      className="mb-3"
                    />
                  )}
                />
                <Field
                  name="password"
                  placeholder="Password"
                  render={(props) => (
                    <Input
                      {...props.input}
                      {...props}
                      type="password"
                      autoComplete="false"
                      className="mb-3"
                    />
                  )}
                />
                <Button type="submit" color="success">
                  Login
                </Button>
              </form>
            )}
          />
        </ModalBody>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

// RegisterModal.propTypes = {
//   isAuthenticated: PropTypes.bool,
//   error: PropTypes.object.isRequired,
//   clearErrors: PropTypes.func.isRequired
// };

export default connect(mapStateToProps, { login, clearErrors })(LoginModal);
