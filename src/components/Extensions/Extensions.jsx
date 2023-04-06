import { useState } from "react";
import { useNavigate } from "react-router-dom";

// components
import { ExtensionCard } from "../ExtensionCard";
import { Footer } from "../Footer";

// styles
import "./Extensions.css";

export const Extensions = ({ extensionsCardsData }) => {
  const navigate = useNavigate();

  return (
    <div className={"extensions-main"}>
      <header>
        <h1>Extensions</h1>
        <p>
          Extensions are optional add-ons, built by community developers, that
          enhance the Compound experience. Enabling extensions allows for new
          features to be added to your account–such as automation, composability
          with other DeFi protocols, or position management.
        </p>
      </header>
      <main>
        {extensionsCardsData?.map((item, index) => (
          <ExtensionCard
            key={index}
            type='default-card'
            item={item}
            active={true}
            setIsActive={() => {
              item.handleSwitch(item.title.toLocaleLowerCase(), !item.active);
            }}
            isActive={item.active}
            onClick={() =>
              navigate("/extensions/" + item.title.toLocaleLowerCase())
            }
            customStyles={{ height: "fit-content" }}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};
