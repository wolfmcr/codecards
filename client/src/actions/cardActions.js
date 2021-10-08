import {
  ADD_CARD,
  DELETE_CARD,
  UPDATE_MATCHING_CARDS,
  UPDATE_CARDS
} from './types';
import { tokenConfig } from './authActions';
import axios from 'axios';

export const deleteCard = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/delete-card/${id}`, tokenConfig(getState))
    .then((res) => dispatch({ type: DELETE_CARD, payload: res.data.cards }));
};

export const updateCard = (data) => (dispatch, getState) => {
  axios
    .put(`/api/update-card/${data._id}`, data, tokenConfig(getState))
    .then((res) => {
      let matchingCards = res.data.cards.filter(
        (card) => card.deck === data.deck
      );

      dispatch({ type: UPDATE_MATCHING_CARDS, payload: matchingCards });

      dispatch({ type: UPDATE_CARDS, payload: res.data.cards });
    });
};

export const addCard = (data) => (dispatch, getState) => {
  axios
    .post('/api/make-card', { data }, tokenConfig(getState))
    .then((res) => dispatch({ type: ADD_CARD, payload: res.data }));
};
