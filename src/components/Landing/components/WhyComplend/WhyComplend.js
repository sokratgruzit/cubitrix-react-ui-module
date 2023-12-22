import React from "react";
import "./WhyComplend.css";
import { useFade } from "../../../../hooks/useFade";

export const WhyComplend = ({ data, images }) => {
  useFade("up", [".fade-up"]);

  return (
    <div className="whyComplend__container">
      <div className={`whyComplend__cardContent`}>
        <div className={`whyComplend__cardHeader fade-up`}>why A1?</div>
        <div className={`whyComplend__cardsWrapper`}>
          {data.map((item) => (
            <div className={`whyComplend__card whyComplend__green fade-up`} key={item.id}>
              <div className={`whyComplend__imgWrapper fade-up`}>
                <img className={`whyComplend__cardImg`} src={item.image} alt={"img"} />
              </div>
              <div className={`whyComplend__cardInfo fade-up`}>
                <h2 className={`whyComplend__cardTitle`}>{item.title}</h2>
                <p className={`whyComplend__cardText`}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img src={images?.bottom} className={"whyComplend__bottom"} alt="" />
    </div>
  );
};
