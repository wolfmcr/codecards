import React from 'react';
import CardSide from './CardSide';
import ReactCardFlip from 'react-card-flip';
import { connect } from 'react-redux';
import { changeIndex } from '../../../actions/studyActions';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './studyCard.css';

function CardTransition({ study, mobile, changeIndex }) {
  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        classNames="studyCard"
        key={study.slide}
        addEndListener={(node, done) => {
          node.addEventListener('transitionend', done, true);
        }}
        onExited={() => {
          changeIndex();
        }}
      >
        <ReactCardFlip
          isFlipped={study.isFlipped}
          containerStyle={mobile ? { width: '100%' } : { width: '45%' }}
          flipSpeedBackToFront={1}
          flipSpeedFrontToBack={1}
        >
          <CardSide mobile={mobile} title="Front" side={0}></CardSide>
          <CardSide mobile={mobile} title="Back" side={1}></CardSide>
        </ReactCardFlip>
      </CSSTransition>
    </SwitchTransition>
  );
}

const mapStateToProps = (state) => ({
  study: state.study
});

export default connect(mapStateToProps, { changeIndex })(CardTransition);
