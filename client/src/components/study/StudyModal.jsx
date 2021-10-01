import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import StudyCard from './studyCards/StudyCard';
import { useMediaQuery } from '@mui/material';
import ModalCloseBtn from '../ModalCloseBtn';
import { connect } from 'react-redux';

function StudyModal(props) {
  const mobile = useMediaQuery('(max-width: 600px)');
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };
  return (
    <div>
      <a className="link-primary user-select-none " href="#" onClick={toggle}>
        Study
      </a>
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        style={mobile ? {} : { width: '90vw', maxWidth: '1500px' }}
      >
        <ModalHeader toggle={toggle} close={<ModalCloseBtn onClick={toggle} />}>
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
