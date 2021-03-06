import {GET_POSTS} from "../actions/postsActions";

const initialState = {
  postsFromReducer: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        postsFromReducer: action.payload
      }
    default:
      return state
  }
}