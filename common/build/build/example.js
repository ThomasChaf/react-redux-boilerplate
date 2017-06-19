'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _actionTypes = require('../actionTypes');

var actionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
}

function example_1() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { clicked: false };
  var action = arguments[1];

  switch (action.type) {
    case actionTypes.ACTION_EXAMPLE_1:
      return { clicked: true };
    default:
      return state;
  }
}

function example_2() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { humans: [] };
  var action = arguments[1];

  switch (action.type) {
    case actionTypes.ACTION_EXAMPLE_2:
      return { humans: [].concat(_toConsumableArray(state.humans), [action.values]) };
    default:
      return state;
  }
}

exports.default = (0, _redux.combineReducers)({
  example_1: example_1,
  example_2: example_2
});