import {
  FLIP_CARD,
  END_SLIDE,
  TOGGLE_DELETE_MODAL,
  TOGGLE_STUDY_MODAL,
  TOGGLE_EDIT_MODAL,
  NEXT_CARD,
  CHANGE_INDEX,
  REMOVE_CARD
} from './types';
import { deleteCard } from './cardActions';

export const getMatchingCards = () => (dispatch) => {};

export const toggleStudyModal = (deck) => (dispatch, getState) => {
  let cardArr = [];
  if (!getState().study.studyModal.isOpen) {
    cardArr = getState().auth.user.cards.filter(
      (card) => card.deck === deck._id
    );
  }

  dispatch({ type: TOGGLE_STUDY_MODAL, payload: { cardArr, deck } });

  // //Logical not seems strange here, but the first dispatch sets isOpen to false
  // //so after it is closed we reset the index
  if (!getState().study.studyModal.isOpen) {
    dispatch({ type: CHANGE_INDEX, payload: 0 });
  }
};

export const toggleDeleteModal = () => (dispatch) => {
  dispatch({ type: TOGGLE_DELETE_MODAL });
};

export const toggleEditModal = () => (dispatch) => {
  dispatch({ type: TOGGLE_EDIT_MODAL });
};

export const flipCard = () => (dispatch) => {
  dispatch({ type: FLIP_CARD });
};

//return true if currentIndex is last element
const lastIndex = ({ cardArr, currentIndex }) => {
  let length = cardArr.length;
  let index = currentIndex;

  return index === length - 1;
};

export const nextCard = () => (dispatch) => {
  dispatch({ type: NEXT_CARD });
};

export const endSlide = () => (dispatch) => {
  dispatch({ type: END_SLIDE });
};

export const changeIndex = () => (dispatch, getState) => {
  let newIndex = getState().study.currentIndex;
  if (!getState().study.deletingCard) {
    newIndex += 1;
  }
  dispatch({ type: CHANGE_INDEX, payload: newIndex });
};

export const removeCard = (cardId) => (dispatch, getState) => {
  let cardArr = getState().study.cardArr.filter((card) => card._id !== cardId);
  let index = getState().study.currentIndex;
  //If the card is the only remaining card
  if (cardArr.length < 2) {
    dispatch({ type: TOGGLE_DELETE_MODAL });
    toggleStudyModal()(dispatch, getState);
    deleteCard(cardId)(dispatch, getState);
  } else {
    if (index === 0) {
      index = 0;
    } else if (lastIndex(getState().study)) {
      index -= 1;
    }
    dispatch({ type: NEXT_CARD, payload: cardArr });
    dispatch({ type: REMOVE_CARD, payload: { arr: cardArr, index: index } });
  }
};
