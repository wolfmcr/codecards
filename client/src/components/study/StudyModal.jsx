import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import StudyCard from './studyCards/StudyCard';
import { useMediaQuery } from '@mui/material';
import StudyModalActions from './cardActionModals/StudyModalActions';
import { connect } from 'react-redux';

function StudyModal(props) {
  const mobile = useMediaQuery('(max-width: 600px)');
  const [isOpen, setIsOpen] = useState(false);
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [deleteIsOpen, setDeleteIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleDelete = () => {
    setDeleteIsOpen(!deleteIsOpen);
  };

  const toggleEdit = () => {
    setEditIsOpen(!editIsOpen);
  };
  return (
    <div className="ms-3">
      <a
        className="link-primary user-select-none text-decoration-none"
        href="#"
        onClick={toggle}
      >
        Study
      </a>
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        style={mobile ? {} : { width: '90vw', maxWidth: '1500px' }}
      >
        <ModalHeader
          toggle={toggle}
          close={
            <StudyModalActions
              modals={{
                close: toggle,
                delete: { toggle: toggleDelete, isOpen: deleteIsOpen },
                edit: { toggle: toggleEdit, isOpen: editIsOpen }
              }}
            />
          }
        >
          {props.deck}
        </ModalHeader>
        <ModalBody className="d-flex justify-content-center">
          <StudyCard
            mobile={mobile}
            card={props.card}
            toggle={toggle}
          ></StudyCard>
        </ModalBody>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => ({
  // card: state.card
});

export default connect(mapStateToProps)(StudyModal);
