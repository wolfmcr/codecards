import React from 'react';
import { connect } from 'react-redux';
import { toggleEditModal } from '../../../actions/studyActions';
import { updateCard } from '../../../actions/cardActions';
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import ModalCloseBtn from '../../ModalCloseBtn';
import AddCardForm from '../../addCardComponents/AddCardForm';
import PencilIcon from 'bootstrap-icons/icons/pencil-square.svg';
function EditModal({ toggleEditModal, study, updateCard }) {
  let initialValues = { ...study.cardArr[study.currentIndex] };
  delete initialValues.createdAt;

  return (
    <div>
      <Button outline color="info" className="me-3" onClick={toggleEditModal}>
        <img
          src={PencilIcon}
          alt="Edit Icon"
          title="Edit Card"
          className="actionIcon"
        />
      </Button>
      <Modal
        isOpen={study.editModal.isOpen}
        style={{ width: '90vw', maxWidth: '1500px' }}
      >
        <ModalHeader
          toggle={toggleEditModal}
          close={<ModalCloseBtn onClick={toggleEditModal} />}
        >
          Edit Card
        </ModalHeader>
        <ModalBody>
          <AddCardForm
            initialValues={initialValues}
            btnText={'Update Card'}
            submitFunc={updateCard}
            toggle={toggleEditModal}
          />
        </ModalBody>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => ({
  study: state.study
});

export default connect(mapStateToProps, { toggleEditModal, updateCard })(
  EditModal
);
