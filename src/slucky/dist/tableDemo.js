'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TableDemo = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _reactMarkdown = require('react-markdown');

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

var _reactHighlight = require('react-highlight');

var _reactHighlight2 = _interopRequireDefault(_reactHighlight);

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableDemo = exports.TableDemo = function (_Component) {
    _inherits(TableDemo, _Component);

    function TableDemo() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, TableDemo);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TableDemo.__proto__ || Object.getPrototypeOf(TableDemo)).call.apply(_ref, [this].concat(args))), _this), _this.handleChangePage = function (currentPage) {
            console.log(currentPage);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(TableDemo, [{
        key: 'render',
        value: function render() {
            var demoString = '``` jsx' + '\nclass TableDemo extends Component {\n    handleChangePage = (currentPage) => {\n        console.log(currentPage);\n    }\n    render(){\n        const dataconf = [{\n            title: \'ID\',\n            name: \'id\',\n            width: \'25%\'\n        }, {\n            title: \'\u59D3\u540D\',\n            name: \'name\',\n            width: \'25%\'\n        }, {\n            title: \'\u8EAB\u9AD8\',\n            name: \'height\',\n            width: \'25%\'\n        }, {\n            title: \'\',\n            width: \'25%\',\n            name: \'action2\',\n            type: \'action\',\n            handles: [\n                {\n                    name: \'\u914D\u7F6E\',\n                    btnType: \'text\',\n                    handle: (data) => {\n                        alert(\'\u914D\u7F6E\')\n                        console.log(data);\n                    }\n                }, {\n                    name: \'\u5907\u6CE8\',\n                    btnType: \'text\',\n                    handle: (data) => {\n                        alert(\'\u5907\u6CE8\')\n                        console.log(data);\n                    }\n                }]\n        }]\n        \n        const dataset = [{\n            id: 1,\n            name: \'Apple\',\n            height: 178\n        }, {\n            id: 2,\n            name: \'Boy\',\n            height: 177\n        }, {\n            id: 3,\n            name: \'Cat\',\n            height: 176\n        }]\n        \n        const pageInfo = {\n            total: 119,\n            maxToShow: 20\n        }\n        return(\n            <Table dataconf={dataconf} dataset={dataset} />\n            <Paging pageInfo={pageInfo} onAction={this.handleChangePage} />\n        )\n    }\n}\n';
            var dataconf = [{
                title: 'ID',
                name: 'id',
                width: '25%'
            }, {
                title: '姓名',
                name: 'name',
                width: '25%'
            }, {
                title: '身高',
                name: 'height',
                width: '25%'
            }, {
                title: '',
                width: '25%',
                name: 'action2',
                type: 'action',
                handles: [{
                    name: '配置',
                    btnType: 'text',
                    handle: function handle(data) {
                        alert('配置');
                        console.log(data);
                    }
                }, {
                    name: '备注',
                    btnType: 'text',
                    handle: function handle(data) {
                        alert('备注');
                        console.log(data);
                    }
                }]
            }];
            var dataset = [{
                id: 1,
                name: 'Apple',
                height: 178
            }, {
                id: 2,
                name: 'Boy',
                height: 177
            }, {
                id: 3,
                name: 'Cat',
                height: 176
            }];
            var pageInfo = {
                total: 119,
                maxToShow: 20
            };
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'ptb32' },
                    _react2.default.createElement(_index.Table, { dataconf: dataconf, dataset: dataset }),
                    _react2.default.createElement(
                        'div',
                        { className: 'p16' },
                        _react2.default.createElement(_index.Paging, { pageInfo: pageInfo, onAction: this.handleChangePage })
                    )
                ),
                _react2.default.createElement(
                    'details',
                    { className: 'pb16 mb16 bor-b b-side-s' },
                    _react2.default.createElement(
                        'summary',
                        { className: 'btn-n pl8 pr64 ptb8' },
                        '\u663E\u793A\u4F7F\u7528\u4F8B\u5B50'
                    ),
                    _react2.default.createElement(
                        _reactHighlight2.default,
                        { innerHTML: true },
                        _server2.default.renderToStaticMarkup(_react2.default.createElement(_reactMarkdown2.default, { source: demoString }))
                    )
                )
            );
        }
    }]);

    return TableDemo;
}(_react.Component);