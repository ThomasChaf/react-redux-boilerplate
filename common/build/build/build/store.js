'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _store = void 0;
  if (!process.browser || !store) {
    _store = (0, _redux.createStore)((0, _reducers2.default)(), (0, _redux.applyMiddleware)(_reduxThunk2.default));

    if (!process.browser) {
      return _store;
    }
    store = _store;
  }
  return store;
};

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var store = null;