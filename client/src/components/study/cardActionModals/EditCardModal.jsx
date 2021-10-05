import React from 'react';

import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';

export default function EditModal({ state }) {
  return (
    <div>
      <Button color="primary" onClick={state.toggle} className="me-3">
        x
      </Button>
      <Modal isOpen={state.isOpen}>
        <ModalHeader toggle={state.toggle}>Edit?</ModalHeader>
        <ModalBody>Edit?</ModalBody>
      </Modal>
    </div>
  );
}
