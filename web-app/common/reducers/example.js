import { combineReducers } from 'redux'
import * as actionTypes from '../actionTypes'

function example_1(state = { clicked: false }, action) {
  console.log('HERE IS:', action)
  switch (action.type) {
    case actionTypes.ACTION_EXAMPLE_1:
      return { clicked: true }
    default:
      return state
  }
}

function example_2(state = {}, action) {
  switch (action.type) {
    case actionTypes.ACTION_EXAMPLE_1:
    case actionTypes.ACTION_EXAMPLE_2:
      return { newKey: 'newValue' }
    default:
      return state
  }
}

export default combineReducers({
  example_1,
  example_2
})
