import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Input,
  Label
} from 'reactstrap';
import { Form, Field } from 'react-final-form';
import { addDeck } from '../../actions/deckActions';
import { connect } from 'react-redux';
function NewDeckModal(props) {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen);
  };
  const handleSubmit = (values) => {
    props.addDeck(values);
    toggle();
  };
  return (
    <div>
      <Button color="dark" className="mt-3" onClick={toggle}>
        +
      </Button>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add a new Deck</ModalHeader>
        <ModalBody>
          <Form
            onSubmit={handleSubmit}
            initialValues={{
              deckName: ''
            }}
            render={({ handleSubmit, pristine, form, values }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name={'deckName'}
                  render={(props) => (
                    <div className="mb-3">
                      <Label htmlFor={props.input.name}>Deck:</Label>
                      <Input {...props.input} />
                    </div>
                  )}
                />
                <Button color="success" type="submit">
                  Add Deck
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
  decks: state.auth.user.decks
});

export default connect(mapStateToProps, { addDeck })(NewDeckModal);
