import { combineReducers } from "redux";
import { handleActions as createReducer } from "redux-actions";
import { loadData, getPost, getDescriptionAction } from "../actions";

const initialVal = {
  list: [],
  detail: {},
  description: [],
};

const postReducer = createReducer(
  {
    [loadData]: (state, action) => ({ ...state, list: action.payload }),
    [getPost]: (state, action) => ({ ...state, detail: action.payload }),
    [getDescriptionAction]: (state, action) => ({
      ...state,
      description: action.payload,
    }),
  },
  initialVal
);

const reducers = combineReducers({
  posts: postReducer,
});

export default reducers;
