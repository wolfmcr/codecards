import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import Trash from 'bootstrap-icons/icons/trash-fill.svg';
import { useState } from 'react';

export default function DeleteDeckModal(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleDeleteClick = () => {
    props.deleteDeck(props.deckId);
  };
  return (
    <div>
      <img src={Trash} alt="" onClick={toggle} />

      <Modal isOpen={isOpen}>
        <ModalBody>
          <p className="text-center m-0 p-0">
            Are you sure you want to delete <strong>{props.deck}</strong>?
          </p>{' '}
          <p className="text-center m-0 p-0">This action is irreversible.</p>
        </ModalBody>
        <ModalFooter className="d-flex justify-content-center p-0">
          <Button color="danger" onClick={handleDeleteClick}>
            Delete
          </Button>
          <Button color="primary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
