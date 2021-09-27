import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Card,
  CardTitle
} from 'reactstrap';
import StudyCard from './studyCards/StudyCard';
import { connect } from 'react-redux';

function StudyModal(props) {
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
        style={{ width: '90vw', maxWidth: '1500px' }}
      >
        <ModalHeader toggle={toggle}>{props.deck}</ModalHeader>
        <ModalBody className="d-flex justify-content-center">
          <StudyCard card={props.card} toggle={toggle}></StudyCard>
        </ModalBody>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => ({
  // card: state.card
});

export default connect(mapStateToProps)(StudyModal);
