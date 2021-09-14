import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { addCard } from '../actions/cardActions';
import { useState } from 'react';
function CardModal() {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };
  return (
    <div>
      <Button color="dark" className="mb-3" onClick={toggle}>
        Add Card
      </Button>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add a new card</ModalHeader>
        <ModalBody></ModalBody>
      </Modal>
    </div>
  );
}

export default connect()(CardModal);
