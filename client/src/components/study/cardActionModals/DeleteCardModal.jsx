import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { removeCard } from '../../../actions/studyActions';
import { toggleDeleteModal } from '../../../actions/studyActions';
import Trash from 'bootstrap-icons/icons/trash-fill.svg';

function DeleteCardModal({ removeCard, toggleDeleteModal, study }) {
  const handleDelete = () => {
    removeCard(study.cardArr[study.currentIndex]._id);
  };
  return (
    <div>
      <Button
        outline
        color="danger"
        onClick={toggleDeleteModal}
        className="me-3"
      >
        <img src={Trash} alt="" />
      </Button>
      <Modal isOpen={study.deleteModal.isOpen}>
        <ModalBody className="text-center">
          <p className="m-0">Are you sure you want to delete this card?</p>
          <p className="m-0">This action is irreversible.</p>
        </ModalBody>
        <ModalFooter className="d-flex justify-content-center">
          <Button color="danger" onClick={handleDelete}>
            Delete
          </Button>
          <Button color="primary" onClick={toggleDeleteModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => ({
  study: state.study
});

export default connect(mapStateToProps, { removeCard, toggleDeleteModal })(
  DeleteCardModal
);
