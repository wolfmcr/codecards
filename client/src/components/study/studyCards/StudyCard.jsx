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
        containerStyle={{ width: '45%' }}
        flipSpeedBackToFront={1}
        flipSpeedFrontToBack={1}
      >
        <CardSide
          title="Front"
          side="front"
          card={card}
          nextCard={nextCard}
          flipCard={flipCard}
          isFlipped={isFlipped}
        ></CardSide>
        <CardSide
          title="Back"
          side="back"
          isFlipped={isFlipped}
          buttonText={
            index < props.card.length - 1 || isFlipped === false
              ? 'Next'
              : 'Finish'
          }
          card={card}
          nextCard={nextCard}
          flipCard={flipCard}
        ></CardSide>
      </ReactCardFlip>
    </>
  );
}
