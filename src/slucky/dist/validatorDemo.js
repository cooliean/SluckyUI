"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ValidatorDemo = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _src = require("slucky/src");

var _input = require("slucky/src/component/input");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ValidatorDemo = exports.ValidatorDemo = function (_Component) {
    _inherits(ValidatorDemo, _Component);

    function ValidatorDemo() {
        _classCallCheck(this, ValidatorDemo);

        var _this = _possibleConstructorReturn(this, (ValidatorDemo.__proto__ || Object.getPrototypeOf(ValidatorDemo)).call(this));

        _this.handelClickSubmit = function () {
            //isSubmit只检测
            if (_this.Validator.isSubmit(_this.state)) {
                _src.Toast.add('ok');
            } else {
                _src.Toast.add({
                    content: 'vali fail',
                    status: 'fail'
                });
            }
            //更新校验信息
            _this.forceUpdate();
        };

        _this.state = {
            name: '',
            email: '',
            password: ''
        };
        _this.Validator = new _src.Validator();
        _src.Validator.types.isEmptyTest = {
            validate: function validate(value) {
                return value !== '';
            },

            instruction: '不为空自定义校验'
        };
        _this.Validator.config = {
            name: ['isEmpty', 'isEmptyTest'],
            email: ['isEmpty', 'isEmptyTest'],
            password: ['isEmpty', 'isInt', 'isEmptyTest']
        };
        return _this;
    }

    _createClass(ValidatorDemo, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                "div",
                { className: "bor b-side p32 mtb32" },
                _react2.default.createElement(
                    "div",
                    { className: "d-f ac mb24" },
                    _react2.default.createElement(
                        "div",
                        { className: "w96 s0" },
                        _react2.default.createElement(
                            "label",
                            { htmlFor: "name" },
                            "Name:"
                        )
                    ),
                    _react2.default.createElement(_input.Inputs, { id: "name", onChange: function onChange(name) {
                            _this2.setState({ name: name });
                        }, error: function error() {
                            return _this2.Validator.formatRes('name');
                        } })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "d-f ac mb24" },
                    _react2.default.createElement(
                        "div",
                        { className: "w96 s0" },
                        _react2.default.createElement(
                            "label",
                            { htmlFor: "email" },
                            "Email:"
                        )
                    ),
                    _react2.default.createElement(_input.Inputs, { id: "email", onChange: function onChange(email) {
                            _this2.setState({ email: email });
                        }, error: function error() {
                            return _this2.Validator.formatRes('email');
                        } })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "d-f ac mb24" },
                    _react2.default.createElement(
                        "div",
                        { className: "w96 s0" },
                        _react2.default.createElement(
                            "label",
                            { htmlFor: "password" },
                            "Password:"
                        )
                    ),
                    _react2.default.createElement(_input.Inputs, { id: "password", onChange: function onChange(password) {
                            _this2.setState({ password: password });
                        }, error: function error() {
                            return _this2.Validator.formatRes('password');
                        } })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "w384 ta-c" },
                    _react2.default.createElement(
                        "button",
                        { className: "btn-n ml8 plr16 ptb8", onClick: this.handelClickSubmit },
                        "\u6821\u9A8C\u8868\u5355"
                    )
                )
            );
        }
    }]);

    return ValidatorDemo;
}(_react.Component);