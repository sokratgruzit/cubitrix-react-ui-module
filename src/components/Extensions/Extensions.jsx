import { useNavigate } from "react-router-dom";
import { FreeMode, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// components
import { ExtensionCard } from "../ExtensionCard";
import { Footer } from "../Footer";
import { ExtensionsPattern } from "../../assets/svgs";
import { DisabledPage } from "../DisabledPage";
import translates from "../../translates.json";
// import { ReferralPattern } from "../../assets/svgs";

// styles
import "./Extensions.css";
import "swiper/swiper-bundle.css";

export const Extensions = ({
  extensionsCardsData,
  disabledAccount,
  helpSupportClick,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={`extensions-main ${disabledAccount ? "disabled-page" : ""}`}
    >
      {disabledAccount && <DisabledPage />}
      <header>
        <h1>{translates?.extensions.en}</h1>
        <p>{translates?.extensions_are_optional_addons.en}</p>
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
                  item.handleSwitch(
                    item.value.toLocaleLowerCase(),
                    !item.active
                  );
                }}
                isActive={item.active}
                onClick={() =>
                  navigate("/extensions/" + item.value.toLocaleLowerCase())
                }
                customStyles={{ height: "fit-content" }}
                disabled={item.disabled}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
      <Footer helpSupportClick={helpSupportClick} />
    </div>
  );
};
