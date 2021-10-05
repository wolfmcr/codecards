import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

export default function DeleteCardModal({ state }) {
  return (
    <div>
      <Button color="danger" onClick={state.toggle} className="me-3">
        x
      </Button>
      <Modal isOpen={state.isOpen}>
        <ModalBody className="text-center">
          <p className="m-0">Are you sure you want to delete this card?</p>
          <p className="m-0">This action is irreversible.</p>
        </ModalBody>
        <ModalFooter className="d-flex justify-content-center">
          <Button color="danger">Delete</Button>
          <Button color="primary" onClick={state.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
