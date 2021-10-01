import React from 'react';
import { Button } from 'reactstrap';

export default function ModalCloseBtn(props) {
  return (
    <Button color="dark" onClick={props.onClick}>
      Close
    </Button>
  );
}
