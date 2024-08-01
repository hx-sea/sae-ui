(self.webpackChunksae_ui=self.webpackChunksae_ui||[]).push([[761],{54444:function(t,n,e){"use strict";e.r(n),e.d(n,{demos:function(){return u}});var a=e(15009),s=e.n(a),r=e(99289),_=e.n(r),o=e(67294),l=e(2100),u={"alert-demo-basic":{component:o.memo(o.lazy(function(){return e.e(819).then(e.bind(e,70621))})),asset:{type:"BLOCK",id:"alert-demo-basic",refAtomIds:["alert"],dependencies:{"index.tsx":{type:"FILE",value:e(6239).Z},"../index.tsx":{type:"FILE",value:e(59695).Z},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"../index.tsx":e(70208),react:e(67294)},renderOpts:{compile:function(){var d=_()(s()().mark(function c(){var f,p=arguments;return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(335).then(e.bind(e,37335));case 2:return i.abrupt("return",(f=i.sent).default.apply(f,p));case 3:case"end":return i.stop()}},c)}));function m(){return d.apply(this,arguments)}return m}()}}}},70208:function(t,n,e){"use strict";e.r(n);var a=e(97857),s=e.n(a),r=e(13769),_=e.n(r),o=e(67294),l=e(85893),u=["children","kind"],d="happy-alert",m={info:"#5352ED",positive:"#2ED573",negative:"#FF4757",warning:"#FFA502"},c=function(p){var E=p.children,i=p.kind,v=i===void 0?"info":i,D=_()(p,u);return(0,l.jsx)("div",s()(s()({className:d,style:{background:m[v]}},D),{},{children:E}))};n.default=c},5504:function(t,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return s}});var a=e(2100);const s=[{value:"\u8B66\u544A\u63D0\u793A\uFF0C\u5C55\u73B0\u9700\u8981\u5173\u6CE8\u7684\u4FE1\u606F\u3002",paraId:0,tocIndex:0}]},6239:function(t,n){"use strict";n.Z=`import Alert from "../index";

export default () => <Alert kind="warning">\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u63D0\u793A</Alert>;
`},59695:function(t,n){"use strict";n.Z=`import React from "react";

export interface AlertProps {
  /**
   * @description       Alert \u7684\u7C7B\u578B
   * @default           'info'
   */
  kind?: "info" | "positive" | "negative" | "warning";
  children: any;
}

export type KindMap = Record<Required<AlertProps>["kind"], string>;

const prefixCls = "happy-alert";

const kinds: KindMap = {
  info: "#5352ED",
  positive: "#2ED573",
  negative: "#FF4757",
  warning: "#FFA502",
};

const Alert: React.FC<AlertProps> = ({ children, kind = "info", ...rest }) => (
  <div
    className={prefixCls}
    style={{
      background: kinds[kind],
    }}
    {...rest}
  >
    {children}
  </div>
);

export default Alert;
`},13769:function(t,n,e){var a=e(48541);function s(r,_){if(r==null)return{};var o=a(r,_),l,u;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(r);for(u=0;u<d.length;u++)l=d[u],!(_.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(r,l)&&(o[l]=r[l])}return o}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports},48541:function(t){function n(e,a){if(e==null)return{};var s={},r=Object.keys(e),_,o;for(o=0;o<r.length;o++)_=r[o],!(a.indexOf(_)>=0)&&(s[_]=e[_]);return s}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
