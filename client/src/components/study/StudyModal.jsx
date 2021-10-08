import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import CardTransition from './studyCards/CardTransition';
import { useMediaQuery } from '@mui/material';
import StudyModalActions from './cardActionModals/StudyModalActions';
import { toggleStudyModal } from '../../actions/studyActions';
import { connect } from 'react-redux';

function StudyModal({ study, toggleStudyModal }) {
  const mobile = useMediaQuery('(max-width: 600px)');

  return (
    <div>
      <Modal
        isOpen={study.studyModal.isOpen}
        toggle={toggleStudyModal}
        style={mobile ? {} : { width: '90vw', maxWidth: '1500px' }}
      >
        <ModalHeader toggle={toggleStudyModal} close={<StudyModalActions />}>
          {study.deck ? study.deck.deckName : ''}: {study.currentIndex + 1}
          {' of '}
          {study.cardArr ? study.cardArr.length : ''}
        </ModalHeader>
        <ModalBody
          className="d-flex justify-content-center"
          style={{ overflowX: 'hidden' }}
        >
          <CardTransition mobile={mobile}></CardTransition>
        </ModalBody>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => ({
  study: state.study
});

export default connect(mapStateToProps, { toggleStudyModal })(StudyModal);
