import React, { useEffect, useState, useRef } from 'react';

import { FormGroup, Input, FormFeedback, Button } from 'reactstrap';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/3024-night.css';
import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/mode/htmlmixed/htmlmixed';
export default function CodeBlockInput(props) {
  let [code, setCode] = useState('//write some code');

  const handleCodeChange = (editor, data) => {
    setCode(editor.doc.getValue());
  };

  const deleteClick = () => {};
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
        // editorDidMount={(editor) => {
        //   props.input.onChange('hi');
        // }}
        options={{
          mode: 'javascript',
          theme: 'material',
          lineNumbers: true
        }}
        onChange={(a, b, c) => {
          console.log(a);
          props.input.onChange(c);
        }}
      />
    </div>
  );
}

// export default function CodeBlockInput() {
//   let [code, setCode] = useState('//write some code\nconst good = "cool"');

//   const handleChange = (event) => {
//     console.log(event);
//     setCode(event.target.value);
//     console.log(code);
//   };

//   useEffect(() => {
//     Prism.highlightAll();
//   }, [code]);

//   return (
//     <div className="mb-5 Code">
//       <pre
//         style={{
//           position: 'relative',
//           minHeight: '3rem',
//           height: 'fit-content',
//           overflow: 'hidden',
//           borderRadius: '4px'
//         }}
//       >
//         <code
//           className="language-javascript"
//           style={{ minHeight: '2rem', height: '2rem' }}
//         >
//           {code}
//         </code>
//         <textarea
//           cols={40}
//           wrap="hard"
//           style={{
//             position: 'absolute',
//             top: '16px',
//             left: '16px',
//             color: 'transparent',
//             padding: '0 0 10px 0',

//             background: 'transparent',
//             border: 'none',
//             width: '100%',

//             maxWidth: '100%',
//             minHeight: '2rem',
//             height: '100%',
//             caretColor: 'white',
//             outline: 'none'
//           }}
//           value={code}
//           onChange={handleChange}
//           spellcheck="false"
//         />
//       </pre>
//     </div>
//   );
// }
