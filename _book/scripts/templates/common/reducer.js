import { combineReducers } from 'redux'
import * as actionTypes from '../actionTypes'

function XXX(state = {}, action) {
  switch (action.type) {
    case actionTypes.XXX:
      return {

      }
    default:
      return state
  }
}

export default combineReducers({
  XXX
})
