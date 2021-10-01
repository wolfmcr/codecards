import React from 'react';
import StudyCard from './study/studyCards/StudyCard';
import Footer from './Footer';
import { useMediaQuery } from '@mui/material';

const exampleCard = [
  {
    language: 'JavaScript',
    deck: 'Javascript Basics',
    front: [
      {
        type: 'text',
        text: 'What is the output of the console log?'
      },
      {
        type: 'code',
        code: 'const spacedRepetition = {\n  effective: true,\n  easy: true,\n}\n\nconsole.log(spacedRepetition)'
      }
    ],
    back: [
      { type: 'text', text: 'It will print out the spacedRepetition object.' },
      { type: 'code', code: '//write some poop on the front' }
    ]
  }
];

export default function Landing() {
  const mobile = useMediaQuery('(max-width: 800px)');
  return (
    <div className="d-flex flex-wrap mb-3">
      <div
        className={
          mobile ? 'landing-left text-center' : 'landing-left text-center w-50'
        }
      >
        <h1>CodeCards!</h1>
        <p>CodeCards let's you create and store flashcards with codeblocks!</p>
        <p>
          Studying Code can be hard when starting out. Spaced repetition is a
          great solution to help solidify the core concepts, especially when
          your flash cards looks like an editor.
        </p>
      </div>
      <div className={mobile ? 'landing-right' : 'landing-right w-50'}>
        <StudyCard
          card={exampleCard}
          mobile={false}
          landing={true}
          disableMenu={true}
        />
      </div>
    </div>
  );
}
