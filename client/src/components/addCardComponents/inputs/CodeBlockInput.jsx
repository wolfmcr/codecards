import React from 'react';

import { Button } from 'reactstrap';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/3024-night.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/mode/htmlmixed/htmlmixed';
export default function CodeBlockInput(props) {
  return (
    <div className="mb-3" style={{ position: 'relative' }}>
      <Button
        className="me-3"
        color="danger"
        size="sm"
        onClick={props.remove}
        style={{
          position: 'absolute',
          right: '-24px',
          zIndex: 6,
          borderRadius: '144px',
          top: '-10px',
          padding: '0px 5px'
        }}
      >
        &times;
      </Button>

      <CodeMirror
        value={props.input.value}
        options={{
          mode: 'javascript',
          theme: 'material',
          lineNumbers: true
        }}
        onBeforeChange={(a, b, c) => {
          props.input.onChange(c);
        }}
        onDragOver={(e) => {
          e.preventDefault();
        }}
      />
    </div>
  );
}
