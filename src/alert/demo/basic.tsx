import React from "react";
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
