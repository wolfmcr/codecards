import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import Trash from 'bootstrap-icons/icons/trash-fill.svg';
import { deleteDeck } from '../../../actions/deckActions';
import { connect } from 'react-redux';

function DeleteDeckModal(props) {
  const handleDeleteClick = () => {
    props.deleteDeck(props.deck._id);
    props.toggle();
  };
  return (
    <div>
      <div className="d-flex">
        <img src={Trash} alt="" className="me-2 actionIcon" />
        <span>Delete Deck</span>
      </div>
      <Modal isOpen={props.isOpen}>
        <ModalBody>
          <p className="text-center m-0 p-2">
            Are you sure you want to delete{' '}
            <strong>{props.deck.deckName}</strong> and all it's associated
            cards? This action is irreversible.
          </p>
        </ModalBody>
        <ModalFooter className="d-flex justify-content-center p-0">
          <Button color="danger" onClick={handleDeleteClick}>
            Delete
          </Button>
          <Button color="primary" onClick={props.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { deleteDeck })(DeleteDeckModal);
