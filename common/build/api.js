'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _apisauce = require('apisauce');

var apisauce = _interopRequireWildcard(_apisauce);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var API = function () {
  function API(apiUrl) {
    _classCallCheck(this, API);

    this.client = {};

    this.client = apisauce.create({
      baseURL: apiUrl,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  _createClass(API, [{
    key: 'generateErrorMessage',
    value: function generateErrorMessage(res) {
      var data = res.data;
      if (!data) {
        return 'Error can t reach the API';
      }
      if (_lodash2.default.isString(data.error)) {
        return data.error;
      }
      var errors = data.errors;
      if (_lodash2.default.isString(errors)) {
        return errors;
      }
      if (Array.isArray(errors)) {
        return errors.join('\n- ');
      }
      if (_lodash2.default.isObject(errors)) {
        return _lodash2.default.reduce(errors, function (result, obj, key) {
          var val = obj.join(', ');
          return result + '\n- ' + key + ' : ' + val;
        }, '');
      }
      return 'Unknown error :/';
    }
  }, {
    key: 'query',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(method, path, params, opts) {
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.client[method](path, params, opts);

              case 2:
                res = _context.sent;

                if (!res.problem) {
                  _context.next = 5;
                  break;
                }

                throw new Error(this.generateErrorMessage(res));

              case 5:
                return _context.abrupt('return', res);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function query(_x, _x2, _x3, _x4) {
        return _ref.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: 'get',
    value: function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(path) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt('return', this.query('get', path, params, opts));

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function get(_x5) {
        return _ref2.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: 'post',
    value: function () {
      var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(path) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt('return', this.query('post', path, params, opts));

              case 1:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function post(_x8) {
        return _ref3.apply(this, arguments);
      }

      return post;
    }()
  }, {
    key: 'put',
    value: function () {
      var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(path) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt('return', this.query('put', path, params, opts));

              case 1:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function put(_x11) {
        return _ref4.apply(this, arguments);
      }

      return put;
    }()
  }, {
    key: 'delete',
    value: function () {
      var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(path) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt('return', this.query('delete', path, params, opts));

              case 1:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function _delete(_x14) {
        return _ref5.apply(this, arguments);
      }

      return _delete;
    }()
  }]);

  return API;
}();

exports.default = new API('http://localhost:3001/api');