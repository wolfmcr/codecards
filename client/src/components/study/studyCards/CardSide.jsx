import React from 'react';
import { Card, CardBody, Button, CardFooter } from 'reactstrap';
import { connect } from 'react-redux';
import {
  flipCard,
  nextCard,
  toggleStudyModal
} from '../../../actions/studyActions';
import StudyCode from './StudyCode';
import StudyText from './StudyText';

import './studyCard.css';

function CardSide({
  mobile,
  study,
  flipCard,
  nextCard,
  title,
  side,
  toggleStudyModal
}) {
  const handleNext =
    study.currentIndex === study.cardArr.length - 1
      ? toggleStudyModal
      : nextCard;
  const btnText =
    study.currentIndex === study.cardArr.length - 1 ? 'Finish' : 'Next';
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
    <Card
      style={
        mobile
          ? { minHeight: '80vh', width: '99%' }
          : {
              maxHeight: '800px',
              height: '80vh',
              overflow: 'auto',
              width: '99%'
            }
      }
    >
      {study.studyModal.isOpen && (
        <>
          <CardBody className="d-flex flex-column pt-4">
            {study.cardArr[study.currentIndex][side ? 'back' : 'front'].map(
              chooseDisplay
            )}
          </CardBody>
          <CardFooter
            className="d-flex justify-content-center"
            style={{ justifySelf: 'end' }}
          >
            <Button className="me-1 mb-3" color="dark" onClick={flipCard}>
              Flip
            </Button>
            <Button className="me-1 mb-3" color="dark" onClick={handleNext}>
              {btnText}
            </Button>
          </CardFooter>
        </>
      )}
    </Card>
  );
}

const mapStateToProps = (state) => ({
  study: state.study
});

export default connect(mapStateToProps, {
  flipCard,
  nextCard,
  toggleStudyModal
})(CardSide);
