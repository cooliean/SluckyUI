!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("react"),require("@babel/runtime/helpers/classCallCheck"),require("@babel/runtime/helpers/createClass"),require("@babel/runtime/helpers/possibleConstructorReturn"),require("@babel/runtime/helpers/getPrototypeOf"),require("@babel/runtime/helpers/inherits"),require("@babel/runtime/helpers/defineProperty"),require("@babel/runtime/helpers/assertThisInitialized"));else if("function"==typeof define&&define.amd)define(["react","@babel/runtime/helpers/classCallCheck","@babel/runtime/helpers/createClass","@babel/runtime/helpers/possibleConstructorReturn","@babel/runtime/helpers/getPrototypeOf","@babel/runtime/helpers/inherits","@babel/runtime/helpers/defineProperty","@babel/runtime/helpers/assertThisInitialized"],r);else{var t="object"==typeof exports?r(require("react"),require("@babel/runtime/helpers/classCallCheck"),require("@babel/runtime/helpers/createClass"),require("@babel/runtime/helpers/possibleConstructorReturn"),require("@babel/runtime/helpers/getPrototypeOf"),require("@babel/runtime/helpers/inherits"),require("@babel/runtime/helpers/defineProperty"),require("@babel/runtime/helpers/assertThisInitialized")):r(e.react,e["@babel/runtime/helpers/classCallCheck"],e["@babel/runtime/helpers/createClass"],e["@babel/runtime/helpers/possibleConstructorReturn"],e["@babel/runtime/helpers/getPrototypeOf"],e["@babel/runtime/helpers/inherits"],e["@babel/runtime/helpers/defineProperty"],e["@babel/runtime/helpers/assertThisInitialized"]);for(var n in t)("object"==typeof exports?exports:e)[n]=t[n]}}(window,(function(e,r,t,n,i,l,u,o){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var i in e)t.d(n,i,function(r){return e[r]}.bind(null,i));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=61)}({0:function(r,t){r.exports=e},1:function(e,t){e.exports=r},11:function(e,r){e.exports=o},2:function(e,r){e.exports=t},3:function(e,r){e.exports=n},4:function(e,r){e.exports=i},5:function(e,r){e.exports=l},61:function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return x}));var n=t(11),i=t.n(n),l=t(8),u=t.n(l),o=t(1),s=t.n(o),a=t(2),p=t.n(a),b=t(3),c=t.n(b),f=t(4),h=t.n(f),d=t(5),m=t.n(d),y=t(0),v=t.n(y),x=function(e){function r(){return s()(this,r),c()(this,h()(r).apply(this,arguments))}return m()(r,e),p()(r,[{key:"render",value:function(){return v.a.createElement("div",null)}}]),r}(y.Component),C=function(e){function r(){var e,t;s()(this,r);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return t=c()(this,(e=h()(r)).call.apply(e,[this].concat(l))),u()(i()(t),"toThousands",(function(e){if(isNaN(e))return 0;var r=(e||0).toString(),t="",n="";for(r.split(".")[1]&&(n=r.split(".")[1],r=r.replace(/\.\d*/,""));r.length>3;)t=","+r.slice(-3)+t,r=r.slice(0,r.length-3);return r&&(t=r+t),n?t+"."+n:t})),t}return m()(r,e),p()(r,[{key:"render",value:function(){return v.a.createElement("div",{className:"d-il test2thousands"},this.toThousands(this.props.value||""))}}]),r}(y.Component);x.Money=C},8:function(e,r){e.exports=u}})}));