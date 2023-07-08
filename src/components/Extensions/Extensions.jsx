import { useState } from "react";
import { useNavigate } from "react-router-dom";

// components
import { ExtensionCard } from "../ExtensionCard";
import { Footer } from "../Footer";

// styles
import "./Extensions.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import { ExtensionsPattern } from "../../assets/svgs";
// import { ReferralPattern } from "../../assets/svgs";
import { FreeMode, Mousewheel } from "swiper";

export const Extensions = ({ extensionsCardsData }) => {
  const navigate = useNavigate();

  return (
    <div className={"extensions-main"}>
      <header>
        <h1>Extensions</h1>
        <p>
          Extensions are optional add-ons, built by community developers, that enhance the
          Compound experience. Enabling extensions allows for new features to be added to
          your account–such as automation, composability with other DeFi protocols, or
          position management.
        </p>
      </header>
      <ExtensionsPattern className={"extensions-content-svg "} />
      <main>
        <Swiper
          spaceBetween={20}
          slidesPerView={"auto"}
          className="mySwiper2"
          mousewheel={true}
          freeMode={true}
          modules={[FreeMode, Mousewheel]}
        >
          {extensionsCardsData?.map((item, index) => (
            <SwiperSlide key={index}>
              <ExtensionCard
                key={index}
                type="default-card"
                item={item}
                active={true}
                setIsActive={() => {
                  item.handleSwitch(item.value.toLocaleLowerCase(), !item.active);
                }}
                isActive={item.active}
                onClick={() => navigate("/extensions/" + item.value.toLocaleLowerCase())}
                customStyles={{ height: "fit-content" }}
                disabled={item.disabled}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
      <Footer />
    </div>
  );
};
