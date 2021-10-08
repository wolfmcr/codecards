import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import { addCard } from '../../actions/cardActions';
import Plus from 'bootstrap-icons/icons/plus-circle.svg';
import ModalCloseBtn from '../ModalCloseBtn';
import AddCardForm from './AddCardForm';

function AddCardModal(props) {
  const initialValues = {
    language: 'javascript',
    front: [],
    back: [],
    deck: props.deck._id
  };

  return (
    <div>
      <div className="d-flex">
        <img src={Plus} alt="" className="me-2 actionIcon" />
        <span style={{ verticalAlign: 'baseline' }}>Add a Card</span>
      </div>
      <Modal
        isOpen={props.isOpen}
        toggle={props.toggle}
        style={{ width: '90vw', maxWidth: '1500px' }}
        backdrop='static'
      >
        <ModalHeader
          toggle={props.toggle}
          close={<ModalCloseBtn onClick={props.toggle} />}
        >
          <h4 className="text-pink">Add a new card</h4>
        </ModalHeader>
        <ModalBody className="pt-1">
          <AddCardForm
            initialValues={initialValues}
            toggle={props.toggle}
            btnText={'Add Card'}
            submitFunc={props.addCard}
          />
        </ModalBody>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => ({
  decks: state.auth.user.decks
});

export default connect(mapStateToProps, { addCard })(AddCardModal);
