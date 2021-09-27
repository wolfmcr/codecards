import React from 'react';
import CodeBlockInput from './CodeBlockInput';
import TextInput from './TextInput';

export default function CouldBe(props) {
  return (
    <>
      {props.type === 'code' ? (
        <CodeBlockInput {...props} />
      ) : (
        <TextInput {...props} />
      )}
    </>
  );
}
