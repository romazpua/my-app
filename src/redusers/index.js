import {combineReducers} from 'redux'
import usersReducer from "./usersReducer"
import postsReducer from "./postsReducer";
import cardsReducer from "./cardsReducer";

export default combineReducers({
  usersRoot: usersReducer,
  postsRoot: postsReducer,
  cardsRoot: cardsReducer,
})