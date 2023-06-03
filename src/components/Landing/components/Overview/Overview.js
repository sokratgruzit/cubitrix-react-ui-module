import React from "react";
import "./Overview.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

export const Overview = ({ data }) => {
  return (
    <div className="aboutContainer">
      <svg
        className="aboutCirclular-bg"
        width="435"
        height="538"
        viewBox="0 0 435 538"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle opacity="0.1" cx="269" cy="269" r="268.5" stroke="white" />
      </svg>
      <svg
        width="362"
        height="846"
        viewBox="0 0 362 846"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="aboutCirclular-bg-2"
      >
        <circle opacity="0.1" cx="-61" cy="423" r="422.5" stroke="white" />
      </svg>
      <div className="aboutWrapper">
        <Swiper spaceBetween={50} slidesPerView={1} loop={true}>
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="aboutContent" key={index}>
                <div className="aboutImgWrapper">
                  <img className="aboutImg fade-up" src={item.image} alt={" "} />
                </div>
                <div className="aboutInfo">
                  <h2 className="aboutTitle fade-up">{item.title}</h2>
                  <p className="aboutText fade-up">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
