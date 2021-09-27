import React, { useState } from 'react';
import {
  Card,
  CardTitle,
  CardBody,
  Button,
  CardFooter,
  CardHeader
} from 'reactstrap';

import { CSSTransition } from 'react-transition-group';
import StudyCode from './StudyCode';
import StudyText from './StudyText';
import PopoverMenu from './PopoverMenu';
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
      <Button className="me-1 mb-3" color="dark" onClick={next}>
        {props.buttonText}
      </Button>
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
    <Card style={{ width: '99%', minHeight: '66vh' }}>
      <CardHeader className="p-3 d-flex justify-content-between">
        <CardTitle className="p-3 d-flex justify-content-between">
          <h5>{props.number}</h5>
        </CardTitle>
        <PopoverMenu></PopoverMenu>
      </CardHeader>
      <CSSTransition classNames="studyCard" in={fade} timeout={300}>
        <div
          className="d-flex flex-column justify-content-between"
          style={{ height: '60vh' }}
        >
          <CardBody>
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
          <CardFooter className="d-flex justify-content-center">
            {props.side === 'front' ? frontButtons : backButtons}
          </CardFooter>
        </div>
      </CSSTransition>
    </Card>
  );
}
