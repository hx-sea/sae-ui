"use strict";(self.webpackChunk_xh_sea_ui=self.webpackChunk_xh_sea_ui||[]).push([[761],{54444:function(a,n,e){e.r(n),e.d(n,{demos:function(){return d}});var r=e(15009),s=e.n(r),l=e(99289),u=e.n(l),o=e(67294),h=e(2100),d={"alert-demo-basic":{component:o.memo(o.lazy(function(){return e.e(819).then(e.bind(e,4217))})),asset:{type:"BLOCK",id:"alert-demo-basic",refAtomIds:["alert"],dependencies:{"index.tsx":{type:"FILE",value:e(6239).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.19.4"}},entry:"index.tsx"},context:{react:e(67294),antd:e(81182)},renderOpts:{compile:function(){var m=u()(s()().mark(function c(){var _,p=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(_=t.sent).default.apply(_,p));case 3:case"end":return t.stop()}},c)}));function i(){return m.apply(this,arguments)}return i}()}}}},5504:function(a,n,e){e.r(n),e.d(n,{texts:function(){return s}});var r=e(2100);const s=[]},6239:function(a,n){n.Z=`import React from "react";
// import Alert from "../index";
import { Carousel, Image } from "antd";
import Avatar1 from "../../Image/WechatIMG476.jpg";
import Avatar2 from "../../Image/WechatIMG480.jpg";

const contentStyle: React.CSSProperties = {
  margin: 0,
  color: "#fff",
  textAlign: "center",
};

export default () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>
          <Image width={200} src={Avatar1} />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <Image width={200} src={Avatar2} />
        </h3>
      </div>
    </Carousel>
  );
};
`}}]);
