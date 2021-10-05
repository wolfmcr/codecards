import React from 'react';
import { Button } from 'reactstrap';
import DeleteCardModal from './DeleteCardModal';
import EditCardModal from './EditCardModal';

export default function StudyModalActions({ modals }) {
  return (
    <div className="d-flex">
      <EditCardModal color="primary" state={modals.edit} />

      <DeleteCardModal state={modals.delete} />
      <Button color="dark" onClick={modals.close}>
        Close
      </Button>
    </div>
  );
}
