import React, { useState, useEffect } from 'react';
import CardSide from './CardSide';
import ReactCardFlip from 'react-card-flip';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './studyCard.css';

export default function StudyCard(props) {
  const [isFlipped, setFlipped] = useState(false);
  const [slide, setSlide] = useState(true);
  const flipCard = () => {
    setFlipped(!isFlipped);
  };

  const slideCard = () => {
    setSlide(!slide);
    setFlipped(!isFlipped);
    props.nextCard();
  };

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        classNames="studyCard"
        key={slide}
        addEndListener={(node, done) => {
          node.addEventListener('transitionend', done, true);
        }}
      >
        <ReactCardFlip
          isFlipped={isFlipped}
          containerStyle={
            props.mobile || props.landing ? { width: '100%' } : { width: '45%' }
          }
          flipSpeedBackToFront={!isFlipped ? 0.1 : 1}
          flipSpeedFrontToBack={!isFlipped ? 0.3 : 1}
        >
          <CardSide
            mobile={props.mobile}
            title="Front"
            side="front"
            card={props.currentCard}
            nextCard={props.nextCard}
            flipCard={flipCard}
            isFlipped={isFlipped}
          ></CardSide>
          <CardSide
            mobile={props.mobile}
            title="Back"
            side="back"
            isFlipped={isFlipped}
            buttonText={
              !props.landing
                ? props.currentIndex < props.cardArray.length - 1 ||
                  isFlipped === false
                  ? 'Next'
                  : 'Finish'
                : null
            }
            card={props.currentCard}
            nextCard={slideCard}
            flipCard={flipCard}
          ></CardSide>
        </ReactCardFlip>
      </CSSTransition>
    </SwitchTransition>
  );
}
