import { ADD_CARD, DELETE_CARD } from './types';
import { tokenConfig } from './authActions';
import axios from 'axios';

export const deleteCard = (id) => (dispatch, getState) => {
  console.log(id);
};

export const updateCard = (id) => (dispatch, getState) => {};

export const addCard = (data) => (dispatch, getState) => {
  axios
    .post('/api/make-card', { data }, tokenConfig(getState))
    .then((res) => dispatch({ type: ADD_CARD, payload: res.data }));
};
