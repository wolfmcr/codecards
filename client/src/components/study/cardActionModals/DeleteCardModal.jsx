import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';

export default function DeleteCardModal({ state }) {
  return (
    <div>
      <Button color="danger" onClick={state.toggle} className="me-3">
        x
      </Button>
      <Modal isOpen={state.isOpen}>
        <ModalHeader toggle={state.toggle}>Delete?</ModalHeader>
        <ModalBody>Delete???</ModalBody>
      </Modal>
    </div>
  );
}
