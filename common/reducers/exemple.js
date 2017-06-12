import { combineReducers } from 'redux'
import * as actionTypes from '../actionTypes'

function reducer_1(state = {}, action) {
  switch (action.type) {
    case actionTypes.ACTION_EXAMPLE_1:
      return { ...state, key1: 'value1' }
    case actionTypes.ACTION_EXAMPLE_2:
      return { ...state, key2: 'value2' }
    default:
      return state
  }
}

function reducer_2(state = {}, action) {
  switch (action.type) {
    case actionTypes.ACTION_EXAMPLE_1:
    case actionTypes.ACTION_EXAMPLE_2:
      return { ...state, newKey: 'newValue' }
    default:
      return state
  }
}

export default combineReducers({
  reducer_1,
  reducer_2
})
