(self.webpackChunk_xh_sea_ui=self.webpackChunk_xh_sea_ui||[]).push([[761],{61978:function(n,t,e){"use strict";var i=e(97857).default,a=e(13769).default,r=["children","kind"],o=this&&this.__importDefault||function(d){return d&&d.__esModule?d:{default:d}};Object.defineProperty(t,"__esModule",{value:!0});var s=o(e(67294)),u="happy-alert",l={info:"#5352ED",positive:"#2ED573",negative:"#FF4757",warning:"#FFA502"},c=function(f){var p=f.children,m=f.kind,v=m===void 0?"info":m,_=a(f,r);return s.default.createElement("div",i({className:u,style:{background:l[v]}},_),p)};t.default=c},54444:function(n,t,e){"use strict";e.r(t),e.d(t,{demos:function(){return l}});var i=e(15009),a=e.n(i),r=e(99289),o=e.n(r),s=e(67294),u=e(2100),l={"alert-demo-basic":{component:s.memo(s.lazy(function(){return e.e(819).then(e.bind(e,15950))})),asset:{type:"BLOCK",id:"alert-demo-basic",refAtomIds:["alert"],dependencies:{"index.tsx":{type:"FILE",value:e(6239).Z},react:{type:"NPM",value:"18.3.1"},"../index.js":{type:"FILE",value:e(61670).Z}},entry:"index.tsx"},context:{react:e(67294),"../index.js":e(61978)},renderOpts:{compile:function(){var c=o()(a()().mark(function f(){var p,m=arguments;return a()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,e.e(335).then(e.bind(e,37335));case 2:return _.abrupt("return",(p=_.sent).default.apply(p,m));case 3:case"end":return _.stop()}},f)}));function d(){return c.apply(this,arguments)}return d}()}}}},5504:function(n,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return a}});var i=e(2100);const a=[{value:"\u8B66\u544A\u63D0\u793A\uFF0C\u5C55\u73B0\u9700\u8981\u5173\u6CE8\u7684\u4FE1\u606F\u3002",paraId:0,tocIndex:0}]},6239:function(n,t){"use strict";t.Z=`import React from "react";
import Alert from "../index";

export default () => <Alert kind="warning">\u738B\u732A\u6674\u{1F437}</Alert>;
`},61670:function(n,t){"use strict";t.Z=`"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prefixCls = "happy-alert";
const kinds = {
    info: "#5352ED",
    positive: "#2ED573",
    negative: "#FF4757",
    warning: "#FFA502",
};
const Alert = ({ children, kind = "info", ...rest }) => (react_1.default.createElement("div", { className: prefixCls, style: {
        background: kinds[kind],
    }, ...rest }, children));
exports.default = Alert;
`},13769:function(n,t,e){var i=e(48541);function a(r,o){if(r==null)return{};var s=i(r,o),u,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(l=0;l<c.length;l++)u=c[l],!(o.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(r,u)&&(s[u]=r[u])}return s}n.exports=a,n.exports.__esModule=!0,n.exports.default=n.exports},48541:function(n){function t(e,i){if(e==null)return{};var a={},r=Object.keys(e),o,s;for(s=0;s<r.length;s++)o=r[s],!(i.indexOf(o)>=0)&&(a[o]=e[o]);return a}n.exports=t,n.exports.__esModule=!0,n.exports.default=n.exports}}]);
