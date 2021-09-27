import { ADD_DECK, DELETE_DECK } from './types';
import axios from 'axios';
import { tokenConfig } from './authActions';

export const addDeck = (data) => (dispatch, getState) => {
  axios.post('/api/add-deck', data, tokenConfig(getState)).then((res) => {
    dispatch({ type: ADD_DECK, payload: res.data });
  });
};

export const deleteDeck = (id) => (dispatch, getState) => {
  console.log(id);
  axios
    .delete(`/api/delete-deck/${id}`, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: DELETE_DECK,
        payload: { cards: res.data.cards, decks: res.data.decks }
      })
    );
};

export const updateDeck = (id) => (dispatch, getState) => {};
