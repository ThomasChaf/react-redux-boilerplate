import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

let store = null

export default function (opts = {}) {
  let _store
  if (!process.browser || !store) {
    _store = createStore(reducers(), applyMiddleware(thunk))

    if (!process.browser) {
      return _store
    }
    store = _store
  }
  return store
}
