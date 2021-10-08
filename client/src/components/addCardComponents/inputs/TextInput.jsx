import React from 'react';
import { Input, FormGroup, Button } from 'reactstrap';

export default function TextInput(props) {
  const deleteClick = () => {
    props.remove();
  };
  return (
    <FormGroup style={{ position: 'relative' }} className="mb-3">
      <Button
        className="me-3"
        color="danger"
        onClick={deleteClick}
        type="button"
        size="sm"
        style={{
          position: 'absolute',
          right: '-24px',
          zIndex: 6,
          borderRadius: '144px',
          top: '-10px',
          padding: '0px 5px'
        }}
        title="delete input"
      >
        &times;
      </Button>
      <Input {...props.input} type="textarea" />
    </FormGroup>
  );
}
