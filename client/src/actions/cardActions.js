import { GET_CARDS, ADD_CARD, DELETE_CARD } from './types';

export const getCards = () => {
  return {
    type: GET_CARDS
  };
};

export const deleteCard = (id) => {
  return {
    type: DELETE_CARD,
    payload: id
  };
};
