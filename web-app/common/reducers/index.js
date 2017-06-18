import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import example from './example'

export default () => (
  combineReducers({
    form: formReducer,
    example
  })
)
