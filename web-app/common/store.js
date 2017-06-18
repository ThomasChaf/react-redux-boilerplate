import { createStore } from 'redux'
import reducers from './reducers'

let store = null

export default function (opts = {}) {
  let _store
  if (!process.browser || !store) {
    _store = createStore(reducers())

    if (!process.browser) {
      return _store
    }
    store = _store
  }
  return store
}
