import React, { useEffect, useState } from 'react';
import {
  Alert,
  NavLink,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Input
} from 'reactstrap';
import ModalCloseBtn from '../ModalCloseBtn';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

function RegisterModal(props) {
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
    if (props.error.id === 'REGISTER_FAIL') {
      setError(props.error.msg.msg);
    }
    if (isOpen) {
      if (props.isAuthenticated) {
        toggle();
      }
    }
  }, [props.error.msg, props.isAuthenticated, isOpen, props.error.id]);

  const handleSubmit = async (values) => {
    props.register(values);
  };
  return (
    <div>
      <NavLink onClick={toggle} className="actionLink">
        Register
      </NavLink>
      <Modal toggle={toggle} isOpen={isOpen}>
        <ModalHeader toggle={toggle} close={<ModalCloseBtn onClick={toggle} />}>
          Register
        </ModalHeader>
        <ModalBody>
          {error && <Alert color="danger">{error}</Alert>}
          <Form
            onSubmit={handleSubmit}
            render={({ handleSubmit, values }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="name"
                  placeholder="Username"
                  render={(props) => (
                    <Input
                      {...props.input}
                      {...props}
                      autoComplete="false"
                      className="mb-3"
                    />
                  )}
                />
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
                  Register
                </Button>
              </form>
            )}
          ></Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

RegisterModal.propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { register, clearErrors })(
  RegisterModal
);
