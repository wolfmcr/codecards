import React, { useState, useEffect } from 'react';
import CardSide from './CardSide';
import ReactCardFlip from 'react-card-flip';

export default function StudyCard(props) {
  const [isFlipped, setFlipped] = useState(false);
  const [index, setIndex] = useState(0);
  const [card, setCard] = useState(props.card[index]);

  const flipCard = () => {
    setFlipped(!isFlipped);
  };

  const nextCard = () => {
    if (index < props.card.length - 1) {
      flipCard();
      setIndex(index + 1);
    } else {
      props.toggle();
    }
  };

  useEffect(() => {
    setCard(props.card[index]);
  }, [index]);

  return (
    <>
      <ReactCardFlip
        isFlipped={isFlipped}
        containerStyle={
          props.mobile || props.landing ? { width: '100%' } : { width: '45%' }
        }
        flipSpeedBackToFront={1}
        flipSpeedFrontToBack={1}
      >
        <CardSide
          mobile={props.mobile}
          title="Front"
          side="front"
          card={card}
          nextCard={nextCard}
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
              ? index < props.card.length - 1 || isFlipped === false
                ? 'Next'
                : 'Finish'
              : null
          }
          card={card}
          nextCard={nextCard}
          flipCard={flipCard}
        ></CardSide>
      </ReactCardFlip>
    </>
  );
}
