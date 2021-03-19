import { SET_CATEGORY } from './actionTypes';

const initialState = {
  category: null
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        category: action.category
      };
    default:
      return state;
  }
};

export default reducer;
