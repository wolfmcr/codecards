import React from 'react';
import { Button } from 'reactstrap';
import DeleteCardModal from './DeleteCardModal';
import EditCardModal from './EditCardModal';
import { connect } from 'react-redux';
import { toggleStudyModal } from '../../../actions/studyActions';

function StudyModalActions({ toggleStudyModal }) {
  return (
    <div className="d-flex">
      <EditCardModal />

      <DeleteCardModal />
      <Button color="dark" onClick={toggleStudyModal}>
        Close
      </Button>
    </div>
  );
}

const mapStateToProps = (state) => ({ study: state.study });

export default connect(mapStateToProps, { toggleStudyModal })(
  StudyModalActions
);
