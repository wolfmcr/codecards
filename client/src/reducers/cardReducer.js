import { v4 as uuid } from 'uuid';
import { GET_CARDS, ADD_CARD, DELETE_CARD } from '../actions/types';
const initState = {
  cards: [
    { id: uuid(), title: 0 },
    { id: uuid(), title: 1 },
    { id: uuid(), title: 2 },
    { id: uuid(), title: 'BOOGY' }
  ]
};

export default function (state = initState, action) {
  switch (action.type) {
    case GET_CARDS:
      return {
        ...state
      };
    case DELETE_CARD:
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== action.payload)
      };
    default:
      return state;
  }
}
