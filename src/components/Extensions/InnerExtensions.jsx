import { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

// components
import { ExtensionCard } from "../ExtensionCard";
import { Footer } from "../Footer";
import { Button } from "../Button";

// styles
import "./Extensions.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

export const InnerExtensions = ({ extensionsCardsData, id }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isEnd, setIsEnd] = useState(false);
  const [isStart, setIsBeginning] = useState(true);
  const [cardsData, setCardsData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.on("slideChange", function () {
        setIsEnd(swiperInstance.isEnd);
        setIsBeginning(swiperInstance.isBeginning);
      });
    }
    return () => {
      swiperInstance?.destroy(true, true);
    };
  }, [swiperInstance]);

  useEffect(() => {
    const data = extensionsCardsData?.filter(
      (item) => item.value.toLocaleLowerCase() !== id,
    );
    setCardsData(data);
  }, [id]);

  const exactExtension = extensionsCardsData?.find(
    (item) => item.value.toLocaleLowerCase() === id,
  );

  return (
    <div className={"inner-extensions-wrapper"}>
      <main className="inner-extensions-wrapper-main">
        <p>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="go-back-extensions-svg"
          >
            <path
              d="M7.97533 4.94141L2.91699 9.99974L7.97533 15.0581"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.0836 10H3.05859"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Link to="/extensions" className={"go-back-extensions font-14"}>
            Back Extensions
          </Link>
        </p>
        <div className="inner-extensions-card-container">
          <ExtensionCard
            type="full-info-card"
            item={exactExtension}
            active={true}
            customStyles={{
              width: "fit-content",
              height: "100%",
              padding: "0",
            }}
          />
          <Button
            label={exactExtension.active ? "Disable" : "Enable"}
            element={"staking-button"}
            active={true}
            onClick={() =>
              exactExtension.handleSwitch(exactExtension.value, !exactExtension.active)
            }
            className={"inner-add-extension-btn"}
            customStyles={{ maxWidth: "150px", width: "100%" }}
            disabled={exactExtension.disabled}
            type="btn-primary"
            size="btn-sm"
          />
        </div>
      </main>
      <header className="inner-extensions-description">
        <h1 className="font-20">Extensions</h1>
        <p className="font-16">
          Extensions are optional add-ons, built by community developers, that enhance the
          Compound experience. Enabling extensions allows for new features to be added to
          your account–such as automation, composability with other DeFi protocols, or
          position management.
        </p>
      </header>
      <div className="inner-extensions-other">
        <div className="inner-extensions-other-buttons">
          <p className="font-16">Other Extensions</p>
          <div className="inner-extensions-swiper-buttons">
            <button onClick={() => swiperInstance.slidePrev()}>
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ opacity: isStart ? 0.4 : 1 }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24.7972 16.2028C25.0676 16.4731 25.0676 16.9115 24.7972 17.1818L20.5574 21.4217C20.327 21.652 20.327 22.0331 20.5574 22.2634L24.7972 26.5033C25.0676 26.7736 25.0676 27.212 24.7972 27.4823C24.5269 27.7527 24.0885 27.7527 23.8182 27.4823L19.5783 23.2425C18.8072 22.4714 18.8072 21.2137 19.5783 20.4426L23.8182 16.2028C24.0885 15.9324 24.5269 15.9324 24.7972 16.2028Z"
                  fill="white"
                />
                <rect
                  x="-0.5"
                  y="0.5"
                  width="43"
                  height="43"
                  rx="21.5"
                  transform="matrix(-1 0 0 1 43 0)"
                  stroke="#c38c5c"
                  strokeOpacity="1"
                />
              </svg>
            </button>
            <button onClick={() => swiperInstance.slideNext()}>
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ opacity: isEnd ? 0.4 : 1 }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.2028 16.2028C18.9324 16.4731 18.9324 16.9115 19.2028 17.1818L23.4426 21.4217C23.673 21.652 23.673 22.0331 23.4426 22.2634L19.2028 26.5033C18.9324 26.7736 18.9324 27.212 19.2028 27.4823C19.4731 27.7527 19.9115 27.7527 20.1818 27.4823L24.4217 23.2425C25.1928 22.4714 25.1928 21.2137 24.4217 20.4426L20.1818 16.2028C19.9115 15.9324 19.4731 15.9324 19.2028 16.2028Z"
                  fill="white"
                />
                <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="#c38c5c" />
              </svg>
            </button>
          </div>
        </div>
        <div className="other-extensions-cards-container">
          <Swiper
            spaceBetween={10}
            slidesPerView={"auto"}
            className="mySwiper2"
            mousewheel={true}
            freeMode={true}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
          >
            {cardsData?.map((item, index) => (
              <SwiperSlide key={index}>
                <ExtensionCard
                  type="other-extensions-card"
                  item={item}
                  active={true}
                  onClick={() => navigate("/extensions/" + item.value.toLowerCase())}
                  customStyles={{
                    maxWidth: "610px",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Footer />
    </div>
  );
};
