import { combineReducers } from 'redux'
import * as actionTypes from '../actionTypes'

function example_1(state = { clicked: false }, action) {
  switch (action.type) {
    case actionTypes.ACTION_EXAMPLE_1:
      return { clicked: true }
    default:
      return state
  }
}

function example_2(state = { humans: [] }, action) {
  switch (action.type) {
    case actionTypes.ACTION_EXAMPLE_2:
      return { humans: [
        ...state.humans,
        action.values
      ]}
    default:
      return state
  }
}

export default combineReducers({
  example_1,
  example_2
})
