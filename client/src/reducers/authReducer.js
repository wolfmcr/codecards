import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  ADD_DECK,
  DELETE_DECK,
  ADD_CARD,
  UPDATE_CARDS,
  DELETE_CARD
} from '../actions/types';

const initState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: false,
  user: null
};

export default function auth(state = initState, action) {
  switch (action.type) {
    case USER_LOADING:
      return { ...state, isLoading: true };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case LOGOUT_SUCCESS:
    case AUTH_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
      };
    case ADD_DECK:
      return {
        ...state,
        user: { ...state.user, decks: action.payload }
      };
    case DELETE_DECK:
      return {
        ...state,
        user: {
          ...state.user,
          cards: action.payload.cards,
          decks: action.payload.decks
        }
      };
    case ADD_CARD:
      return {
        ...state,
        user: { ...state.user, cards: action.payload }
      };
    case UPDATE_CARDS:
      return { ...state, user: { ...state.user, cards: action.payload } };
    case DELETE_CARD:
      return {
        ...state,
        user: { ...state.user, cards: action.payload }
      };

    default:
      return state;
  }
}
