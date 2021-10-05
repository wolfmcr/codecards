import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import StudyCard from './studyCards/StudyCard';
import { useMediaQuery } from '@mui/material';
import StudyModalActions from './cardActionModals/StudyModalActions';
import { connect } from 'react-redux';

function StudyModal(props) {
  const mobile = useMediaQuery('(max-width: 600px)');

  //Nested Modal States
  const [isOpen, setIsOpen] = useState(false);
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [deleteIsOpen, setDeleteIsOpen] = useState(false);

  //Card State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCard, setCurrentCard] = useState(props.cardArray[0]);
  const nextCard = () => {
    if (currentIndex < props.cardArray.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setCurrentCard(props.cardArray[currentIndex + 1]);
    } else {
      toggle();
    }
  };

  const toggle = () => {
    setCurrentCard(props.cardArray[0]);
    setCurrentIndex(0);

    setIsOpen(!isOpen);
  };
  console.log(props);
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
        <ModalBody
          className="d-flex justify-content-center"
          style={{ overflowX: 'hidden' }}
        >
          <StudyCard
            mobile={mobile}
            cardArray={props.cardArray}
            currentCard={currentCard}
            toggle={toggle}
            currentIndex={currentIndex}
            nextCard={nextCard}
          ></StudyCard>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default StudyModal;
