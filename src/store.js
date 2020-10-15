import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './redusers'

const initialState = {}

window.__REDUX_DEVTOOLS_EXTENSION__ = undefined;
const store = createStore(rootReducer, initialState, compose(
  applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store