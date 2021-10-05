import React, { useState } from 'react';
import { Card, CardBody, Button, CardFooter } from 'reactstrap';

import { CSSTransition } from 'react-transition-group';
import StudyCode from './StudyCode';
import StudyText from './StudyText';

import './studyCard.css';
export default function CardSide(props) {
  const [fade, setFade] = useState(false);

  const flip = () => {
    setFade(!fade);
    props.flipCard();
  };

  const next = () => {
    setFade(!fade);
    props.nextCard();
  };

  const backButtons = (
    <>
      <Button className="me-1 mb-3" color="dark" onClick={flip}>
        Flip
      </Button>
      {props.buttonText && (
        <Button className="me-1 mb-3" color="dark" onClick={next}>
          {props.buttonText}
        </Button>
      )}
    </>
  );

  const frontButtons = (
    <>
      <Button className="me-1 mb-3" color="dark" onClick={flip}>
        Flip
      </Button>
    </>
  );

  return (
    <Card
      style={
        props.mobile
          ? { minHeight: '80vh' }
          : { maxHeight: '800px', height: '80vh', overflow: 'auto' }
      }
    >
      <>
        <CardBody className="d-flex flex-column">
          {props.card[props.side].map((el) => (
            <>
              {el.type === 'code' ? (
                <StudyCode value={el['code']} />
              ) : (
                <StudyText value={el['text']} />
              )}
            </>
          ))}
        </CardBody>
        <CardFooter
          className="d-flex justify-content-center"
          style={{ justifySelf: 'end' }}
        >
          {props.side === 'front' ? frontButtons : backButtons}
        </CardFooter>
      </>
    </Card>
  );
}
