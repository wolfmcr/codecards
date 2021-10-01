import React, { useState, useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/3024-night.css';
import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/mode/htmlmixed/htmlmixed';

export default function StudyCode(props) {
  let [code, setCode] = useState();

  useEffect(() => {
    setCode('');
    setCode(props.value);
  }, [props.value]);

  return (
    <div className="mb-3">
      {code !== '' && (
        <CodeMirror
          className="studyCode"
          value={props.value}
          editorDidMount={(editor, doc) => {
            console.log(editor);
            editor.doc.clearGutter();
          }}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true,
            readOnly: 'nocursor',
            lineWrapping: true,
            coverGutterNextToScrollbar: true
          }}
        />
      )}
    </div>
  );
}
