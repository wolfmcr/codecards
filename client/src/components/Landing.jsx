import React from 'react';
import { Card, CardBody, CardFooter, Button } from 'reactstrap';
import { useMediaQuery } from '@mui/material';
import StudyText from './study/studyCards/StudyText';
import StudyCode from './study/studyCards/StudyCode';

const landingPageCard = [
  {
    type: 'text',
    text: 'Create and study flashcards with CodeBlocks.'
  },
  {
    type: 'code',
    code: "function useCodeCards() {\n  createFlashCards('with code blocks')\n  \t.then(cards => cards.study())\n  \n  return new You({\n    fundamentals: 'solidified',\n    manager: 'impressed',\n    memoryLevel: 900\n  })\n};"
  },
  {
    type: 'text',
    text: "Whether you're a beginner or just freshening up your skills; CodeCards is the perfect study tool for programmers."
  }
];

export default function Landing() {
  const mobile = useMediaQuery('(max-width: 800px)');
  const chooseDisplay = (el, ind) => (
    <div key={ind}>
      {el.type === 'code' ? (
        <StudyCode value={el['code']} />
      ) : (
        <StudyText value={el['text']} />
      )}
    </div>
  );
  return (
    <div className="d-flex justify-content-center mb-3">
      {/* <div
        className={
          mobile
            ? 'landing-left text-center'
            : 'landing-left text-center w-50 p-4'
        }
      >
        <h1>Welcome To CodeCards!</h1>
        <p>
          Whether you're a beginner or just freshening up your skills; CodeCards
          is the perfect study tool for programmers. Easily create flashcards
          with codeblocks, drill concepts and solidify your knowledge base.
        </p>
        <div
          className="w-100 d-flex flex-column p-3 mt-5"
          // style={{
          //   border: '1px solid black',
          //   borderRadius: '5px'
          // }}
        >
          <Button color="dark" className="m-3">
            Login
          </Button>
          <Button className="m-3" color="dark">
            Register
          </Button>
        </div>
      </div> */}
      <div className={mobile ? 'landing-right' : 'landing-right w-50'}>
        <Card
          style={
            mobile
              ? {}
              : { maxHeight: '800px', height: '80vh', overflow: 'auto' }
          }
        >
          <CardBody className="d-flex flex-column">
            <h1 className="text-center">Welcome To CodeCards!</h1>
            {landingPageCard.map(chooseDisplay)}
            {/* <div
              className="w-100 d-flex flex-column align-items-center p-3 "
              style={{
                border: '1px solid gray',
                borderRadius: '5px',
                margin: '0 auto'
              }}
            >
              <Button color="dark" className="m-3 w-50">
                Login
              </Button>
              <Button className="m-3 w-50" color="dark">
                Register
              </Button>
            </div> */}
          </CardBody>
          <CardFooter
            className="d-flex justify-content-center"
            style={{ justifySelf: 'end' }}
          >
            <a
              href="https://github.com/Wolfgang-stack/codecards"
              target="_blank"
              rel="noreferrer"
            >
              <Button color="dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </Button>
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
