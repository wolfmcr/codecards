import {
  FLIP_CARD,
  NEXT_CARD,
  TOGGLE_DELETE_MODAL,
  TOGGLE_STUDY_MODAL,
  TOGGLE_EDIT_MODAL,
  CHANGE_INDEX,
  REMOVE_CARD,
  UPDATE_MATCHING_CARDS,
  END_SLIDE
} from '../actions/types';

const initState = {
  studyModal: {
    isOpen: false
  },
  deleteModal: { isOpen: false },
  editModal: { isOpen: false },
  cardArr: [],
  deletingCard: false,
  currentIndex: 0,
  slide: false,
  isSliding: false,
  isFlipped: false,
  deck: null
};

export default function study(state = initState, action) {
  switch (action.type) {
    case TOGGLE_STUDY_MODAL:
      return {
        ...state,
        studyModal: { isOpen: !state.studyModal.isOpen },
        cardArr: action.payload.cardArr,
        deck: action.payload.deck
      };
    case TOGGLE_DELETE_MODAL:
      return {
        ...state,
        deleteModal: { isOpen: !state.deleteModal.isOpen }
      };
    case TOGGLE_EDIT_MODAL:
      return {
        ...state,
        editModal: { isOpen: !state.editModal.isOpen }
      };
    case FLIP_CARD:
      return {
        ...state,
        isFlipped: !state.isFlipped
      };
    case NEXT_CARD:
      return {
        ...state,
        slide: !state.slide,
        isSliding: true,
        isFlipped: false
      };
    case END_SLIDE: {
      return { ...state, isSliding: false };
    }
    case CHANGE_INDEX:
      return { ...state, currentIndex: action.payload, deletingCard: false };
    case REMOVE_CARD:
      return {
        ...state,
        deleteModal: { isOpen: false },
        deletingCard: true,
        currentIndex: action.payload.index,
        cardArr: action.payload.arr
      };
    case UPDATE_MATCHING_CARDS:
      return {
        ...state,
        cardArr: action.payload
      };
    default:
      return state;
  }
}
